🧠 Axel Ibanez – Portfolio

A modern, fast, and responsive developer portfolio built with Next.js 15, Tailwind CSS, and Tilt.js.
It highlights professional experience, personal projects, and key technical skills — all hosted and deployed on Vercel.

🚀 Stack

⚡ Next.js 15 (App Router) — hybrid static + SSR rendering

🎨 Tailwind CSS — custom dark theme (black + violet)

🧭 Framer Motion / Tilt.js — smooth hover & parallax effects

🖼️ Next/Image — optimized image loading

☁️ Vercel — CI/CD and hosting

🧩 Structure
app/
 ├─ layout.tsx         → global layout + glow background
 ├─ page.tsx           → homepage (profile, experience, preview projects)
 ├─ projects/          → dynamic routes per project
 └─ components/        → Navbar, TiltCard, Footer, etc.
lib/
 ├─ profile.ts         → profile information
 └─ projects.tsx       → project data (slug, tags, long JSX content)
public/
 └─ images/            → assets and project covers

🧱 Getting Started

Clone the repo and install dependencies:

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install


Run the dev server:

npm run dev


Open http://localhost:3000
 to view it locally.

🧩 Adding a New Project

Each project is defined in lib/projects.tsx
:

{
  slug: "site-vitrine-omena",
  title: "Site Vitrine Omena",
  description: "Refonte, formulaires, SEO et hébergement optimisé.",
  tags: ["Next.js", "Tailwind", "SEO"],
  cover: "/images/projects/site-vitrine-omena/cover.jpg",
  links: [{ label: "Visiter", href: "https://omena.fr" }],
  content: (
    <>
      <h2>Contexte</h2>
      <p>Refonte du site vitrine d’Omena…</p>
    </>
  ),
}


🛠️ After updating this file, commit & push to main —
Vercel will automatically rebuild and redeploy your portfolio.
