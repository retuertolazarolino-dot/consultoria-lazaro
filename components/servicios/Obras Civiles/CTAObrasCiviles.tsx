"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function CTAObrasCiviles() {
  return (
    <section className="w-full py-15 bg-[#f3f6fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda - Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c32] mb-4">
            ¿Te interesa este servicio?
          </h2>
          <p className="text-[#475569] text-lg mb-8 leading-relaxed">
            En <span className="text-[#5a8cc4] font-semibold">Consultoría Lázaro</span> 
            te ayudamos a ejecutar tus proyectos con soporte técnico, legal y profesional. 
            Nuestro equipo puede asesorarte por WhatsApp sin compromiso.
          </p>

          <a
            href="https://wa.me/51999656111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Hablar por WhatsApp
          </a>
        </motion.div>

        {/* Columna derecha - Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[350px] h-[250px] md:w-[450px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/servicios/cta.jpg"
              alt="Consultoría técnica en obras civiles"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
