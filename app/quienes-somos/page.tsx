
import CTAWhatsApp from "@/components/quienes-somos/CTAWhatsApp";
import DescripcionQuienesSomos from "@/components/quienes-somos/DescripcionQuienesSomos";
import HeroQuienesSomos from "@/components/quienes-somos/HeroQuienesSomos";
import Valores from "@/components/quienes-somos/valores";
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
