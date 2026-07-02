
import ContactoForm from "@/components/contacto/ContactoForm";
import HeroContacto from "@/components/contacto/HeroContacto";
import MapaContacto from "@/components/contacto/mapa";

export const metadata = {
  title: "Contacto",
  description: "Contáctenos para cotizar servicios de ingeniería civil, topografía y saneamiento físico legal. Atención en Lima y provincias.",
};

export default function ContactoPage() {
  return (
     <main >
          <HeroContacto/>
          <ContactoForm/>
          <MapaContacto/>
          
        </main>
  );
}
