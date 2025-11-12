import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";
import Image from "next/image";

function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: `${project.title} – Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main className="relative z-20">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-24">
        {/* Header */}
        <Link href="/projects" className="text-sm text-violet-300 hover:underline">
          ← Retour
        </Link>

        <h1 className="mt-4 text-3xl md:text-5xl font-bold">{project.title}</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">{project.description}</p>
        <p className="mt-1 text-sm text-slate-500">
          {project.date ?? ""}
        </p>  

        {/* Cover (only if provided) */}
        {project.cover && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.cover}
              alt={`Visuel – ${project.title}`}
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Gallery (only if provided) */}
        {project.gallery?.length ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={src}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}

        {/* Long content (JSX from lib/projects.tsx) */}
        {project.content && (
          <article
            className="
              mt-10 leading-relaxed text-slate-200 space-y-6
              [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:text-white [&_h2]:text-xl [&_h2]:font-semibold
              [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1
              [&_li::marker]:text-violet-300
              [&_a]:text-violet-300 [&_a]:underline [&_a]:underline-offset-4
            "
          >
            {project.content}
          </article>
        )}

        {/* Links */}
        {project.links?.length ? (
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Liens</h2>
            <ul className="mt-3 space-y-2">
              {project.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-violet-300 underline underline-offset-4"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Tags */}
        {project.tags?.length ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
