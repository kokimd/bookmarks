import { useEffect } from 'react'
import { supabase } from 'src/utils/supabase'
import useStore from 'src/store'

export const useSetSession = () => {
  const setSession = useStore((state) => state.setSession)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])
}
