"use client";
import { useEffect, useRef } from "react";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+/<>";
const duration = 800;

export default function Scramble({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = (now - start) / duration;
        if (progress >= 1) {
          el.textContent = text;
          return;
        }
        if (now - last > 45) {
          last = now;
          el.textContent = Array.from(text, (c, i) =>
            c === " " || i / text.length < progress
              ? c
              : glyphs[Math.floor(Math.random() * glyphs.length)],
          ).join("");
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 1 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} className="scramble" aria-hidden="true">
        {text}
      </span>
    </>
  );
}
