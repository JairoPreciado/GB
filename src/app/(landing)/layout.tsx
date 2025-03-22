import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../public/css/globals.css";

// Configuración de las fuentes de Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata global de la aplicación
export const metadata: Metadata = {
  title: "STK-Homes",
  description: "Bienvenido a la aplicación de STK-Homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Contenedor principal que asegura estilos globales */}
        <div className="min-h-screen flex flex-col">
          {/* Renderiza el contenido principal */}
          {children}
        </div>
      </body>
    </html>
  );
}
