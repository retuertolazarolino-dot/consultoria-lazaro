"use client";

import { motion } from "framer-motion";

const pasos = [
  {
    numero: "01",
    titulo: "Planificación",
    descripcion:
      "Análisis de viabilidad, levantamiento de datos técnicos primarios y estructuración del cronograma maestro de obra.",
  },
  {
    numero: "02",
    titulo: "Ejecución",
    descripcion:
      "Despliegue de cuadrillas especializadas y control de calidad bajo normativas ISO y regulaciones locales vigentes.",
  },
  {
    numero: "03",
    titulo: "Entrega",
    descripcion:
      "Transferencia de activos, entrega de dossiers de calidad y soporte post-obra para garantizar la operatividad.",
  },
];

export default function ProcesoServicios() {
  return (
    <section className="w-full py-24 bg-[#141A25]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ENCABEZADO CENTRADO */}
        <div className="text-center mb-20">
          <h2 className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Nuestra Metodología
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm leading-relaxed">
            El rigor técnico define cada etapa de nuestra operación, desde el primer
            trazo hasta la entrega final.
          </p>
        </div>

        {/* GRID DE PASOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          
          {/* Línea conectora sutil (visible solo en desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col"
            >
              {/* Caja del número */}
              <div className="w-14 h-14 border border-[#C5A028] bg-[#141A25] flex items-center justify-center mb-6">
                <span className="text-[#C5A028] font-mono text-sm tracking-widest">
                  {paso.numero}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-[#C5A028] text-lg font-semibold mb-4">
                {paso.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-white/70 text-base leading-relaxed">
                {paso.descripcion}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
