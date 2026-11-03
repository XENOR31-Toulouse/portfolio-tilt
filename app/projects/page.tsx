import { projects } from "@/lib/projects";
import ProjectExplorer from "@/components/ProjectExplorer";
export const metadata = { title: "Projets — Axel Ibanez" };
export default function ProjectsIndex() {
  const summaries = projects.map(({ content, ...p }) => {
    void content;
    return p;
  });
  return (
    <main id="main-content" className="shell section projects-page">
      <p className="eyebrow">LE PORTFOLIO / {projects.length} PROJETS</p>
      <h1>
        Des idées qui
        <br />
        <em>prennent forme.</em>
      </h1>
      <p className="intro muted">
        Applications métier, sites web et automatisation : une sélection de mon
        travail, du besoin à la réalisation.
      </p>
      <ProjectExplorer projects={summaries} />
    </main>
  );
}
