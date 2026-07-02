"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceHeroProps {
  titulo: string;
  subtitulo: string;
  imagen: string;
}

export default function ServiceHero({ titulo, subtitulo, imagen }: ServiceHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] pt-20 flex items-center overflow-hidden">
      {/* Imagen de fondo dinámica */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imagen}')`,
        }}
      />

      {/* Degradado lateral para dar legibilidad al texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E35]/95 via-[#0B1E35]/80 to-transparent" />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pl-6 md:pl-20 max-w-3xl"
      >
        {/* MIGAS DE PAN */}
        <nav className="text-xs font-bold tracking-widest uppercase mb-6 text-white/50">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <span className="mx-3 text-white/30">/</span>
          <Link href="/servicios" className="hover:text-white transition-colors">
            Servicios
          </Link>
          <span className="mx-3 text-white/30">/</span>
          <span className="text-[#C5A028]">{titulo}</span>
        </nav>

        {/* Título principal dinámico */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {titulo}
        </h1>

        {/* Subtítulo dinámico */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8 border-l-2 border-[#C5A028] pl-5">
          {subtitulo}
        </p>
      </motion.div>
    </section>
  );
}
