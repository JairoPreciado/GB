// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#1656b7] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
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

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Menú */}
        <ul className={`
          md:flex md:items-center gap-8 text-white text-sm md:text-base font-medium
          ${isOpen ? 'block absolute top-20 left-0 w-full bg-[#1656b7] px-6 py-4 space-y-4' : 'hidden md:flex'}
        `}>
          <li>
            <Link href="/" className="block hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/services" className="block hover:text-gray-200">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
          </li>
          <li>
            <Link href="/about-us" className="block hover:text-gray-200">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
