"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Star } from "lucide-react";

export default function Valores() {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* --------------------- COLUMNA IZQUIERDA --------------------- */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">

          {/* Imagen de fondo */}
          <img
            src="https://i.pinimg.com/736x/ff/ff/c6/ffffc638e1175786e406a084fd3e271a.jpg"
            alt="Profesional de Ingeniería"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />

          {/* Bloque de texto sobre la imagen */}
          <div
            className="
              absolute top-6 left-6 right-6
              bg-[#081c32]/80 backdrop-blur-md
              p-8 rounded-xl shadow-lg
              text-white
            "
          >
            <h2 className="text-3xl font-extrabold leading-snug">
              Proyectos desarrollados por especialistas con experiencia real.
            </h2>

            <p className="text-gray-200 mt-3 text-base leading-relaxed">
              Garantizamos precisión técnica y calidad en cada etapa, 
              respaldados por un equipo de profesionales altamente capacitados 
              y comprometidos con resultados sobresalientes.
            </p>

            <a
              href="https://wa.me/51999656111"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-5 px-6 py-3
                bg-[#5a8cc4] hover:bg-[#73a8e5]
                text-white font-semibold rounded-full
                shadow-md transition-all
              "
            >
              Solicitar información
            </a>
          </div>

          {/* Contenedor horizontal para las 3 imágenes */}
<div className="absolute bottom-6 left-6 right-6 flex justify-between gap-4">

  {/* Imagen 1 */}
  <div className="w-[170px] h-[220px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
    <img
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      alt="Profesional"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Imagen 2 */}
  <div className="w-[170px] h-[220px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
    <img
      src="https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg"
      alt="Equipo técnico"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Imagen 3 */}
  <div className="w-[170px] h-[220px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
    <img
      src="https://images.pexels.com/photos/7148443/pexels-photo-7148443.jpeg"
      alt="Ingeniería"
      className="w-full h-full object-cover"
    />
  </div>

</div>

        </div>

        {/* --------------------- COLUMNA DERECHA --------------------- */}
        <div className="flex flex-col gap-8">

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#5a8cc4] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-[#5a8cc4]" />
              <h3 className="text-2xl font-bold text-[#081c32]">Misión</h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
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
            className="bg-white shadow-md border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#5a8cc4] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-[#5a8cc4]" />
              <h3 className="text-2xl font-bold text-[#081c32]">Visión</h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
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
            className="bg-white shadow-md border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#5a8cc4] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-[#5a8cc4]" />
              <h3 className="text-2xl font-bold text-[#081c32]">Valores</h3>
            </div>

            <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-1">
              <li>Responsabilidad profesional</li>
              <li>Transparencia y ética</li>
              <li>Compromiso con la calidad</li>
              <li>Atención personalizada</li>
              <li>Innovación y mejora continua</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
