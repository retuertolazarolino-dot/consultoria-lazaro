"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const textVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.58, 1] },
  },
};

export default function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Ingeniería Civil",
        "Gestión Técnica",
        "Saneamiento Legal",
        "Topografía",
      ],
      typeSpeed: 65,
      backSpeed: 35,
      backDelay: 1200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const socialIcons = [
    { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
    { icon: <Phone size={16} />, href: "tel:+51999566111", label: "Teléfono" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Fondo imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero_ingenieria.png')",
        }}
      />

      {/* Overlay degradado — izquierda oscura, derecha más transparente */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E35]/95 via-[#0B1E35]/80 to-[#0B1E35]/50" />

      {/* Línea dorada lateral izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C5A028] to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 py-28 w-full">

        {/* Columna principal */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-white flex flex-col justify-center max-w-2xl"
        >
          {/* Badge superior */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-[#C5A028]" />
            <span className="text-[#C5A028] text-xs font-semibold tracking-[0.25em] uppercase">
              Consultoría Lázaro — Perú
            </span>
          </div>

          {/* TÍTULO */}
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            
          >
            Ingeniería, Gestión<br />
            y Soluciones Técnicas
          </h1>

          {/* ANIMACIÓN TYPED */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[3px] h-8 bg-[#C5A028]" />
            <h2 className="text-xl md:text-2xl font-medium text-white/80">
              Especialistas en{" "}
              <span ref={typedEl} className="text-[#C5A028] font-semibold" />
            </h2>
          </div>

          {/* DESCRIPCIÓN */}
          <p className="text-white/65 text-base font-light max-w-xl leading-relaxed mb-10 border-l border-white/20 pl-4">
            Transformamos tus proyectos en realidad con respaldo técnico,
            legal y años de experiencia en campo.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="
                px-8 py-3 bg-[#C5A028] text-[#0B1E35]
                text-sm font-bold tracking-[0.08em] uppercase
                hover:bg-[#E8C84A] transition-colors duration-200
                shadow-lg shadow-[#C5A028]/20
              "
            >
              Consultar Ahora
            </Link>

            <Link
              href="/servicios"
              className="
                px-8 py-3 bg-transparent text-white
                text-sm font-semibold tracking-[0.08em] uppercase
                border border-white/30 hover:border-[#C5A028] hover:text-[#C5A028]
                transition-colors duration-200
              "
            >
              Ver Servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 pt-8 border-t border-white/10">
            {[
              { num: "10+", label: "Años de experiencia" },
              { num: "200+", label: "Proyectos ejecutados" },
              { num: "100%", label: "Compromiso técnico" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold text-[#C5A028]" >
                  {s.num}
                </span>
                <span className="text-white/50 text-xs tracking-wide mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Íconos sociales — columna derecha */}
        <div className="hidden md:flex flex-col items-center justify-center gap-3">
          <div className="w-[1px] h-20 bg-white/20" />
          {socialIcons.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              aria-label={item.label}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                w-9 h-9 flex items-center justify-center
                border border-white/20 text-white/50
                hover:border-[#C5A028] hover:text-[#C5A028]
                transition-all duration-200
              "
            >
              {item.icon}
            </motion.a>
          ))}
          <div className="w-[1px] h-20 bg-white/20" />
        </div>

      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

    </section>
  );
}
