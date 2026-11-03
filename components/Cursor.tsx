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

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let shown = false;
    let magnet: HTMLElement | null = null;
    let center = { x: 0, y: 0 };

    // `translate`, not `transform`: the hover `scale` would otherwise scale the offset too.
    const place = () => {
      ring.style.translate = `${rx}px ${ry}px`;
    };
    const follow = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      place();
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(follow) : 0;
    };

    const release = () => {
      if (magnet) magnet.style.translate = "";
      magnet = null;
    };

    const update = (target: Element | null) => {
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
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        rx = x;
        ry = y;
        place();
        shown = true;
        ring.classList.add("is-visible");
      }
      update(e.target instanceof Element ? e.target : null);
      if (!raf) raf = requestAnimationFrame(follow);
    };

    const onLeave = () => {
      shown = false;
      ring.classList.remove("is-visible", "is-hover");
      release();
    };

    const onScroll = () => {
      release();
      if (shown) update(document.elementFromPoint(x, y));
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      release();
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={ref} className="cursor-ring" aria-hidden="true" />;
}
