"use client";

export default function MapaContacto() {
  return (
    <section className="w-full pt-0 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-[#081c32]">
          Nuestra ubicación
        </h2>

        {/* Contenedor del Mapa */}
        <div className="
          w-full 
          h-[350px] 
          rounded-2xl 
          overflow-hidden 
          shadow-xl 
          border border-gray-200
        ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4447845353776!2d-77.042793!3d-12.046373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8bb5d1b3a4f%3A0xbad048121977708f!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1702330272345"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
