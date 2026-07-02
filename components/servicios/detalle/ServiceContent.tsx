"use client";
import { motion } from "framer-motion";
import FormularioSticky from "./FormularioSticky";
import { CheckCircle2, Briefcase, Settings } from "lucide-react";

interface ServiceContentProps {
  titulo: string;
  descripcionLarga: string;
  tiposDeObras: string[];
  beneficios: string[];
  proceso: string[];
}

export default function ServiceContent({
  titulo,
  descripcionLarga,
  tiposDeObras,
  beneficios,
  proceso
}: ServiceContentProps) {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* =============== COLUMNA IZQUIERDA (CONTENIDO) =============== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 flex flex-col gap-14"
        >
          {/* Introducción */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E35] mb-6">
              Servicios especializados en {titulo}
            </h2>
            <p className="text-[#4B5563] text-lg leading-relaxed">
              {descripcionLarga}
            </p>
          </div>

          {/* Tipos de obras */}
          {tiposDeObras.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-[#C5A028] w-6 h-6" />
                <h3 className="text-2xl font-bold text-[#0B1E35]">
                  Alcance de nuestros servicios
                </h3>
              </div>
              <ul className="space-y-4">
                {tiposDeObras.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 border border-[#F4F6F8] bg-[#F4F6F8]/50 hover:bg-[#F4F6F8] transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#0B1E35] mt-2 flex-shrink-0" />
                    <span className="text-[#4B5563] text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Beneficios */}
          {beneficios.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-[#C5A028] w-6 h-6" />
                <h3 className="text-2xl font-bold text-[#0B1E35]">
                  ¿Por qué elegir Consultoría Lázaro?
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0B1E35] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-[#4B5563] text-base leading-relaxed">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Proceso */}
          {proceso.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Settings className="text-[#C5A028] w-6 h-6" />
                <h3 className="text-2xl font-bold text-[#0B1E35]">
                  Metodología de Trabajo
                </h3>
              </div>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#E2E8F0] before:to-transparent">
                {proceso.map((paso, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#0B1E35] group-[.is-active]:bg-[#C5A028] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 border border-[#E2E8F0] shadow-sm">
                      <p className="text-[#4B5563] text-sm leading-relaxed">
                        {paso.replace(/^[0-9]+️⃣\s/, '')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* =============== COLUMNA DERECHA (FORMULARIO STICKY) =============== */}
        <div className="lg:col-span-4">
          <div className="relative h-full">
            <div className="sticky top-28">
              <FormularioSticky servicio={titulo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
