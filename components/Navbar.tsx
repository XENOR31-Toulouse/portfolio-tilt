import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-slate-200 hover:text-white">Accueil</Link>
          <a href="#projects" className="text-slate-200 hover:text-white">Projets</a>
          <Link href="/contact" className="text-slate-200 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
