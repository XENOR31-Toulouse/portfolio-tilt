import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-16 bg-transparent border-t-0">
      <div className="mx-auto max-w-7xl px-6 py-10 text-slate-300">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-white mb-2">À propos</h3>
            <p className="text-sm opacity-80">
              Développeur Full Stack basé à Toulouse, passionné par les
              technologies web modernes, l’architecture logicielle et la
              création d’interfaces performantes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Navigation</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-violet-300 transition">Accueil</Link></li>
              <li><Link href="/projects" className="hover:text-violet-300 transition">Projets</Link></li>
              <li><Link href="/cv/Axel_Ibanez_CV.pdf" target="_blank" className="hover:text-violet-300 transition">CV (PDF)</Link></li>
              <li><Link href="mailto:axel.ibanez31000@gmail.com" className="hover:text-violet-300 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Réseaux</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="https://www.linkedin.com/in/axel-ibanez-9a2918193" target="_blank" rel="noreferrer" className="hover:text-violet-300 transition">LinkedIn</Link></li>
              <li><Link href="mailto:axel.ibanez31000@gmail.com" className="hover:text-violet-300 transition">Email</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Axel Ibanez. Tous droits réservés.</span>
          <span>
            Construit avec{" "}
            <span className="text-violet-300">Next.js</span> &{" "}
            <span className="text-violet-300">Tailwind CSS</span>.
          </span>
        </div>
      </div>
    </footer>
  );
}
