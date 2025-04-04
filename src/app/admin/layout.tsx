// src/app/admin/layout.tsx
import "../../styles/globals.css";

export default function AdminLayout({children,}: { children: React.ReactNode;}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
