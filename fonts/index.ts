import { Lato, Poppins } from 'next/font/google'

export const lato = Lato({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  display: 'swap',
  variable: '--heading-font'
})

export const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300', '600'],
  display: 'swap',
  variable: '--body-font'
})
