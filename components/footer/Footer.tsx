"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { serviciosData } from "@/lib/data/servicios";

export default function Footer() {
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  const socials = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#0A1628] text-white">

      {/* Franja dorada superior */}
      <div className="w-full h-[3px] bg-[#C5A028]" />

      {/* ─── Cuerpo principal ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ── COLUMNA 1: Marca ── */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex flex-col w-fit">
            <span className="text-white font-bold text-xl tracking-widest uppercase leading-tight">
              Consultoría
            </span>
            <span className="text-[#C5A028] font-bold text-xl tracking-widest uppercase leading-tight">
              Lázaro
            </span>
            <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase mt-1">
              Excelencia en Ingeniería
            </span>
          </Link>

          <p className="text-white/50 text-sm leading-relaxed">
            Soluciones integrales de ingeniería civil, topografía de precisión
            y saneamiento físico legal para proyectos de alto impacto en todo el Perú.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-3 mt-auto">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C5A028] hover:text-[#C5A028] transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* ── COLUMNA 2: Compañía ── */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-[#C5A028] text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
              Compañía
            </h3>
            <div className="w-8 h-[1px] bg-[#C5A028]/40" />
          </div>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#C5A028] transition-all duration-200 inline-block" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COLUMNA 3: Servicios ── */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-[#C5A028] text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
              Servicios
            </h3>
            <div className="w-8 h-[1px] bg-[#C5A028]/40" />
          </div>
          <ul className="flex flex-col gap-3">
            {serviciosData.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#C5A028] transition-all duration-200 inline-block" />
                  {s.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COLUMNA 4: Contacto ── */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-[#C5A028] text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
              Contáctenos
            </h3>
            <div className="w-8 h-[1px] bg-[#C5A028]/40" />
          </div>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <Phone size={15} className="text-[#C5A028] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Teléfono</p>
                <a href="tel:+51999656111" className="text-white/60 text-sm hover:text-white transition-colors">
                  +51 999 656 111
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={15} className="text-[#C5A028] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Correo</p>
                <a href="mailto:consultorialazaro@gmail.com" className="text-white/60 text-sm hover:text-white transition-colors break-all">
                  consultorialazaro@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-[#C5A028] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Ubicación</p>
                <span className="text-white/60 text-sm">Lima y Provincias, Perú</span>
              </div>
            </li>
          </ul>

          <Link
            href="/contacto"
            className="mt-2 inline-flex items-center gap-2 px-5 py-3 border border-[#C5A028] text-[#C5A028] text-xs font-bold tracking-widest uppercase hover:bg-[#C5A028] hover:text-[#0A1628] transition-all duration-200 w-fit"
          >
            Consulta gratuita
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>

      {/* ─── Franja inferior ─── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs tracking-wide">
            © {new Date().getFullYear()} Consultoría Lázaro — Todos los derechos reservados
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase">
            Ingeniería · Topografía · Saneamiento Legal
          </p>
        </div>
      </div>

    </footer>
  );
}
