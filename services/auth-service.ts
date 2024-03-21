import { PUBLIC_API } from '@/constants'

export const postAuthLogin = async (nombreUsuario: string, clave: string) => {
  const url = `${PUBLIC_API}/autenticarUsuario`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombreUsuario, clave })
  })
  const data = await response.json()
  return data
}