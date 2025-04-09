// src/app/(landing)/contact/page.tsx
export const metadata = {
  title: "Contacto | GB Reparaciones en Colima",
  description:
    "¿Tienes dudas o necesitas una reparación? Ponte en contacto con GB Reparaciones. Estamos listos para brindarte asistencia en Colima.",
  keywords: [
    "Contacto GB Reparaciones",
    "Servicio técnico Colima",
    "Reparación de computadoras",
    "Soporte técnico Colima",
  ],
};

import Image from "next/image";
import Link from "next/link";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import WhatsappButton from "@/components/WhatsappButton";
import ChatBot from "@/chatbot/components/ChatWidget"; // Importa tu componente de chatbot
import ContactForm from "@/components/ContactForm"; // Asegúrate de que la ruta sea correcta

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Sección Principal (Imagen + Texto) */}
      <AnimatedOnScroll>
        <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen principal */}
          <div className="w-full h-[350px] relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/contacto.webp"
              alt="Persona contactando a servicio técnico"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido textual */}
          <div>
            <h3 className="text-indigo-600 font-bold text-2xl mb-2">
              ¿NECESITAS AYUDA?
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Hablemos de tu proyecto!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              En GB Reparaciones estamos siempre dispuestos a escuchar tus
              dudas, requerimientos y sugerencias. Completa el formulario o
              contáctanos por los medios que prefieras. Nuestro equipo te
              responderá a la brevedad para ayudarte a encontrar la mejor
              solución.
            </p>
            <Link
              href="#contact-form"
              className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Ir al Formulario
            </Link>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Sección Destacados (Razones para Contactarnos) */}
      <AnimatedOnScroll>
        <section className="py-20 px-6 bg-indigo-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-10">
              ¿Por qué contactarnos?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Respuesta Rápida",
                  icon: "fa-clock",
                  color: "text-blue-600",
                  bg: "bg-blue-100",
                  desc: "Atendemos tus solicitudes con la urgencia que merecen.",
                },
                {
                  title: "Asesoría Experta",
                  icon: "fa-comments",
                  color: "text-purple-600",
                  bg: "bg-purple-100",
                  desc: "Nuestro equipo está capacitado para resolver cualquier duda.",
                },
                {
                  title: "Soluciones Integrales",
                  icon: "fa-cogs",
                  color: "text-green-600",
                  bg: "bg-green-100",
                  desc: "Deja todo en nuestras manos; abarcamos desde diagnósticos hasta implementación.",
                },
                {
                  title: "Atención Personalizada",
                  icon: "fa-user-friends",
                  color: "text-red-600",
                  bg: "bg-red-100",
                  desc: "Recibes un trato cercano, entendiendo a profundidad tus necesidades.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-left"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl ${item.bg} ${item.color} text-3xl mb-4`}
                  >
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Sección Información de Contacto */}
      <AnimatedOnScroll>
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              Información de Contacto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Datos de la empresa */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center mb-4 text-indigo-700 text-3xl">
                  <i className="fas fa-building"></i>
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  Información de la empresa
                </h3>
                <p>GB Sistemas Inteligentes</p>
                <p>RFC: GBSI850101XXX</p>
              </div>

              {/* Teléfonos de contacto */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center mb-4 text-green-600 text-3xl">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="text-lg font-semibold mb-1">Contáctanos</h3>
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
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Llamar
                  </Link>
                </div>
              </div>

              {/* Dirección */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center mb-4 text-red-600 text-3xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                <p>Villa de Álvarez, Colima, México</p>
                <p>Avenida Pablo Silva #253</p>
                <p>CP: 28985</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Formulario de Contacto */}
      <AnimatedOnScroll>
        <section id="contact-form" className="py-20 px-6 bg-indigo-200">
          <div className="bg-white p-8 rounded-lg shadow space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Envíanos un Mensaje
            </h2>
            <ContactForm />
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Botón flotante de WhatsApp y chatbot*/}
      <WhatsappButton />
      <ChatBot />
    </main>
  );
}
