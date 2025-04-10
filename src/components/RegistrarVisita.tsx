"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function RegistrarVisita() {
  useEffect(() => {
    const yaVisitado = Cookies.get("visitaRegistrada");

    if (!yaVisitado) {
      addDoc(collection(db, "visitasPublicas"), {
        timestamp: serverTimestamp(),
      })
        .then(() => {
          Cookies.set("visitaRegistrada", "true", { expires: 7 }); // cookie válida por 7 días
        })
        .catch((err) => {
          console.error("Error registrando visita:", err);
        });
    }
  }, []);

  return null; // Este componente no renderiza nada visible
}
