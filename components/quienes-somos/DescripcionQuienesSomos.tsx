"use client";

import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ----------- TEXTO PRINCIPAL ----------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="section-badge mb-2 inline-flex">Quiénes Somos</span>

          <h2
            className="text-3xl md:text-4xl font-bold text-[#0B1E35] leading-snug"
            
          >
            Expertos en ingeniería y gestión técnica para tus proyectos.
          </h2>

          <div className="w-12 h-[3px] bg-[#C5A028] mt-2 mb-4" />

          <p className="text-[#6B7280] leading-relaxed text-base">
            En Consultoría Lázaro acompañamos a empresas, propietarios y proyectistas brindando soluciones integrales en{" "}
            <span className="font-semibold text-[#0B1E35]">
              ingeniería civil, topografía y saneamiento legal
            </span>.  
            Nuestro enfoque está en ofrecer un servicio preciso, rápido y confiable, 
            asegurando que cada etapa del proyecto avance sin contratiempos.
          </p>

          <div className="accent-border mt-4">
            <p className="text-[#0B1E35] font-medium leading-relaxed italic">
              "Creemos en un trato cercano, transparente y orientado a resultados. Más que un proveedor, nos convertimos en tu aliado técnico para transformar tus ideas en obras concretas."
            </p>
          </div>
        </motion.div>

        {/* ----------- IMAGEN ----------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[500px] group"
        >
          {/* Contenedor principal de la imagen */}
          <div className="absolute inset-0 border border-[#D1D9E0] p-3 bg-white z-10">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/equipo_consultoria.png"
                alt="Consultoría Lázaro Equipo"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E35]/40 to-transparent" />
            </div>
          </div>

          {/* Cuadro decorativo desplazado */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C5A028] z-0" />
        </motion.div>

      </div>
    </section>
  );
}
