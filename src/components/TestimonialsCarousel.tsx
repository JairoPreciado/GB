"use client";

import React, { useRef, useEffect } from "react";

const testimonials = [
  {
    text: '"Super buena onda, muy rápido y precios bastante buenos, aparte siempre te contactan y te dejan ver el proceso en su taller 10/10 todos necesitan venir aquí"',
    name: "- Mauricio C.",
    link: "https://maps.app.goo.gl/yvjL74QcPmEX17SDA",
  },
  {
    text: '"Sin duda el mejor lugar para mantenimiento y reparación de computadores, 100% recomendados, el dueño muy buena onda, precios justos y te solucionan en cuestión de minutos mostrando detalle a detalle la reparación."',
    name: "- Noel Garcia N.",
    link: "https://maps.app.goo.gl/La5WU2MiXrjVepCLA",
  },
  {
    text: '"Excelente servicio, atendieron y solucionaron rápidamente mi problema, además los precios son accesibles y me proporcionaron recomendaciones para un buen uso de mi equipo. Recomendado."',
    name: "- Esmeralda V.",
    link: "https://maps.app.goo.gl/V3NrdRYqLqePd6Jf8",
  },
];

export default function TestimonialsCarousel() {
  const currentIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    currentIndexRef.current =
      (currentIndexRef.current + 1) % testimonials.length;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${
        currentIndexRef.current * 100
      }%)`;
    }
  };

  const prevSlide = () => {
    currentIndexRef.current =
      (currentIndexRef.current - 1 + testimonials.length) % testimonials.length;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${
        currentIndexRef.current * 100
      }%)`;
    }
  };

  // Auto-desplazamiento cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{ transform: "translateX(0%)" }}
        >
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-full p-8"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-shadow">
                <p className="text-lg text-gray-800 italic text-center">
                  {testimonial.text}
                </p>
                <div className="flex justify-center mt-4">
                  <i className="fas fa-star text-yellow-500 mx-1" />
                  <i className="fas fa-star text-yellow-500 mx-1" />
                  <i className="fas fa-star text-yellow-500 mx-1" />
                  <i className="fas fa-star text-yellow-500 mx-1" />
                  <i className="fas fa-star text-yellow-500 mx-1" />
                </div>
                <h3 className="mt-4 text-center font-bold text-gray-600">
                  {testimonial.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-blue-500 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-blue-500 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
