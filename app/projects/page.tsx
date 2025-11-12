// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/lib/projects";

export default function ProjectsIndex() {
  return (
    <main className="relative z-20">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-24 pb-24">
        <h1 className="text-3xl md:text-5xl font-bold">Projets</h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block group"
              aria-label={`Voir le projet ${p.title}`}
            >
              <TiltCard className="h-full overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-violet-400/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                {/* Cover if present, else fallback */}
                {p.cover ? (
                  <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 border border-white/10 flex items-center justify-center">
                    <span className="text-violet-300/90 text-sm uppercase tracking-widest">
                      Projet
                    </span>
                  </div>
                )}

                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300 line-clamp-2">
                  {p.date}
                </p>
                <p className="mt-1 text-sm text-slate-300 line-clamp-2">
                  {p.description}
                </p>

                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <span className="mt-4 inline-block text-sm text-violet-300 underline underline-offset-4">
                  Voir le projet →
                </span>
              </TiltCard>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
