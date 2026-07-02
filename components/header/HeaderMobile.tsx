"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { serviciosData } from "@/lib/data/servicios";
import { useState } from "react";

export default function HeaderMobile({ close }: { close: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black z-40"
        onClick={close}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 w-80 h-full bg-[#0B1E35] text-white z-50 shadow-2xl flex flex-col overflow-y-auto"
      >
        {/* Cabecera del sidebar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <Link href="/" onClick={close} className="flex flex-col leading-tight">
            <span className="text-white font-bold text-sm tracking-widest uppercase">
              Consultoría <span className="text-[#C5A028]">Lázaro</span>
            </span>
            <span className="text-white/35 text-[9px] tracking-[0.3em] uppercase mt-0.5">
              Excelencia en Ingeniería
            </span>
          </Link>

          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col flex-1 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={close}
              className="flex items-center justify-between py-4 text-white/70 hover:text-white border-b border-white/[0.07] text-sm font-semibold tracking-widest uppercase transition-colors group"
            >
              <span>{item.name}</span>
              <span className="text-[#C5A028] text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          ))}

          {/* Servicios — Desplegable */}
          <div className="border-b border-white/[0.07]">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-4 text-white/70 hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              <span>Servicios</span>
              {servicesOpen ? (
                <ChevronUp size={15} className="text-[#C5A028]" />
              ) : (
                <ChevronDown size={15} className="text-[#C5A028]" />
              )}
            </button>

            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pb-3 pl-3 flex flex-col gap-1"
              >
                <Link
                  href="/servicios"
                  onClick={close}
                  className="py-2 text-[10px] font-bold tracking-widest uppercase text-[#C5A028] hover:text-[#E8C84A] transition-colors"
                >
                  → Ver todos los servicios
                </Link>
                {serviciosData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    onClick={close}
                    className="flex items-center gap-2 py-2 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 bg-[#C5A028] rounded-full flex-shrink-0" />
                    {s.titulo}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </nav>

        {/* Contacto + CTA */}
        <div className="px-6 py-6 border-t border-white/10 bg-[#071529] shrink-0">
          <p className="text-[#C5A028] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            Contacto
          </p>
          <a
            href="tel:+51999656111"
            className="flex items-center gap-3 text-white/70 hover:text-white text-sm mb-3 transition-colors"
          >
            <Phone size={14} className="text-[#C5A028]" />
            +51 999 656 111
          </a>
          <a
            href="mailto:consultorialazaro@gmail.com"
            className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
          >
            <Mail size={14} className="text-[#C5A028]" />
            consultorialazaro@gmail.com
          </a>

          <Link
            href="/contacto"
            onClick={close}
            className="mt-5 w-full flex items-center justify-center py-3 bg-[#C5A028] text-[#0B1E35] text-xs font-bold tracking-widest uppercase hover:bg-[#E8C84A] transition-colors"
          >
            Solicitar Consulta
          </Link>
        </div>
      </motion.div>
    </>
  );
}