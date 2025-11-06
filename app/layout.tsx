import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio – Axel Ibanez",
  description: "Développeur Full Stack Junior – Portfolio noir & violet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <head>
        {/* Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: { extend: { colors: { violet: { 950: '#0b0216' } } } }
              };
            `,
          }}
        />
      </head>

      {/* ✅ Unified dark background for all pages */}
      <body
        className="
          min-h-dvh relative flex flex-col
          bg-gradient-to-br from-black via-slate-950 to-violet-950
          text-white antialiased overflow-x-hidden
        "
      >
        {/* ✅ Decorative radials only at the top, fading out before footer */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-x-0 top-0 h-[70vh] -z-10
            bg-[radial-gradient(1200px_800px_at_20%_20%,rgba(139,92,246,0.25),transparent_60%),
                radial-gradient(1000px_600px_at_80%_0%,rgba(236,72,153,0.18),transparent_55%)]
            [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
          "
        />

        {/* ✅ Main content + footer */}
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
