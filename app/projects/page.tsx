import { projects } from "@/lib/projects";
import ProjectExplorer from "@/components/ProjectExplorer";
import { delay } from "@/lib/motion";
export const metadata = { title: "Projets — Axel Ibanez" };
export default function ProjectsIndex() {
  const summaries = projects.map(({ content, ...p }) => {
    void content;
    return p;
  });
  return (
    <main id="main-content" className="shell section projects-page">
      <p className="eyebrow enter" style={delay(0)}>
        LE PORTFOLIO / {projects.length} PROJETS
      </p>
      <h1>
        <span className="hero-line">
          <span style={delay(1)}>Des idées qui</span>
        </span>
        <span className="hero-line">
          <em style={delay(2)}>prennent forme.</em>
        </span>
      </h1>
      <p className="intro muted enter" style={delay(4)}>
        Interfaces web, API Java, orchestration et outillage d’infrastructure :
        des réalisations présentées par leurs choix techniques. Les projets
        internes sont décrits sans exposer leur finalité métier.
      </p>
      <ProjectExplorer projects={summaries} />
    </main>
  );
}
