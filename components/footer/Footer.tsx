"use client";

import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050E1A] text-gray-300 pt-14 pb-6 border-t border-white/10">
  <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* LOGO & DESCRIPCIÓN */}
    <div>
      <h2 className="text-2xl font-extrabold text-white tracking-tight">
        Consultoría Lázaro
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-400">
        Ingeniería, gestión y soporte estratégico para proyectos de alto impacto.
      </p>
    </div>

    {/* NAVEGACIÓN */}
    <div>
      <h3 className="text-white font-semibold mb-3">Navegación</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/" className="hover:text-white">Inicio</Link></li>
        <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
        <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
        <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
        <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
      </ul>
    </div>

    {/* SERVICIOS */}
    <div>
      <h3 className="text-white font-semibold mb-3">Servicios</h3>
      <ul className="space-y-2 text-sm">
        <li>Supervisión de obra</li>
        <li>Gestión de proyectos</li>
        <li>Seguridad y salud ocupacional</li>
        <li>Consultoría normativa</li>
        <li>Expedientes técnicos</li>
      </ul>
    </div>

    {/* CONTACTO */}
    <div>
      <h3 className="text-white font-semibold mb-3">Contacto</h3>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <Phone size={16} /> +51 999 999 999
        </li>
        <li className="flex items-center gap-2">
          <Mail size={16} /> contacto@consultorialazaro.com
        </li>
      </ul>
    </div>
  </div>

  <div className="mt-10 pt-5 border-t border-white/10 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Consultoría Lázaro — Todos los derechos reservados
  </div>
</footer>

  );
}
