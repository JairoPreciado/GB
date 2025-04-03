// src/app/(landing)/about-us/page.tsx
export const metadata = {
  title: "Sobre Nosotros | GB Reparaciones en Colima",
  description:
    "Conoce la historia y el equipo de GB Reparaciones. Somos expertos en reparación de computadoras y brindamos servicios de calidad en Colima.",
  keywords: [
    "Sobre GB Reparaciones",
    "Equipo técnico Colima",
    "Historia GB Reparaciones",
    "Reparación computadoras Colima",
  ],
};

import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/*Seccion principal*/}
      <AnimatedOnScroll>
        <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen principal */}
          <div className="w-full h-[350px] relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/team.jpg" // o la imagen que subiste
              alt="Equipo trabajando en soluciones tecnológicas"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido textual */}
          <div>
            <h3 className="text-indigo-600 font-bold text-2xl mb-2">
              ¿QUIÉNES SOMOS?
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              GB Reparación de Equipos de Cómputo
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Somos una empresa enfocada en soluciones tecnológicas eficientes.
              Ya sea programación, diseño, redes o mantenimiento, nuestro equipo
              está listo para ayudarte a llevar tu proyecto al siguiente nivel.
            </p>

            {/* Misión y Visión */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 text-indigo-700 p-3 rounded-xl text-xl">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Misión</h4>
                  <p className="text-gray-600 text-sm">
                    Fomentar la innovación y la calidad a través del aprendizaje
                    continuo y un equipo comprometido.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 text-indigo-700 p-3 rounded-xl text-xl">
                  <i className="fas fa-eye"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Visión</h4>
                  <p className="text-gray-600 text-sm">
                    Ser líderes en servicios tecnológicos, ofreciendo soluciones
                    confiables que marquen la diferencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Sección de Valores */}
      <AnimatedOnScroll>
        <section className="py-20 px-6 bg-indigo-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-10">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Responsabilidad",
                  icon: "fa-handshake",
                  color: "text-green-600",
                  bg: "bg-green-100",
                  desc: "Cumplimos con nuestros compromisos en tiempo y forma.",
                },
                {
                  title: "Trabajo en equipo",
                  icon: "fa-users",
                  color: "text-yellow-600",
                  bg: "bg-yellow-100",
                  desc: "Fomentamos la colaboración para lograr mejores resultados.",
                },
                {
                  title: "Innovación",
                  icon: "fa-lightbulb",
                  color: "text-blue-600",
                  bg: "bg-blue-100",
                  desc: "Buscamos nuevas soluciones para mejorar cada día.",
                },
                {
                  title: "Calidad",
                  icon: "fa-check-circle",
                  color: "text-red-600",
                  bg: "bg-red-100",
                  desc: "Garantizamos un servicio de excelencia en cada trabajo.",
                },
              ].map((val, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-left"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl ${val.bg} ${val.color} text-3xl mb-4`}
                  >
                    <i className={`fas ${val.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Sección de Servicios */}
      <AnimatedOnScroll>
        <section className="bg-gray-100 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              Enfocados siempre en dar el mejor servicio
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {/* Servicio 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="text-indigo-600 text-4xl mb-4">
                  <i className="fas fa-microscope" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diagnóstico de PC</h3>
                <p className="text-gray-700 text-sm">
                  Utilizamos programas avanzados para diagnosticar de manera
                  precisa.
                </p>
              </div>

              {/* Servicio 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="text-yellow-600 text-4xl mb-4">
                  <i className="fas fa-screwdriver-wrench" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mantenimientos</h3>
                <p className="text-gray-700 text-sm">
                  Mantenimiento preventivo y correctivo para equipos gamer y
                  estándar.
                </p>
              </div>

              {/* Servicio 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-network-wired" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Infraestructura y Redes
                </h3>
                <p className="text-gray-700 text-sm">
                  Instalación y mantenimiento de redes, punto a punto y
                  cableado.
                </p>
              </div>

              {/* Servicio 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="text-purple-600 text-4xl mb-4">
                  <i className="fas fa-code" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Proyectos de Software
                </h3>
                <p className="text-gray-700 text-sm">
                  Desarrollo de sistemas de venta, páginas web, cotizadores y
                  más.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Sección de Testimonios con el componente Carrusel */}
      <AnimatedOnScroll>
        <section className="bg-blue-950 text-white text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
          <TestimonialsCarousel />
        </section>
      </AnimatedOnScroll>
    </main>
  );
}
