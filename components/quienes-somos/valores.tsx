"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Star, ArrowRight } from "lucide-react";

export default function Valores() {
  return (
    <section className="w-full py-20 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

        {/* --------------------- COLUMNA IZQUIERDA --------------------- */}
        <div className="relative w-full h-full min-h-[500px]">

          {/* Contenedor principal de imagen grande */}
          <div className="absolute inset-0 border border-[#D1D9E0] bg-white p-3 shadow-sm z-10">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f35aa27?q=80&w=2070&auto=format&fit=crop"
                alt="Profesional de Ingeniería"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter brightness-[0.65]"
              />
              
              {/* Bloque de texto sobre la imagen */}
              <div className="absolute top-10 left-10 right-10 z-20">
                <div className="w-10 h-[2px] bg-[#C5A028] mb-6" />
                <h2
                  className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
                  
                >
                  Proyectos desarrollados por especialistas con experiencia real.
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-md border-l border-[#C5A028] pl-4">
                  Garantizamos precisión técnica y calidad en cada etapa,
                  respaldados por un equipo de profesionales altamente capacitados
                  y comprometidos con resultados sobresalientes.
                </p>
                <a
                  href="https://wa.me/51999656111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 bg-[#C5A028] text-[#0B1E35]
                    text-xs font-bold tracking-[0.1em] uppercase
                    hover:bg-[#E8C84A] transition-colors duration-200
                  "
                >
                  Solicitar información
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Marco decorativo dorado */}
          <div className="absolute -bottom-6 -left-6 w-[80%] h-[80%] border-2 border-[#C5A028] z-0" />

          {/* Cuadro decorativo azul */}
          <div className="absolute -top-6 -right-6 w-[40%] h-[40%] bg-[#0B1E35] z-0" />

        </div>

        {/* --------------------- COLUMNA DERECHA --------------------- */}
        <div className="flex flex-col gap-0 border border-[#D1D9E0] bg-white">

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 border-b border-[#D1D9E0] group hover:bg-[#0B1E35] transition-colors duration-300"
          >
            <div className="flex items-center gap-5 mb-5">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C5A028]/10 group-hover:bg-[#C5A028]/20 transition-colors">
                <Target className="w-6 h-6 text-[#C5A028]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1E35] group-hover:text-white transition-colors" >
                Misión
              </h3>
            </div>
            <p className="text-[#6B7280] group-hover:text-white/70 leading-relaxed text-sm transition-colors">
              Brindar soluciones técnicas y legales en ingeniería civil con
              precisión, integridad y un enfoque profesional que garantice
              resultados confiables y sostenibles para cada cliente.
            </p>
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-10 border-b border-[#D1D9E0] group hover:bg-[#0B1E35] transition-colors duration-300"
          >
            <div className="flex items-center gap-5 mb-5">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C5A028]/10 group-hover:bg-[#C5A028]/20 transition-colors">
                <Eye className="w-6 h-6 text-[#C5A028]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1E35] group-hover:text-white transition-colors" >
                Visión
              </h3>
            </div>
            <p className="text-[#6B7280] group-hover:text-white/70 leading-relaxed text-sm transition-colors">
              Ser una consultora líder en ingeniería civil y saneamiento legal,
              reconocida por su excelencia, compromiso y aporte al desarrollo
              urbano y territorial del país.
            </p>
          </motion.div>

          {/* VALORES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 group hover:bg-[#0B1E35] transition-colors duration-300"
          >
            <div className="flex items-center gap-5 mb-5">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C5A028]/10 group-hover:bg-[#C5A028]/20 transition-colors">
                <Star className="w-6 h-6 text-[#C5A028]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1E35] group-hover:text-white transition-colors" >
                Valores
              </h3>
            </div>
            <ul className="text-[#6B7280] group-hover:text-white/70 leading-relaxed list-none space-y-2 text-sm transition-colors">
              {[
                "Responsabilidad profesional",
                "Transparencia y ética",
                "Compromiso con la calidad",
                "Atención personalizada",
                "Innovación y mejora continua"
              ].map((valor, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#C5A028]" />
                  {valor}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
