import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSession } from './auth/useSession'

export const useValidateSession = () => {
  const router = useRouter()
  const { pathname, push } = router
  const { session, standby } = useSession()

  const pushToLogin = () => {
    if (!session && standby) push('/login')
  }

  const pushToHome = () => {
    if (session && pathname === '/login') push('/')
  }

  useEffect(() => {
    pushToHome()
  }, [session])

  return { pushToLogin }
}
