import { PUBLIC_API } from '@/constants'

export const postAuthLogin = async (email: string, password: string) => {
  const url = `${PUBLIC_API}/api/autenticarUsuario`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  const data = await response.json()
  return data
}