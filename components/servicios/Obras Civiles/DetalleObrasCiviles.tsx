"use client";
import { motion } from "framer-motion";
import FormularioSticky from "./FormularioSticky";

export default function DetalleObrasCiviles() {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* =============== COLUMNA IZQUIERDA =============== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          {/* Introducción */}
          <h2 className="text-3xl font-extrabold text-[#081c32] mb-4">
            Obras civiles integrales con enfoque técnico y sostenible
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            En <span className="font-semibold text-[#081c32]">Consultoría Lázaro</span>,
            gestionamos y ejecutamos proyectos de construcción desde la etapa
            inicial hasta la entrega final. Aseguramos calidad, seguridad y cumplimiento
            normativo en cada proceso constructivo.
          </p>

          {/* Tipos de obras */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#081c32] mb-3">
              Tipos de obras que desarrollamos
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>• Construcción de edificaciones urbanas y rurales</li>
              <li>• Obras de infraestructura vial: pistas, veredas, drenajes y puentes</li>
              <li>• Ejecución de obras sanitarias y de saneamiento</li>
              <li>• Reforzamiento estructural y remodelación de edificaciones</li>
              <li>• Habilitaciones urbanas y obras complementarias</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#081c32] mb-3">
              ¿Por qué elegirnos?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Supervisión técnica continua y cumplimiento de plazos.</li>
              <li>✔ Uso de materiales certificados y tecnología moderna.</li>
              <li>✔ Personal técnico calificado con experiencia comprobada.</li>
              <li>✔ Informes de avance y control presupuestal transparente.</li>
              <li>✔ Compromiso con la seguridad y sostenibilidad ambiental.</li>
            </ul>
          </div>

          {/* Procesos */}
          <div>
            <h3 className="text-2xl font-bold text-[#081c32] mb-3">
              Nuestro proceso de trabajo
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cada proyecto inicia con un diagnóstico técnico y planificación detallada.
              Luego, coordinamos la ejecución, control de calidad y entrega final bajo
              estándares profesionales, garantizando resultados eficientes y duraderos.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>1️⃣ Diagnóstico y levantamiento de información</li>
              <li>2️⃣ Elaboración de planos y presupuestos</li>
              <li>3️⃣ Ejecución con control técnico</li>
              <li>4️⃣ Supervisión y seguimiento de obra</li>
              <li>5️⃣ Entrega, validación y cierre del proyecto</li>
            </ul>
          </div>
        </motion.div>

        {/* =============== COLUMNA DERECHA (FORMULARIO STICKY) =============== */}
        <div className="lg:col-span-1">
          <div className="relative h-full">
            <div className="sticky top-28">
              <FormularioSticky servicio="Obras Civiles" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
