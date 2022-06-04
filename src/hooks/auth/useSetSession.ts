import { useEffect } from 'react'
import { supabase } from 'src/utils/supabase'
import { API } from 'src/utils/network/config'
import useStore from 'src/store'

export const useSetSession = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)
  const setStandBy = useStore((state) => state.setStandBy)
  const setToken = useStore((state) => state.setToken)
  const setUserId = useStore((state) => state.setUserId)

  useEffect(() => {
    setStandBy(false)
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        const id = session.user?.id
        setUserId(id)
      }
    })
    setTimeout(() => {
      setStandBy(true)
    }, 1000)
  }, [setSession])

  useEffect(() => {
    const login = async (id: string | undefined) =>
      await API.post<{ accessToken: string }>('/auth/signin', { id })
        .then((res) => setToken(res.data.accessToken))
        .catch((error) => console.log(error))
    if (session) {
      const id = session.user?.id
      login(id)
      setUserId(id)
    }
  }, [session, setUserId])
}
