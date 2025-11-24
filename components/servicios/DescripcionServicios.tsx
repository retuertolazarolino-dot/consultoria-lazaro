"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DescripcionServicios() {
  return (
    <section className="w-full py-15 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* --------- COLUMNA IZQUIERDA: TITULO + SUBTITULO --------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <span className="bg-[#5a8cc4]/20 text-[#081c32] font-semibold px-4 py-2 rounded-md w-max">
            Conoce nuestros servicios
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c32] leading-tight">
            Soluciones técnicas y legales para tu proyecto de ingeniería civil.
          </h2>
        </motion.div>

        {/* --------- COLUMNA DERECHA: TARJETA GIRATORIA --------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-[350px] h-[300px] perspective-[1000px] group">
            {/* Cara frontal */}
            <div
              className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 
              transform-3d [transition:transform_0.8s] group-hover:transform-[rotateY(180deg)]"
            >
              <Image
                src="/home/image.png"
                alt="Servicios Consultoría Lázaro"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Cara trasera */}
            <div
              className="absolute inset-0 bg-[#081c32] text-white flex items-center justify-center p-6 
              rounded-2xl shadow-xl transform-[rotateY(180deg)] backface-hidden
              [transition:transform_0.8s] group-hover:transform-[rotateY(360deg)]"
            >
              <p className="text-lg leading-relaxed text-center">
                En <span className="font-semibold text-[#5a8cc4]">Consultoría Lázaro</span> brindamos servicios en obras civiles, 
                topografía y gestión legal de predios, combinando precisión técnica y compromiso profesional 
                para garantizar resultados óptimos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}