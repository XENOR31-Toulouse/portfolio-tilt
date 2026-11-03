"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const experiences = [
  {
    label: "Interfaces",
    title: "Des interfaces qui vivent.",
    description:
      "Des expériences fluides, accessibles et pensées pour les personnes qui les utilisent.",
    stack: "REACT / ANGULAR / TYPESCRIPT",
    href: "/projects/interfaces-web-et-architecture",
    project: "Interfaces web & architecture",
  },
  {
    label: "Automatisation",
    title: "Faire travailler les idées.",
    description:
      "Des workflows modulaires, des intégrations soignées et moins de tâches répétitives.",
    stack: "API / WORKFLOWS / TESTS",
    href: "/projects/orchestration-workflows-applicatifs",
    project: "Orchestration & automatisation",
  },
  {
    label: "Desktop",
    title: "Créer au-delà du navigateur.",
    description:
      "Des outils natifs rapides, lisibles et construits avec une vraie exigence technique.",
    stack: "RUST / EGUI / DESKTOP",
    href: "/projects/application-desktop-rust",
    project: "Application native Rust",
  },
] as const;

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);
  const current = experiences[active];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      reducedMotion.current = preference.matches;
      if (preference.matches) {
        const scene = sceneRef.current;
        if (scene) {
          scene.style.setProperty("--parallax-x", "0px");
          scene.style.setProperty("--parallax-y", "0px");
          scene.style.setProperty("--inverse-x", "0px");
          scene.style.setProperty("--inverse-y", "0px");
        }
      }
    };

    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  function setDepth(x: number, y: number) {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty("--parallax-x", (x * 24).toFixed(1) + "px");
    scene.style.setProperty("--parallax-y", (y * 18).toFixed(1) + "px");
    scene.style.setProperty("--inverse-x", (-x * 13).toFixed(1) + "px");
    scene.style.setProperty("--inverse-y", (-y * 10).toFixed(1) + "px");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || reducedMotion.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setDepth(x, y);
  }

  return (
    <div
      ref={sceneRef}
      className="showcase"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setDepth(0, 0)}
      aria-label="Explorez trois facettes de mon travail"
    >
      <div className="showcase-topline">
        <span className="showcase-topline__brand">
          <span className="showcase-signal" aria-hidden="true" />
          AXEL / STUDIO
        </span>
        <span className="showcase-topline__edition">EXPLORATION · 2026</span>
      </div>

      <div className="showcase-visual" aria-hidden="true">
        <div className="showcase-grid" />
        <div className="showcase-orbit showcase-orbit--outer" />
        <div className="showcase-orbit showcase-orbit--inner" />
        <div className="showcase-photo">
          <Image
            src="/images/profile.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 225px, 275px"
            priority
          />
        </div>
        <div className="showcase-floating showcase-floating--left">
          <span className="showcase-floating__icon">{"{ }"}</span>
          <span>
            <strong>DESIGN</strong>
            <small>→ CODE</small>
          </span>
        </div>
        <div className="showcase-floating showcase-floating--right">
          <span className="showcase-floating__icon">✳</span>
          <span>
            <strong>BUILD</strong>
            <small>→ IMPACT</small>
          </span>
        </div>
        <div className="showcase-photo-caption">CONSTRUIRE / EXPÉRIMENTER / PARTAGER</div>
      </div>

      <div className="showcase-console">
        <div className="showcase-console__chrome">
          <span className="showcase-window-dots" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span>explorer-mon-travail</span>
          <span className="showcase-console__counter">
            0{active + 1} / 03
          </span>
        </div>
        <div className="showcase-console__content" aria-live="polite" aria-atomic="true">
          <p className="showcase-console__prompt">
            <span aria-hidden="true">&gt; </span>
            {current.stack}
          </p>
          <p className="showcase-console__title">{current.title}</p>
          <p className="showcase-console__description">
            {current.description}
          </p>
          <Link href={current.href} className="showcase-console__link">
            Découvrir le projet <span aria-hidden="true">↗</span>
            <span className="sr-only"> : {current.project}</span>
          </Link>
        </div>
        <div className="showcase-tabs" role="group" aria-label="Choisir un domaine">
          {experiences.map((experience, index) => (
            <button
              key={experience.label}
              type="button"
              aria-pressed={active === index}
              className={active === index ? "showcase-tab is-active" : "showcase-tab"}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span>
              {experience.label}
            </button>
          ))}
        </div>
      </div>
      <p className="showcase-footnote" aria-hidden="true">
        <span>CONCEPTION / DÉVELOPPEMENT</span>
        <span>48° / CURIOSITÉ SANS LIMITE</span>
      </p>
    </div>
  );
}
