"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";
import { delay } from "@/lib/motion";
const categories = [
  "Tous",
  "Applications",
  "Infrastructure",
  "Sites web",
  "Automatisation",
  "Formation",
];
function category(p: Omit<Project, "content">) {
  if (p.category) return p.category;
  return p.tags.includes("Formation")
    ? "Formation"
    : p.tags.includes("Make") || p.tags.includes("n8n")
      ? "Automatisation"
      : p.tags.includes("Rust")
        ? "Infrastructure"
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
      <div
        className="filters enter"
        style={delay(5)}
        aria-label="Filtrer les projets"
      >
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
      <div key={active} className="project-grid explorer swap">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
        ))}
      </div>
    </>
  );
}
