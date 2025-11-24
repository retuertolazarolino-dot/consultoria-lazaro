"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const servicios = [
  {
    tipo: "especial",
    titulo: "Servicios Destacados",
    descripcion:
      "Explore nuestras principales áreas de servicio en ingeniería civil, topografía y saneamiento legal.",
    url: "/servicios",
  },

  {
    tipo: "imagen",
    titulo: "Obras Civiles",
    descripcion:
      "Ejecución y supervisión de obras con estándares técnicos y de calidad.",
    imagen: "/home/servicio1.jpg",
    url: "/servicios/obras-civiles",
  },
  {
    tipo: "imagen",
    titulo: "Topografía",
    descripcion:
      "Levantamientos precisos, parcelaciones, planos y mediciones especializadas.",
    imagen: "/home/servicio3.png",
    url: "/servicios/levantamientos-topograficos",
  },
  {
    tipo: "imagen",
    titulo: "Saneamiento Legal",
    descripcion:
      "Declaratoria de fábrica, habilitaciones urbanas y trámites legales.",
    imagen: "/home/servicio2.png",
    url: "/servicios/saneamiento-legal",
  },
];

export default function ServiciosDestacados() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------- TÍTULO GENERAL ---------------- */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c32] mb-3">
            Servicios Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nuestras áreas principales de trabajo y cómo podemos ayudarle
            a ejecutar su proyecto de manera profesional.
          </p>
        </div>

        {/* ---------------- GRID DE 4 CARDS ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {servicios.map((serv, index) => {

            /* ---------- CARD ESPECIAL SIN IMAGEN ---------- */
            if (serv.tipo === "especial") {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="
                    bg-[#081c32] text-white p-7 rounded-xl shadow-xl
                    flex flex-col justify-center items-center text-center 
                    h-96
                  "
                >
                  <h3 className="text-2xl font-bold mb-4">{serv.titulo}</h3>

                  <p className="text-sm text-gray-200 mb-8 px-3">
                    {serv.descripcion}
                  </p>

                  <Link
                    href={serv.url}
                    className="
                      px-6 py-2 bg-[#5a8cc4] rounded-full font-semibold
                      hover:bg-[#73a8e5] transition-all
                    "
                  >
                    Ver servicio
                  </Link>
                </motion.div>
              );
            }

            /* ---------- CARDS CON IMAGEN Y GLASS ---------- */
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden shadow-xl group h-96"
              >
                {/* IMAGEN */}
                <img
                  src={serv.imagen}
                  alt={serv.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* TITULO GLASS (SIN HOVER) */}
                <div
                  className="
                    absolute bottom-4 left-4 px-4 py-2 rounded-lg
                    bg-white/20 backdrop-blur-md shadow-md 
                    text-white font-bold text-lg transition-all
                    group-hover:opacity-0
                  "
                >
                  {serv.titulo}
                </div>

                {/* OVERLAY HOVER */}
                <div
                  className="
                    absolute inset-0 bg-[#081c32]/80 opacity-0 
                    group-hover:opacity-100 transition-all duration-300
                    flex flex-col justify-center items-center text-center px-6
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
            );
          })}

        </div>
      </div>
    </section>
  );
}
