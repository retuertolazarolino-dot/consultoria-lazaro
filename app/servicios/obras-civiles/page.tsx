"use client";

import CTAObrasCiviles from "@/components/servicios/Obras Civiles/CTAObrasCiviles";
import DescripcionObrasCiviles from "@/components/servicios/Obras Civiles/DescripcionObrasciviles";
import DetalleObrasCiviles from "@/components/servicios/Obras Civiles/DetalleObrasCiviles";
import HeroObrasCiviles from "@/components/servicios/Obras Civiles/HeroObrasCiviles";

export default function ObrasCiviles() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroObrasCiviles />
      <DescripcionObrasCiviles/>
      <DetalleObrasCiviles/>
      <CTAObrasCiviles/>

     
    </main>
  );
}
