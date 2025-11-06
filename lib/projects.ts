export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: { label: string; href: string }[];
  content?: React.ReactNode;
};

export const projects: Project[] = [
  {
    slug: "site-vitrine-omena",
    title: "Site Vitrine Omena",
    description: "Refonte, SEO, formulaires, hébergement optimisé.",
    tags: ["Next.js", "Tailwind", "SEO"],
    links: [{ label: "Visiter", href: "#" }],
  },
  {
    slug: "dashboard-interne",
    title: "Dashboard Interne",
    description: "KPI, authentification, charts, filtres avancés.",
    tags: ["Next.js", "Prisma", "Auth"],
  },
  {
    slug: "calculateur-devis",
    title: "Calculateur de Devis",
    description: "UI Tailwind + logique de pricing avec validations.",
    tags: ["UI", "Forms", "Zod"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}