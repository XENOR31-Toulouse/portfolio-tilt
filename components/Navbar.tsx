import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Axel Ibanez</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-slate-200 hover:text-white">Accueil</Link>
          {/* <Link href="/#projects" className="text-slate-200 hover:text-white">Projets</Link> */}
          <Link href="/projects" className="text-slate-200 hover:text-white">Tous les projets</Link>
          <a href="/cv/Axel_Ibanez_CV.pdf" target="_blank" className="text-slate-200 hover:text-white">CV</a>
        </div>
      </div>
    </nav>
  );
}