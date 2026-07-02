"use client";

import { motion } from "framer-motion";
import { HardHat } from "lucide-react";

export default function HeroServicios() {
  return (
    <section className="relative w-full h-[60vh] min-h-[450px] bg-[#0B1E35] flex items-center overflow-hidden">
      
      {/* Elemento gráfico de fondo a la derecha */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <HardHat size={600} className="text-white" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center"
      >
        <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
          Excelencia en Ingeniería
        </span>

        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          
        >
          Nuestros Servicios
        </h1>

        <p className="text-white/70 max-w-xl text-sm md:text-base leading-relaxed">
          Desarrollamos infraestructura técnica con precisión matemática y visión estratégica.
          Transformamos desafíos complejos en activos tangibles y legales.
        </p>
      </motion.div>
    </section>
  );
}
