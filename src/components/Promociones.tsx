"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Ajusta la ruta según tu estructura

export default function Promociones() {
  const [promos, setPromos] = useState<Array<{ id: string; imageUrl: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "promociones"));
        const promosArray: Array<{ id: string; imageUrl: string }> = [];
        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          promosArray.push({ id: docSnap.id, imageUrl: data.imageUrl });
        });
        setPromos(promosArray);
      } catch (error) {
        console.error("Error al obtener promociones:", error);
      }
      setLoading(false);
    };

    fetchPromos();
  }, []);

  return (
    <>
      <section className="bg-[#bce6ff] rounded-lg p-6 shadow-md py-16 px-4">
        <h4 className="text-2xl font-semibold text-center mb-6 text-[#1b234b]">
          Promociones
        </h4>
        {loading ? (
          <p className="text-center text-gray-500">Cargando promociones...</p>
        ) : promos.length === 0 ? (
          <p className="text-center text-gray-500">No hay promociones activas.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="cursor-pointer"
                onClick={() => setModalImage(promo.imageUrl)}
              >
                <Image
                  src={promo.imageUrl}
                  alt="Promoción"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal para ver la imagen ampliada */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-[90%] max-h-[80vh] shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={modalImage}
                alt="Promoción ampliada"
                width={1200}
                height={675}
                className="max-w-full max-h-full object-contain rounded"
              />
            </div>
            <button
              onClick={() => setModalImage(null)}
              className="mt-4 px-4 py-2 bg-[#1b234b] text-white rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
