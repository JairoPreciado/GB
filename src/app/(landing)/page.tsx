// src/app/(landing)/page.tsx
export const metadata = {
  title: "Reparación de Computadoras en Colima | GB Reparaciones",
  description:
    "En GB Reparaciones ofrecemos servicios de reparación de computadoras, laptops e impresoras en Colima. ¡Contáctanos para un servicio rápido y profesional!",
  keywords: [
    "Reparación de computadoras Colima",
    "Técnico en PC Colima",
    "Reparación de laptops colima",
    "Servicio técnico Colima",
  ],
};

import Carousel from "@/components/Carousel";
import WhatsappButton from "@/components/WhatsappButton";
import Promociones from "@/components/Promociones";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import ChatBot from "@/chatbot/components/ChatWidget";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <AnimatedOnScroll>
        <section className="w-full bg-gradient-to-b from-[#1656b7] to-[#5fa8d3] py-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            GB REPARACIÓN DE EQUIPOS DE CÓMPUTO
          </h1>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </AnimatedOnScroll>

      {/* Carrusel agregado aquí */}
      <AnimatedOnScroll>
        <section className="py-10">
          <Carousel />
        </section>
      </AnimatedOnScroll>

      {/* Descripción general */}
      <AnimatedOnScroll>
        <section className="text-center py-16 px-4">
          <h2 className="text-3xl font-bold text-[#1b234b] mb-4">
            Descripción general
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </AnimatedOnScroll>

      {/* Servicios */}
      <AnimatedOnScroll>
        <section className="py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="text-center">
              <div className="bg-gray-300 rounded-lg h-40 mb-4"></div>
              <h3 className="font-semibold mb-2">Servicio {num}</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor amet, consectetur adipiscing elit. Malaesuada
                gravida curabitur enim.
              </p>
            </div>
          ))}
        </section>
      </AnimatedOnScroll>

      {/* Botón CTA */}
      <AnimatedOnScroll>
        <div className="text-center py-6">
          <button className="bg-[#1b234b] text-white font-semibold px-6 py-3 rounded-full">
            MORE
          </button>
        </div>
      </AnimatedOnScroll>

      {/* HORARIO */}
      <AnimatedOnScroll>
        <section className="bg-[#e5f3ff] rounded-lg p-6 shadow-md py-16 px-4 max-w-6xl mx-auto">
          <h4 className="text-2xl font-semibold text-center mb-10 text-[#1b234b]">
            Horarios de atención
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            {[
              { dia: "Lunes", hora: "08:00 am - 08:00 pm" },
              { dia: "Martes", hora: "08:00 am - 08:00 pm" },
              { dia: "Miércoles", hora: "08:00 am - 08:00 pm" },
              { dia: "Jueves", hora: "08:00 am - 08:00 pm" },
              { dia: "Viernes", hora: "08:00 am - 08:00 pm" },
              { dia: "Sábado", hora: "08:00 am - 04:00 pm" },
              { dia: "Domingo", hora: "Cerrado" },
            ].map(({ dia, hora }) => (
              <div
                key={dia}
                className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-3"
              >
                <span className="text-[#1656b7] text-lg">🕒</span>
                <div>
                  <p className="font-semibold">{dia}</p>
                  <p className="text-sm">{hora}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedOnScroll>

      {/* PROMOCIONES */}
      <AnimatedOnScroll>
        <section className="max-w-6xl mx-auto mt-12">
          <Promociones />
        </section>
      </AnimatedOnScroll>

      {/* Botón flotante de WhatsApp y chatbot*/}
      <WhatsappButton />
      <ChatBot />
    </main>
  );
}
