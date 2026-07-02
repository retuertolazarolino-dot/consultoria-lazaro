import { notFound } from "next/navigation";
import { getServicioBySlug, serviciosData } from "@/lib/data/servicios";
import ServiceHero from "@/components/servicios/detalle/ServiceHero";
import ServiceContent from "@/components/servicios/detalle/ServiceContent";
import CTAServicios from "@/components/servicios/CTAServicios"; 

export async function generateStaticParams() {
  return serviciosData.map((servicio) => ({
    slug: servicio.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const servicio = getServicioBySlug(resolvedParams.slug);
  
  if (!servicio) {
    return {
      title: "Servicio no encontrado | Consultoría Lázaro",
    };
  }

  return {
    title: servicio.metaTitle,
    description: servicio.metaDescription,
  };
}

export default async function ServicioDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const servicio = getServicioBySlug(resolvedParams.slug);

  if (!servicio) {
    notFound();
  }

  return (
    <main className="bg-[#F4F6F8]">
      <ServiceHero 
        titulo={servicio.titulo} 
        subtitulo={servicio.subtitulo} 
        imagen={servicio.heroImage} 
      />
      <ServiceContent 
        titulo={servicio.titulo}
        descripcionLarga={servicio.descripcionLarga}
        tiposDeObras={servicio.tiposDeObras}
        beneficios={servicio.beneficios}
        proceso={servicio.proceso}
      />
      <CTAServicios />
    </main>
  );
}
