"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/assets/imagen.webp",
  "/assets/imagen.webp",
  "/assets/imagen.webp",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ❮
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-950" : "bg-blue-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
