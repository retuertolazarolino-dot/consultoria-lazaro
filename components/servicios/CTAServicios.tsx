"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

export default function CTAServicios() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/servicios/cta.jpg')",
        }}
      />

      {/* Overlay azul oscuro */}
      <div className="absolute inset-0 bg-[#081c32]/65" />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex justify-center items-center"
      >
        {/* 🔹 Se agregó mx-4 para móviles y mx-0 desde md */}
        <div className="max-w-5xl text-center text-white px-6 py-10 bg-[#081c32]/70 backdrop-blur-md rounded-2xl shadow-2xl border border-[#5a8cc4]/40 mx-4 md:mx-0">
          {/* Título principal */}
          <h2 className="text-2xl md:text-4xl font-extrabold mb-5 leading-tight text-white">
            ¿Necesitas apoyo técnico o legal en tu próximo proyecto?
          </h2>

          {/* Subtítulo */}
          <p className="text-[#C8DDF6] text-base md:text-lg mb-8 max-w-3xl mx-auto">
            Nuestro equipo especializado en{" "}
            <span className="text-[#5a8cc4] font-semibold">
              ingeniería civil, topografía y saneamiento legal
            </span>{" "}
            está listo para brindarte soluciones precisas, seguras y confiables.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/51999656111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#5a8cc4] hover:bg-[#73a8e5] text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar asesoría
            </a>

            <Link
              href="/contacto"
              className="flex items-center justify-center gap-2 bg-white text-[#081c32] font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-[#C8DDF6]/90 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contáctanos ahora
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
