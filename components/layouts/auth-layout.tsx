import { HeaderSection } from '@/components'

interface Props {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className='h-screen bg-[var(--neutral-background)] flex flex-col'>
      <HeaderSection />
      <main className='flex-1 h-full'>
        <div className="absolute top-0 right-0 bg-contain bg-no-repeat bg-right-top bg-[url('/images/clouds-semi.png')] min-h-[414px] w-full pointer-events-none" />
        {children}
        <div className="absolute bottom-0 right-0 bg-contain bg-no-repeat bg-right-bottom bg-[url('/images/clouds-big.png')] min-h-[414px] w-full pointer-events-none" />
      </main>
    </div>
  )
}
