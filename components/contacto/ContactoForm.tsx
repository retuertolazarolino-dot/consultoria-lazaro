"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

export default function Contacto() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* -------------------------------------------------- */}
        {/* FORMULARIO (IZQUIERDA) */}
        {/* -------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
        >
          <h2 className="text-3xl font-extrabold text-[#081c32] mb-6">
            Envíanos un mensaje
          </h2>

          <form className="flex flex-col gap-5">

            <div>
              <label className="text-sm font-semibold text-[#081c32]">Nombre completo</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a8cc4] focus:ring-[#5a8cc4]"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#081c32]">Correo electrónico</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a8cc4] focus:ring-[#5a8cc4]"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#081c32]">Teléfono</label>
              <input
                type="tel"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a8cc4] focus:ring-[#5a8cc4]"
                placeholder="+51 999 999 999"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#081c32]">Servicio de interés</label>
              <select
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:border-[#5a8cc4] focus:ring-[#5a8cc4]"
              >
                <option>Obras Civiles</option>
                <option>Topografía y Levantamientos</option>
                <option>Tasaciones y Valorizaciones</option>
                <option>Saneamiento Legal</option>
                <option>Habilitaciones Urbanas</option>
                <option>Planos Perimétricos</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-[#081c32]">Mensaje</label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:border-[#5a8cc4] focus:ring-[#5a8cc4]"
                placeholder="Describe brevemente tu requerimiento"
              />
            </div>

            <button
              type="submit"
              className="
                w-full mt-3 px-6 py-3 rounded-full font-semibold text-white
                bg-[#5a8cc4] hover:bg-[#73a8e5] transition-all shadow-md
              "
            >
              Enviar mensaje
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
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-extrabold text-[#081c32]">
            Información de contacto
          </h2>

          {/* TARJETAS DE INFO */}
          <div className="grid grid-cols-1 gap-5">

            {/* Teléfono */}
            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl border border-gray-200">
              <Phone className="w-8 h-8 text-[#5a8cc4]" />
              <div>
                <h3 className="text-lg font-bold text-[#081c32]">Teléfono</h3>
                <p className="text-gray-600">+51 999 656 111</p>
              </div>
            </div>

            {/* Correo */}
            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl border border-gray-200">
              <Mail className="w-8 h-8 text-[#5a8cc4]" />
              <div>
                <h3 className="text-lg font-bold text-[#081c32]">Correo electrónico</h3>
                <p className="text-gray-600">consultorialazaro@gmail.com</p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl border border-gray-200">
              <Clock className="w-8 h-8 text-[#5a8cc4]" />
              <div>
                <h3 className="text-lg font-bold text-[#081c32]">Horario</h3>
                <p className="text-gray-600">Lun – Sáb: 8:00 am – 6:00 pm</p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl border border-gray-200">
              <MapPin className="w-8 h-8 text-[#5a8cc4]" />
              <div>
                <h3 className="text-lg font-bold text-[#081c32]">Ubicación</h3>
                <p className="text-gray-600">Atención en Lima y Provincias</p>
              </div>
            </div>
          </div>

          {/* REDES SOCIALES */}
<div className="mt-6 flex items-center gap-4">

  {/* WhatsApp */}
  <a
    href="https://wa.me/51999656111"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-12 h-12 flex items-center justify-center rounded-full
      bg-[#5a8cc4] text-white shadow-md
      hover:bg-[#73a8e5] transition-all
    "
  >
    <MessageCircle className="w-6 h-6" />
  </a>

  {/* Facebook */}
  <a
    href="#"
    target="_blank"
    className="
      w-12 h-12 flex items-center justify-center rounded-full
      bg-[#5a8cc4] text-white shadow-md
      hover:bg-[#73a8e5] transition-all
    "
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 3h4v4h-4v3h4v4h-4v7h-4v-7H7v-4h2V7a4 4 0 0 1 4-4z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="#"
    target="_blank"
    className="
      w-12 h-12 flex items-center justify-center rounded-full
      bg-[#5a8cc4] text-white shadow-md
      hover:bg-[#73a8e5] transition-all
    "
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2c2.7 0 3 .01 4.05.06 1.04.05 1.76.22 2.4.46a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.24.64.41 1.36.46 2.4.05 1.05.06 1.35.06 4.05s-.01 3-.06 4.05c-.05 1.04-.22 1.76-.46 2.4a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.24-1.36.41-2.4.46C15 21.99 14.7 22 12 22s-3-.01-4.05-.06c-1.04-.05-1.76-.22-2.4-.46a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.24-.64-.41-1.36-.46-2.4C2.01 15 2 14.7 2 12s.01-3 .06-4.05c.05-1.04.22-1.76.46-2.4a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.44 2.52c.64-.24 1.36-.41 2.4-.46C9 2.01 9.3 2 12 2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm6.5-.88a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24zM12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4z" />
    </svg>
  </a>

  {/* Email */}
  <a
    href="mailto:consultorialazaro@gmail.com"
    className="
      w-12 h-12 flex items-center justify-center rounded-full
      bg-[#5a8cc4] text-white shadow-md
      hover:bg-[#73a8e5] transition-all
    "
  >
    <Mail className="w-6 h-6" />
  </a>

</div>

        </motion.div>

      </div>
    </section>
    
  );
}
