"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const modes = [
  { id: "interface", label: "Interface", number: "01", description: "Interagir" },
  { id: "architecture", label: "Architecture", number: "02", description: "Comprendre" },
  { id: "workflow", label: "Automatisation", number: "03", description: "Exécuter" },
] as const;

type Mode = (typeof modes)[number]["id"];
type Range = "semaine" | "mois";

const periods = {
  semaine: {
    value: "2 480",
    variation: "+12,4 %",
    ratio: "94 %",
    title: "7 derniers jours",
    bars: [36, 56, 44, 74, 64, 92, 81],
    labels: ["L", "M", "M", "J", "V", "S", "D"],
  },
  mois: {
    value: "10 620",
    variation: "+18,2 %",
    ratio: "97 %",
    title: "30 derniers jours",
    bars: [42, 65, 51, 69, 76, 61, 83, 73, 96, 82],
    labels: ["01", "04", "07", "10", "13", "16", "19", "22", "25", "30"],
  },
} as const;

const layers = [
  {
    id: "interface",
    title: "Interface",
    short: "UI",
    stack: "React · Angular",
    detail: "Une interface claire traduit les besoins en interactions simples, accessibles et prévisibles.",
    example: "Interaction → événement utilisateur",
  },
  {
    id: "api",
    title: "Contrat API",
    short: "API",
    stack: "REST · TypeScript",
    detail: "Des contrats explicites relient les écrans aux services tout en gardant les responsabilités séparées.",
    example: "Requête → validation → réponse",
  },
  {
    id: "domaine",
    title: "Logique métier",
    short: "CORE",
    stack: "Java · Spring Boot",
    detail: "Le cœur applicatif porte les règles et les cas d'usage, indépendamment de la présentation.",
    example: "Cas d'usage → règles → résultat",
  },
  {
    id: "donnees",
    title: "Persistance",
    short: "DATA",
    stack: "PostgreSQL",
    detail: "Les données sont gérées derrière des abstractions pour rendre les évolutions et les tests plus simples.",
    example: "Modèle → stockage → lecture",
  },
] as const;

const workflow = [
  { title: "Réception", description: "Une entrée fictive arrive dans le flux." },
  { title: "Validation", description: "Les données d'exemple sont vérifiées." },
  { title: "Traitement", description: "Une opération locale est simulée." },
  { title: "Reprise", description: "Un incident fictif déclenche une étape de récupération." },
  { title: "Résultat", description: "Le scénario termine avec un résultat simulé." },
] as const;

const projectLinks: Record<Mode, { title: string; href: string }> = {
  interface: {
    title: "Découvrir mes interfaces",
    href: "/projects/interfaces-web-et-architecture",
  },
  architecture: {
    title: "Explorer mon approche technique",
    href: "/projects/interfaces-web-et-architecture",
  },
  workflow: {
    title: "Voir mes projets d'automatisation",
    href: "/projects/orchestration-workflows-applicatifs",
  },
};

export default function InteractiveLab() {
  const [mode, setMode] = useState<Mode>("interface");
  const [range, setRange] = useState<Range>("semaine");
  const [selectedLayer, setSelectedLayer] = useState(1);
  const [simulateFailure, setSimulateFailure] = useState(false);
  const [progress, setProgress] = useState(-1);

  const sequence = simulateFailure ? [0, 1, 2, 3, 4] : [0, 1, 2, 4];
  const currentStep = progress >= 0 ? sequence[Math.min(progress, sequence.length - 1)] : -1;
  const running = mode === "workflow" && progress >= 0 && progress < sequence.length - 1;
  const completed = progress === sequence.length - 1;
  const period = periods[range];

  useEffect(() => {
    if (mode !== "workflow" || progress < 0 || progress >= sequence.length - 1) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setProgress((previous) => previous + 1);
    }, 740);

    return () => window.clearTimeout(timeout);
  }, [mode, progress, sequence.length]);

  return (
    <div className="lab-shell">
      <div className="lab-chrome">
        <div className="lab-chrome-title">
          <span className="lab-online" aria-hidden="true" />
          <span>AXEL.DEV / LIVE LAB</span>
        </div>
        <span className="lab-chrome-meta">EXPÉRIENCES INTERACTIVES · V1.0</span>
      </div>

      <div className="lab-switcher" role="group" aria-label="Choisir une démonstration interactive">
        {modes.map((item) => (
          <button
            type="button"
            key={item.id}
            className={mode === item.id ? "lab-mode is-active" : "lab-mode"}
            aria-pressed={mode === item.id}
            onClick={() => setMode(item.id)}
          >
            <span className="lab-mode-number">{item.number} /</span>
            <span className="lab-mode-label">{item.label}</span>
            <span className="lab-mode-caption">{item.description}</span>
          </button>
        ))}
      </div>

      <div className="lab-workspace">
        <div className="lab-stage" key={mode}>
          {mode === "interface" && (
            <div className="lab-dashboard" aria-label="Démonstration d'une interface d'analyse fictive">
              <div className="lab-demo-header">
                <div>
                  <span className="lab-demo-kicker">DEMO / UI ENGINEERING</span>
                  <h3>Un tableau de bord <em>réactif.</em></h3>
                  <p>Changez la période. Les indicateurs et le graphique se mettent à jour.</p>
                </div>
                <div className="lab-periods" role="group" aria-label="Période affichée">
                  <button
                    type="button"
                    aria-pressed={range === "semaine"}
                    onClick={() => setRange("semaine")}
                  >
                    7 jours
                  </button>
                  <button
                    type="button"
                    aria-pressed={range === "mois"}
                    onClick={() => setRange("mois")}
                  >
                    30 jours
                  </button>
                </div>
              </div>

              <div className="lab-stats">
                <div className="lab-stat lab-stat--primary">
                  <span>INTERACTIONS</span>
                  <strong>{period.value}</strong>
                  <small><span>{period.variation}</span> sur la période</small>
                </div>
                <div className="lab-stat">
                  <span>INDICATEUR DE QUALITÉ</span>
                  <strong>{period.ratio}</strong>
                  <small>Valeur d'exemple</small>
                </div>
              </div>

              <div className="lab-chart-card">
                <div className="lab-chart-heading">
                  <span>Activité illustrée</span>
                  <span>{period.title}</span>
                </div>
                <div className="lab-chart" aria-hidden="true">
                  {period.bars.map((value, index) => (
                    <div className="lab-bar-column" key={index}>
                      <div className="lab-bar-track">
                        <div className="lab-bar-fill" style={{ height: value + "%" }} />
                      </div>
                      <span>{period.labels[index]}</span>
                    </div>
                  ))}
                </div>
                <p className="lab-chart-note">
                  Variation affichée : {period.variation}. Données inventées pour la démonstration.
                </p>
              </div>
            </div>
          )}

          {mode === "architecture" && (
            <div className="lab-architecture">
              <div className="lab-demo-header">
                <div>
                  <span className="lab-demo-kicker">DEMO / SOFTWARE DESIGN</span>
                  <h3>Une architecture <em>lisible.</em></h3>
                  <p>Sélectionnez une couche pour découvrir son rôle dans un système générique.</p>
                </div>
                <span className="lab-tech-mark">CONCEPT / 04 LAYERS</span>
              </div>

              <div className="lab-diagram" role="group" aria-label="Les quatre couches de l'architecture">
                {layers.map((layer, index) => (
                  <div className="lab-diagram-item" key={layer.id}>
                    {index > 0 && <span aria-hidden="true" className="lab-diagram-arrow">→</span>}
                    <button
                      type="button"
                      className={selectedLayer === index ? "lab-node is-active" : "lab-node"}
                      aria-pressed={selectedLayer === index}
                      onClick={() => setSelectedLayer(index)}
                    >
                      <span className="lab-node-index">0{index + 1}</span>
                      <strong>{layer.short}</strong>
                      <span>{layer.title}</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="lab-layer-inspect" aria-live="polite" aria-atomic="true">
                <div className="lab-layer-inspect-label">
                  <span>COUCHE SÉLECTIONNÉE</span>
                  <span>{layers[selectedLayer].stack}</span>
                </div>
                <h4>{layers[selectedLayer].title}</h4>
                <p>{layers[selectedLayer].detail}</p>
                <code>{layers[selectedLayer].example}</code>
              </div>
            </div>
          )}

          {mode === "workflow" && (
            <div className="lab-workflow">
              <div className="lab-demo-header">
                <div>
                  <span className="lab-demo-kicker">DEMO / PROCESS ENGINEERING</span>
                  <h3>Un workflow <em>en action.</em></h3>
                  <p>Exécutez un scénario local et testez une reprise après incident fictif.</p>
                </div>
                <span className="lab-tech-mark">SIMULATION / LOCAL</span>
              </div>
              <div className="lab-flow">
                {workflow.map((step, index) => {
                  const position = sequence.indexOf(index);
                  const skipped = position === -1;
                  const done = !skipped && position < progress;
                  const active = !skipped && position === progress;
                  return (
                    <div
                      key={step.title}
                      className={[
                        "lab-flow-step",
                        skipped ? "is-skipped" : "",
                        done ? "is-done" : "",
                        active ? "is-active" : "",
                      ].filter(Boolean).join(" ")}
                    >
                      <div className="lab-flow-dot">{done ? "✓" : "0" + (index + 1)}</div>
                      <div>
                        <strong>{step.title}</strong>
                        <span>{skipped ? "Non requis" : active ? "En cours" : done ? "Terminé" : "En attente"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="lab-flow-controls">
                <label className="lab-failure-toggle">
                  <input
                    type="checkbox"
                    checked={simulateFailure}
                    disabled={running}
                    onChange={(event) => {
                      setSimulateFailure(event.target.checked);
                      setProgress(-1);
                    }}
                  />
                  Simuler un incident et une reprise
                </label>
                <button
                  className="lab-run-button"
                  type="button"
                  disabled={running}
                  onClick={() => setProgress(0)}
                >
                  {running ? "Simulation en cours…" : completed ? "Relancer la simulation ↻" : "Lancer la simulation ↗"}
                </button>
              </div>
              <div className="lab-live-output" role="status" aria-live="polite" aria-atomic="true">
                <span aria-hidden="true">●</span>
                {progress === -1
                  ? "En attente de lancement. Aucun service externe n'est appelé."
                  : completed
                    ? simulateFailure
                      ? "Scénario terminé : incident simulé, reprise exécutée, résultat disponible."
                      : "Scénario terminé : toutes les étapes utiles ont été exécutées."
                    : workflow[currentStep].description}
              </div>
            </div>
          )}
        </div>

        <aside className="lab-sidebar">
          <p className="lab-sidebar-kicker">DERRIÈRE L&apos;ÉCRAN</p>
          <span className="lab-sidebar-symbol" aria-hidden="true">
            {mode === "interface" ? "↗" : mode === "architecture" ? "⌘" : "✳"}
          </span>
          <h3>{mode === "interface" ? "Penser l'expérience." : mode === "architecture" ? "Structurer le code." : "Automatiser avec méthode."}</h3>
          <p>
            {mode === "interface"
              ? "Une bonne interface ne se limite pas à son apparence : elle transmet une information utile et répond instantanément aux actions."
              : mode === "architecture"
                ? "Séparer les responsabilités permet d'évoluer, de tester et de maintenir un produit sans tout reconstruire."
                : "Un workflow efficace est aussi conçu pour les cas inattendus, pas uniquement pour le scénario idéal."}
          </p>
          <Link href={projectLinks[mode].href} className="lab-project-link">
            {projectLinks[mode].title} <span aria-hidden="true">↗</span>
          </Link>
          <div className="lab-sidebar-footer">
            <span>CONCEPT INTERACTIF</span>
            <span>100 % DONNÉES FICTIVES</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
