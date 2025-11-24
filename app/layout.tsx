// app/layout.tsx
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { poppins } from "@/app/fonts";

export const metadata = {
  metadataBase: new URL("https://consultorialazaro.vercel.app"), // cuando tengas dominio
  title: {
    default: "Consultoría Lázaro",
    template: "%s | Consultoría Lázaro"
  },
  description: "Servicios profesionales de consultoría, obras civiles, tasaciones, topografía y saneamiento legal.",
  keywords: [
    "consultoría",
    "tasaciones",
    "topografía",
    "obras civiles",
    "saneamiento físico legal",
    "perú",
    "ingeniería",
    "trámites registrales"
  ],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://consultorialazaro.vercel.app",
    siteName: "Consultoría Lázaro",
    title: "Consultoría Lázaro",
    description: "Servicios profesionales en ingeniería, consultoría legal y obras civiles.",
  },
  icons: {
    icon: "/favicon.ico"
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased font-sans bg-white text-black`}>
        
        <Header />

        {/* Empuja el contenido hacia abajo por el header fijo */}
        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
