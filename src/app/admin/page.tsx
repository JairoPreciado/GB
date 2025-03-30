"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";

interface Promo {
  id: number;
  titulo: string;
  descripcion: string;
  precio: string;
  imagen: File | null;
  imagenURL: string;
  fechaExpiracion: string;
  fechaCreacion: string;
}

export default function AdminDashboard() {
  const router = useRouter();

  const [promos, setPromos] = useState<Promo[]>([]);
  const [promo, setPromo] = useState<Promo>({
    id: Date.now(),
    titulo: "",
    descripcion: "",
    precio: "",
    imagen: null,
    imagenURL: "",
    fechaExpiracion: "",
    fechaCreacion: new Date().toISOString().split("T")[0],
  });
  const [error, setError] = useState("");
  const crearRef = useRef<HTMLDivElement>(null!);
  const activasRef = useRef<HTMLDivElement>(null!);
  const paramRef = useRef<HTMLDivElement>(null!);
  const previewRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPromo((prev) => ({
        ...prev,
        imagen: file,
        imagenURL: URL.createObjectURL(file),
      }));
    }
  };

  const handleSave = () => {
    if (!promo.titulo || !promo.descripcion || !promo.precio || !promo.fechaExpiracion || !promo.imagenURL) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setPromos([...promos, promo]);
    setPromo({
      id: Date.now(),
      titulo: "",
      descripcion: "",
      precio: "",
      imagen: null,
      imagenURL: "",
      fechaExpiracion: "",
      fechaCreacion: new Date().toISOString().split("T")[0],
    });
    setError("");
  };

  const handleReset = () => {
    setPromo({
      id: Date.now(),
      titulo: "",
      descripcion: "",
      precio: "",
      imagen: null,
      imagenURL: "",
      fechaExpiracion: "",
      fechaCreacion: new Date().toISOString().split("T")[0],
    });
    setError("");
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#1b234b] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex gap-4">
          <button onClick={() => scrollToRef(crearRef)}>Crear promoción</button>
          <button onClick={() => scrollToRef(paramRef)}>Parámetros</button>
          <button onClick={() => scrollToRef(previewRef)}>Previsualización</button>
          <button onClick={() => scrollToRef(activasRef)}>Promociones activas</button>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
        >
          Cerrar sesión
        </button>
      </nav>

      {/* Crear promoción */}
      <section ref={crearRef} className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-[#1b234b] mb-6">Gestión de Promociones</h2>

        <form className="bg-[#e5f3ff] p-6 rounded-lg shadow-md space-y-4">
          {error && <p className="text-red-600 font-semibold">{error}</p>}
          <div>
            <label className="block font-medium text-sm mb-1">Título:</label>
            <input
              type="text"
              value={promo.titulo}
              onChange={(e) => setPromo({ ...promo, titulo: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Descripción:</label>
            <textarea
              value={promo.descripcion}
              onChange={(e) => setPromo({ ...promo, descripcion: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
              rows={3}
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Precio o descuento:</label>
            <input
              type="text"
              value={promo.precio}
              onChange={(e) => setPromo({ ...promo, precio: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Fecha de expiración:</label>
            <input
              type="date"
              value={promo.fechaExpiracion}
              onChange={(e) => setPromo({ ...promo, fechaExpiracion: e.target.value })}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Imagen:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSave}
              className="bg-[#1b234b] hover:bg-[#12203d] text-white py-2 px-6 rounded font-semibold"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-6 rounded font-semibold"
            >
              Limpiar
            </button>
          </div>
        </form>
      </section>

      {/* Parámetros */}
      <section ref={paramRef} className="max-w-5xl mx-auto py-10">
        <h3 className="text-xl font-semibold mb-4 text-[#1b234b]">Parámetros de la promoción</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Máximo 6 promociones activas.</li>
          <li>Fecha de expiración obligatoria.</li>
          <li>Imagen recomendada 1200x630px.</li>
        </ul>
      </section>

      {/* Previsualización */}
      <section ref={previewRef} className="max-w-5xl mx-auto py-10">
        <h3 className="text-xl font-semibold mb-4 text-[#1b234b]">Previsualización</h3>
        <div className="bg-white border shadow-sm rounded-lg p-4 max-w-xl mx-auto">
          {promo.imagenURL && (
            <Image
              src={promo.imagenURL}
              alt="Vista previa"
              className="rounded mb-4 w-full max-h-60 object-cover"
            />
          )}
          <h4 className="text-lg font-bold mb-1">{promo.titulo || "Título de ejemplo"}</h4>
          <p className="text-gray-700 mb-2">{promo.descripcion || "Descripción de la promoción."}</p>
          {promo.precio && <p className="text-[#1656b7] font-semibold">Precio: {promo.precio}</p>}
          {promo.fechaExpiracion && <p className="text-sm text-gray-500">Expira el: {promo.fechaExpiracion}</p>}
        </div>
      </section>

      {/* Promociones activas */}
      <section ref={activasRef} className="max-w-5xl mx-auto py-10">
        <h3 className="text-xl font-semibold mb-4 text-[#1b234b]">Promociones activas</h3>
        {promos.length === 0 ? (
          <p className="text-gray-600">No hay promociones activas.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg shadow p-4 flex flex-col items-center"
              >
                {item.imagenURL && (
                  <Image
                    src={item.imagenURL}
                    alt="Promo"
                    className="rounded mb-2 w-full max-h-40 object-cover"
                  />
                )}
                <h4 className="font-semibold text-center">{item.titulo}</h4>
                <p className="text-sm text-center text-gray-600">{item.descripcion}</p>
                <p className="text-[#1656b7] font-semibold mt-1">{item.precio}</p>
                <p className="text-sm text-gray-500">Expira el: {item.fechaExpiracion}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
