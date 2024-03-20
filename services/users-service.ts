import { PUBLIC_API } from '@/constants'

export const getUsers = async ({ jwt }: { jwt: string }) => {
  const url = `${PUBLIC_API}/api/listarUsuarios`
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `${jwt}`
  }

  const response = await fetch(url, { headers })
  const data = await response.json()
  return data
}