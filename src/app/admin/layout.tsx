// app/admin/layout.tsx
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#1b234b] text-white py-4 px-6 font-bold">
        Panel de Administración - GB
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
