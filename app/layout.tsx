export const metadata = {
  title: "Portfolio – Noir & Violet",
  description: "Sélection de projets Next.js + Tailwind + Tilt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-dvh bg-gradient-to-br from-black via-slate-950 to-[#0b0216] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
