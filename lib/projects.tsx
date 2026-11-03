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
    slug: "ecosysteme-web-multi-interface-omena",
    title: "Écosystème web multi-interface — Omena",
    date: "2026",
    category: "Applications",
    featured: true,
    visual: "API",
    description:
      "Deux interfaces web complémentaires connectées à une API Java et une base PostgreSQL.",
    tags: ["React", "Angular", "Spring Boot", "PostgreSQL", "Docker"],
    content: (
      <>
        <h2>Architecture</h2>
        <p>
          Conception d’un écosystème composé d’une PWA React avec Vite et d’un
          dashboard Angular. Les deux interfaces communiquent avec une API REST
          centralisée en Java 21 et Spring Boot.
        </p>
        <h2>Back-end et données</h2>
        <ul>
          <li>
            Organisation en architecture hexagonale pour séparer le domaine,
            les cas d’usage et les adaptateurs techniques.
          </li>
          <li>
            Persistance PostgreSQL, migrations de schéma avec Flyway et
            gestion des accès côté serveur.
          </li>
          <li>
            Échanges API typés, traitement des états applicatifs et prise en
            charge des contraintes propres à une PWA.
          </li>
        </ul>
        <h2>Qualité et déploiement</h2>
        <p>
          Environnements de développement et de production définis avec Docker
          Compose, validations automatisées avec GitHub Actions et déploiement
          de services conteneurisés sur un VPS. Les détails fonctionnels
          internes ne sont volontairement pas présentés ici.
        </p>
      </>
    ),
  },
  {
    slug: "plateforme-orchestration-services-omena",
    title: "Plateforme d’orchestration de services — Omena",
    date: "2026",
    category: "Automatisation",
    featured: true,
    visual: "FLOW",
    description:
      "Socle modulaire associant n8n, une API Spring Boot, une interface Angular et PostgreSQL.",
    tags: ["n8n", "Spring Boot", "Angular", "PostgreSQL", "Docker Compose"],
    content: (
      <>
        <h2>Découpage des responsabilités</h2>
        <p>
          Construction d’un socle dans lequel Angular assure l’interface web,
          Spring Boot porte la logique applicative et expose les API REST, et
          n8n orchestre les workflows entre les services.
        </p>
        <h2>Architecture technique</h2>
        <ul>
          <li>Services isolés et lancés ensemble avec Docker Compose.</li>
          <li>
            Stockage PostgreSQL et migrations Flyway pour les données de
            l’API ; persistance dédiée pour n8n.
          </li>
          <li>
            Contrôles de santé et restitution de l’état des services depuis
            l’interface Angular.
          </li>
        </ul>
        <h2>Approche</h2>
        <p>
          L’objectif technique est de garder des composants remplaçables,
          observables et testables indépendamment. Le périmètre métier et les
          sources de données restent confidentiels.
        </p>
      </>
    ),
  },
  {
    slug: "console-supervision-rust-omena",
    title: "Console native de supervision — Rust",
    date: "2026",
    category: "Infrastructure",
    featured: true,
    visual: "RUST",
    description:
      "Application Windows native pour superviser des VPS et fiabiliser les déploiements conteneurisés.",
    tags: ["Rust", "egui", "OpenSSH", "SQLite", "Docker"],
    content: (
      <>
        <h2>Application native</h2>
        <p>
          Développement d’une interface Windows en Rust avec eframe/egui,
          sans serveur web local. Les opérations distantes passent par
          OpenSSH et la configuration SSH du poste.
        </p>
        <h2>Supervision et diagnostics</h2>
        <ul>
          <li>
            Lecture des métriques système, de l’état des conteneurs et des
            journaux techniques sur les VPS.
          </li>
          <li>
            Historique local des mesures dans SQLite et visualisation des
            tendances dans l’interface.
          </li>
          <li>
            Contrôles préalables aux déploiements et vérification des
            sauvegardes PostgreSQL avant les opérations sensibles.
          </li>
        </ul>
        <h2>Livraison</h2>
        <p>
          Compilation d’un exécutable portable via Rust/Cargo, avec
          validation et production d’artefacts Windows par GitHub Actions.
          Seuls les aspects d’ingénierie et d’exploitation sont détaillés.
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
    tags: ["WordPress", "Elementor"],
    // cover: "/images/projects/site-vitrine-omena/omena_cover.jpg",
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
          Développement grâce à WordPress et Elementor Pro pour une
          personnalisation avancée. Intégration de formulaires optimisés avec
          validation et notifications par e-mail. Optimisation des
          performances via la compression d’images.
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
    // cover: "/images/projects/avocat/Cabinet.jpg",
    gallery: ["/images/projects/avocat/Domaines.jpg", "/images/projects/avocat/Cabinet.jpg",],
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
    slug: "automation-calendly-axonaut",
    title: "Intégration SaaS & automatisation — Omena",
    date: "2025 — en cours",
    category: "Automatisation",
    description:
      "Connexion d’outils SaaS à travers des scénarios automatisés et des échanges de données contrôlés.",
    tags: ["Make", "API", "Automatisation"],
    cover: "/images/projects/site-vitrine-omena/make-logo.png",
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
