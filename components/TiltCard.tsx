"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Neon spotlight follows mouse (CSS vars)
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  useEffect(() => {
    if (!ref.current) return;
    const options = { max: 12, speed: 400, glare: true, "max-glare": 0.2, scale: 1.02 } as const;
    VanillaTilt.init(ref.current, options);
    return () => {
      // @ts-ignore
      ref.current?.vanillaTilt?.destroy?.();
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`
        group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur
        transition-all duration-300 ease-out
        hover:border-violet-400/40 hover:shadow-[0_0_28px_rgba(139,92,246,0.35)]
        ${className}
      `}
    >
      {/* Neon spotlight that follows the cursor */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-0
          group-hover:opacity-100 transition-opacity duration-300
        "
        style={{
          background:
            // radial spotlight centered on --mx/--my
            "radial-gradient(220px 220px at var(--mx) var(--my), rgba(139,92,246,0.28), transparent 60%)",
        }}
      />

      {/* Ambient violet bloom on hover */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-[radial-gradient(600px_180px_at_50%_110%,rgba(139,92,246,0.18),transparent_70%)]
          blur-xl
        "
      />

      {/* Actual content stays above the effects */}
      <div className="relative p-6">
        {children}
      </div>
    </div>
  );
}
