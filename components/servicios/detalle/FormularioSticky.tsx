"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

interface FormularioStickyProps {
  servicio: string;
}

export default function FormularioSticky({ servicio }: FormularioStickyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[#F8FAFC] border border-[#D1D9E0] p-8 shadow-sm flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="text-[#0B1E35] w-6 h-6" />
        <h3 className="text-xl font-bold text-[#0B1E35]">
          Cotice este servicio
        </h3>
      </div>

      <p className="text-[#4B5563] text-sm mb-6 leading-relaxed">
        Déjenos sus datos y un especialista en <strong>{servicio}</strong> se contactará
        con usted a la brevedad para brindarle asesoría personalizada.
      </p>

      <form className="flex flex-col gap-4 flex-grow">
        <div>
          <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-1">Nombre</label>
          <input
            type="text"
            className="w-full border border-[#D1D9E0] px-4 py-3 text-sm focus:border-[#C5A028] outline-none transition-colors bg-white"
            placeholder="Ej. Juan Pérez"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-1">Teléfono</label>
          <input
            type="tel"
            className="w-full border border-[#D1D9E0] px-4 py-3 text-sm focus:border-[#C5A028] outline-none transition-colors bg-white"
            placeholder="+51 999 999 999"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-1">Servicio Solicitado</label>
          <input
            type="text"
            className="w-full border border-[#D1D9E0] px-4 py-3 text-sm bg-gray-100 text-gray-500 cursor-not-allowed"
            value={servicio}
            readOnly
          />
        </div>

        <div>
          <label className="block text-xs font-bold tracking-wide text-[#0B1E35] uppercase mb-1">Mensaje breve</label>
          <textarea
            rows={3}
            className="w-full border border-[#D1D9E0] px-4 py-3 text-sm resize-none focus:border-[#C5A028] outline-none transition-colors bg-white"
            placeholder="Detalles de su requerimiento..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="
            mt-auto w-full inline-flex items-center justify-center gap-2
            px-6 py-4 bg-[#0B1E35] text-white
            text-xs font-bold tracking-[0.1em] uppercase
            hover:bg-[#1A3A5C] transition-colors duration-300
          "
        >
          Enviar Solicitud
          <ArrowRight size={16} />
        </button>
      </form>
    </motion.div>
  );
}
