// src/app/(landing)/page.tsz
export const metadata = {
  title: "STK | Reparación y Software",
  description: "Expertos en reparación de equipos, redes y desarrollo de software en Colima.",
};

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a GB</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Somos expertos en reparación de equipos, infraestructura de redes y desarrollo de software.
        Ofrecemos soluciones personalizadas para empresas y particulares.
        // En cualquier archivo .tsx


      </p>
      <div className="bg-red-500 text-white p-4">Esto debería verse con fondo rojo</div>
    </section>
  );
}
