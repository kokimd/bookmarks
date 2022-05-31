import useStore from 'src/store'

export const useSession = () => {
  const session = useStore((state) => state.session)

  return { session }
}
