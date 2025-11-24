"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Award, UserCheck, ShieldCheck } from "lucide-react";

const valores = [
  {
    icono: Wrench,
    titulo: "Precisión Técnica",
    descripcion:
      "Uso de metodologías avanzadas y equipos modernos para resultados exactos en cada proyecto.",
  },
  {
    icono: Award,
    titulo: "Experiencia Comprobada",
    descripcion:
      "Más de una década desarrollando servicios de ingeniería civil, topografía y saneamiento legal.",
  },
  {
    icono: UserCheck,
    titulo: "Atención Personalizada",
    descripcion:
      "Cada proyecto recibe acompañamiento directo y soluciones adaptadas a su necesidad.",
  },
  {
    icono: ShieldCheck,
    titulo: "Resultados Confiables",
    descripcion:
      "Procesos claros y soluciones que cumplen los más altos estándares técnicos y legales.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* ---------- GRID SUPERIOR (Texto + 1er Card) ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Bloque de texto con fondo oscuro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col justify-center gap-3 bg-[#081c32] rounded-2xl shadow-md p-8 md:p-7 border border-[#0e2744] h-full"
          >
            <div className="inline-block bg-[#5a8cc4]/30 text-white font-semibold px-4 py-2 rounded-md w-max">
              ¿Por qué elegirnos?
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
              Excelencia y confianza en cada obra.
            </h2>

            <p className="text-gray-300 max-w-2xl">
              En Consultoría Lázaro ofrecemos soluciones técnicas y legales 
              que garantizan seguridad, precisión y resultados duraderos.
            </p>

            <Link
              href="/quienes-somos"
              className="mt-3 w-max px-6 py-3 bg-[#5a8cc4] hover:bg-[#73a8e5] text-white font-semibold 
              rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Conócenos más
            </Link>
          </motion.div>

          {/* Primer Card (igual que los inferiores, pero ahora mismo alto) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start gap-4 
            hover:border-[#5a8cc4] hover:shadow-lg transition-all h-full"
          >
            <Wrench className="w-14 h-14 text-[#5a8cc4]" />
            <h3 className="text-lg font-semibold text-[#081c32]">
              {valores[0].titulo}
            </h3>
            <p className="text-gray-600 text-sm">{valores[0].descripcion}</p>
          </motion.div>
        </div>

        {/* ---------- FILA INFERIOR CON LOS 3 CARDS RESTANTES ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {valores.slice(1).map((item, index) => {
            const Icono = item.icono;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start gap-4 
                hover:border-[#5a8cc4] hover:shadow-lg transition-all h-[270px]"
              >
                <Icono className="w-14 h-14 text-[#5a8cc4]" />
                <h3 className="text-lg font-semibold text-[#081c32]">{item.titulo}</h3>
                <p className="text-gray-600 text-sm">{item.descripcion}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
