import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Axel Ibanez — Développeur Full Stack",
  description:
    "Développeur full stack à Toulouse. Découvrez mes projets web, mon parcours et mes compétences en Java, Angular et React.",
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
