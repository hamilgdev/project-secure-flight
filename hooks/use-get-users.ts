import { LOCAL_SORAGE_JWT_TOKEN_KEY } from '@/constants'
import { getLocal } from '@/handlers'
import { getUsers } from '@/services'
import { useCallback, useEffect, useState } from 'react'

export const useGetUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlerGetUsers = useCallback(async () => {
    const jwt = getLocal(LOCAL_SORAGE_JWT_TOKEN_KEY)

    if (!jwt) return;

    setLoading(true)

    try {
      const response = await getUsers({ jwt })
      setUsers(response)
    } catch (error) {
      setError(error as any)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handlerGetUsers()
  }, [handlerGetUsers])

  return { users, loading, error }
}