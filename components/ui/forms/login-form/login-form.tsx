'use client'

import { LOCAL_SORAGE_JWT_TOKEN_KEY } from '@/constants'
import { setLocal } from '@/handlers'
import { useHidrationClient } from '@/hooks'
import { postAuthLogin } from '@/services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const LoginForm = () => {
  const router = useRouter()

  const [formValues, setFormValues] = useState({
    nombreUsuario: '',
    clave: ''
  })
  const [loading, setLoading] = useState(false)

  const { isClient } = useHidrationClient()

  if (!isClient) return null

  const onChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { nombreUsuario, clave } = formValues
    if (!nombreUsuario || !clave) return
    
    setLoading(true)

    try {
      const response = await postAuthLogin(nombreUsuario, clave)
      const token = response.token
      if (token) {
        setLocal(LOCAL_SORAGE_JWT_TOKEN_KEY, token)
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  } 

  return (
    <form onSubmit={handleSubmit} className='flex flex-col place-items-center w-full'>
      <div className="mb-4 w-full">
        <label htmlFor="nombreUsuario" arial-label='hidden' className="hidden">Nombre de usuario</label>
        <input
          type="text"
          id="nombreUsuario"
          value={formValues.nombreUsuario}
          name="nombreUsuario"
          className="bg-white text-[var(--neutral-thin)] text-sm rounded-md  block w-full p-2.5"
          placeholder="nombre de usuario"
          onChange={onChnage}
          required
        />
      </div>

      <div className="mb-12 w-full">
        <label htmlFor="clave" arial-label='hidden' className="hidden">Contraseña</label>
        <input
          type="password"
          id="clave"
          value={formValues.clave}
          name="clave"
          className="bg-white text-[var(--neutral-thin)] text-sm rounded-md  block w-full p-2.5"
          placeholder="contraseña"
          onChange={onChnage}
          required
        />
      </div>

      {loading && <p className="text-[var(--complementary)]">Cargando...</p>}
      <button 
        disabled={loading}
        type="submit" className="uppercase bg-[var(--complementary)] text-white py-2 px-4 rounded-md min-w-[190px]">Comenzar</button>
    </form>
  )
}
