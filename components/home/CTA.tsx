"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="relative w-full py-24 md:py-15 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://blog.ucsp.edu.pe/hubfs/Qu%C3%A9%20es%20la%20ingenier%C3%ADa%20civil.jpg')", // 🔹 Reemplázala con tu imagen real
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[#081c32]/80" />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex justify-center items-center"
      >
        <div className="max-w-5xl text-center text-white px-6 py-10 bg-[#081c32]/70 backdrop-blur-md rounded-2xl shadow-xl">
          {/* Título principal */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            ¿Listo para iniciar tu próximo proyecto?
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-200 text-lg mb-10">
            En <span className="text-[#C8DDF6] font-semibold">Consultoría Lázaro</span>, 
            convertimos tus ideas en obras concretas, con precisión y compromiso.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/51999656111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#5a8cc4] hover:bg-[#73a8e5] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </a>

            <Link
              href="/contacto"
              className="flex items-center justify-center gap-2 bg-white text-[#081c32] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contáctanos
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
