"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroObrasCiviles() {
  return (
    <section className="relative w-full h-[60vh] pt-20 flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/servicios/servicio1.jpg')",
        }}
      />

      {/* Degradado lateral (izquierda → derecha) */}
      <div className="absolute inset-0 bg-linear-to-r from-[#081c32]/95 via-[#081c32]/80 to-transparent" />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pl-6 md:pl-20 max-w-2xl"
      >
        {/* MIGAS DE PAN */}
        <nav className="text-sm mb-6 text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/servicios" className="hover:text-white transition-colors">
            Servicios
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#C8DDF6] font-medium">Obras Civiles</span>
        </nav>

        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-4">
          Obras Civiles
        </h1>

        {/* Línea decorativa */}
        <div className="w-28 h-1.5 bg-[#5a8cc4] rounded-full" />
      </motion.div>
    </section>
  );
}
