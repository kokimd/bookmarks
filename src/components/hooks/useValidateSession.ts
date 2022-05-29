import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useStore from 'src/store'

export const useValidateSession = () => {
  const router = useRouter()
  const { pathname, push } = router
  const session = useStore((state) => state.session)

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
