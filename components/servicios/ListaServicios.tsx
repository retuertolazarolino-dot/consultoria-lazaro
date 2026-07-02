"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, Hammer, FileText, Mountain, Map, SearchCheck, CheckCircle2 } from "lucide-react";

const servicios = [
  {
    icono: Compass,
    titulo: "INGENIERÍA ESTRUCTURAL",
    descripcion:
      "Diseño y análisis de sistemas estructurales optimizados para proyectos comerciales e industriales.",
    lista: ["Cálculo de estructuras metálicas", "Memoria descriptiva técnica"],
    url: "/servicios/obras-civiles",
  },
  {
    icono: Mountain,
    titulo: "TOPOGRAFÍA DE PRECISIÓN",
    descripcion:
      "Levantamientos geodésicos y fotogrametría aérea con tecnología LIDAR y estaciones totales.",
    lista: ["Modelado 3D de terrenos", "Planos de georreferenciación"],
    url: "/servicios/levantamientos-topograficos",
  },
  {
    icono: Hammer,
    titulo: "SANEAMIENTO LEGAL",
    descripcion:
      "Regularización técnica y legal de predios industriales y urbanos para garantizar la propiedad.",
    lista: ["Diagnóstico de antecedentes", "Inscripción en registros"],
    url: "/servicios/saneamiento-legal",
  },
  {
    icono: FileText,
    titulo: "GERENCIA DE PROYECTOS",
    descripcion:
      "Gestión integral bajo estándares PMI para el control de tiempos, costos y calidad en obra.",
    lista: ["Cronogramas maestros (Gantt)", "Informes de gestión de costos"],
    url: "/servicios/gerencia",
  },
  {
    icono: Map,
    titulo: "GEOTECNIA",
    descripcion:
      "Estudios de suelos y mecánica de rocas para determinar la viabilidad de cimentaciones.",
    lista: ["Perfiles estratigráficos", "Capacidad portante del suelo"],
    url: "/servicios/geotecnia",
  },
  {
    icono: SearchCheck,
    titulo: "SUPERVISIÓN DE OBRA",
    descripcion:
      "Control exhaustivo en campo para asegurar el cumplimiento fiel de los expedientes técnicos.",
    lista: ["Dossier de calidad final", "Certificados de conformidad"],
    url: "/servicios/supervision",
  },
];

export default function ListaServicios() {
  return (
    <section className="w-full py-24 relative bg-white">
      {/* Patrón de puntos de fondo */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#0B1E35 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#0B1E35] uppercase">
            Soluciones de Ingeniería
          </h2>
          <div className="w-16 h-[3px] bg-[#C5A028] mt-3" />
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((serv, index) => {
            const Icono = serv.icono;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#E5E7EB] p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Ícono superior */}
                <div className="mb-6">
                  <Icono strokeWidth={1.5} className="w-7 h-7 text-[#0B1E35]" />
                </div>

                {/* Título */}
                <h3 className="text-[#8793A1] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  {serv.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-[#4B5563] text-base leading-relaxed mb-6 flex-grow">
                  {serv.descripcion}
                </p>

                {/* Lista */}
                <ul className="space-y-3 mb-8">
                  {serv.lista.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 strokeWidth={1.5} className="w-5 h-5 text-[#0B1E35] mt-[2px] flex-shrink-0" />
                      <span className="text-sm md:text-base text-[#6B7280]">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <Link
                  href={serv.url}
                  className="
                    w-full py-4 text-center border border-[#D1D9E0]
                    text-[#0B1E35] text-xs md:text-sm font-bold tracking-widest uppercase
                    hover:border-[#0B1E35] hover:bg-[#0B1E35] hover:text-white
                    transition-all duration-300
                  "
                >
                  Saber Más
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
