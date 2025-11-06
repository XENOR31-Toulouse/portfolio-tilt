import Link from "next/link";
import Navbar from "@/components/Navbar";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/lib/projects";
import { profile } from "@/lib/profile";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.15),transparent_35%)]" />
        <Navbar />

        {/* Hero CV */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Text */}
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-violet-300/80 uppercase tracking-wider">
                Disponible – {profile.location}
              </p>
              <h1 className="mt-2 text-4xl md:text-6xl font-bold tracking-tight">
                {profile.name}
                <span className="block text-2xl md:text-3xl font-semibold text-violet-300">
                  {profile.title}
                </span>
              </h1>
              <p className="mt-4 text-slate-300">{profile.about}</p>

              {/* Contacts */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Email
                </a>
                <a
                  href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Téléphone
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="/cv/Axel_Ibanez_CV.pdf"
                  target="_blank"
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Télécharger le CV (PDF)
                </a>
              </div>

              {/* Tags stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.skills.core.slice(0, 8).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-1 ring-white/15 shadow-2xl shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Portrait d'Axel Ibanez"
                width={448} // any >= actual display size
                height={448}
                className="w-full h-full object-cover grayscale"
                priority
              />
            </div>
          </div>
        </section>

        {/* Aperçu expérience */}
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-12">
          <h2 className="text-xl font-semibold">Dernières expériences</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.experience.slice(0, 3).map((exp) => (
              <div
                key={exp.role + exp.company}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-sm text-violet-300/80">{exp.period}</div>
                <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
                <p className="text-slate-300">{exp.company}</p>
                <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
                  {exp.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects grid */}
        <section id="projects" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Projets</h2>
            <Link
              href="/projects"
              className="text-sm text-violet-300 underline underline-offset-4"
            >
              Tout voir
            </Link>
          </div>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="block group"
              >
                <TiltCard className="h-full transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 border border-white/10 flex items-center justify-center">
                    <span className="text-violet-300/90 text-sm uppercase tracking-widest">
                      {p.image ? "Prévisuel" : "Projet"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-300 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-block text-sm text-violet-300 underline underline-offset-4">
                    Voir le projet →
                  </span>
                </TiltCard>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
