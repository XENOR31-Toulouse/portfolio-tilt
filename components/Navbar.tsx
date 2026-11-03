"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          button.current?.focus();
        }
      }}
    >
      <nav className="shell nav" aria-label="Navigation principale">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          axel<span>.</span>ibanez
        </Link>
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fermer ✕" : "Menu ☰"}
        </button>
        <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          <Link
            href="/projects"
            aria-current={path.startsWith("/projects") ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Projets
          </Link>
          <Link href="/#parcours" onClick={() => setOpen(false)}>
            Parcours
          </Link>
          <a
            href="/cv/Axel_Ibanez_CV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Mon CV ↗
          </a>
          <Link
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Discutons ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}
