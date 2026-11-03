import type { CSSProperties } from "react";

export const delay = (d: number) => ({ "--d": d }) as CSSProperties;
export const stagger = (i: number) => ({ "--i": i % 3 }) as CSSProperties;
