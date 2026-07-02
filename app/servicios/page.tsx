import CTAServicios from "@/components/servicios/CTAServicios";
import HeroServicios from "@/components/servicios/HeroServicios";
import ListaServicios from "@/components/servicios/ListaServicios";
import ProcesoServicios from "@/components/servicios/ProcesoServicios";

export const metadata = {
  title: "Nuestros Servicios",
  description: "Explora nuestros servicios de ingeniería estructural, topografía, saneamiento físico legal, gerencia de proyectos, geotecnia y supervisión de obra.",
};

export default function ServiciosPage() {
  return (
       <main>
      <HeroServicios />
      <ListaServicios/>
      <ProcesoServicios/>
      <CTAServicios/>
    </main>
  );
}
