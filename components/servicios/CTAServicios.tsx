"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAServicios() {
  return (
    <section className="w-full py-24 bg-white flex justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#EBF1FA] py-16 px-6 md:px-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-[#0B1E35] text-2xl md:text-3xl font-light mb-6">
            ¿Listo para iniciar su próximo gran proyecto?
          </h2>
          
          <p className="text-[#4B5563] text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Obtenga un presupuesto técnico detallado y adaptado a las necesidades
            específicas de su empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="
                px-8 py-3 bg-[#0B1E35] text-white
                text-xs font-bold tracking-widest uppercase
                hover:bg-[#1A3A5C] transition-colors duration-300
              "
            >
              Solicitar Cotización
            </Link>

            <a
              href="https://wa.me/51999656111"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-3 border border-[#0B1E35] text-[#0B1E35]
                text-xs font-bold tracking-widest uppercase
                hover:bg-[#0B1E35] hover:text-white transition-colors duration-300
              "
            >
              Hable con un experto
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
