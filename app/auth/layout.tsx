import { AuthLayout } from '@/components'

export default function AuthLoginLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
}
