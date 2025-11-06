import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio – Axel Ibanez",
  description: "Développeur Full Stack Junior – Portfolio noir & violet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <head>
        {/* Tailwind via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Tailwind theme config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: { violet: { 950: '#0b0216' } }
                  }
                }
              };
            `,
          }}
        />
      </head>

      <body
        className="
          relative flex flex-col min-h-dvh overflow-x-hidden
          text-white antialiased
          bg-fixed bg-gradient-to-br from-black via-slate-950 to-violet-950
        "
      >
        {/* Page content */}
        <div className="relative z-20 flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
