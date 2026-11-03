import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
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
    <html lang="fr" className={`${body.variable} ${display.variable}`}>
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
