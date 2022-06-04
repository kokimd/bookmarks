import useStore from 'src/store'

export const useSession = () => {
  const session = useStore((state) => state.session)
  const standby = useStore((state) => state.standBy)
  const token = useStore((state) => state.token)
  const userId = useStore((state) => state.userId)

  return { session, standby, token, userId }
}
