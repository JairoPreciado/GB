// src/app/(landing)/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./../../styles/globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}