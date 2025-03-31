export const metadata = {
  title:
    "Nosotros - GB reparación de equipos de cómputo, redes y desarrollo de software",
  description:
    "Conoce un poco más de la empresa y de nuestros serivicios.",
  icons: {
    icon: "/favicon.ico",
  },
};
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-20">
    <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
  {/* Sección de imágenes */}
  <div className="flex gap-4">
    <Image 
      src="/assets/example.png" 
      alt="Team working" 
      className="w-1/2 rounded-2xl shadow-lg"
    />
    <Image
      src="/assets/team.jpg" 
      alt="Meeting discussion" 
      className="w-1/2 rounded-2xl shadow-lg"
    />
  </div>

  {/* Sección de texto */}
  <div>
    <h3 className="text-indigo-600 font-bold text-3xl mt-4 mb-6">¿QUIÉNES SOMOS?</h3>
    <h2 className="text-4xl font-bold text-gray-900 mt-2">
    GB Reparación de Equipos de Cómputo.
    </h2>
    <p className="text-gray-600 mt-4">
      Whether you require expertise in coding, design, testing, or project management, our diverse team is equipped to meet your specific needs. This collaborative approach ensures that your projects succeed.
    </p>

    {/* Sección de misión y visión */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="flex items-center gap-4">
        <div className="bg-indigo-200 p-4 rounded-xl">
        <div> 
              <i className="fas fa-bullseye text-indigo-700 text-3xl"></i>
            </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Misión</h4>
          <p className="text-gray-600 text-sm">
            Through a dedication to continuous learning, we foster a dynamic workforce capable of addressing present-day challenges.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-indigo-200 p-4 rounded-xl">
        <div>
            <i className="fas fa-eye text-indigo-700 text-3xl"></i>
            </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Visión</h4>
          <p className="text-gray-600 text-sm">
            We are committed to transforming the landscape by equipping our team with the skills and knowledge needed.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-12 px-4 bg-indigo-300">
  <div className="container mx-auto text-center">
    
    {/* Título alineado a la derecha */}
    <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6 pr-4">
      Nuestros Valores
    </h2>

    {/* Contenedor de valores en formato horizontal */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center">

      {/* Valor 1: Responsabilidad */}
      <div className="flex items-center bg-green-100 p-4 rounded-lg">
        <i className="fas fa-handshake text-green-600 text-3xl mr-4"></i>
        <div>
          <h3 className="font-bold text-lg">Responsabilidad</h3>
          <p className="text-gray-600 text-sm">Cumplimos con nuestros compromisos en tiempo y forma.</p>
        </div>
      </div>

      {/* Valor 2: Trabajo en equipo */}
      <div className="flex items-center bg-yellow-100 p-4 rounded-lg">
        <i className="fas fa-users text-yellow-600 text-3xl mr-4"></i>
        <div>
          <h3 className="font-bold text-lg">Trabajo en equipo</h3>
          <p className="text-gray-600 text-sm">Fomentamos la colaboración para lograr mejores resultados.</p>
        </div>
      </div>

      {/* Valor 3: Innovación */}
      <div className="flex items-center bg-blue-100 p-4 rounded-lg">
        <i className="fas fa-lightbulb text-blue-600 text-3xl mr-4"></i>
        <div>
          <h3 className="font-bold text-lg">Innovación</h3>
          <p className="text-gray-600 text-sm">Buscamos nuevas soluciones para mejorar cada día.</p>
        </div>
      </div>

      {/* Valor 4: Calidad */}
      <div className="flex items-center bg-red-100 p-4 rounded-lg">
        <i className="fas fa-check-circle text-red-600 text-3xl mr-4"></i>
        <div>
          <h3 className="font-bold text-lg">Calidad</h3>
          <p className="text-gray-600 text-sm">Garantizamos un servicio de excelencia en cada trabajo.</p>
        </div>
      </div>

    </div>
  </div>
</section>
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Enfocados siempre en dar el mejor servicio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Diagnostico de PC</h3>
            <p className="text-gray-700 mt-2">Utilizando programas avanzados para diagnsoticar de una mejor manera.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Mantenimientos</h3>
            <p className="text-gray-700 mt-2">Ofrecemos serivicios de manteniento preventivo y correctivo en equipos gamer y estandar.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Infraestructura y Redes</h3>
            <p className="text-gray-700 mt-2">Instalación y manteniento de redes, equipos de punto a punto, extensores de red, cableado estructurado.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Proyectos de Software</h3>
            <p className="text-gray-700 mt-2">Sistemas de puntos de ventas para restaurantes, desarollo de páginas web, cotizadores y sistemas personalizados.</p>
          </div>
        </div>
</section>
<section className="bg-blue-950 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
            <p>'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique mi."'</p>
            <h3 className="mt-4 font-bold">- Cliente 1</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
            <p>'"Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla ac justo euismod posuere."'</p>
            <h3 className="mt-4 font-bold">- Cliente 2</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
            <p>'"Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa ullamcorper urna."'</p>
            <h3 className="mt-4 font-bold">- Cliente 3</h3>
          </div>
        </div>
      </section>

</main>
  );
}
