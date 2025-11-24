"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const servicios = [
  {
    titulo: "Obras Civiles",
    descripcion:
      "Ejecución y supervisión de obras con estándares técnicos y de calidad.",
    imagen: "/servicios/servicio1.jpg",
    url: "/servicios/obras-civiles",
  },
  {
    titulo: "Topografía y Levantamientos",
    descripcion:
      "Levantamientos precisos, parcelaciones, planos y mediciones especializadas.",
    imagen: "/servicios/servicio1.jpg",
    url: "/servicios/levantamientos-topograficos",
  },
  {
    titulo: "Tasaciones y Valorizaciones",
    descripcion:
      "Determinación técnica del valor real de bienes inmuebles, terrenos y edificaciones.",
    imagen: "/servicios/servicio1.jpg",
    url: "/servicios/tasaciones-valorizaciones",
  },
  {
    titulo: "Saneamiento Legal",
    descripcion:
      "Declaratoria de fábrica, habilitaciones urbanas y regularización de propiedades.",
    imagen: "/servicios/servicio1.jpg",
    url: "/servicios/saneamiento-legal",
  },
  {
    titulo: "Habilitaciones Urbanas",
    descripcion:
      "Tramitación y ejecución de habilitaciones urbanas para el desarrollo de proyectos.",
    imagen: "/servicios/servicio1.jpg",
    url: "/servicios/habilitaciones-urbanas",
  },
  {
    titulo: "Planos Perimétricos",
    descripcion:
      "Elaboración de planos detallados y georreferenciados para proyectos civiles y legales.",
    imagen: "/servicios/servicio1.jpg",
    url: "/servicios/planos-perimetricos",
  },
];

export default function ListaServicios() {
  return (
    <section className="w-full py-15 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* ---------------- TÍTULO GENERAL ---------------- */}
        <div className="text-center mb-14">
          <span className="bg-[#5a8cc4]/20 text-[#081c32] font-semibold px-4 py-2 rounded-md mb-4 inline-block">
            Nuestros servicios
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c32] mb-3">
            Encuentra el servicio ideal para tu proyecto
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            En <span className="font-semibold text-[#348caf]">Consultoría Lázaro</span> brindamos soluciones técnicas y legales que garantizan la correcta ejecución de tu obra, con precisión, cumplimiento y calidad profesional.
          </p>
        </div>

        {/* ---------------- GRID DE SERVICIOS ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((serv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-xl group h-[380px]"
            >
              {/* IMAGEN */}
              <img
                src={serv.imagen}
                alt={serv.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* TÍTULO GLASS (visible sin hover) */}
              <div
                className="
                  absolute bottom-4 left-4 px-4 py-2 rounded-lg
                  bg-[#081c32]/70 backdrop-blur-md shadow-md 
                  text-white font-bold text-lg transition-all
                  group-hover:opacity-0
                "
              >
                {serv.titulo}
              </div>

              {/* OVERLAY SLIDE-UP */}
              <div
                className="
                  absolute inset-0 bg-[#081c32]/95 flex flex-col justify-center items-center text-center px-6
                  transform translate-y-full group-hover:translate-y-0
                  opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
                "
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {serv.titulo}
                </h3>

                <p className="text-gray-200 text-sm mb-6">
                  {serv.descripcion}
                </p>

                <Link
                  href={serv.url}
                  className="
                    px-6 py-2 bg-[#5a8cc4] text-white rounded-full font-semibold 
                    hover:bg-[#73a8e5] transition-all
                  "
                >
                  Ver servicio
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
