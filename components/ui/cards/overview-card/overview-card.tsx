
interface OverviewCardProps {
  title: string
  value: string
  icon: React.ReactNode
}

export const OverviewCard = ({ title, value, icon }: OverviewCardProps) => {
  return (
    <article className='bg-[--neutral-background] p-4 rounded-md min-w-[369px]'>
      <header className='mb-2'>
        <h3 className='text-[var(--neutral-thin)]'>{title}</h3>
      </header>
      <main className='flex gap-2 items-center'>
        {icon}
        <span className='text-2xl font-semibold text-[var(--neutral-thin)]'>{value}</span>
      </main>
    </article>
  )
}
