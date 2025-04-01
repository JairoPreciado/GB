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
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-md">
            <Image
              src="/assets/nav.png"
              alt="Logo GB"
              width={40}
              height={40}
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
          <li className="relative">
            <Link href="/" className="block hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>
          </li>
          <li className="relative">
            <Link href="/services" className="block hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Services
            </Link>
          </li>
          <li className="relative">
            <Link href="/contact" className="block hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </Link>
          </li>
          <li className="relative">
            <Link href="/about-us" className="block hover:text-gray-200 transition after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              About us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
