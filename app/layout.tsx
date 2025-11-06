// app/layout.tsx
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio – Axel Ibanez",
  description: "Développeur Full Stack Junior – Portfolio noir & violet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: { extend: { colors: { violet: { 950: '#0b0216' } } } }
              };
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="min-h-dvh relative flex flex-col bg-gradient-to-br from-black via-slate-950 to-violet-950 text-white antialiased">
        {/* Overlay principal couvrant toute la page */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10
                     bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.25),transparent_40%),
                         radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.15),transparent_35%)]"
        />
        {/* Petit fade en bas pour éviter toute “cassure” */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 bottom-0 h-[35vh] -z-10
                     bg-[radial-gradient(ellipse_at_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,0.5)_55%,rgba(2,6,23,0.9)_95%)]"
        />

        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
