"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Importamos el ícono de cierre, FaTimes es un alias de FaXmark en versiones más recientes.
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaTimes } from "react-icons/fa"; 

export default function HeaderMobile({ close }: { close: () => void }) {
  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Quiénes somos", href: "/quienes-somos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black z-40"
        onClick={close}
      />

      {/* Sidebar con animación de entrada (desde la izquierda) */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }} // Cambiado a -100% para una entrada más limpia
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }} // Cambiado a -100% para una salida más limpia
        transition={{ duration: 0.3, ease: "easeOut" }} // Ajustado ligeramente la duración
        className="fixed top-0 left-0 w-64 h-full bg-[#081c32] text-white p-6 z-50 shadow-xl flex flex-col"
      >
        
      
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white text-3xl p-1 hover:text-[#5a8cc4] transition-colors"
          aria-label="Cerrar menú de navegación"
        >
          <FaTimes /> 
        </button>

        {/* LOGO (manteniendo la estructura) */}
        <div className="mt-10 mb-10 flex flex-col items-center">
          <div className="w-14 h-14 bg-[#5a8cc4] rounded-md"></div>
        </div>

        {/* Opciones del menú */}
        <ul className="flex flex-col gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={close} // Cierra el menú al navegar
                className="hover:text-[#5a8cc4] transition-colors block" 
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Redes sociales */}
        <div className="mt-auto pt-10 border-t border-gray-700/50"> {/* Separador sutil */}
          <div className="flex justify-center gap-6 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#5a8cc4] transition-colors"><FaFacebookF /></a>
            <a href="#" aria-label="Instagra" className="hover:text-[#5a8cc4] transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp" className="hover:text-[#5a8cc4] transition-colors"><FaWhatsapp /></a>
            <a href="#" aria-label="TikTok" className="hover:text-[#5a8cc4] transition-colors"><FaTiktok /></a>
          </div>
        </div>
      </motion.div>
    </>
  );
}