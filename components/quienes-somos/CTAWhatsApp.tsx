"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAWhatsApp() {
  return (
    <section className="w-full py-24 bg-white flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="bg-[#0B1E35] py-20 px-6 md:px-16 text-center shadow-lg">
          
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar su próximo desafío técnico?
          </h2>
          
          <p className="text-white/80 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo está preparado para brindarle la precisión e innovación
            que su proyecto requiere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/51999656111"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3 bg-[#013D29] text-white
                text-sm font-semibold
                hover:bg-[#01281A] transition-colors duration-300
                w-full sm:w-auto
              "
            >
              Hablar con un Experto
            </a>

            <Link
              href="/proyectos"
              className="
                px-8 py-3 border border-white text-white
                text-sm font-semibold
                hover:bg-white hover:text-[#0B1E35] transition-colors duration-300
                w-full sm:w-auto
              "
            >
              Ver Proyectos
            </Link>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
