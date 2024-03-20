import Link from 'next/link'
import Image from 'next/image'

export const HeaderSection = () => {
  return (
    <header
      className="min-h-[54px] flex items-center bg-transparent relative z-10">
      <div className="l-container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Secure Flight" width={133} height={30} />
          </Link>

          <Link
            href="/dashboard"
            className="uppercase bg-[var(--complementary)] text-white py-2 px-4 rounded-md text-base">
              Comenzar
          </Link>
        </div>
      </div>
    </header>
  )
}
