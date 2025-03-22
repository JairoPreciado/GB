// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="w-full p-4 bg-gray-800 text-white text-center mt-10">
        <p>&copy; {new Date().getFullYear()} GB. Todos los derechos reservados.</p>
      </footer>
    );
  }
  