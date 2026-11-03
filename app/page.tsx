import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
export default function Home() {
  return (
    <main id="main-content">
      <section className="shell hero">
        <div>
          <p className="eyebrow">DÉVELOPPEUR FULL STACK / APPLICATIONS & ARCHITECTURE</p>
          <h1>
            Des idées.
            <br />
            Du code.
            <br />
            <em>Du concret.</em>
          </h1>
          <p className="intro muted">
            Je conçois des applications web et des outils logiciels en
            privilégiant la qualité, l’ergonomie et des architectures
            maintenables. Je poursuis cette démarche dans mes projets
            professionnels chez Omena.
          </p>
          <div className="actions">
            <Link className="button primary" href="#projets">
              Explorer mes projets ↗
            </Link>
            <a className="button" href={`mailto:${profile.contact.email}`}>
              Discutons ensemble
            </a>
          </div>
          <p className="hero-note">
            ● &nbsp; Toulouse, France <span> / Chez Omena · développement & qualité logicielle</span>
          </p>
        </div>
        <div className="portrait">
          <Image
            src="/images/profile.webp"
            alt="Axel Ibanez"
            fill
            sizes="(max-width: 760px) 90vw, 440px"
            priority
          />
          <div className="portrait-caption">
            De la curiosité
            <br />
            <strong>à la création.</strong>
            <span>✳</span>
          </div>
        </div>
      </section>
      <div className="stack-strip">
        <div className="shell">
          <span>MON TERRAIN DE JEU</span>
          {[
            "Java / Spring Boot",
            "React & Angular",
            "PostgreSQL",
            "Docker / CI-CD",
            "Rust & n8n",
          ].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <section id="projets" className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / PROJETS SÉLECTIONNÉS</p>
            <h2>
              Du code, mais surtout
              <br />
              <em>des solutions.</em>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            Tous les projets ({projects.length}) ↗
          </Link>
        </div>
        <div className="project-grid">
          {projects.filter((p) => p.featured).slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <section id="parcours" className="shell section journey">
        <div>
          <p className="eyebrow">02 / PARCOURS</p>
          <h2>
            Apprendre.
            <br />
            Construire.
            <br />
            <em>Évoluer.</em>
          </h2>
          <p className="intro muted">{profile.about}</p>
          <Link className="text-link" href="/cv">
            Découvrir mon CV ↗
          </Link>
        </div>
        <div className="timeline">
          {profile.experience.map((e) => (
            <article key={`${e.company}-${e.period}-${e.role}`}>
              <p className="eyebrow">
                {e.period.includes("**") ? "AVANT 2022" : e.period}
              </p>
              <h3>{e.role}</h3>
              <p className="company">{e.company}</p>
              <ul>
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section">
        <p className="eyebrow">03 / COMPÉTENCES & CURIOSITÉ</p>
        <h2>
          Une vision <em>full stack.</em>
        </h2>
        <div className="about-grid">
          <div>
            <h3>Ma boîte à outils</h3>
            <div className="tags">
              {profile.skills.core.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <h3 className="mt-10">Au-delà du code</h3>
            <p className="muted">{profile.interests.join(" · ")}</p>
            <p className="muted">
              {profile.languages
                .map((l) => `${l.label} — ${l.level}`)
                .join(" / ")}
            </p>
          </div>
          <div className="education">
            {profile.education.map((e) => (
              <article key={e.label}>
                <p className="eyebrow">{e.period || "FORMATION"}</p>
                <h3>{e.label}</h3>
                <p className="muted">{e.school}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="shell contact-section">
        <p className="eyebrow">04 / ET SI ON ÉCHANGEAIT ?</p>
        <h2>
          Votre prochain projet
          <br />
          <em>commence ici.</em>
        </h2>
        <a className="button primary" href={`mailto:${profile.contact.email}`}>
          Écrivez-moi ↗
        </a>
        <a className="contact-email" href={`mailto:${profile.contact.email}`}>
          {profile.contact.email}
        </a>
        <a
          className="muted"
          href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}
        >
          {profile.contact.phone}
        </a>
      </section>
    </main>
  );
}
