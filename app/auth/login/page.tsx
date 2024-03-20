import { Metadata } from 'next'

import { LoginSection } from '@/components'

export const metadata: Metadata = {
  title: '🛩️ Secure Flight - Iniciar sesión',
  description: 'Enjoy our awesome teslo shop app!'
}

export default function AuthLoginPage () {
  return <LoginSection />
}
