"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const servicios = [
  {
    ref: "REF: OBR-01",
    titulo: "Obras Civiles",
    descripcion:
      "Ejecución, supervisión y gerencia de proyectos de construcción con estrictos estándares de calidad y normativas vigentes.",
    caracteristicas: ["Gestión integral de proyectos", "Supervisión técnica de obras"],
    imagen: "/images/servicio_obras_civiles.png",
    url: "/servicios/obras-civiles",
  },
  {
    ref: "REF: TOPO-02",
    titulo: "Topografía y Levantamientos",
    descripcion:
      "Levantamientos topográficos de alta precisión para parcelaciones, lotizaciones y diseño geométrico de vías.",
    caracteristicas: ["Levantamientos altimétricos", "Planos perimétricos georreferenciados"],
    imagen: "/images/servicio_topografia.png",
    url: "/servicios/levantamientos-topograficos",
  },
  {
    ref: "REF: VAL-03",
    titulo: "Tasaciones y Valorizaciones",
    descripcion:
      "Determinación técnica del valor económico real de bienes inmuebles, terrenos y maquinarias con fines comerciales y financieros.",
    caracteristicas: ["Tasaciones comerciales", "Valorizaciones de maquinaria"],
    imagen: "/images/servicio_tasaciones.png", // Replace with correct image if available
    url: "/servicios/tasaciones-valorizaciones",
  },
  {
    ref: "REF: SAN-04",
    titulo: "Saneamiento Legal y Predial",
    descripcion:
      "Regularización técnica y jurídica de propiedades urbanas y rurales para garantizar la seguridad de su inversión inmobiliaria.",
    caracteristicas: ["Declaratoria de fábrica", "Habilitaciones urbanas"],
    imagen: "/images/servicio_saneamiento.png",
    url: "/servicios/saneamiento-legal",
  },
];

export default function ServiciosDestacados() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl text-[#0B1E35] font-light">
            Servicios Destacados
          </h2>
          <div className="w-16 h-[3px] bg-[#0B1E35] mt-2" />
        </div>

        {/* LISTA DE SERVICIOS */}
        <div className="flex flex-col gap-16">
          {servicios.map((serv, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
              >
                {/* BLOQUE DE IMAGEN */}
                <div className="w-full md:w-1/2">
                  <div className="p-2 border border-[#E5E7EB] rounded-sm bg-white shadow-sm relative">
                    {/* Etiqueta REF */}
                    <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 border border-[#E5E7EB] shadow-sm">
                      <span className="text-xs font-bold text-[#0B1E35] tracking-widest uppercase">
                        {serv.ref}
                      </span>
                    </div>

                    <div className="relative overflow-hidden bg-gray-100 aspect-video">
                      <Image
                        src={serv.imagen}
                        alt={serv.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* BLOQUE DE TEXTO */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl text-[#0B1E35] font-medium mb-4">
                    {serv.titulo}
                  </h3>
                  
                  <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
                    {serv.descripcion}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {serv.caracteristicas.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#0B1E35]">
                        <CheckCircle2 className="w-4 h-4 text-[#0B1E35]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={serv.url}
                    className="
                      inline-flex items-center gap-2
                      text-[#0B1E35] text-sm font-medium
                      hover:text-[#C5A028] transition-colors
                      group w-fit
                    "
                  >
                    Detalles del servicio
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
