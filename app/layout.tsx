import type { Metadata } from 'next'
import './globals.css'
import { lato, poppins } from '@/fonts'

export const metadata: Metadata = {
  title: '🛩️ Secure Flight',
  description: 'Optimice la seguridad y eficiencia en su aeropuerto con SecureFlight. Tecnología avanzada para un viaje seguro y fluido.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${lato.variable} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
