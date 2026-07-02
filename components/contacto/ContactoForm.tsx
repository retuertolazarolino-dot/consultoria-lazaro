"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

export default function Contacto() {
  return (
    <section className="w-full py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* -------------------------------------------------- */}
        {/* FORMULARIO (IZQUIERDA) */}
        {/* -------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 border border-[#D1D9E0] shadow-sm relative"
        >
          {/* Acento superior */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C5A028]" />

          <h2
            className="text-3xl font-bold text-[#0B1E35] mb-8"
            
          >
            Envíenos un mensaje
          </h2>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-2">Nombre completo</label>
                <input
                  type="text"
                  className="w-full border border-[#D1D9E0] px-4 py-3 text-sm focus:border-[#C5A028] focus:ring-1 focus:ring-[#C5A028] outline-none transition-colors bg-transparent"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full border border-[#D1D9E0] px-4 py-3 text-sm focus:border-[#C5A028] focus:ring-1 focus:ring-[#C5A028] outline-none transition-colors bg-transparent"
                  placeholder="+51 999 999 999"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-2">Correo electrónico</label>
              <input
                type="email"
                className="w-full border border-[#D1D9E0] px-4 py-3 text-sm focus:border-[#C5A028] focus:ring-1 focus:ring-[#C5A028] outline-none transition-colors bg-transparent"
                placeholder="correo@empresa.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-2">Servicio de interés</label>
              <select
                defaultValue=""
                className="w-full border border-[#D1D9E0] px-4 py-3 text-sm focus:border-[#C5A028] focus:ring-1 focus:ring-[#C5A028] outline-none transition-colors bg-white appearance-none"
              >
                <option value="" disabled>Seleccione un servicio</option>
                <option>Obras Civiles</option>
                <option>Topografía y Levantamientos</option>
                <option>Tasaciones y Valorizaciones</option>
                <option>Saneamiento Legal</option>
                <option>Habilitaciones Urbanas</option>
                <option>Planos Perimétricos</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-2">Mensaje detallado</label>
              <textarea
                rows={5}
                className="w-full border border-[#D1D9E0] px-4 py-3 text-sm resize-none focus:border-[#C5A028] focus:ring-1 focus:ring-[#C5A028] outline-none transition-colors bg-transparent"
                placeholder="Describa brevemente su requerimiento o proyecto..."
              />
            </div>

            <button
              type="submit"
              className="
                mt-2 w-full inline-flex items-center justify-center gap-2
                px-6 py-4 bg-[#0B1E35] text-white
                text-xs font-bold tracking-[0.1em] uppercase
                hover:bg-[#1A3A5C] transition-colors duration-200
              "
            >
              Enviar Mensaje
              <ArrowRight size={14} />
            </button>
          </form>
        </motion.div>

        {/* -------------------------------------------------- */}
        {/* INFORMACIÓN (DERECHA) */}
        {/* -------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          <div className="mb-10">
            <span className="section-badge mb-4 inline-flex">Información de Contacto</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0B1E35] mt-2 mb-4"
              
            >
              Estamos aquí para<br />ayudarle
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Póngase en contacto con nuestros especialistas para discutir su próximo proyecto. Garantizamos una respuesta rápida y profesional.
            </p>
          </div>

          {/* TARJETAS DE INFO — Estilo lista corporativa */}
          <div className="grid grid-cols-1 gap-0 border border-[#D1D9E0] bg-white">

            {/* Teléfono */}
            <div className="flex items-start gap-5 p-6 border-b border-[#D1D9E0] group hover:bg-[#F4F6F8] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-[#0B1E35] text-white flex-shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0B1E35] uppercase tracking-wide mb-1">Teléfono Directo</h3>
                <p className="text-[#6B7280] text-sm">+51 999 656 111</p>
              </div>
            </div>

            {/* Correo */}
            <div className="flex items-start gap-5 p-6 border-b border-[#D1D9E0] group hover:bg-[#F4F6F8] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-[#0B1E35] text-white flex-shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0B1E35] uppercase tracking-wide mb-1">Correo Electrónico</h3>
                <p className="text-[#6B7280] text-sm">consultorialazaro@gmail.com</p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-5 p-6 border-b border-[#D1D9E0] group hover:bg-[#F4F6F8] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-[#0B1E35] text-white flex-shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0B1E35] uppercase tracking-wide mb-1">Horario de Atención</h3>
                <p className="text-[#6B7280] text-sm">Lunes a Sábado: 8:00 am – 6:00 pm</p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-5 p-6 group hover:bg-[#F4F6F8] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-[#0B1E35] text-white flex-shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#0B1E35] uppercase tracking-wide mb-1">Ubicación</h3>
                <p className="text-[#6B7280] text-sm">Atención en Lima y Provincias, Perú</p>
              </div>
            </div>

          </div>

          {/* REDES SOCIALES */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-bold tracking-wide text-[#0B1E35] uppercase mr-2">
              Síguenos:
            </span>
            {["FB", "IG", "LI"].map((net) => (
              <a
                key={net}
                href="#"
                className="
                  w-10 h-10 flex items-center justify-center
                  border border-[#D1D9E0] text-[#6B7280]
                  hover:border-[#C5A028] hover:text-[#C5A028]
                  text-xs font-bold transition-colors bg-white
                "
              >
                {net}
              </a>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
