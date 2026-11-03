"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";
const categories = [
  "Tous",
  "Applications",
  "Sites web",
  "Automatisation",
  "Formation",
];
function category(p: Omit<Project, "content">) {
  return p.tags.includes("Formation")
    ? "Formation"
    : p.tags.includes("Make")
      ? "Automatisation"
      : p.tags.includes("WordPress") || p.tags.includes("Next.js")
        ? "Sites web"
        : "Applications";
}
export default function ProjectExplorer({
  projects,
}: {
  projects: Omit<Project, "content">[];
}) {
  const [active, setActive] = useState("Tous");
  const visible = projects.filter(
    (p) => active === "Tous" || category(p) === active,
  );
  return (
    <>
      <div className="filters" aria-label="Filtrer les projets">
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        {visible.length} projet{visible.length > 1 ? "s" : ""}
      </p>
      <div className="project-grid explorer">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
        ))}
      </div>
    </>
  );
}
