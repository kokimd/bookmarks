import { API } from 'src/utils/network/config'

export const useAuth = () => {
  const login = async (id: string | undefined) =>
    await API.post('/auth/signin', { id })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))

  const register = async (id: string | undefined, name: string | undefined) =>
    await API.post('/auth/signup', { id, name })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))

  return { login, register }
}
