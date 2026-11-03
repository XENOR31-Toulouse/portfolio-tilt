# Portfolio d’Axel Ibanez

Portfolio personnel développé avec **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4** et **Vanilla Tilt**.

## Sections

- Accueil : présentation, **laboratoire interactif** (interface, architecture, workflow), projets techniques sélectionnés, parcours, compétences et contact.
- CV : page `/cv` adaptée aux écrans mobiles, parcours professionnel, technologies et téléchargement du PDF A4 mis à jour (`public/cv/Axel_Ibanez_CV.pdf`).
- Catalogue : filtres par applications, infrastructure, automatisation, sites web et formation.
- Fiches projets : architecture, choix techniques, qualité et déploiement.

Les projets réalisés dans un contexte professionnel sont présentés sous l’angle de l’ingénierie logicielle. Les objectifs métiers, les clients finaux, les données et les éléments d’exploitation sensibles ne sont pas publiés.

**Règle éditoriale :** les fiches de projets ne doivent pas associer explicitement un employeur aux technologies, configurations d’accès, moyens d’administration, sauvegardes, services internes ou topologies de production. Le CV PDF doit suivre la même règle. Les compétences générales peuvent être listées sans les relier à une infrastructure identifiée.

## Démarrage

```bash
npm ci
npm run dev
```

Ouvrir http://localhost:3000.

## Vérifications

```bash
npm run lint
npm run build
```

## Déploiement

Le site est destiné à être déployé sur Vercel. Les illustrations et le CV se trouvent dans `public/`.

## Laboratoire interactif

La section « Le labo » contient trois démonstrations locales : interface avec filtres et données fictives, schéma d'architecture conceptuel et simulation de workflow avec scénario de reprise. **Aucune de ces démos n'est connectée à des services, données ou infrastructures réels.** Aucun détail privé de l'employeur n'est exposé. Les fonctionnalités sont accessibles au clavier et les animations respectent `prefers-reduced-motion`.
