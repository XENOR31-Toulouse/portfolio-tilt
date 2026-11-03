import Link from "next/link";
import { profile } from "@/lib/profile";
export default function Footer() {
  return (
    <footer className="shell footer">
      <Link className="brand" href="/">
        axel<span>.</span>ibanez
      </Link>
      <span>© {new Date().getFullYear()} Axel Ibanez</span>
      <div>
        <Link href="/cv">CV ↗</Link>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <Link href="/mentions-legales">Mentions légales</Link>
        <a href="#main-content">En haut ↑</a>
      </div>
    </footer>
  );
}
