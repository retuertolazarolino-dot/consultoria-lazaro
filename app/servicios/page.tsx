import CTAServicios from "@/components/servicios/CTAServicios";
import DescripcionServicios from "@/components/servicios/DescripcionServicios";
import HeroServicios from "@/components/servicios/HeroServicios";
import ListaServicios from "@/components/servicios/ListaServicios";
import ProcesoServicios from "@/components/servicios/ProcesoServicios";



export default function ServiciosPage() {
  return (
       <main>
      <HeroServicios />
      <DescripcionServicios/>
      <ListaServicios/>
      <ProcesoServicios/>
      <CTAServicios/>
    </main>
  );
}
