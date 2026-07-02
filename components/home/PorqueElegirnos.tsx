"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, User, BarChart } from "lucide-react";

const valores = [
  {
    icono: Compass,
    titulo: "Precisión Técnica",
    descripcion:
      "Metodologías avanzadas y equipos modernos para resultados exactos en cada fase del proyecto.",
  },
  {
    icono: ShieldCheck,
    titulo: "Experiencia",
    descripcion:
      "Más de una década desarrollando servicios de ingeniería civil y soporte estratégico.",
  },
  {
    icono: User,
    titulo: "Personalizada",
    descripcion:
      "Acompañamiento directo y soluciones adaptadas a la complejidad de cada necesidad.",
  },
  {
    icono: BarChart,
    titulo: "Resultados",
    descripcion:
      "Procesos claros y soluciones que cumplen los más altos estándares técnicos y legales.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* COLUMNA IZQUIERDA: BLOQUE OSCURO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#0B1E35] text-white p-10 md:p-14 flex flex-col justify-center h-full"
          >
            <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-6">
              ¿Por qué elegirnos?
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Excelencia y confianza en cada obra.
            </h2>

            <p className="text-white/80 text-sm leading-relaxed mb-12">
              En Consultoría Lázaro ofrecemos soluciones técnicas y legales que garantizan seguridad, precisión y resultados duraderos.
            </p>

            <Link
              href="/quienes-somos"
              className="
                inline-flex items-center justify-center gap-3
                px-6 py-3 border border-white/40 text-white
                text-xs font-bold tracking-widest uppercase
                hover:bg-white hover:text-[#0B1E35] transition-all duration-300
                w-fit
              "
            >
              Conócenos más
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* COLUMNA DERECHA: GRID DE TARJETAS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {valores.map((item, index) => {
              const Icono = item.icono;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-[#E2E8F0] p-8 md:p-10 flex flex-col"
                >
                  {/* Ícono delgado */}
                  <div className="mb-6 text-[#0B1E35]">
                    <Icono strokeWidth={1.5} className="w-6 h-6" />
                  </div>

                  <h3 className="text-[#0B1E35] font-semibold text-base mb-3">
                    {item.titulo}
                  </h3>

                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.descripcion}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
