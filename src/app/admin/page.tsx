"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

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

  return (
    <div>
      <header className="flex justify-between items-center bg-[#1b234b] text-white px-6 py-4">
        <h1 className="text-lg font-bold">Panel de Administración</h1>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
          Cerrar sesión
        </button>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
