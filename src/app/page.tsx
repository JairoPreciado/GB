"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Hook para redirección
import logo from "@/public/assets/logo_stkhome.png"; // Importamos la imagen directamente

const HomePage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter(); // Para manejar navegación programática

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Activa el desvanecimiento
      setTimeout(() => {
        setShowSplash(false); // Oculta el splash después del desvanecimiento
        router.push("/pages/home"); // Cambia aquí la ruta
      }, 1000); // Espera 1 segundo antes de redirigir
    }, 2000); // Muestra el splash por 2 segundos

    return () => clearTimeout(timer); // Limpia el temporizador
  }, [router]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      {showSplash && (
        <div
          className={`flex flex-col items-center justify-center w-full h-full transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Logo con animación de desvanecimiento */}
          <img
            src={logo.src} // Usamos la imagen importada directamente
            alt="STK-Homes Logo"
            className="max-w-[50%] h-auto mx-auto" // Centra la imagen y la reduce al 50%
            style={{ display: "block" }} // Asegura que la imagen sea un bloque para centrarla
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;