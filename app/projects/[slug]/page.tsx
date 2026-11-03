import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { projects } from "@/lib/projects";
import { delay, stagger } from "@/lib/motion";
import Tilt from "@/components/Tilt";

function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: `${project.title} – Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const [banner, ...gallery] = project.cover
    ? [project.cover, ...(project.gallery ?? [])]
    : (project.gallery ?? []);
  const date = project.date?.replace(" - *", "");

  return (
    <main id="main-content" className="project-detail">
      <section className="shell project-hero">
        <Link className="back-link enter" href="/projects" style={delay(0)}>
          ← Tous les projets
        </Link>
        <p className="eyebrow enter" style={delay(1)}>
          {String(index + 1).padStart(2, "0")} / {project.category ?? project.tags[0]}
          {date ? ` / ${date}` : ""}
        </p>
        <h1>
          <span className="hero-line">
            <span style={delay(2)}>{project.title}</span>
          </span>
        </h1>
        <p className="intro muted enter" style={delay(4)}>
          {project.description}
        </p>
      </section>

      <div className="shell enter" style={delay(5)}>
        <Tilt className={`project-banner visual-${index % 3}`} max={4}>
          {banner ? (
            <Image
              src={banner}
              alt={`Visuel – ${project.title}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          ) : (
            <div className="project-art" aria-hidden="true">
              <span>{project.tags[0]}</span>
              <strong>{project.visual ?? "</>"}</strong>
              <span>{project.category ?? "DESIGN & DÉVELOPPEMENT"}</span>
            </div>
          )}
          <span className="glare" aria-hidden="true" />
        </Tilt>
      </div>

      <section className="shell project-body">
        <aside className="project-facts" data-reveal>
          {project.category && (
            <div>
              <p className="eyebrow">CATÉGORIE</p>
              <p>{project.category}</p>
            </div>
          )}
          {date && (
            <div>
              <p className="eyebrow">ANNÉE</p>
              <p>{date}</p>
            </div>
          )}
          <div>
            <p className="eyebrow">STACK</p>
            <div className="tags">
              {project.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          {project.links?.length ? (
            <div>
              <p className="eyebrow">LIENS</p>
              {project.links.map((l) => (
                <a
                  key={l.href}
                  className="text-link"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          ) : null}
        </aside>

        <div>
          {project.content && (
            <article className="project-content">{project.content}</article>
          )}
          {gallery.length ? (
            <div className="project-gallery">
              {gallery.map((src, i) => (
                <div key={src} data-reveal style={stagger(i)}>
                  <Image
                    src={src}
                    alt={project.title}
                    width={1200}
                    height={800}
                    sizes="(max-width: 760px) 100vw, 400px"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <Link
        href={`/projects/${next.slug}`}
        className="shell next-project"
        data-reveal="title"
      >
        <span className="eyebrow">PROJET SUIVANT</span>
        <strong>
          {next.title} <span aria-hidden="true">↗</span>
        </strong>
      </Link>
    </main>
  );
}
