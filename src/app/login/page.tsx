"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();

      Cookies.set("token", token, {
        expires: 1,
        path: "/",
        sameSite: "strict",
      });

      router.push("/admin");
    } catch (err: any) {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1656b7] to-[#bce6ff] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#1656b7]/30"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1b234b]">
          Iniciar sesión
        </h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1656b7]"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1656b7]"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-[#1b234b] hover:bg-[#12203d] text-white py-2 rounded-lg font-semibold transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
