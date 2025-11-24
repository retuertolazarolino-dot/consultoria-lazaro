import Hero from "@/components/home/Hero";
import ServiciosDestacados from "@/components/home/ServiciosDestacados";
import PorQueElegirnos from "@/components/home/PorqueElegirnos";
import CTA from "@/components/home/CTA"
import FaqSection from "@/components/home/FaqSection";


export default function HomePage() {
  return (
       <main>
      <Hero />
      <ServiciosDestacados />
      <PorQueElegirnos />
      <FaqSection />
      <CTA />
    </main>
  );
}
