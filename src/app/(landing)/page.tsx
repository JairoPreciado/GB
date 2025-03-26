// src/app/(landing)/page.tsx
export const metadata = {
  title: "GB reparación de equipos de computo, redes y desarrollo de software",
  description:
    "Expertos en reparación de equipos, redes y desarrollo de software en Colima.",
  icons: {
    icon: "/favicon.ico",
  },
};
import Carousel from "@/components/Carousel";
import WhatsappButton from "@/components/WhatsappButton";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-[#1656b7] to-[#bce6ff] py-20 text-center text-blue-950">
        <h1 className="text-5xl font-bold mb-6">GB REPARACIÓN DE EQUIPOS DE CÓMPUTO</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </section>
        {/* Carrusel agregado aquí */}
        <section className="py-10">
        <Carousel />
      </section>

      {/* Descripción general */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-[#1b234b] mb-4">SERVICIOS</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* Servicios */}
      <section className="py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((num) => (
          <div key={num} className="text-center">
            <div className="bg-gray-300 rounded-lg h-40 mb-4"></div>
            <h3 className="font-semibold mb-2">Servicio {num}</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Malaesuada gravida curabitur enim.
            </p>
          </div>
        ))}
      </section>

      {/* Botón CTA */}
      <div className="text-center py-6">
        <button className="bg-[#1b234b] text-white font-semibold px-6 py-3 rounded-full">
          MORE
        </button>
      </div>

      {/* Horario y promociones */}
      <section className="bg-[#bce6ff] rounded-lg p-6 shadow-md py-16 px-4 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto">
  <div>
    <h4 className="text-xl font-semibold text-center mb-4">HORARIO</h4>
    <ul className="list-disc list-inside text-gray-700">
      <li>Lunes a Viernes de 8:00 am - 8:00 pm</li>
      <li>Sábados de 8:00 am - 4:00 pm</li>
    </ul>
  </div>
  <div className="border-l-4 border-blue-500 pl-6">
    <h4 className="text-xl text-center text-[#1b234b] font-semibold mb-4">PROMOCIONES</h4>
    <p className="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa quam potenti nisl hendrerit erat.
    </p>
  </div>
</section>
      <WhatsappButton />
    </main>
  );
}