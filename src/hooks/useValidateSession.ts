import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSession } from './auth/useSession'

export const useValidateSession = () => {
  const router = useRouter()
  const { pathname, push } = router
  const { session } = useSession()

  const pushToLogin = () => {
    if (!session) push('/login')
  }

  const pushToHome = () => {
    if (session && pathname === '/login') push('/')
  }

  useEffect(() => {
    pushToHome()
  }, [])

  return { pushToLogin }
}
