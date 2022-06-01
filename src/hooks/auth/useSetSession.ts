import { useEffect } from 'react'
import { supabase } from 'src/utils/supabase'
import { API } from 'src/utils/network/config'
import useStore from 'src/store'

export const useSetSession = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)
  const setStandBy = useStore((state) => state.setStandBy)

  useEffect(() => {
    setStandBy(false)
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    setTimeout(() => {
      setStandBy(true)
    }, 1000)
  }, [setSession])

  useEffect(() => {
    const login = async (id: string | undefined) =>
      await API.post('/auth/signin', { id })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error))
    if (session) {
      const id = session.user?.id
      login(id)
    }
  }, [session])
}
