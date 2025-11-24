"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollWidth, setScrollWidth] = useState("0%");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const percent =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
        100;

      setScrollWidth(`${percent}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path: string) => `
    px-4 py-1 rounded-full text-sm font-medium transition-all
    text-white hover:bg-white/10
    ${pathname === path ? "bg-white/20" : ""}
  `;

  return (
    <>
      {/* SCROLL BAR */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-white z-60 transition-all duration-200"
        style={{ width: scrollWidth }}
      />

      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#081c32]/90 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-md"></div>
            <span className="text-2xl font-semibold text-white">
              Consultoría Lázaro
            </span>
          </div>

          {/* NAV ESCRITORIO */}
          <div
            className="hidden md:flex items-center gap-2 border-2 rounded-full
            px-6 py-2 transition-all border-white"
          >
            <Link href="/" className={linkClasses("/")}>
              Inicio
            </Link>

            <Link href="/servicios" className={linkClasses("/servicios")}>
              Servicios
            </Link>

            <Link href="/quienes-somos" className={linkClasses("/quienes-somos")}>
              Quiénes somos
            </Link>

            <Link href="/contacto" className={linkClasses("/contacto")}>
              Contacto
            </Link>
          </div>

          {/* HAMBURGUESA (MOVIL) */}
          <div
            className="md:hidden flex flex-col gap-[5px] cursor-pointer"
            onClick={() => setOpenMenu(true)}
          >
            <div className="w-8 h-[3px] rounded bg-white"></div>
            <div className="w-8 h-[3px] rounded bg-white"></div>
            <div className="w-8 h-[3px] rounded bg-white"></div>
          </div>
        </nav>
      </motion.header>

      {/* SIDEBAR MOBILE */}
      <AnimatePresence>
        {openMenu && <HeaderMobile close={() => setOpenMenu(false)} />}
      </AnimatePresence>
    </>
  );
}
