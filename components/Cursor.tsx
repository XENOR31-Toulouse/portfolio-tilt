"use client";
import { useEffect, useRef } from "react";

const magnetic = ".button, .nav-contact";
const interactive = "a, button, label, summary, [role='button']";

// True when the pointer sits on actual glyphs, like the native text cursor.
function overText(x: number, y: number) {
  const node =
    document.caretPositionFromPoint?.(x, y)?.offsetNode ??
    document.caretRangeFromPoint?.(x, y)?.startContainer;
  if (node?.nodeType !== Node.TEXT_NODE || !node.textContent?.trim()) return false;
  const range = document.createRange();
  range.selectNodeContents(node);
  return Array.from(range.getClientRects()).some(
    (r) => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom,
  );
}

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    const allowed = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!allowed.matches) return;
    const root = document.documentElement;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let shown = false;
    let magnet: HTMLElement | null = null;
    let center = { x: 0, y: 0 };

    // `translate`, not `transform`: the hover `scale` would otherwise scale the offset too.
    const placeRing = () => {
      ring.style.translate = `${rx}px ${ry}px`;
    };
    const follow = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      placeRing();
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(follow) : 0;
    };

    const setState = (name: string, on: boolean) => {
      dot.classList.toggle(name, on);
      ring.classList.toggle(name, on);
    };

    const release = () => {
      if (magnet) magnet.style.translate = "";
      magnet = null;
    };

    const hide = () => {
      shown = false;
      for (const name of ["is-visible", "is-hover", "is-text"]) setState(name, false);
      release();
    };

    const update = (target: Element | null) => {
      const hover = !!target?.closest(interactive);
      setState("is-hover", hover);
      setState("is-text", !hover && overText(x, y));
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
      // Pen or touch: hand the native cursor back.
      if (e.pointerType !== "mouse") {
        root.classList.remove("custom-cursor");
        hide();
        return;
      }
      x = e.clientX;
      y = e.clientY;
      dot.style.translate = `${x}px ${y}px`;
      if (!shown) {
        rx = x;
        ry = y;
        placeRing();
        shown = true;
        root.classList.add("custom-cursor");
        setState("is-visible", true);
      }
      update(e.target instanceof Element ? e.target : null);
      if (!raf) raf = requestAnimationFrame(follow);
    };

    const onScroll = () => {
      release();
      if (shown) update(document.elementFromPoint(x, y));
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", hide);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      hide();
      root.classList.remove("custom-cursor");
      document.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", hide);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
