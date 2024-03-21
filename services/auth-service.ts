import { PUBLIC_API } from '@/constants'

export const postAuthLogin = async (nombreUsuarioLogin: string, claveLogin: string) => {
  const url = `${PUBLIC_API}/autenticarUsuario`
  console.log(url);
  try {
    console.log(JSON.stringify({ nombreUsuario: nombreUsuarioLogin, clave:  claveLogin}));
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombreUsuario: nombreUsuarioLogin, clave:  claveLogin })
    })
    console.log(response);
    const data = await response.json()
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
    
  }
  
  
}