
import CTAWhatsApp from "@/components/quienes-somos/CTAWhatsApp";
import DescripcionQuienesSomos from "@/components/quienes-somos/DescripcionQuienesSomos";
import HeroQuienesSomos from "@/components/quienes-somos/HeroQuienesSomos";
import Valores from "@/components/quienes-somos/valores";

export const metadata = {
  title: "Quiénes Somos",
  description: "Conoce a Consultoría Lázaro, tu socio estratégico en ingeniería civil, topografía y saneamiento físico legal en Perú. Experiencia y profesionalismo a tu servicio.",
};

export default function QuienesSomosPage() {
  return (
    <main >
      <HeroQuienesSomos/>
      <DescripcionQuienesSomos/>
      <Valores/>
      <CTAWhatsApp/>
    </main>
  );
}
