"use client";

import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* ----------- TEXTO PRINCIPAL ----------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="bg-[#5a8cc4]/20 text-[#081c32] font-semibold px-4 py-2 rounded-md w-max">
            Quiénes Somos
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c32] leading-snug">
            Somos Consultoría Lázaro, expertos en ingeniería y gestión técnica para tus proyectos.
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Acompañamos a empresas, propietarios y proyectistas brindando soluciones en{" "}
            <span className="font-semibold text-[#081c32]">
              ingeniería civil, topografía y saneamiento legal
            </span>.  
            Nuestro enfoque está en ofrecer un servicio preciso, rápido y confiable, 
            asegurando que cada etapa del proyecto avance sin contratiempos.
          </p>

          <p className="text-gray-600 leading-relaxed">
            En Consultoría Lázaro creemos en un trato cercano, transparente y orientado a resultados.  
            Más que un proveedor, nos convertimos en tu aliado técnico para transformar tus ideas en obras concretas.
          </p>
        </motion.div>

        {/* ----------- IMAGEN ----------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQA3j1sJuNDpHQxa5s80ME9Rc66Etu234Pg&s" // 🔹 Ajusta la imagen
            alt="Consultoría Lázaro"
            className="w-full h-full object-cover"
          />

          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-lienar-to-t from-[#081c32]/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
