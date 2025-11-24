"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DescripcionObrasCiviles() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* ---------- COLUMNA IZQUIERDA: TEXTO ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <span className="bg-[#5a8cc4]/10 text-[#1d4f91] font-semibold px-4 py-2 rounded-md w-max">
            Comprometidos con la excelencia
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c32] leading-tight">
            Ejecución y supervisión de proyectos civiles con altos estándares de
            calidad
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            En{" "}
            <span className="font-semibold text-[#081c32]">
              Consultoría Lázaro
            </span>{" "}
            ejecutamos obras civiles bajo un enfoque técnico integral, asegurando
            precisión, cumplimiento y sostenibilidad en cada etapa del proceso
            constructivo. Nuestro equipo combina experiencia, innovación y
            compromiso para entregar resultados que superan las expectativas.
          </p>
        </motion.div>

        {/* ---------- COLUMNA DERECHA: IMAGEN ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[350px] h-[300px] md:w-[450px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <Image
              src="/servicios/servicio1.jpg"
              alt="Ejecución de obras civiles - Consultoría Lázaro"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
