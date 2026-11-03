import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Axel Ibanez — Développeur Full Stack | Applications & architecture",
  description:
    "Développeur full stack à Toulouse. Expériences, projets web, architecture logicielle, automatisation et applications desktop.",
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
