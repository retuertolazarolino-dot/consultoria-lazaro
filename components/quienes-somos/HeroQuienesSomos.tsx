"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSobreMi() {
  return (
    <section className="relative w-full h-[55vh] min-h-[400px] flex items-end overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E35]/95 via-[#0B1E35]/80 to-[#0B1E35]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E35]/80 to-transparent" />

      {/* Línea izquierda dorada */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C5A028] to-[#C5A028]" />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-12"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/40 mb-5 font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-[#C5A028] transition-colors">
            Inicio
          </Link>
          <span className="text-white/20">—</span>
          <span className="text-[#C5A028]">Quiénes Somos</span>
        </nav>

        {/* Título */}
        <h1
          className="text-5xl md:text-7xl font-bold text-white leading-none mb-5"
          
        >
          Sobre Nosotros
        </h1>

        {/* Línea decorativa */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-[3px] bg-[#C5A028]" />
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
            Ingeniería · Gestión · Soporte Estratégico
          </span>
        </div>
      </motion.div>
    </section>
  );
}
