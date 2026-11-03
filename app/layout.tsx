import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Axel Ibanez — Développeur Full Stack | Applications & architecture",
  description:
    "Développeur full stack à Toulouse. Applications React et Angular, API Java Spring Boot, PostgreSQL, automatisation et infrastructure Rust chez Omena.",
  icons: { icon: "/utilisateur.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
