"use client";

import { motion } from "framer-motion";
import { SearchCheck, FileText, Hammer, CheckCircle2 } from "lucide-react";

const pasos = [
  {
    icono: SearchCheck,
    titulo: "1. Diagnóstico inicial",
    descripcion:
      "Analizamos tus requerimientos y evaluamos las condiciones técnicas y legales del proyecto.",
  },
  {
    icono: FileText,
    titulo: "2. Planificación técnica",
    descripcion:
      "Elaboramos propuestas detalladas y cronogramas ajustados a tus objetivos y normativa vigente.",
  },
  {
    icono: Hammer,
    titulo: "3. Ejecución y gestión",
    descripcion:
      "Implementamos cada etapa del proyecto con precisión técnica, supervisión constante y transparencia.",
  },
  {
    icono: CheckCircle2,
    titulo: "4. Entrega y validación",
    descripcion:
      "Garantizamos resultados óptimos con informes finales y documentación técnica verificada.",
  },
];

export default function ProcesoServicios() {
  return (
    <section className="w-full py-15 bg-[#c1d4eb] text-[#102b4a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* ---------- Título ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="bg-[#348caf]/10 text-[#1d4f91] font-semibold px-4 py-2 rounded-md">
            Nuestro proceso de trabajo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3">
            Garantizamos resultados con un enfoque técnico y transparente
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            En Consultoría Lázaro seguimos un proceso estructurado que asegura
            precisión, cumplimiento y calidad en cada proyecto.
          </p>
        </motion.div>

        {/* ---------- Grid de pasos ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-10">

          {pasos.map((paso, index) => {
            const Icono = paso.icono;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="relative bg-white pt-16 pb-8 px-6 rounded-2xl border border-[#cbd5e1]
                hover:border-[#348caf] hover:shadow-lg hover:shadow-[#348caf]/20
                transition-all duration-300 text-center group"
              >
                {/* ICONO FLOTANTE */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="p-5 rounded-full shadow-xl ring-4 ring-white bg-[#348caf] group-hover:bg-[#1d4f91] transition-colors duration-300"
                  >
                    <Icono className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>

                {/* CONTENIDO */}
                <h3 className="text-lg font-semibold mb-2 mt-2">
                  {paso.titulo}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
