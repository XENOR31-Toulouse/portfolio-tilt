import type { ReactNode } from "react"

/**
 * Project type definition
 */
export type ProjectCategory =
  | "Applications"
  | "Infrastructure"
  | "Automatisation"
  | "Sites web"
  | "Formation";

export type Project = {
  category?: ProjectCategory;
  featured?: boolean;
  visual?: string;
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
    slug: "interfaces-web-et-architecture",
    title: "Interfaces web & architecture applicative",
    date: "2026",
    category: "Applications",
    featured: true,
    visual: "WEB",
    description:
      "Interfaces complémentaires, composants réutilisables et services applicatifs découplés.",
    tags: ["React", "Angular", "TypeScript", "Java", "Architecture logicielle"],
    content: (
      <>
        <h2>Conception des interfaces</h2>
        <p>
          Développement d’interfaces adaptées à plusieurs formats et contextes
          d’utilisation. Attention portée à la navigation, à la cohérence
          des composants et à la gestion des états.
        </p>
        <h2>Organisation du code</h2>
        <ul>
          <li>
            Séparation entre présentation, règles applicatives et échanges de
            données afin de limiter le couplage.
          </li>
          <li>
            Définition de contrats explicites entre les modules et
            réutilisation de composants lorsque cela est pertinent.
          </li>
          <li>
            Traitement des erreurs, validation des données et prise en compte
            des usages mobiles.
          </li>
        </ul>
        <h2>Qualité</h2>
        <p>
          Maintenabilité, revues de code, tests et documentation : des choix
          pensés pour faciliter les évolutions du produit. La description
          porte sur les pratiques de développement, sans dévoiler de schéma
          d’exploitation interne.
        </p>
      </>
    ),
  },
  {
    slug: "orchestration-workflows-applicatifs",
    title: "Orchestration et automatisation applicative",
    date: "2026",
    category: "Automatisation",
    featured: true,
    visual: "FLOW",
    description:
      "Conception de workflows modulaires et de mécanismes d’intégration maintenables.",
    tags: ["Automatisation", "Workflows", "API", "Tests", "Architecture modulaire"],
    content: (
      <>
        <h2>Approche de conception</h2>
        <p>
          Structuration de processus automatisés en étapes indépendantes et
          lisibles. Les responsabilités sont séparées pour que chaque partie
          puisse évoluer et être vérifiée sans complexifier l’ensemble.
        </p>
        <h2>Fiabilité et maintenance</h2>
        <ul>
          <li>Validation des entrées et contrôle des résultats intermédiaires.</li>
          <li>Gestion des erreurs et des situations inattendues.</li>
          <li>Documentation des flux, tests et amélioration progressive.</li>
        </ul>
        <h2>Retour d’expérience</h2>
        <p>
          Ce travail m’a permis de renforcer une approche orientée modularité,
          lisibilité et robustesse, indépendamment des outils ou services
          utilisés pour l’implémentation.
        </p>
      </>
    ),
  },
  {
    slug: "application-desktop-rust",
    title: "Application desktop de supervision — Rust",
    date: "2026",
    category: "Infrastructure",
    featured: true,
    visual: "RUST",
    description:
      "Application native de visualisation d’indicateurs et d’assistance aux opérations techniques.",
    tags: ["Rust", "egui", "Desktop", "Monitoring"],
    content: (
      <>
        <h2>Application native</h2>
        <p>
          Création d’une interface graphique avec Rust et egui pour présenter
          clairement des indicateurs et faciliter la consultation d’états
          techniques.
        </p>
        <h2>Conception logicielle</h2>
        <ul>
          <li>
            Architecture modulaire distinguant les composants d’interface,
            le traitement des données et les opérations applicatives.
          </li>
          <li>
            Gestion des tâches non bloquantes pour conserver une interface
            fluide pendant les traitements.
          </li>
          <li>
            Gestion des erreurs et restitution compréhensible des informations
            dans l’interface.
          </li>
        </ul>
        <h2>Qualité et distribution</h2>
        <p>
          Organisation du code, tests et processus de compilation
          reproductible. Les mécanismes d’administration et les détails
          d’exploitation ne sont pas décrits publiquement.
        </p>
      </>
    ),
  },

  {
    slug: "dashboard-interne",
    title: "Dashboard Interne (Frequentiel)",
    date: "2025",
    description: "Application de suivi d’indicateurs et filtres avancés.",
    tags: [
      "Angular",
      "Java SpringBoot",
      "ElasticSearch",
      "Kibana",
      "Docker",
      "architecture hexagonale",
    ],
    cover: "/images/projects/frequentiel/frequentiel.png",
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Outil interne de suivi de l’utilisation des services et du suivi du
          parcours client sur Octoplus. L’objectif était de centraliser les
          données clés pour faciliter la prise de décision.
        </p>
        <p>
          Exemple : Quels sont les services les plus utilisés ? Quel est le
          parcours typique d’un client ?
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          Implémentation
        </h2>
        <p className="text-slate-200 leading-relaxed">
          Développement d’un microservice avec Java SpringBoot pour
          l’agrégation des données. Utilisation d’ElasticSearch et Kibana pour
          la visualisation des données en temps réel. Déploiement via Docker
          pour une scalabilité optimale.
        </p>
      </>
    ),
  },

  {
    slug: "Formation-Cypress-testeur-Frequentiel",
    title: "Formation Cypress à l'équipe de testeurs de Frequentiel",
    date: "2025",
    description:
      "Formation interne sur Cypress pour automatiser les tests end-to-end.",
    tags: ["Cypress", "Testing", "Formation"],
    cover: "/images/projects/frequentiel/frequentiel.png",
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Formation dispensée à l’équipe de testeurs de Frequentiel pour
          automatiser les tests end-to-end de leurs applications web.
          L’objectif était d’améliorer la couverture des tests et de réduire le
          temps consacré aux tests manuels.
        </p>
        <p>
          J’ai dû implémenter des balises <code>data-test</code> sur
          l’application Octoplus pour faciliter la sélection des éléments à
          tester. Pour l’équipe de testeurs qui n’avait pas de connaissances en
          programmation, j’ai adapté mon discours et mes exemples afin qu’ils
          soient compréhensibles par des non-développeurs.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          Fonctionnalités
        </h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Introduction à Cypress et à son écosystème.</li>
          <li>Création de tests end-to-end pour des scénarios courants.</li>
          <li>
            Meilleures pratiques pour la maintenance des tests automatisés.
          </li>
        </ul>
      </>
    ),
  },

  {
    slug: "site-vitrine-omena",
    title: "Site Vitrine Omena",
    date: "2025 — en cours",
    description: "Refonte, formulaires, correctif.",
    category: "Sites web",
    tags: ["CMS", "Responsive", "Expérience utilisateur"],
    // cover: "/images/projects/site-vitrine-omena/omena_cover.webp",
    links: [{ label: "Visiter", href: "https://omena.fr" }],
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Refonte du site vitrine d’Omena pour améliorer la lisibilité. Le site
          devait refléter les valeurs écoresponsables et locales de
          l’entreprise tout en offrant une expérience fluide sur tous les
          appareils.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">Objectifs</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Clarifier le parcours (page d’accueil et pages services).</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          Implémentation
        </h2>
        <p className="text-slate-200 leading-relaxed">
          Travail sur l’architecture éditoriale, les composants de mise en
          page et le parcours de navigation. Améliorations de la lisibilité,
          de l’accessibilité et des performances perçues sur différents
          formats d’écran.
        </p>
      </>
    ),
  },
  // project creation site web (wordpress elementor) pour avocat
  {
    slug: "site-avocat",
    title: "Site Vitrine Avocat",
    date: "2024 — en cours",
    description: "Création d'un site vitrine pour un avocat.",
    tags: ["WordPress", "Elementor"],
    // cover: "/images/projects/avocat/Cabinet.webp",
    gallery: ["/images/projects/avocat/Domaines.webp", "/images/projects/avocat/Cabinet.webp",],
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Création d’un site vitrine pour un avocat. Le site devait refléter le
          professionnalisme et la crédibilité du cabinet tout en offrant une
          expérience utilisateur fluide.
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
          Développement grâce à WordPress et Elementor Pro pour une
          personnalisation avancée. Intégration d’un formulaire de contact
          sécurisé avec validation et notifications par e-mail. Optimisation
          des performances via la compression d’images et l’utilisation de
          plugins de mise en cache.
        </p>
      </>
    ),
  },
  // creation d'une application de monitoring des taches en java springboot + angular
  {
    slug: "app-monitoring-taches",
    title: "Application de Monitoring des Tâches",
    date: "2022 - 2023",
    description: "Application web pour le suivi des tâches en temps réel.",
    tags: ["Java SpringBoot", "Angular", "WebSocket", "Docker"],
    cover: "/images/projects/frequentiel/frequentiel.png",
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Développement d’une application web permettant aux équipes de suivre
          leurs tâches en temps réel. L’objectif était d’améliorer la
          productivité et la collaboration au sein des équipes, mais surtout de
          réagir rapidement en cas de problème, avant même qu’un client ne le
          signale.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          Fonctionnalités
        </h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Tableau de bord interactif pour visualiser l’état des tâches.</li>
          <li>Mise à jour en temps réel via WebSocket.</li>
          <li>Gestion des utilisateurs et des rôles.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          Implémentation
        </h2>
        <p className="text-slate-200 leading-relaxed">
          Backend développé avec Java SpringBoot pour gérer la logique métier et
          les API REST. Frontend réalisé avec Angular pour une interface
          utilisateur réactive. Utilisation de WebSocket pour les mises à jour
          en temps réel. Déploiement via Docker pour une scalabilité et une
          portabilité optimales.
        </p>
      </>
    ),
  },
  {
    slug: "integration-saas-automatisation",
    title: "Intégration SaaS & automatisation",
    date: "2025 — en cours",
    category: "Automatisation",
    description:
      "Connexion d’outils SaaS à travers des scénarios automatisés et des échanges de données contrôlés.",
    tags: ["Make", "API", "Automatisation"],
    visual: "AUTO",
    content: (
      <>
        <h2>Architecture d’intégration</h2>
        <p>
          Conception de scénarios Make reliant plusieurs services SaaS via
          leurs interfaces d’intégration. Les données sont transformées,
          validées puis transmises de manière structurée.
        </p>
        <h2>Fiabilité</h2>
        <ul>
          <li>Gestion des erreurs et signalement des échecs d’exécution.</li>
          <li>Contrôles pour préserver la cohérence des données échangées.</li>
          <li>Découplage des systèmes afin de faciliter leur évolution.</li>
        </ul>
        <p>
          Le fonctionnement métier des services connectés n’est pas détaillé
          publiquement.
        </p>
      </>
    ),
  },
  // projet de site web portfolio (se que vous y etes actuellement)
  {
    slug: "portfolio-personnel",
    title: "Portfolio Personnel",
    date: "2025",
    description: "Site web portfolio personnel développé avec Next.js et Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"," Vercel"],
    // cover: "/images/projects/portfolio/personal-portfolio.png",
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Création d’un site web portfolio pour présenter mes compétences,
          expériences et projets. L’objectif était de créer une plateforme
          professionnelle et attrayante pour attirer des employeurs potentiels
          et des clients.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          Fonctionnalités
        </h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Présentation claire de mes compétences et expériences.</li>
          <li>Section dédiée aux projets avec descriptions détaillées.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          Implémentation
        </h2>
        <p className="text-slate-200 leading-relaxed">
          Développement avec Next.js pour une performance optimale et une
          expérience utilisateur fluide. Utilisation de Tailwind CSS pour un
          design moderne et réactif.
        </p>
      </>
    ),
  },

];
