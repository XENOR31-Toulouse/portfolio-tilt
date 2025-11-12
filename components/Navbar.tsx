"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string; external?: boolean };

const NAV: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Tous les projets" },
  { href: "/cv/Axel_Ibanez_CV.pdf", label: "CV", external: true },
];

function NavLink({ href, label, external = false, active = false, onClick }: { href: string; label: string; external?: boolean; active?: boolean; onClick?: () => void }) {
  const base =
    "relative rounded-md px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60";
  const color = active
    ? "text-white"
    : "text-slate-200 hover:text-white";
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${color}`}
      onClick={onClick}
    >
      {label}
      {active && <span className="absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />}
    </a>
  ) : (
    <Link href={href} className={`${base} ${color}`} onClick={onClick}>
      {label}
      {active && <span className="absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add drop shadow when scrolling a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "backdrop-blur supports-[backdrop-filter]:bg-black/35 bg-black/55 md:bg-black/40",
        "border-b border-white/10",
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.06)]" : "shadow-none",
      ].join(" ")}
      data-scrolled={scrolled}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo / brand */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-base md:text-lg outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded"
          aria-label="Aller à l’accueil"
        >
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Axel Ibanez
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={item.external ? false : pathname === item.href}
            />
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-200 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
        >
          {/* icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M3 7h18M3 12h18M3 17h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={[
          "md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-3">
          <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-2">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                active={item.external ? false : pathname === item.href}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
