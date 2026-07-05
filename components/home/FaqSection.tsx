"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    <section className="w-full py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* COLUMNA IZQUIERDA — Texto + imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
        >
          <span className="section-badge mb-4 inline-flex">Preguntas Frecuentes</span>

          <h2
            className="text-3xl md:text-4xl font-bold text-[#0B1E35] mt-4 mb-5"
            
          >
            Resolvemos tus<br />dudas más comunes
          </h2>

          <p className="text-[#6B7280] leading-relaxed mb-8 text-sm">
            Conoce más sobre nuestros procesos, cobertura y metodología de trabajo.
          </p>

          {/* Imagen */}
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Consultoría Lázaro - Atención al cliente"
              className="
                w-full h-72 object-cover
                filter grayscale group-hover:grayscale-0
                transition-all duration-700 ease-in-out
              "
            />
            {/* Borde dorado inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C5A028]" />
          </div>

          {/* Dato destacado */}
          <div className="mt-6 p-5 border-l-4 border-[#C5A028] bg-white">
            <p className="text-[#0B1E35] font-semibold text-sm">
              "Más de 10 años brindando soluciones técnicas y legales con precisión y compromiso."
            </p>
            <p className="text-[#C5A028] text-xs font-semibold mt-2 tracking-wide uppercase">
              — Consultoría Lázaro
            </p>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA — FAQs */}
        <div>
          <div className="divide-y divide-[#D1D9E0] border-t border-b border-[#D1D9E0]">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full flex justify-between items-start
                    px-0 py-5 text-left
                    hover:bg-transparent
                    cursor-pointer group
                  "
                >
                  <div className="flex items-start gap-4 pr-4">
                    <span className="text-[#C5A028] text-xs font-bold mt-1 flex-shrink-0 tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#0B1E35] font-semibold text-base group-hover:text-[#1A3A5C] transition-colors">
                      {faq.pregunta}
                    </span>
                  </div>

                  <div className="
                    flex-shrink-0 w-7 h-7 flex items-center justify-center
                    border border-[#D1D9E0] group-hover:border-[#C5A028]
                    text-[#6B7280] group-hover:text-[#C5A028]
                    transition-all duration-200
                  ">
                    {activeIndex === index
                      ? <Minus size={14} />
                      : <Plus size={14} />
                    }
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 pb-5 pr-8 text-[#6B7280] text-sm leading-relaxed border-l-2 border-[#C5A028] ml-0">
                        {faq.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
