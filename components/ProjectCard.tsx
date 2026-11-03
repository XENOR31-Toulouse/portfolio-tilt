import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import Tilt from "./Tilt";
export default function ProjectCard({
  project: p,
  index = 0,
}: {
  project: Omit<Project, "content">;
  index?: number;
}) {
  const cover = p.cover || p.gallery?.[0];
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="project-card"
      data-reveal
      style={{ "--i": index % 3 } as React.CSSProperties}
    >
      <Tilt className={`project-image visual-${index % 3}`} max={8}>
        {cover ? (
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 760px) 90vw, 40vw"
          />
        ) : (
          <div className="project-art" aria-hidden="true">
            <span>{p.tags[0]}</span>
            <strong>
              {p.visual ?? (p.slug === "site-vitrine-omena" ? "omena." : "</>")}
            </strong>
            <span>{p.category ?? "DESIGN & DÉVELOPPEMENT"}</span>
          </div>
        )}
        <span className="project-arrow" aria-hidden="true">
          ↗
        </span>
        <span className="glare" aria-hidden="true" />
      </Tilt>
      <div className="project-meta">
        <span>
          {String(index + 1).padStart(2, "0")} / {p.tags[0]}
        </span>
        <span>{p.date?.replace(" - *", "")}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <div className="tags">
        {p.tags.slice(0, 3).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </Link>
  );
}
