import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Next.js 15+: params is a Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projet introuvable" };
  return { title: `${project.title} – Portfolio`, description: project.description };
}

// Next.js 15+: params is a Promise
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main>
      <Navbar />
      <section className="relative mx-auto max-w-4xl px-6 pt-24 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.20),transparent_40%)]" />
        <Link href="/" className="text-sm text-violet-300 hover:underline">← Retour</Link>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold">{project.title}</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">{project.description}</p>

        <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700/20 to-fuchsia-700/10 border border-white/10 flex items-center justify-center">
          <span className="text-violet-200/90">Visuel du projet</span>
        </div>

        {project.content ? (
          <div className="mt-10 text-slate-200 space-y-4">{project.content}</div>
        ) : null}

        {project.links?.length ? (
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Liens</h2>
            <ul className="mt-3 space-y-2">
              {project.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer" className="text-violet-300 underline underline-offset-4">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.tags?.length ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}