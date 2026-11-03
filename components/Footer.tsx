import { profile } from "@/lib/profile";
export default function Footer() {
  return (
    <footer className="shell footer">
      <a className="brand" href="/">
        axel<span>.</span>ibanez
      </a>
      <span>© {new Date().getFullYear()} Axel Ibanez</span>
      <div>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="#main-content">En haut ↑</a>
      </div>
    </footer>
  );
}
