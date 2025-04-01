// src/app/contact/page.tsx

export const metadata = {
  title: "Contáctanos | GB reparación de computadoras, redes y software en Colima",
  description:
    "¿Necesitas ayuda con tu equipo, red o desarrollo de software? Ponte en contacto con GB Sistemas Inteligentes en Villa de Álvarez, Colima. Atención personalizada.",
  keywords: [
    "contacto GB",
    "servicio técnico Colima",
    "reparación de computadoras contacto",
    "asistencia redes Colima",
    "desarrollo de software contacto",
    "GB Colima teléfono",
    "GB Colima dirección"
  ],
  openGraph: {
    title: "Contáctanos | GB reparación de computadoras, redes y software",
    description: "Comunícate con GB Sistemas Inteligentes en Colima. Llámanos o envíanos un mensaje.",
    url: "https://tusitio.com/contact", // Cambiar por el dominio real
    type: "website",
    locale: "es_MX"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://tusitio.com"), // Cambia por tu dominio real
};


import Link from "next/link";
import WhatsappButton from "@/components/WhatsappButton";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <AnimatedOnScroll>
        <section className="w-full bg-gradient-to-b from-[#1656b7] to-[#bce6ff] py-20 text-center text-blue-950">
          <h1 className="text-5xl font-bold mb-6">
            GB REPARACIÓN DE EQUIPOS DE CÓMPUTO
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        {/* Sección de Información */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Company Info */}
            <div className="bg-[#e0ecff] rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4 text-blue-600 text-3xl">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">
                Informacion de la empresa:
              </h3>
              <p>GB Sistemas Inteligentes</p>
              <p>RFC: GBSI850101XXX</p>
            </div>

            {/* Contact Info */}
            <div className="bg-[#e0ecff] rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4 text-blue-600 text-3xl">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">Contactanos:</h3>
              <p>
                <strong>Oficina:</strong> +52 312 123 4567
              </p>
              <p>
                <strong>Técnico:</strong> +52 312 765 4321
              </p>

              <div className="flex gap-4 mt-4 justify-center">
                <Link
                  href="https://wa.me/5213127654321"
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

            {/* Address */}
            <div className="bg-[#e0ecff] rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4 text-blue-600 text-3xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">Direccion:</h3>
              <p>Villa de Álvarez, Colima, México</p>
              <p>Avenida Pablo Silva #253</p>
              <p>CP: 28985</p>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Formulario */}
      <AnimatedOnScroll>
        <section className="pb-20 px-4 max-w-6xl mx-auto">
          <form className="bg-[#bce6ff] p-8 rounded-lg shadow space-y-6">
            <h2 className="text-2xl font-bold text-[#1b234b] mb-4">
              Envíanos un Mensaje
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Nombres
                </label>
                <input
                  type="text"
                  placeholder="Bonnie"
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Apellidos
                </label>
                <input
                  type="text"
                  placeholder="Green"
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Tu correo electronico:
                </label>
                <input
                  type="email"
                  placeholder="name@gbcolima.com"
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Tu numero telefonico:
                </label>
                <input
                  type="tel"
                  placeholder="+(52) 312 123 4567"
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Tu mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full p-2 rounded border border-gray-300"
              ></textarea>
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mr-2" />
              <label
                htmlFor="terms"
                className="block text-sm mb-1 text-gray-700"
              >
                Confirmo haber leído y aceptado los{" "}
                <Link href="#" className="underline text-blue-800">
                  terminos y condiciones
                </Link>{" "}
                y{" "}
                <Link href="#" className="underline text-blue-800">
                  politicas de privacidad
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#1b234b] hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Enviar mensaje
            </button>
          </form>
        </section>
      </AnimatedOnScroll>

      <WhatsappButton />
    </main>
  );
}
