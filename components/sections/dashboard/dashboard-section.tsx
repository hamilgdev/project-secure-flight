import { OverviewCard, UsersTable } from '@/components'
import { UserCheckIcon, UsersIcon } from '@/components/icons'
import Image from 'next/image'

const FAKE_DATA = [
  { id: 1, documento: '920994160', nombre: 'Alan Thomas', email: 'webbgeorge@yahoo.com', telefono: '960.277.4195x80083', rol: 'Conductor', estado: 'Activo' },
  { id: 2, documento: '651345904', nombre: 'Paul Peters', email: 'laura69@yahoo.com', telefono: '453-188-0813x49391', rol: 'Pasajero', estado: 'Inactivo' },
  { id: 3, documento: '930183108', nombre: 'Alex Dunn', email: 'mark79@hogan.com', telefono: '315.775.7246', rol: 'Pasajero', estado: 'Inactivo' },
  { id: 4, documento: '602193448', nombre: 'Susan Campbell', email: 'lhorn@white.info', telefono: '193.427.0103', rol: 'Conductor', estado: 'Inactivo' },
  { id: 5, documento: '248728638', nombre: 'Kara Dillon', email: 'natasha32@gmail.com', telefono: '001-630-695-3445x895', rol: 'Pasajero', estado: 'Inactivo' },
  { id: 6, documento: '028502158', nombre: 'Brenda Booth', email: 'gregory20@white.com', telefono: '522.653.1771', rol: 'Conductor', estado: 'Inactivo' },
  { id: 7, documento: '611605891', nombre: 'George Wilson', email: 'saustin@hotmail.com', telefono: '987.271.4188x6982', rol: 'Pasajero', estado: 'Activo' },
  { id: 8, documento: '376643874', nombre: 'Stephanie Lawson', email: 'robinsontravis@yates.info', telefono: '8869300841', rol: 'Pasajero', estado: 'Activo' },
  { id: 9, documento: '199364940', nombre: 'Denise Phillips', email: 'rebeccamontgomery@yahoo.com', telefono: '093.936.4120x047', rol: 'Pasajero', estado: 'Activo' },
  { id: 10, documento: '075095126', nombre: 'Marissa Hawkins', email: 'catherinelowery@cruz.com', telefono: '689-077-6123', rol: 'Administrador', estado: 'Inactivo' },
  { id: 11, documento: '557450973', nombre: 'Dylan Dyer', email: 'ltorres@yahoo.com', telefono: '(735)031-2605x0048', rol: 'Pasajero', estado: 'Inactivo' },
  { id: 12, documento: '537181248', nombre: 'Dillon Johnson', email: 'hnguyen@hotmail.com', telefono: '(168)622-7542x69784', rol: 'Administrador', estado: 'Inactivo' },
  { id: 13, documento: '692142031', nombre: 'Charles Mitchell', email: 'blairdennis@gmail.com', telefono: '+1-852-771-7407', rol: 'Pasajero', estado: 'Inactivo' },
  { id: 14, documento: '747786263', nombre: 'Angel Taylor', email: 'moorecurtis@petersen.com', telefono: '415.204.1864x84520', rol: 'Administrador', estado: 'Inactivo' },
  { id: 15, documento: '898629912', nombre: 'Stephanie Gibson', email: 'xprice@gmail.com', telefono: '519.971.1564x535', rol: 'Conductor', estado: 'Activo' }
]

export const DashboardSection = () => {
  return (
    <div className="flex h-screen">
      <aside
        className="bg-[var(--neutral-background)] min-w-[205px]"
      >
        <div className="flex justify-center my-8">
          <Image src="/svgs/logo.svg" alt="Secure Flight" width={133} height={30} />
        </div>

        <div className="pl-2">

          <button
            className='relative overflow-hidden min-h-[48px] w-full flex items-center justify-start text-[var(--neutral-thin)] text-sm font-semibold px-4 bg-[var(--neutral-luminous)] rounded-tl-md rounded-bl-md'
          >
            <span className="absolute h-full w-1 top-0 left-0 bg-[var(--complementary)]"></span>
            Overview
          </button>

        </div>
      </aside>
      <main className='flex flex-col p-8 w-full'>
        <header className='flex flex-col'>
          <h2 className='text-[var(--neutral-thin)] font-semibold text-base'>Bienvenido de vuelta, John</h2>
          <p className='text-[var(--neutral-thin)] text-sm'>Vista general del panel</p>
        </header>

        <section className='flex gap-8 my-8'>
          <OverviewCard
            title='Total de usuarios'
            value='250'
            icon={<UsersIcon size="md" />}
          />
          <OverviewCard
            title='Usuarios activos'
            value='250'
            icon={<UserCheckIcon size="md" />}
          />
        </section>

        <section
          className='flex-1 bg-[--neutral-background] p-4 rounded-md overflow-hidden'
        >
          <h2 className='text-[var(--neutral-thin)] font-semibold text-base mb-3'>Actividad de los usuarios</h2>

          <div className="
            overflow-y-auto
            scrollbar-hide
            max-h-full
            pb-6
          ">
            <UsersTable users={FAKE_DATA} />
          </div>
        </section>
      </main>
    </div>
  )
}
