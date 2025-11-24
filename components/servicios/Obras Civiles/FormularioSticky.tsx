"use client";

export default function FormularioSticky({ servicio }: { servicio: string }) {
  return (
    <form
      className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="text-xl font-bold text-[#081c32] mb-2">
        Solicita información
      </h3>

      <input
        type="text"
        placeholder="Nombre y Apellido"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5a8cc4]"
        required
      />
      <input
        type="text"
        placeholder="Teléfono"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5a8cc4]"
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5a8cc4]"
        required
      />
      <input
        type="text"
        value={servicio}
        readOnly
        className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-500"
      />
      <textarea
        placeholder="Describe brevemente tu requerimiento"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#5a8cc4]"
        required
      />

      <button
        type="submit"
        className="w-full bg-[#5a8cc4] text-white font-semibold py-2 rounded-lg hover:bg-[#73a8e5] transition-all"
      >
        Enviar solicitud
      </button>
    </form>
  );
}
