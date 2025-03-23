// src/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-900 text-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Izquierda: Logo + Navegación */}
        <div className="flex items-center gap-10 ml-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/icono_navbar.jpg"
              alt="Logo GB"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </Link>

          <ul className="flex gap-6 text-sm md:text-base font-medium">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-gray-300 transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-gray-300 transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-gray-300 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Derecha: Botón WhatsApp */}
        <Link
          href="https://wa.me/5213121234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors mr-4"
        >
          <Image
            src="/assets/whatsapp.png"
            alt="WhatsApp"
            width={20}
            height={20}
          />
          <span>Contáctanos</span>
        </Link>
      </div>
    </nav>
  );
}
