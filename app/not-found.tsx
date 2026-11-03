import type { Metadata } from "next";
import Link from "next/link";
import { delay } from "@/lib/motion";
import HeroGlow from "@/components/HeroGlow";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "Page introuvable — Axel Ibanez",
};

export default function NotFound() {
  return (
    <main id="main-content" className="hero-stage">
      <HeroGlow />
      <section className="shell not-found">
        <p className="eyebrow enter" style={delay(0)}>
          <Scramble text="ERREUR 404 / PAGE INTROUVABLE" />
        </p>
        <p className="not-found-code enter" style={delay(1)} aria-hidden="true">
          <Scramble text="404" />
        </p>
        <h1>
          <span className="hero-line">
            <span style={delay(2)}>Cette page</span>
          </span>
          <span className="hero-line">
            <em style={delay(3)}>n’existe pas (encore).</em>
          </span>
        </h1>
        <p className="intro muted enter" style={delay(5)}>
          Le lien est peut-être cassé, ou la page a déménagé. Le reste du site,
          lui, est bien là.
        </p>
        <div className="actions enter" style={delay(6)}>
          <Link className="button primary" href="/">
            Retour à l’accueil ↗
          </Link>
          <Link className="button" href="/projects">
            Voir les projets
          </Link>
        </div>
      </section>
    </main>
  );
}
