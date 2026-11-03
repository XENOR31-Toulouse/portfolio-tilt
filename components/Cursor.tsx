"use client";
import { useEffect, useRef } from "react";

const magnetic = ".button, .nav-contact";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ref.current;
    if (!ring) return;
    const allowed = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!allowed.matches) return;

    let x = -100;
    let y = -100;
    let rx = x;
    let ry = y;
    let raf = 0;
    let magnet: HTMLElement | null = null;
    let center = { x: 0, y: 0 };

    const follow = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(follow) : 0;
    };

    const release = () => {
      if (magnet) magnet.style.translate = "";
      magnet = null;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      const target = e.target instanceof Element ? e.target : null;
      ring.classList.add("is-visible");
      ring.classList.toggle("is-hover", !!target?.closest("a, button"));

      const next = target?.closest<HTMLElement>(magnetic) ?? null;
      if (next !== magnet) {
        release();
        if (next) {
          const r = next.getBoundingClientRect();
          center = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        }
        magnet = next;
      }
      if (magnet) {
        magnet.style.translate = `${(x - center.x) * 0.25}px ${(y - center.y) * 0.35}px`;
      }
      if (!raf) raf = requestAnimationFrame(follow);
    };

    const onLeave = () => {
      ring.classList.remove("is-visible");
      release();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", release, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      release();
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", release);
    };
  }, []);

  return <div ref={ref} className="cursor-ring" aria-hidden="true" />;
}
