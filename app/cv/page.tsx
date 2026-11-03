import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";
import { delay, stagger } from "@/lib/motion";
import Tilt from "@/components/Tilt";
import Scramble from "@/components/Scramble";

export const metadata: Metadata = {
  title: "CV — Axel Ibanez | Développeur Full Stack",
  description:
    "Parcours, compétences et réalisations techniques d’Axel Ibanez, développeur Full Stack chez Omena à Toulouse. CV disponible en PDF.",
};

const cvPdf = "/cv/Axel_Ibanez_CV.pdf";

const expertise = [
  { label: "Front-end", skills: ["React", "Angular", "Next.js", "TypeScript"] },
  { label: "Back-end", skills: ["Java", "Spring Boot", "API REST", "Architecture hexagonale"] },
  { label: "Data & infrastructure", skills: ["PostgreSQL", "Flyway", "Docker", "GitHub Actions"] },
  { label: "Automatisation & outils", skills: ["Rust", "Workflows", "Linux", "Git"] },
];

const featuredProjects = projects.filter((project) => project.featured);

export default function CvPage() {
  return (
    <main id="main-content" className="cv-page">
      <section className="shell cv-hero" aria-labelledby="cv-heading">
        <div className="cv-hero-copy">
          <p className="eyebrow enter" style={delay(0)}>
            <Scramble text="MON CV / PARCOURS & EXPERTISE" />
          </p>
          <h1 id="cv-heading">
            <span className="hero-line">
              <span style={delay(1)}>Du parcours.</span>
            </span>
            <span className="hero-line">
              <em style={delay(2)}>À la pratique.</em>
            </span>
          </h1>
          <p className="intro muted enter" style={delay(4)}>
            Développeur Full Stack à Toulouse, je construis des applications
            web et des outils logiciels. Découvrez mon
            expérience, mes compétences et les choix techniques qui
            accompagnent mes projets.
          </p>
          <div className="actions enter" style={delay(5)}>
            <a className="button primary" href={cvPdf} download="Axel_Ibanez_CV.pdf">
              Télécharger mon CV (PDF) <span aria-hidden="true">↓</span>
            </a>
            <Link className="button" href="/projects">
              Voir mes projets <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="cv-download-hint enter" style={delay(6)}>
            PDF A4 · Une page · Prêt à être partagé
          </p>
        </div>

        <Tilt className="cv-identity-tilt" max={7}>
          <aside className="cv-identity" aria-label="Coordonnées professionnelles">
            <div className="cv-identity-top">
              <Image
                src="/images/profile.webp"
                alt="Portrait d’Axel Ibanez"
                width={100}
                height={100}
                sizes="100px"
                className="cv-avatar"
                priority
              />
              <span className="cv-identity-mark asterisk" aria-hidden="true" />
            </div>
            <p className="cv-identity-label">EN QUELQUES MOTS</p>
            <h2>{profile.name}</h2>
            <p className="cv-role">{profile.title}</p>
            <p className="cv-location">{profile.location.split(" (")[0]}, France</p>
            <div className="cv-contact-links">
              <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
              <a href={`tel:${profile.contact.phone.replace(/\s/g, "")}`}>
                {profile.contact.phone}
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                Profil GitHub ↗
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                Profil LinkedIn ↗
              </a>
            </div>
            <span className="glare" aria-hidden="true" />
          </aside>
        </Tilt>
      </section>

      <div className="shell cv-detail">
        <div className="cv-main-column">
          <section className="cv-block" aria-labelledby="cv-experience-title">
            <div data-reveal="title">
              <p className="eyebrow"><Scramble text="01 / EXPÉRIENCE" /></p>
              <h2 id="cv-experience-title">Concevoir. Développer. <em>Livrer.</em></h2>
            </div>
            <ol className="cv-experience-list">
              {profile.experience.map((experience) => (
                <li
                  className="cv-experience"
                  key={`${experience.company}-${experience.period}-${experience.role}`}
                >
                  <p className="cv-period">
                    {experience.period.includes("**") ? "Avant 2022" : experience.period}
                  </p>
                  <h3>{experience.role}</h3>
                  <p className="cv-company">{experience.company}</p>
                  <ul className="cv-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section className="cv-block" aria-labelledby="cv-projects-title">
            <div data-reveal="title">
              <p className="eyebrow"><Scramble text="02 / RÉALISATIONS RÉCENTES" /></p>
              <h2 id="cv-projects-title">La technique <em>en action.</em></h2>
            </div>
            <p className="muted cv-section-intro" data-reveal>
              Une sélection de réalisations professionnelles présentées par leur
              architecture et leur stack, sans exposer leur finalité métier.
            </p>
            <div className="cv-project-list">
              {featuredProjects.map((project, index) => (
                <Link
                  className="cv-project-link"
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                  data-reveal
                  style={stagger(index)}
                >
                  <span className="cv-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="cv-project-text">
                    <strong>{project.title}</strong>
                    <span>{project.tags.slice(0, 4).join(" · ")}</span>
                  </span>
                  <span className="cv-project-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="cv-side-column">
          <section className="cv-side-card" data-reveal aria-labelledby="cv-skills-title">
            <p className="eyebrow"><Scramble text="03 / BOÎTE À OUTILS" /></p>
            <h2 id="cv-skills-title">Compétences</h2>
            {expertise.map((group) => (
              <div className="cv-skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="cv-skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-side-card" data-reveal aria-labelledby="cv-training-title">
            <p className="eyebrow"><Scramble text="04 / FORMATION" /></p>
            <h2 id="cv-training-title">Diplômes</h2>
            <div className="cv-education-list">
              {profile.education.map((education) => (
                <div className="cv-education" key={education.label}>
                  {education.period && <p>{education.period}</p>}
                  <h3>{education.label}</h3>
                  <span>{education.school}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-side-card" data-reveal aria-labelledby="cv-about-title">
            <p className="eyebrow"><Scramble text="05 / EN DEHORS DU CODE" /></p>
            <h2 id="cv-about-title">Curiosité & échanges</h2>
            <h3 className="cv-subheading">Langues</h3>
            <ul className="cv-mini-list">
              {profile.languages.map((language) => (
                <li key={language.label}>
                  <strong>{language.label}</strong>
                  <span>{language.level}</span>
                </li>
              ))}
            </ul>
            <h3 className="cv-subheading">Centres d&apos;intérêt</h3>
            <p className="muted">{profile.interests.join(" · ")}</p>
          </section>
        </aside>
      </div>

      <section className="shell cv-final-cta" data-reveal="title" aria-label="Télécharger mon CV">
        <div>
          <p className="eyebrow"><Scramble text="GARDONS LE CONTACT" /></p>
          <h2>Un parcours à découvrir, <em>un projet à construire.</em></h2>
          <p className="muted">Vous pouvez consulter cette page ou récupérer mon CV au format PDF.</p>
        </div>
        <a className="button primary" href={cvPdf} download="Axel_Ibanez_CV.pdf">
          Télécharger le PDF ↓
        </a>
      </section>
    </main>
  );
}
