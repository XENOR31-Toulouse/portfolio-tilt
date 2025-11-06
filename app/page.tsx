import Link from "next/link";
import Navbar from "@/components/Navbar";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.15),transparent_35%)]" />
        <Navbar />
        <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Mon <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Projets sélectionnés : Next.js, Tailwind, effets Tilt, UI moderne et performante.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
                <TiltCard className="h-full transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 border border-white/10 flex items-center justify-center">
                    <span className="text-violet-300/90 text-sm uppercase tracking-widest">{p.image ? "Prévisuel" : "Projet"}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-300 line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.slice(0,3).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-block text-sm text-violet-300 underline underline-offset-4">Voir le projet →</span>
                </TiltCard>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
