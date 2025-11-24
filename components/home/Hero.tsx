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
    transition: { duration: 0.6, ease: [0, 0, 0.58, 1] },
  },
};

export default function Home() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Ingeniería",
        "Gestión Técnica",
        "Soluciones Profesionales",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const socialIcons = [
    { icon: <Facebook size={22} />, href: "#" },
    { icon: <Instagram size={22} />, href: "#" },
    { icon: <Linkedin size={22} />, href: "#" },
    { icon: <Phone size={22} />, href: "tel:+51999566111" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-10">

      {/* Fondo imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.gvalentinus.com/assets/images/edificaciones-construccion-grupo-valentinus.jpg')",
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 py-20">

        {/* Columna izquierda */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-white flex flex-col justify-center md:col-span-2"
        >
          {/* LABEL SUPERIOR */}
          <span className="bg-[#5a8cc4]/30 text-white font-medium px-4 py-2 rounded-md w-fit mb-4">
            Consultoría Lázaro
          </span>

          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Ingeniería, Gestión y Soluciones Técnicas
          </h1>

          {/* ANIMACIÓN TYPED */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Servicios en <span ref={typedEl} className="text-[#73a8e5]" />
          </h2>

          {/* DESCRIPCIÓN — MÁS PEQUEÑO Y DELGADO */}
          <p className="text-gray-300 text-sm md:text-base font-light max-w-xl leading-relaxed mb-8">
            Transformamos tus proyectos en realidad con respaldo técnico, legal y años de experiencia en campo.
          </p>

          {/* BOTÓN */}
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center h-12 px-8 bg-[#5a8cc4] hover:bg-[#73a8e5] transition-all text-white font-semibold rounded-full text-base w-max shadow-xl transform hover:scale-[1.03]"
          >
            Consultar Ahora
          </Link>
        </motion.div>

        {/* Columna derecha */}
        <div className="flex flex-col items-end justify-center gap-10 text-white">
          <div className="h-16 w-0.5 bg-white/70 rounded-full mr-[22px]" />

          <div className="flex flex-col items-center gap-6">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-12 h-12 flex items-center justify-center rounded-full
                  bg-white/10 backdrop-blur-md
                  border border-white/20 shadow-lg
                  hover:bg-white/20 hover:border-white/30
                  transition-all cursor-pointer"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <div className="h-16 w-0.5 bg-white/80 rounded-full mr-[22px]" />
        </div>

      </div>
    </section>
  );
}
