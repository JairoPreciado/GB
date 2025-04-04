// src/app/(landing)/services/page.tsx

import ServicesPageClient from "@/components/ServicePageClient";

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

export default function ServicesPage() {
  return <ServicesPageClient />;
}
