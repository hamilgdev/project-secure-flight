
import { LoginForm } from '@/components'

export const LoginSection = () => {
  return (
    <section className='flex flex-col px-4 mt-52 relative z-20'>
      <div className="max-w-lg m-auto">
        <div className="flex flex-col gap-4 text-center mb-8">
          <h1 className='text-xl font-semibold text-[var(--neutral-thin)]'>
        Inicio de sesión
          </h1>
          <p className="text-lg font-light text-[var(--neutral-thin)]">Inicie sesión y comience a administrar a sus usuarios</p>
        </div>
        <LoginForm />
      </div>
    </section>
  )
}
