import type { ReactNode } from "react";

/**
 * Project type definition
 */
export type Project = {
  slug: string;
  title: string;
  date?: string;
  description: string;
  tags: string[];
  cover?: string;
  gallery?: string[];
  links?: { label: string; href: string }[];
  content?: ReactNode; // long text or JSX structure
};

/**
 * Project list
 */
export const projects: Project[] = [

  {
    slug: "dashboard-interne",
    title: "Dashboard Interne (Frequentiel)",
    date: "2025",
    description:
      "Application de suivi d’indicateurs et filtres avancés.",
    tags: ["Angular", "Java SpringBoot", "ElasticSearch", "Kibana", "Docker", "architecture hexagonale" ],
    cover: "/images/projects/Frequentiel/frequentiel.png",
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Outil interne de suivi de l'utilisation des services et du suivit parcour client sur Octoplus.
          L’objectif était de centraliser les données clés pour faciliter la prise de décision.
        </p>
        <p>
           Exemple: Quel sont les services les plus utiliser, quel est le parcour typique d'un client.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Implémentation</h2>
        <p className="text-slate-200 leading-relaxed">
          Developpement d'un microservice avec Java SpringBoot pour l'agrégation des données.
          Utilisation d'ElasticSearch et Kibana pour la visualisation des données en temps réel.
          Déploiement via Docker pour une scalabilité optimale.
        </p>
      </>
    ),
  },

  {
    slug: "Formation-Cypress-testeur-Frequentiel",
    title: "Formation Cypress à l'équipe de testeur de Frequentiel",
    date: "2025",
    description:
      "Formation interne sur Cypress pour automatiser les tests end-to-end.",
    tags: ["Cypress", "Testing", "Formation"],
    cover: "/images/projects/Frequentiel/frequentiel.png",
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Formation dispensée à l'équipe de testeur de Frequentiel pour
          automatiser les tests end-to-end de leurs applications web.
          L'objectif était d'améliorer la couverture des tests et de réduire le temps
          consacré aux tests manuels.
        </p>
        <p>
          j'ai du implementer des balises data-test sur l'application octoplus pour faciliter la selection des elements a tester. 
          pour l'equipe testeur qui n'avait pas de connaissances en programmation, j'ai du adapter mon discours et mes exemples pour qu'ils soient compréhensible par des non-developpeur.

        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Fonctionnalités</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Introduction à Cypress et à son écosystème.</li>
          <li>Création de tests end-to-end pour des scénarios courants.</li>
          <li>Meilleures pratiques pour la maintenance des tests automatisés.</li>

        </ul>
      </>
    ),
  },

   {
    slug: "site-vitrine-omena",
    title: "Site Vitrine Omena",
    date: "2025 - *",
    description: "Refonte, formulaires, correctif.",
    tags: ["WordPress", "Elementor"],
    cover: "/images/projects/site-vitrine-omena/omena_cover.jpg",
    links: [{ label: "Visiter", href: "https://omena.fr" }],
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Refonte du site vitrine d’Omena pour améliorer la lisibilité. Le site devait refléter les valeurs écoresponsables
          et locales de l’entreprise tout en offrant une expérience fluide sur
          tous les appareils.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Objectifs</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Clarifier le parcours (page d’accueil et pages services).</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          Implémentation
        </h2>
        <p className="text-slate-200 leading-relaxed">
          Développement grace a WordPress et Elementor Pro pour une
          personnalisation avancée. Intégration de formulaires optimisés avec
          validation et notifications par e-mail. Optimisation des performances
          via la compression d’images.
        </p>
      </>
    ),
  },
  // project creation site web (wordpress elementor) pour avocat
  {
    slug: "site-avocat",
    title: "Site Vitrine Avocat",
    date: "2024 - *",
    description: "Création d'un site vitrine pour un avocat.",
    tags: ["WordPress", "Elementor"],
    cover: "/images/projects/avocat/Cabinet.jpg",
    gallery: [
      "/images/projects/avocat/Domaines.jpg",
    ],
    // links: [{ label: "Visiter", href: "https://avocat-example.com" }],
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Création d'un site vitrine pour un avocat. Le site devait refléter le professionnalisme et la
          crédibilité du cabinet tout en offrant une expérience utilisateur
          fluide.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Objectifs</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Présenter les services juridiques offerts.</li>
          <li>Faciliter la prise de contact via un formulaire dédié.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          Implémentation
        </h2>
        <p className="text-slate-200 leading-relaxed">
          Développement avec WordPress et Elementor Pro pour une personnalisation
          avancée. Intégration d'un formulaire de contact sécurisé avec
          validation et notifications par e-mail. Optimisation des performances
          via la compression d'images et l'utilisation de plugins de mise en
          cache.
        </p>
      </>
    ),
  }
];
