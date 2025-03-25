// app/layout.tsx
import '../../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mi App Next.js',
  description: 'Una aplicación web con Next.js 13+',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
          <h1>Mi App</h1>
        </header>
        <main style={{ padding: '1rem' }}>
          {children}
        </main>
        <footer style={{ padding: '1rem', backgroundColor: '#eee' }}>
          <p>© 2025 Mi Empresa</p>
        </footer>
      </body>
    </html>
  )
}
