// src/app/layout.tsx
import "../../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GB Reparación de Equipos",
  description: "Reparación, redes y desarrollo en Colima",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
