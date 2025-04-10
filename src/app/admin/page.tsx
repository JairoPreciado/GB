"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminDashboard() {
  const router = useRouter();
  const subirRef = useRef<HTMLDivElement>(null!);
  const verRef = useRef<HTMLDivElement>(null!);

  const [inputUrl, setInputUrl] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState("");
  const [promos, setPromos] = useState<Array<{ id: string; imageUrl: string }>>(
    []
  );
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [visitasPublicas, setVisitasPublicas] = useState(0);
  const [visitasPorDia, setVisitasPorDia] = useState(0);
  const [visitasPorSemana, setVisitasPorSemana] = useState(0);
  const [visitasPorMes, setVisitasPorMes] = useState(0);
  const [filtroActivo, setFiltroActivo] = useState<
    "total" | "dia" | "semana" | "mes"
  >("total");

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.push("/login");
    } else {
      registrarVisita();
      Promise.all([fetchPromos(), fetchVisitasPublicas()]).then(() =>
        setIsLoading(false)
      );
    }
  }, [router]);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  const transformDriveUrl = (url: string) => {
    const regex = /\/file\/d\/([^/]+)\//;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return "";
  };

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
      const docRef = await addDoc(collection(db, "promociones"), {
        imageUrl: directUrl,
        createdAt: new Date().toISOString(),
      });
      setPromos((prev) => [...prev, { id: docRef.id, imageUrl: directUrl }]);
      setUploadSuccess(true);
      setInputUrl("");
      setError("");
      setTimeout(() => {
        setUploadSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error al subir la promoción:", error);
      setError("Error al subir la promoción.");
    }
  };

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

  const registrarVisita = async () => {
    try {
      await addDoc(collection(db, "visitasAdmin"), {
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error al registrar visita:", err);
    }
  };

  const fetchVisitasPublicas = async () => {
    try {
      const snapshot = await getDocs(collection(db, "visitasPublicas"));
      const ahora = new Date();
      let total = 0,
        dia = 0,
        semana = 0,
        mes = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        const timestamp: Timestamp = data.timestamp;
        if (!timestamp) return;

        const fecha = timestamp.toDate();
        total++;

        if (esMismoDia(fecha, ahora)) dia++;
        if (esMismaSemana(fecha, ahora)) semana++;
        if (esMismoMes(fecha, ahora)) mes++;
      });

      setVisitasPublicas(total);
      setVisitasPorDia(dia);
      setVisitasPorSemana(semana);
      setVisitasPorMes(mes);
    } catch (error) {
      console.error("Error al obtener visitas públicas:", error);
    }
  };

  const esMismoDia = (a: Date, b: Date) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();

  const esMismaSemana = (a: Date, b: Date) => {
    const primerDia = (d: Date) =>
      new Date(d.setDate(d.getDate() - d.getDay()));
    return (
      primerDia(new Date(a)).toDateString() ===
      primerDia(new Date(b)).toDateString()
    );
  };

  const esMismoMes = (a: Date, b: Date) =>
    a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

  const getContadorActual = () => {
    switch (filtroActivo) {
      case "dia":
        return visitasPorDia;
      case "semana":
        return visitasPorSemana;
      case "mes":
        return visitasPorMes;
      default:
        return visitasPublicas;
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "promociones", id));
      setPromos((prev) => prev.filter((promo) => promo.id !== id));
    } catch (error) {
      console.error("Error al borrar la promoción:", error);
    }
  };

  if (isLoading) return null;

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-[#1b234b] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex gap-4">
          <button onClick={() => scrollTo(subirRef)}>Subir promoción</button>
          <button onClick={() => scrollTo(verRef)}>
            Ver promociones activas
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
        >
          Cerrar sesión
        </button>
      </nav>

      {/* VISITAS */}
      <div className="mb-12 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Visitas a la página pública:
        </h3>
        <div className="flex justify-center gap-4 text-sm flex-wrap">
          <button
            className={`px-4 py-2 rounded-full border ${
              filtroActivo === "total"
                ? "bg-[#1b234b] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFiltroActivo("total")}
          >
            <i className="fas fa-globe mr-1"></i> Total
          </button>
          <button
            className={`px-4 py-2 rounded-full border ${
              filtroActivo === "dia"
                ? "bg-[#1b234b] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFiltroActivo("dia")}
          >
            <i className="fas fa-calendar-day mr-1"></i> Hoy
          </button>
          <button
            className={`px-4 py-2 rounded-full border ${
              filtroActivo === "semana"
                ? "bg-[#1b234b] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFiltroActivo("semana")}
          >
            <i className="fas fa-calendar-week mr-1"></i> Semana
          </button>
          <button
            className={`px-4 py-2 rounded-full border ${
              filtroActivo === "mes"
                ? "bg-[#1b234b] text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFiltroActivo("mes")}
          >
            <i className="fas fa-calendar-alt mr-1"></i> Mes
          </button>
        </div>
        <p className="mt-6 text-2xl font-bold text-[#1b234b]">
          {getContadorActual()} visitas
        </p>
      </div>

      {/*SUBIR PROMOCIÓN */}
      <section ref={subirRef} className="max-w-xl mx-auto pt-16 pb-12 px-4">
        {/* FORMULARIO SUBIR */}
        <div>
          <h2 className="text-2xl font-bold text-[#1b234b] mb-6">
            Subir promoción
          </h2>
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
        </div>
      </section>

      {/* PROMOCIONES ACTIVAS */}
      <section ref={verRef} className="max-w-6xl mx-auto pt-10 pb-20 px-4">
        <h2 className="text-2xl font-bold text-[#1b234b] mb-10 text-center">
          Promociones activas
        </h2>

        {promos.length === 0 ? (
          <p className="text-gray-600 text-center">
            No hay promociones activas.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

      {/* MODAL */}
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
