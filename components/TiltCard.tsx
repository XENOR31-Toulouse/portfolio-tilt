"use client";

import React, { useEffect, useLayoutEffect, useRef, forwardRef } from "react";
import VanillaTilt from "vanilla-tilt";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function isTouch() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(pointer: coarse)")?.matches ?? "ontouchstart" in window;
}

const TiltCard = forwardRef<HTMLDivElement, Props>(function TiltCard(
  { children, className = "" },
  externalRef
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastXY = useRef<{ x: number; y: number } | null>(null);
  const reduceMotionRef = useRef(false);

  // Merge refs
  useEffect(() => {
    if (!externalRef) return;
    if (typeof externalRef === "function") externalRef(ref.current);
    else (externalRef as React.MutableRefObject<HTMLDivElement | null>).current = ref.current;
  }, [externalRef]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = !!m?.matches;
    const handler = () => (reduceMotionRef.current = !!m?.matches);
    m?.addEventListener?.("change", handler);
    return () => m?.removeEventListener?.("change", handler);
  }, []);

  // Cache rect on enter/resize
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setRect = () => {
      rectRef.current = el.getBoundingClientRect();
    };
    setRect();

    // ResizeObserver to keep rect fresh when layout changes
    const ro = new ResizeObserver(setRect);
    ro.observe(el);

    // Recalc on scroll (cheap: just invalidate and recalc next move)
    const onScroll = () => (rectRef.current = null);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Spotlight (CSS vars) — throttled with rAF
  const scheduleSpot = (clientX: number, clientY: number) => {
    lastXY.current = { x: clientX, y: clientY };
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = ref.current;
      if (!el || !lastXY.current) return;
      if (!rectRef.current) rectRef.current = el.getBoundingClientRect();

      const { x, y } = lastXY.current;
      const rect = rectRef.current!;
      const rx = x - rect.left;
      const ry = y - rect.top;

      el.style.setProperty("--mx", `${rx}px`);
      el.style.setProperty("--my", `${ry}px`);
    });
  };

  const onPointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
    if (e.pointerType !== "touch") {
      // first paint the spotlight where we enter
      scheduleSpot(e.clientX, e.clientY);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotionRef.current || e.pointerType === "touch") return;
    scheduleSpot(e.clientX, e.clientY);
  };

  const onPointerLeave = () => {
    // Fade out is handled by CSS opacity; optionally clear vars:
    // ref.current?.style.removeProperty("--mx");
    // ref.current?.style.removeProperty("--my");
  };

  // VanillaTilt: only enable when not touch and not reduced motion
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enableTilt = !isTouch() && !reduceMotionRef.current;
    if (!enableTilt) return;

    // Keep glare off (your custom glow is lighter & cheaper)
    const options = {
      max: 12,
      speed: 350,
      glare: false,
      scale: 1.015,
      gyroscope: true,
      reset: true,
      perspective: 900,
      reverse: false,
    } as const;

    VanillaTilt.init(el, options);
    return () => {
      // @ts-ignore
      el.vanillaTilt?.destroy?.();
    };
  }, []);

  return (
    <div
      ref={ref}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`
        group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur
        transition-all duration-300 ease-out
        hover:border-violet-400/40 hover:shadow-[0_0_22px_rgba(139,92,246,0.28)]
        will-change-transform
        ${className}
      `}
      // Hint compositor even before hover
      style={{ transform: "translateZ(0)" }}
    >
      {/* Neon spotlight that follows the cursor */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-0
          group-hover:opacity-100 transition-opacity duration-200
        "
        // background string is constant; uses CSS vars for position
        style={{
          background:
            "radial-gradient(220px 220px at var(--mx) var(--my), rgba(139,92,246,0.28), transparent 60%)",
        }}
      />

      {/* Ambient violet bloom on hover (lighter and cheaper) */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          bg-[radial-gradient(520px_160px_at_50%_110%,rgba(139,92,246,0.14),transparent_70%)]
          blur-[14px]
        "
      />

      <div className="relative p-6">
        {children}
      </div>
    </div>
  );
});

export default TiltCard;
