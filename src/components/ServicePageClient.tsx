// src/components/ServicesPageClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link"; // Para usar el componente Link de Next.js
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

// ----------------------------------------------------------------------
// Definición de los tipos
// ----------------------------------------------------------------------
type SubItem = {
  title: string;
  shortDesc: string;
  detailedDesc: string;
  waMessage: string; // Mensaje para enviar por WhatsApp
};

type SubCategory = {
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string; // Clase de FontAwesome
  items: SubItem[]; // Lista de ítems (tercer nivel)
};

type Category = {
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string; // Clase de FontAwesome
  subcategories: SubCategory[];
};

// ----------------------------------------------------------------------
// Datos: Estructura de Categorías > Subcategorías > Ítems
// ----------------------------------------------------------------------
const serviceCategories: Category[] = [
  {
    title: "Reparación y Mantenimiento de Dispositivos Electrónicos",
    shortDesc:
      "Cuidamos y reparamos tus dispositivos para mantenerlos en óptimo estado.",
    detailedDesc:
      "Ofrecemos soluciones especializadas para computadoras, laptops, unidades de almacenamiento y más. Nuestros técnicos están capacitados para resolver problemas de hardware y software, y brindarte soporte a domicilio cuando lo necesites.",
    icon: "fa-solid fa-screwdriver-wrench",
    subcategories: [
      {
        title: "Computadoras y Laptops",
        shortDesc: "Reparación de PC de escritorio y laptops.",
        detailedDesc:
          "Realizamos diagnósticos completos, reemplazos de hardware dañados, limpieza interna y optimizaciones de software para equipos de escritorio y laptops.",
        icon: "fa-solid fa-laptop",
        items: [
          {
            title: "Reparación de computadoras de escritorio (PC)",
            shortDesc:
              "Mantenimiento y corrección de fallas físicas y lógicas.",
            detailedDesc:
              "Incluye revisión de componentes, reemplazo de piezas defectuosas, instalación de sistemas operativos y soluciones de refrigeración eficiente.",
            waMessage:
              "Hola, estoy interesado en reparar mi PC, ¿puedes ayudarme con eso?",
          },
          {
            title: "Reparación de laptops",
            shortDesc: "Solucionamos problemas de hardware y software.",
            detailedDesc:
              "Cubrimos desde el cambio de pantallas y teclados, hasta el reemplazo de baterías y optimización de rendimiento para diversos modelos.",
            waMessage: "Hola, necesito reparar mi laptop, ¿puedes asesorarme?",
          },
          {
            title: "Reemplazo de hardware",
            shortDesc: "Cambio de discos, memorias RAM y otros componentes.",
            detailedDesc:
              "Si tu equipo necesita más capacidad, velocidad o un componente nuevo, ofrecemos asesoría y servicio de instalación profesional.",
            waMessage:
              "Hola, requiero asesoría para reemplazar componentes en mi equipo.",
          },
        ],
      },
      {
        title: "Almacenamiento y Optimización",
        shortDesc: "Formateo, recuperación de datos y mejoras de rendimiento.",
        detailedDesc:
          "Nos encargamos de formatear tus unidades, clonar discos SSD/HDD, recuperar datos importantes y optimizar el rendimiento general de tu almacenamiento.",
        icon: "fa-solid fa-hdd",
        items: [
          {
            title: "Formateo de unidades de almacenamiento",
            shortDesc: "Inicialización y limpieza completa de discos.",
            detailedDesc:
              "Ya sea para preparar un disco nuevo o limpiar uno en uso, hacemos formateos seguros, con respaldo previo si lo requieres.",
            waMessage: "Hola, quisiera formatear mi disco. ¿Podrías ayudarme?",
          },
          {
            title: "Recuperación de datos en discos duros y SSD",
            shortDesc: "Restauración de archivos borrados o inaccesibles.",
            detailedDesc:
              "Realizamos diagnósticos avanzados para lograr la mayor tasa de recuperación posible, siempre cuidando la integridad del dispositivo.",
            waMessage:
              "Hola, necesito recuperar datos de mi disco. ¿Es posible?",
          },
          {
            title: "Clonado de discos SSD y HDD",
            shortDesc: "Transferencia íntegra de información a un disco nuevo.",
            detailedDesc:
              "Ideal para migrar a un SSD sin reinstalar todo desde cero. Aseguramos una copia exacta del contenido.",
            waMessage:
              "Hola, estoy interesado en clonar mi disco. ¿Cómo funciona?",
          },
          {
            title: "Optimización de unidades de almacenamiento",
            shortDesc: "Mejoramos el rendimiento y la vida útil del disco.",
            detailedDesc:
              "Incluye desfragmentación, eliminación de archivos temporales y ajustes para maximizar la velocidad de lectura/escritura.",
            waMessage: "Hola, ¿podrías ayudarme a optimizar mi disco duro?",
          },
        ],
      },
      {
        title: "Soporte Técnico y Servicio a Domicilio",
        shortDesc:
          "Mantenimientos, asistencias remotas y servicio a domicilio.",
        detailedDesc:
          "Brindamos asistencia remota para la instalación de programas y optimización de dispositivos. También contamos con servicio a domicilio con tarifas ajustadas según la zona.",
        icon: "fa-solid fa-user-wrench",
        items: [
          {
            title: "Mantenimiento correctivo y preventivo",
            shortDesc: "Prevención de averías y corrección de fallas comunes.",
            detailedDesc:
              "Incluye limpieza interna y externa, verificación de integridad de componentes, actualización de software y más.",
            waMessage:
              "Hola, ¿podrías brindarme mantenimiento preventivo a mis equipos?",
          },
          {
            title: "Asistencias remotas",
            shortDesc:
              "Atención inmediata para instalar programas y optimizar tu PC.",
            detailedDesc:
              "Nos conectamos a tu equipo de forma segura para resolver incidencias, instalar software y mejorar el rendimiento del sistema.",
            waMessage:
              "Hola, necesito asistencia remota para mi equipo. ¿Cómo podemos proceder?",
          },
          {
            title: "Servicio a domicilio",
            shortDesc:
              "Visita a tu hogar u oficina para arreglos y configuraciones.",
            detailedDesc:
              "• Colima y Villa de Álvarez: $350\n• Otras ubicaciones: Costo adicional según distancia\n\nTe brindamos apoyo personalizado sin que tengas que salir de casa.",
            waMessage:
              "Hola, me gustaría agendar un servicio a domicilio. ¿Qué disponibilidad tienes?",
          },
        ],
      },
    ],
  },
  {
    title: "Infraestructura y Redes",
    shortDesc: "Soluciones de conectividad para hogares y negocios.",
    detailedDesc:
      "Instalamos y mantenemos redes cableadas e inalámbricas, ofrecemos equipos de punto a punto, cableado estructurado y soporte de telefonía para oficinas y restaurantes.",
    icon: "fa-solid fa-network-wired",
    subcategories: [
      {
        title: "Servicios de Infraestructura y Redes",
        shortDesc: "Conectividad óptima y segura.",
        detailedDesc:
          "Realizamos proyectos integrales de redes, desde la planificación y cableado hasta la implementación de equipos para garantizar un desempeño estable.",
        icon: "fa-solid fa-network-wired",
        items: [
          {
            title: "Instalación y mantenimiento de redes",
            shortDesc: "Redes LAN, WiFi y más.",
            detailedDesc:
              "Configuramos redes cableadas e inalámbricas, optimizando la cobertura y la seguridad de tus conexiones.",
            waMessage:
              "Hola, necesito instalación/mantenimiento de red. ¿Me ayudas?",
          },
          {
            title: "Extensores de red",
            shortDesc: "Amplía la cobertura en espacios grandes.",
            detailedDesc:
              "Ideal para áreas que experimentan señal débil o nula. Ofrecemos instalación y configuración de repetidores WiFi y otros métodos de extensión.",
            waMessage:
              "Hola, quisiera mejorar la señal de mi WiFi. ¿Qué opciones tengo?",
          },
          {
            title: "Equipos de punto a punto",
            shortDesc:
              "Soluciones de alta velocidad para enlazar ubicaciones distantes.",
            detailedDesc:
              "Instalamos equipos especializados que permiten transmitir datos a grandes distancias sin perder rendimiento.",
            waMessage:
              "Hola, me interesa un enlace punto a punto. ¿Podrías orientarme?",
          },
          {
            title: "Cableado estructurado",
            shortDesc: "Organización y eficiencia en la instalación de cables.",
            detailedDesc:
              "Diseñamos e instalamos redes internas con cableado profesional para mejorar la administración y escalabilidad.",
            waMessage:
              "Hola, necesito cableado estructurado. ¿Qué opciones manejas?",
          },
          {
            title: "Telefonía general para oficinas y restaurantes",
            shortDesc: "Sistemas de comunicación adaptados a tus necesidades.",
            detailedDesc:
              "Soluciones conmutadas y VoIP que integran teléfonos fijos, extensiones y funcionalidades avanzadas para empresas.",
            waMessage:
              "Hola, quisiera implementar telefonía en mi oficina. ¿Me explicas?",
          },
          {
            title: "Soporte en audio y video",
            shortDesc: "Instalación y configuración para entornos multimedia.",
            detailedDesc:
              "Montaje y conexión de equipos de audio y video en oficinas, salas de conferencia o establecimientos de atención al público.",
            waMessage:
              "Hola, necesito asistencia para instalar equipos de audio y video.",
          },
        ],
      },
    ],
  },
  {
    title: "Desarrollo de Software y Venta de Equipos",
    shortDesc: "Soluciones digitales y suministro de hardware.",
    detailedDesc:
      "Creamos sistemas a medida, desde puntos de venta hasta sitios web y cotizadores personalizados. Además, contamos con equipos de cómputo de alto desempeño y accesorios.",
    icon: "fa-solid fa-code",
    subcategories: [
      {
        title: "Proyectos de Software",
        shortDesc: "Aplicaciones web, de escritorio y más.",
        detailedDesc:
          "Desarrollamos software enfocado en la eficiencia y la escalabilidad. Adaptamos cada proyecto a los requerimientos específicos de tu negocio.",
        icon: "fa-solid fa-code",
        items: [
          {
            title: "Sistemas de punto de venta para restaurantes",
            shortDesc: "Control de ventas, mesas y pedidos.",
            detailedDesc:
              "Soluciones personalizadas para agilizar la toma de órdenes, facturación, inventarios y reportes en tiempo real.",
            waMessage:
              "Hola, me gustaría desarrollar un punto de venta para mi restaurante.",
          },
          {
            title: "Páginas web",
            shortDesc: "Sitios modernos y responsivos.",
            detailedDesc:
              "Desarrollamos portales corporativos, tiendas en línea y plataformas informativas con diseño a medida.",
            waMessage:
              "Hola, necesito una página web. ¿Puedes darme más detalles?",
          },
          {
            title: "Cotizadores y sistemas personalizados",
            shortDesc: "Herramientas específicas para tu modelo de negocio.",
            detailedDesc:
              "Crea flujos de venta, catálogos de productos y gestiona clientes con soluciones hechas a la medida.",
            waMessage:
              "Hola, estoy interesado en un sistema personalizado para mi negocio.",
          },
        ],
      },
      {
        title: "Venta de Equipos y Accesorios",
        shortDesc: "Todo lo que necesitas para tu set de cómputo.",
        detailedDesc:
          "Contamos con equipos de escritorio y laptops de distintas gamas, impresoras, accesorios de red y más.",
        icon: "fa-solid fa-cart-shopping",
        items: [
          {
            title: "Equipos de cómputo (gaming y estándar)",
            shortDesc: "PCs armadas y laptops para todo tipo de usuarios.",
            detailedDesc:
              "Desde equipos de alta gama para gaming hasta opciones económicas para uso básico, te asesoramos según tu presupuesto y necesidades.",
            waMessage:
              "Hola, quiero comprar un equipo de cómputo. ¿Qué opciones manejas?",
          },
          {
            title: "Impresoras y accesorios tecnológicos",
            shortDesc: "Variedad de modelos para oficina y hogar.",
            detailedDesc:
              "Ofrecemos impresoras de inyección, láser y multifuncionales, además de periféricos para complementar tu entorno de trabajo.",
            waMessage:
              "Hola, ¿qué modelos de impresoras y accesorios tienes disponibles?",
          },
        ],
      },
    ],
  },
];

// ----------------------------------------------------------------------
// Componente principal
// ----------------------------------------------------------------------
export default function ServicesPageClient() {
  // Estado para la subcategoría seleccionada (2º nivel)
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null);
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(
    null
  );

  // Abre el modal con la información de la subcategoría
  const openModal = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
  };

  // Cierra el modal
  const closeModal = () => {
    setSelectedSubCategory(null);
  };

  return (
    <main className="pt-20">
      {/* Sección de encabezado */}
      <AnimatedOnScroll>
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="max-w-2xl mx-auto">
            A continuación, encontrarás nuestras categorías de servicio. Cada
            una incluye subcategorías e ítems específicos. Haz clic en la
            subcategoría que te interese para ver su descripción completa y sus
            ítems detallados.
          </p>
        </section>
      </AnimatedOnScroll>

      {/* Sección de categorías con estilo acordeón */}
      <AnimatedOnScroll>
        <section className="py-12 px-6 max-w-7xl mx-auto space-y-4">
          {serviceCategories.map((category, catIdx) => {
            // Verifica si esta categoría está actualmente expandida
            const isOpen = openCategoryIndex === catIdx;

            return (
              <div
                key={`category-${catIdx}`}
                className="border border-gray-200 rounded-lg bg-white"
              >
                {/* Encabezado de la Categoría (botón del acordeón) */}
                <button
                  onClick={() => setOpenCategoryIndex(isOpen ? null : catIdx)}
                  className="w-full flex items-center justify-between p-4 bg-indigo-50 hover:bg-indigo-100 rounded-t-lg transition-colors focus:outline-none"
                >
                  <div className="flex items-center">
                    {category.icon && (
                      <i
                        className={`${category.icon} text-indigo-600 text-2xl mr-3`}
                      />
                    )}
                    <span className="text-lg font-bold text-gray-800">
                      {category.title}
                    </span>
                  </div>
                  {/* Flecha de acordeón que rota según si está abierto o cerrado */}
                  <i
                    className={`fa-solid fa-chevron-down text-gray-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Contenido Expandible (Subcategorías) */}
                {isOpen && (
                  <div className="px-4 pb-4">
                    {/* Descripción breve de la categoría */}
                    <p className="text-gray-600 my-3">{category.shortDesc}</p>

                    {/* Listado de subcategorías */}
                    <div className="space-y-4 mt-4">
                      {category.subcategories.map((sub, subIdx) => (
                        <div
                          key={`subcategory-${catIdx}-${subIdx}`}
                          className="border border-gray-100 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50"
                        >
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-indigo-700">
                              {sub.title}
                            </h3>
                            <p className="text-sm sm:text-base text-indigo-600 mt-1">
                              {sub.shortDesc}
                            </p>
                          </div>
                          <button
                            onClick={() => openModal(sub)}
                            className="mt-3 sm:mt-0 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                          >
                            Ver más
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </AnimatedOnScroll>

      {/* Modal de subcategoría (2º nivel) */}
      {selectedSubCategory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Botón de cierre */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            {/* Encabezado del modal */}
            <div className="flex items-center mb-4">
              {selectedSubCategory.icon && (
                <i
                  className={`${selectedSubCategory.icon} text-indigo-600 text-3xl mr-3`}
                />
              )}
              <h2 className="text-2xl font-bold">
                {selectedSubCategory.title}
              </h2>
            </div>
            {/* Descripción detallada de la subcategoría */}
            <p className="text-gray-700 mb-4">
              {selectedSubCategory.detailedDesc}
            </p>
            {/* Listado de ítems (subhijos) */}
            <div className="space-y-4">
              {selectedSubCategory.items.map((item, idx) => (
                <div
                  key={`item-${selectedSubCategory.title}-${idx}`}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>Descripción breve:</strong> {item.shortDesc}
                  </p>
                  <p className="text-gray-600 whitespace-pre-line mb-2">
                    <strong>Descripción detallada:</strong> {item.detailedDesc}
                  </p>

                  {/* BOTÓN DE WHATSAPP */}
                  <Link
                    href={`https://wa.me/523141249293?text=${encodeURIComponent(
                      item.waMessage
                    )}`}
                    target="_blank"
                    className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    WhatsApp
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
