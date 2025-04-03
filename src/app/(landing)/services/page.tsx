// src/app/(landing)/services/page.tsx

export const metadata = {
  title: "Nuestros Servicios | GB Reparaciones en Colima",
  description:
    "Descubre la amplia gama de servicios que ofrecemos en GB Reparaciones. Selecciona una categoría para ver más detalles.",
  keywords: [
    "Servicios de reparación Colima",
    "Mantenimiento computadoras",
    "Reparación de laptops",
    "Soporte técnico Colima",
  ],
};

import Link from "next/link";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

// Definimos las categorías y sus subcategorías (servicios específicos)
const serviceCategories = [
  {
    title: "Reparación y Mantenimiento de Dispositivos Electrónicos",
    description:
      "Servicios especializados para garantizar el óptimo funcionamiento de tus equipos, desde computadoras hasta sistemas de almacenamiento.",
    subcategories: [
      { title: "Computadoras y Laptops", slug: "computadoras-laptops" },
      {
        title: "Almacenamiento y Optimización",
        slug: "almacenamiento-optimizacion",
      },
      {
        title: "Soporte Técnico y Servicio a Domicilio",
        slug: "soporte-tecnico-servicio-domicilio",
      },
    ],
  },
  {
    title: "Infraestructura y Redes",
    description:
      "Implementamos soluciones en redes y comunicaciones, adaptadas a las necesidades de tu empresa o hogar.",
    subcategories: [
      { title: "Infraestructura y Redes", slug: "infraestructura-redes" },
    ],
  },
  {
    title: "Desarrollo de Software y Venta de Equipos",
    description:
      "Desarrollamos software a medida y ofrecemos equipos y accesorios tecnológicos para potenciar tu negocio.",
    subcategories: [
      { title: "Proyectos de Software", slug: "proyectos-de-software" },
      {
        title: "Venta de Equipos y Accesorios",
        slug: "venta-equipos-accesorios",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Encabezado de la página */}
      <AnimatedOnScroll>
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="max-w-2xl mx-auto">
            Descubre la amplia gama de soluciones que ofrecemos en GB
            Reparaciones. Selecciona una categoría para ver más detalles sobre
            cada servicio.
          </p>
        </section>
      </AnimatedOnScroll>

      {/* Listado de categorías con botones para cada servicio específico */}
      <AnimatedOnScroll>
        <section className="py-12 px-6 max-w-7xl mx-auto grid gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow p-6 bg-white"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-4">
                {category.subcategories.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${sub.slug}`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </AnimatedOnScroll>
    </main>
  );
}
