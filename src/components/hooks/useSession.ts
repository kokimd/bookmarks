import { useEffect } from 'react'
import { supabase } from 'src/utils/supabase'
import useStore from 'src/store'

export const useSession = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])

  console.log(session)
}
