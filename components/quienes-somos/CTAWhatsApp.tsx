"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTAWhatsApp() {
  return (
    <section className="w-full py-12 bg-[#081c32] flex justify-center">
      {/* Contenedor 85% */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          w-[85%] max-w-4xl 
          bg-[#0e2744]/80 backdrop-blur-md
          rounded-2xl shadow-xl 
          text-center text-white
          px-6 py-5
        "
      >
        {/* Título */}
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-snug">
          ¿Necesitas un profesional confiable para tu proyecto?
        </h2>

        {/* Texto breve */}
        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
          Estoy listo para ayudarte con soluciones técnicas y legales en 
          ingeniería civil, topografía y saneamiento. Hablemos sin compromiso.
        </p>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/51999656111"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2
            bg-[#5a8cc4] hover:bg-[#73a8e5]
            text-white font-semibold
            px-7 py-3 rounded-full
            shadow-md transition-all duration-300
            hover:scale-105
          "
        >
          <MessageCircle className="w-5 h-5" />
          Escríbeme por WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
