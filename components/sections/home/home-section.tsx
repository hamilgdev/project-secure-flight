import { HeaderSection } from '@/components'
import Link from 'next/link'

export const HomeSection = () => {
  return (
    <>
      <div className="absolute top-0 right-0 bg-contain bg-no-repeat bg-right-top bg-[url('/images/cloud-small.png')] min-h-[414px] w-full pointer-events-none z-10" />

      <div className="relative min-h-screen bg-no-repeat bg-cover bg-right-bottom bg-[url('/images/decoration-sky.jpg')]
        after:content['']
        after:absolute
        after:inset-0
        after:bg-gradient-to-b
        after:from-[var(--neutral-background)]
        after:to-transparent
        after:w-full
        after:h-full
    ">
        <HeaderSection />
        <section className='relative z-10 mt-28'>
          <div className="l-container">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className='text-[var(--neutral-thin)] text-3xl font-semibold mb-6'>
                Embarque Seguro, Viaje Sin Preocupaciones con SecureFlight
              </h1>
              <p className='text-[var(--neutral-thin)] text-lg mb-8'>
                Optimice la seguridad y eficiencia en su aeropuerto con SecureFlight.
                Tecnología avanzada para un viaje seguro y fluido.
              </p>
              <Link
                href="/login"
                className="inline-block uppercase shadow-md bg-[var(--complementary)] text-white py-2 px-4 rounded-md min-w-[190px]">Comenzar</Link>
            </div>
          </div>
        </section>
      </div>
      <div className="
        absolute
        bg-cover
        bg-no-repeat
        bg-right-top
        bg-[url('/images/decoration-airplane.png')]
        top-[35%]
        left-[-20%]
        w-full
        min-h-[514px]
        pointer-events-none
        z-20
      "
      />

      <div className="absolute bottom-0 left-0 bg-contain bg-no-repeat bg-left-bottom bg-[url('/images/cloud-medium.png')] min-h-[414px] w-full pointer-events-none z-20" />
    </>
  )
}
