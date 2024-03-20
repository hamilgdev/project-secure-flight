import Link from 'next/link'
import Image from 'next/image'

export const HeaderSection = () => {
  return (
    <header
      className="min-h-[54px] flex items-center z-10 bg-transparent">
      <div className="l-container">
        <div className="">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Secure Flight" width={133} height={30} />
          </Link>
        </div>
      </div>
    </header>
  )
}
