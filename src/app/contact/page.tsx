// src/app/contact/page.tsx
export const metadata = {
  title: "Contacto - GB reparación de equipos de cómputo, redes y desarrollo de software",
  description: "Ponte en contacto con nosotros para más información sobre nuestros servicios.",
  icons: {
    icon: "/favicon.ico",
  },
};
import Link from "next/link";
import WhatsappButton from "@/components/WhatsappButton";

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-[#1656b7] to-[#bce6ff] py-20 text-center text-blue-950">
        <h1 className="text-5xl font-bold mb-6">GB REPARACIÓN DE EQUIPOS DE CÓMPUTO</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </section>
      {/* Sección de Contacto */}
      <section className= "py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        {/* Información de Contacto */}
        <div>
          <h2 className="text-2xl font-bold text-[#1b234b] mb-4">Información de Contacto</h2>
          <p className="text-gray-700">Puedes comunicarte con nosotros a través de los siguientes medios:</p>
          <ul className="mt-4 space-y-2">
            <li><strong>Teléfono de Oficina:</strong> +52 123 456 7890</li>
            <li><strong>Teléfono del Técnico  :</strong> +52 123 456 7890</li>
            <li><strong>Email:</strong> contacto@gbcomputo.com</li>
            <li><strong>Dirección:</strong> Calle Principal #123, Colima, México</li>
          </ul>
          <div className="flex gap-4 mt-4">
  <Link
    href="https://wa.me/5213121234567"
    target="_blank"
    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
  >
    WhatsApp
  </Link>
  <Link
    href="tel:+5213121234567"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
  >
    Llamar
  </Link>
</div>

        </div>

        {/* Formulario de Contacto */}
        <div className="bg-[#bce6ff] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#1b234b] mb-4">Envíanos un Mensaje</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Nombre</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-gray-700">Correo Electrónico</label>
              <input type="email" className="w-full p-2 border rounded" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-gray-700">Mensaje</label>
              <textarea className="w-full p-2 border rounded" rows={4} placeholder="Escribe tu mensaje aquí"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#1b234b] text-white p-2 rounded">Enviar</button>
          </form>
        </div>
      </section>
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

       {/* WhatsApp */}
      <WhatsappButton />
    </main>
  );
}