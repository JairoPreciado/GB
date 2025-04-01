// src/app/services/page.tsx

export const metadata = {
  title: "Servicios | Reparación, redes y desarrollo de software en Colima",
  description:
    "En GB Sistemas Inteligentes ofrecemos reparación de computadoras, instalación y mantenimiento de redes, y desarrollo de software personalizado en Colima.",
  keywords: [
    "servicios GB Colima",
    "reparación de computadoras",
    "instalación de redes Colima",
    "desarrollo de software",
    "soporte técnico Colima",
    "tecnología Colima"
  ],
  openGraph: {
    title: "Servicios | GB reparación de equipos y software en Colima",
    description: "Conoce los servicios que ofrecemos en GB: soporte técnico, redes y desarrollo de software.",
    url: "https://tusitio.com/services",
    type: "website",
    locale: "es_MX"
  },
  twitter: {
    card: "summary",
    title: "Servicios de tecnología | GB Sistemas Inteligentes",
    description: "Ofrecemos soluciones tecnológicas en Colima para hogares y empresas.",
  },
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL("https://tusitio.com"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
    return (
      <section>
        <h2>Bienvenido a mi app Next.js</h2>
        <p>Esta es la página principal.</p>
      </section>
    )
  }
