// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo y enlaces */}
        <div>
          <Image
            src="/assets/icono_navbar.png"
            alt="Logo GB"
            width={200}
            height={200}
            className="mb-4 "
          />
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Políticas de envío y devoluciones
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Política de garantía
              </Link>
            </li>
            <li className="mt-4">Síguenos en</li>
            <div className="flex gap-4 mt-2">
              <Link href="#">
                <i className="fab fa-facebook text-xl" />
              </Link>
              <Link href="#">
                <i className="fab fa-instagram text-xl" />
              </Link>
              <Link href="#">
                <i className="fab fa-tiktok text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-2">CONTÁCTANOS</h3>
          <p className="text-sm">+52 312 123 4567</p>
          <p className="text-sm">contacto@gbcolima.com</p>

          <h4 className="mt-4 font-semibold">Horario</h4>
          <p className="text-sm">Lunes a Viernes de 10 am - 7 pm</p>
          <p className="text-sm">Sábados de 10 am - 3 pm</p>

          <h4 className="mt-4 font-semibold">Envíanos un mensaje</h4>
          <Link
            href="https://wa.me/5213121234567"
            target="_blank"
            className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Whatsapp
          </Link>
        </div>

        {/* Mapa */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Dirección</h3>
          <div className="text-sm">
              <p>Codigo Postal: 28985</p>
              <p>Avenida: Pablo Silva García #253</p>
              <p>Villa de Oro.</p>
              <p>Ciudad de Villa de Álvarez.</p>
              <p>Colima.</p>
            </div>
          <iframe
            title="Ubicación GB"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7532.820410654099!2d-103.75627166750827!3d19.264519600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425453dda2761cd%3A0x620b5177750a321f!2sReparaci%C3%B3n%20de%20Computadoras%20CGESC!5e0!3m2!1ses!2smx!4v1742709917539!5m2!1ses!2smx"
            width="100%"
            height="200"
            loading="lazy"
            className="rounded-md border-none"
          />
        </div>
      </div>
      {/* Derechos */}
      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} GB. Todos los derechos reservados.
      </div>
    </footer>
  );
}
