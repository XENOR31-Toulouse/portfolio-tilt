import type { ReactNode } from "react"

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
    description: "Application de suivi d’indicateurs et filtres avancés.",
    tags: [
      "Angular",
      "Java SpringBoot",
      "ElasticSearch",
      "Kibana",
      "Docker",
      "architecture hexagonale",
    ],
    cover: "/images/projects/Frequentiel/frequentiel.png",
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
    cover: "/images/projects/Frequentiel/frequentiel.png",
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
    date: "2025 - *",
    description: "Refonte, formulaires, correctif.",
    tags: ["WordPress", "Elementor"],
    cover: "/images/projects/site-vitrine-omena/omena_cover.jpg",
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
    date: "2024 - *",
    description: "Création d'un site vitrine pour un avocat.",
    tags: ["WordPress", "Elementor"],
    cover: "/images/projects/avocat/Cabinet.jpg",
    gallery: ["/images/projects/avocat/Domaines.jpg"],
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
    cover: "/images/projects/Frequentiel/frequentiel.png",
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
  // creation de automatisation de la mise a jour de prospect de calendly  vers le crm axonaut grace a make
  {
    slug: "automation-calendly-axonaut",
    title: "Automatisation Calendly → Axonaut (Omena)",
    date: "2025 - *",
    description:
      "Automatisation de la mise à jour des prospects de Calendly vers Axonaut. (Omena)",
    tags: ["Make", "Automation", "CRM"],
    cover: "/images/projects/site-vitrine-omena/make-logo.png",
    content: (
      <>
        <h2 className="text-xl font-semibold text-white mt-8">Contexte</h2>
        <p className="text-slate-200 leading-relaxed">
          Mise en place d’une automatisation pour synchroniser les prospects
          recueillis via Calendly avec le CRM Axonaut. L’objectif était de
          réduire le travail manuel et d’assurer une gestion efficace des
          prospects.
        </p> 
        <h2 className="text-xl font-semibold text-white mt-8">Objectifs</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-200 leading-relaxed">
          <li>Automatiser la création et la mise à jour des prospects.</li>
          <li>Assurer la cohérence des données entre les deux plateformes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          Implémentation
        </h2>
        <p className="text-slate-200 leading-relaxed">
          Utilisation de Make pour créer un scénario automatisé. Le scénario
          récupère les nouveaux prospects de Calendly, extrait les
          informations pertinentes, puis crée ou met à jour les fiches
          prospects dans Axonaut. Gestion des erreurs et notifications en cas de
          problème.
        </p>
      </>
    ),
  },
  // 

];
