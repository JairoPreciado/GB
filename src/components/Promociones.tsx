// src/components/Promociones.tsx
"use client";

import { useEffect, useState } from "react";
// Importa Firestore si luego lo conectas

export default function Promociones() {
  const [promos, setPromos] = useState<string[] | null>(null);

  useEffect(() => {
    // Aquí luego conectarás Firestore. Por ahora, simulamos con dummy data
    setPromos([
      "2x1 en limpieza de equipos esta semana",
      "15% de descuento en mantenimiento preventivo",
    ]);
  }, []);

  return (
    <section className="bg-[#bce6ff] rounded-lg p-6 shadow-md py-16 px-4">
      <h4 className="text-2xl font-semibold text-center mb-6 text-[#1b234b]">
        Promociones
      </h4>
      {promos ? (
        <ul className="list-disc list-inside text-gray-700 max-w-xl mx-auto text-center">
          {promos.map((promo, idx) => (
            <li key={idx} className="mb-2">{promo}</li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">Cargando promociones...</p>
      )}
    </section>
  );
}
