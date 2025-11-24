"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    pregunta: "¿Qué servicios ofrece Consultoría Lázaro?",
    respuesta:
      "Ofrecemos soluciones en ingeniería civil, topografía, saneamiento legal y gestión de proyectos. Nuestro objetivo es garantizar precisión técnica y eficiencia en cada entrega.",
  },
  {
    pregunta: "¿Trabajan con entidades públicas y privadas?",
    respuesta:
      "Sí. Contamos con experiencia en proyectos tanto del sector público como privado, adaptándonos a los requerimientos técnicos y normativos de cada uno.",
  },
  {
    pregunta: "¿En qué zonas brindan servicio?",
    respuesta:
      "Prestamos servicios en todo el territorio nacional, con énfasis en las regiones del norte y centro del país. También podemos coordinar trabajos en otras ubicaciones bajo solicitud.",
  },
  {
    pregunta: "¿Qué plazos manejan para los proyectos?",
    respuesta:
      "Los plazos dependen de la magnitud y complejidad del proyecto. No obstante, garantizamos planificación técnica precisa y cumplimiento de cronogramas.",
  },
  {
    pregunta: "¿Cómo puedo solicitar una cotización?",
    respuesta:
      "Puede hacerlo a través de nuestro formulario de contacto o comunicándose directamente con nuestro equipo. Le responderemos a la brevedad con una propuesta personalizada.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[#e8f0fa]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* ---------- COLUMNA IZQUIERDA (FAQ) ---------- */}
        <div>
          {/* ---------- TÍTULO ---------- */}
          <div className="text-left mb-10">
            <span className="bg-[#5a8cc4]/20 text-[#081c32] font-semibold px-4 py-2 rounded-md">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c32] mt-4 mb-3">
              Resolvemos tus dudas más comunes
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Conoce más sobre nuestros procesos, cobertura y metodología de trabajo.
            </p>
          </div>

          {/* ---------- LISTA DE PREGUNTAS ---------- */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-[#081c32] font-semibold text-lg hover:bg-[#5a8cc4]/5 transition-all cursor-pointer"
                >
                  {faq.pregunta}
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#5a8cc4]" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-5 text-gray-600 text-sm md:text-base bg-white"
                    >
                      {faq.respuesta}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- COLUMNA DERECHA (IMAGEN CON EFECTO GRIS A COLOR) ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center group"
        >
          <img
            src="/home/servicio3.png"
            alt="Consultoría Lázaro - Atención al cliente"
            className="
              w-full h-[500px] object-cover rounded-[25px] shadow-xl
              filter grayscale group-hover:grayscale-0 
              transition-all duration-700 ease-in-out
            "
          />

          {/* Overlay degradado tenue */}
          <div className="
            absolute inset-0 bg-linear-to-t from-[#081c32]/40 to-transparent 
            rounded-[25px] opacity-0 group-hover:opacity-100 
            transition-opacity duration-500
          " />
        </motion.div>
      </div>
    </section>
  );
}
