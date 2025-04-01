"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Ajusta la ruta según tu estructura

export default function AdminDashboard() {
  const router = useRouter();
  const subirRef = useRef<HTMLDivElement>(null!);
  const verRef = useRef<HTMLDivElement>(null!);

  // Estados para el input, mensaje de éxito, error, promociones y modal
  const [inputUrl, setInputUrl] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState("");
  const [promos, setPromos] = useState<Array<{ id: string; imageUrl: string }>>([]);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Verificar token y cargar promociones al iniciar
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) router.push("/login");
    fetchPromos();
  }, [router]);

  // Función para scroll suave entre secciones
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  // Transforma la URL de Google Drive a una URL directa
  const transformDriveUrl = (url: string) => {
    // Se espera una URL del tipo:
    // https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    // Se extrae el FILE_ID y se crea el link directo
    const regex = /\/file\/d\/([^/]+)\//;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return "";
  };

  // Función para subir la promoción a Firestore
  const handleUpload = async () => {
    if (!inputUrl) {
      setError("Debes ingresar la URL de Google Drive.");
      return;
    }
    const directUrl = transformDriveUrl(inputUrl);
    if (!directUrl) {
      setError("La URL ingresada no es válida.");
      return;
    }
    try {
      // Guardamos la promoción en la colección "promociones"
      const docRef = await addDoc(collection(db, "promociones"), {
        imageUrl: directUrl,
        createdAt: new Date().toISOString(),
      });
      // Actualizamos el estado local agregando la nueva promoción
      setPromos((prev) => [...prev, { id: docRef.id, imageUrl: directUrl }]);
      setUploadSuccess(true);
      setInputUrl("");
      setError("");
      // Se muestra el mensaje de éxito durante 5 segundos
      setTimeout(() => {
        setUploadSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error al subir la promoción:", error);
      setError("Error al subir la promoción.");
    }
  };

  // Función para obtener las promociones de Firestore
  const fetchPromos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "promociones"));
      const promosArray: Array<{ id: string; imageUrl: string }> = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        promosArray.push({ id: doc.id, imageUrl: data.imageUrl });
      });
      setPromos(promosArray);
    } catch (error) {
      console.error("Error al obtener promociones:", error);
    }
  };

  // Función para borrar una promoción de Firestore
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "promociones", id));
      // Actualizamos el estado local filtrando la promoción borrada
      setPromos((prev) => prev.filter((promo) => promo.id !== id));
    } catch (error) {
      console.error("Error al borrar la promoción:", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#1b234b] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex gap-4">
          <button onClick={() => scrollTo(subirRef)}>Subir promoción</button>
          <button onClick={() => scrollTo(verRef)}>Ver promociones activas</button>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
        >
          Cerrar sesión
        </button>
      </nav>

      {/* Sección para subir promoción */}
      <section ref={subirRef} className="max-w-xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-[#1b234b] mb-4">Subir promoción</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Ingresa la URL de Google Drive"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleUpload}
          className="bg-[#1b234b] hover:bg-[#12203d] text-white py-2 px-6 rounded font-semibold"
        >
          Subir imagen
        </button>
        {uploadSuccess && (
          <p className="mt-4 text-green-600">Promoción subida con éxito.</p>
        )}
      </section>

      {/* Sección para ver promociones activas */}
      <section ref={verRef} className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-[#1b234b] mb-6">Promociones activas</h2>
        {promos.length === 0 ? (
          <p className="text-gray-600 text-center">No hay promociones activas.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="relative cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-2"
                onClick={() => setModalImage(promo.imageUrl)}
              >
                <Image
                  src={promo.imageUrl}
                  alt="Promoción"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded"
                />
                {/* Botón para borrar, se detiene la propagación para que no abra el modal */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(promo.id);
                  }}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700"
                >
                  Borrar
                </button>
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
            className="bg-white rounded-lg p-4 max-w-[40%] w-[1200px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Promoción"
              width={600}
              height={375}
              className="w-full h-auto object-contain rounded"
            />
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
