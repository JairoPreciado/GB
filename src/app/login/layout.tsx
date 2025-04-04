// src/app/login/layout.tsx
import "../../styles/globals.css";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
