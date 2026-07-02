"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import HeaderMobile from "./HeaderMobile";
import { Phone, ChevronDown } from "lucide-react";
import { serviciosData } from "@/lib/data/servicios";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1E35] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[#0B1E35]/90 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="flex flex-col leading-tight group shrink-0">
            <span className="text-white text-base font-bold tracking-[0.18em] uppercase transition-colors group-hover:text-[#C5A028]">
              Consultoría <span className="text-[#C5A028] group-hover:text-white transition-colors">Lázaro</span>
            </span>
            <span className="text-white/35 text-[9px] tracking-[0.35em] uppercase mt-[1px]">
              Excelencia en Ingeniería
            </span>
          </Link>

          {/* ── NAV DESKTOP ── */}
          <div className="hidden md:flex items-center">

            {/* Links normales */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 h-16 flex items-center text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#C5A028]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#C5A028]" />
                )}
              </Link>
            ))}

            {/* Dropdown Servicios */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`px-5 h-16 flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 ${
                  pathname.startsWith("/servicios")
                    ? "text-[#C5A028]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Servicios
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
                {pathname.startsWith("/servicios") && (
                  <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#C5A028]" />
                )}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-0 w-72 bg-[#0B1E35] border border-white/10 shadow-2xl py-2"
                  >
                    <Link
                      href="/servicios"
                      className="flex items-center gap-3 px-5 py-3 text-[10px] font-bold tracking-widest uppercase text-[#C5A028] hover:bg-white/5 transition-colors border-b border-white/10 mb-1"
                    >
                      Ver todos los servicios →
                    </Link>
                    {serviciosData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicios/${s.slug}`}
                        className="flex items-center gap-3 px-5 py-2.5 text-sm text-white/55 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="w-1 h-1 bg-[#C5A028] rounded-full flex-shrink-0" />
                        {s.titulo}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── CTA DESKTOP ── */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href="tel:+51999656111"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200"
            >
              <Phone size={15} />
              <span className="text-[13px] font-semibold tracking-wide">+51 999 656 111</span>
            </a>

            <Link
              href="/contacto"
              className="px-5 py-2 bg-[#C5A028] text-[#0B1E35] text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-[#E8C84A] transition-colors duration-200"
            >
              Cotizar
            </Link>
          </div>

          {/* ── HAMBURGUESA MÓVIL ── */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setOpenMenu(true)}
            aria-label="Abrir menú"
          >
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-5 h-[2px] bg-[#C5A028]" />
            <div className="w-4 h-[2px] bg-white" />
          </button>

        </nav>
      </motion.header>

      <AnimatePresence>
        {openMenu && <HeaderMobile close={() => setOpenMenu(false)} />}
      </AnimatePresence>
    </>
  );
}
