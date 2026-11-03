"use client";
import { useEffect, useRef } from "react";

const vertex = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const fragment = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_accent;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}

void main() {
  vec2 ratio = vec2(u_res.x / u_res.y, 1.0);
  vec2 p = gl_FragCoord.xy / u_res * ratio;
  float t = u_time * 0.04;
  float n = fbm(p * 1.4 + vec2(t, -t * 0.7) + fbm(p * 2.2 - t));
  float aurora = smoothstep(0.42, 0.9, n) * 0.55;
  float glow = smoothstep(0.7, 0.0, distance(p, u_mouse * ratio)) * (0.35 + n * 0.5);
  float a = clamp(aurora + glow, 0.0, 1.0) * 0.6;
  gl_FragColor = vec4(u_accent * a, a);
}
`;

function hexToRgb(hex: string) {
  const n = parseInt(hex.trim().replace("#", "").slice(0, 6), 16);
  return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export default function HeroGlow() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const allowed = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 761px) and (prefers-reduced-motion: no-preference)",
    );
    if (!allowed.matches) return;
    const gl = canvas.getContext("webgl", { premultipliedAlpha: true, antialias: false });
    if (!gl) return;

    const shader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, shader(gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent");
    gl.uniform3fv(gl.getUniformLocation(program, "u_accent"), hexToRgb(accent));

    const target = { x: 0.72, y: 0.55 };
    const mouse = { ...target };
    let visible = true;
    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio, 1.5) * 0.5;
      canvas.width = Math.round(canvas.clientWidth * scale);
      canvas.height = Math.round(canvas.clientHeight * scale);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const draw = () => {
      raf = 0;
      if (!visible || document.hidden) return;
      mouse.x += (target.x - mouse.x) * 0.05;
      mouse.y += (target.y - mouse.y) * 0.05;
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      canvas.classList.add("is-on");
      raf = requestAnimationFrame(draw);
    };
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width;
      target.y = 1 - (e.clientY - r.top) / r.height;
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      wake();
    });
    const ro = new ResizeObserver(resize);

    resize();
    ro.observe(canvas);
    io.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", wake);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", wake);
      // Free the context once the canvas is really gone, not on a dev remount.
      setTimeout(() => {
        if (!canvas.isConnected) gl.getExtension("WEBGL_lose_context")?.loseContext();
      });
    };
  }, []);

  return <canvas ref={ref} className="hero-glow" aria-hidden="true" />;
}
