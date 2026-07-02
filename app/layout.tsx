// app/layout.tsx
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { inter } from "@/app/fonts";

export const metadata = {
  metadataBase: new URL("https://consultorialazaro.com"),
  title: {
    default: "Consultoría Lázaro | Ingeniería, Topografía y Saneamiento Legal",
    template: "%s | Consultoría Lázaro"
  },
  description: "Consultoría Lázaro ofrece servicios profesionales de ingeniería civil, topografía de precisión, tasaciones, y saneamiento físico legal en Perú.",
  keywords: [
    "consultoría",
    "tasaciones",
    "topografía",
    "obras civiles",
    "saneamiento físico legal",
    "ingeniería civil peru",
    "habilitaciones urbanas",
    "trámites registrales sunarp",
    "gerencia de proyectos pmi"
  ],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://consultorialazaro.com",
    siteName: "Consultoría Lázaro",
    title: "Consultoría Lázaro | Expertos en Ingeniería Civil",
    description: "Servicios profesionales en ingeniería civil, topografía, tasaciones y saneamiento legal. Calidad y garantía para tus proyectos.",
  },
  icons: {
    icon: "/favicon.ico"
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-[#0B1E35]`}>
        
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
