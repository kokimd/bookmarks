import useStore from 'src/store'

export const useSession = () => {
  const session = useStore((state) => state.session)
  const standby = useStore((state) => state.standBy)

  return { session, standby }
}
