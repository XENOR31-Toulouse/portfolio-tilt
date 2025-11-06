"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const options = { max: 15, speed: 400, glare: true, "max-glare": 0.25, scale: 1.02 } as const;
    VanillaTilt.init(ref.current, options);
    return () => {
      // @ts-ignore
      ref.current?.vanillaTilt?.destroy?.();
    };
  }, []);

  return (
    <div ref={ref} className={`rounded-2xl shadow-lg p-6 bg-white/5 border border-white/10 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}