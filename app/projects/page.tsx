import Link from "next/link";
import Navbar from "@/components/Navbar";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/lib/projects";

export default function ProjectsIndex() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-24">
        <h1 className="text-3xl md:text-5xl font-bold">Projets</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block">
              <TiltCard>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.description}</p>
              </TiltCard>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}