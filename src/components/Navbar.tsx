// src/components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="w-full p-4 bg-gray-900 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">GB</h1>
        <ul className="flex gap-6">
          <li><a href="/contacto" className="hover:underline">Contacto</a></li>
          <li><a href="/servicios" className="hover:underline">Servicios</a></li>
        </ul>
      </nav>
    );
  }
  