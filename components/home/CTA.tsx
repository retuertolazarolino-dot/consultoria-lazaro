"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="relative w-full py-28 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B1E35]/88" />

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C5A028] via-[#E8C84A]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center text-white"
      >
        {/* Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-[1px] bg-[#C5A028]/60" />
          <span className="text-[#C5A028] text-xs font-semibold tracking-[0.25em] uppercase">
            Empieza hoy
          </span>
          <div className="w-12 h-[1px] bg-[#C5A028]/60" />
        </div>

        {/* Título */}
        <h2
          className="text-3xl md:text-5xl font-bold mb-5 leading-tight"
          
        >
          ¿Listo para iniciar<br />tu próximo proyecto?
        </h2>

        {/* Subtítulo */}
        <p className="text-white/65 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          En{" "}
          <span className="text-[#C5A028] font-semibold">Consultoría Lázaro</span>,
          convertimos tus ideas en obras concretas, con precisión y compromiso.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/51999656111"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-4 bg-[#C5A028] text-[#0B1E35]
              text-sm font-bold tracking-[0.1em] uppercase
              hover:bg-[#E8C84A] transition-colors duration-200
              shadow-lg shadow-[#C5A028]/20
            "
          >
            <MessageCircle className="w-4 h-4" />
            Escríbenos por WhatsApp
          </a>

          <Link
            href="/contacto"
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-4 bg-transparent text-white
              text-sm font-semibold tracking-[0.1em] uppercase
              border border-white/30 hover:border-[#C5A028] hover:text-[#C5A028]
              transition-all duration-200
            "
          >
            <Mail className="w-4 h-4" />
            Contáctanos
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Info rápida */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 justify-center text-sm text-white/40">
          <span>Lun – Sáb: 8:00 am – 6:00 pm</span>
          <span className="text-white/20">|</span>
          <span>+51 999 656 111</span>
          <span className="text-white/20">|</span>
          <span>consultorialazaro@gmail.com</span>
        </div>
      </motion.div>
    </section>
  );
}
