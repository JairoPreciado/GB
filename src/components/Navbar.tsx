// src/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#1656b7] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Izquierda: Logo redondo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/favicon.ico"
                alt="Logo GB"
                width={34}
                height={34}
                className="object-cover"
              />
            </div>
          </Link>
        </div>
        {/* Derecha: Menú de navegación */}
        <ul className="flex gap-8 text-white text-sm md:text-base font-medium">
  <li className="relative">
    <Link href="/" className="hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
      Home
    </Link>
  </li>
  <li className="relative">
    <Link href="/services" className="hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
      Services
    </Link>
  </li>
  <li className="relative">
    <Link href="/contact" className="hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
      Contact
    </Link>
  </li>
  <li className="relative">
    <Link href="/about" className="hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
      About us
    </Link>
  </li>
</ul>

      </div>
    </nav>
  );
}
