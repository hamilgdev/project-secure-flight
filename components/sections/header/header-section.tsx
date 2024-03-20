'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const HeaderSection = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header
      className="min-h-[54px] flex items-center bg-transparent relative z-10">
      <div className="l-container">
        <div className="flex items-center justify-between">
          <Link href="/auth/login">
            <Image src="/svgs/logo.svg" alt="Secure Flight" width={133} height={30} />
          </Link>
          {isHomePage && (
            <Link
              href="/auth/login"
              className="uppercase bg-[var(--complementary)] text-white py-2 px-4 rounded-md text-base">
              Comenzar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
