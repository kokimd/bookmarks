import { AxiosResponse } from 'axios'
import { API } from './config'

export const fetcherGet = <T>(url: string, token?: string) =>
  API.get<T>(url, {
    headers: { Authorization: 'Bearer' + ' ' + token },
  })
    .then((res: AxiosResponse<T>) => {
      console.log('>>> GET [success]', url, res.data)
      return res
    })
    .catch((err) => {
      console.log('>>> GET [error]', err.message, url, err.response)
      if (err?.message.startsWith('Network Error'))
        err.response = { message: 'Network Error' }
      throw err.response
    })

export const fetcherPost = <T>(
  url: string,
  body: Record<string, unknown>,
  token?: string,
) =>
  API.post<T>(url, body, {
    headers: { Authorization: 'Bearer' + ' ' + token },
  })
    .then((res: AxiosResponse<T>) => {
      console.log('>>> POST [success]', url, res.data)
      return { data: res.data, err: null }
    })
    .catch((err) => {
      console.log('>>> POST [error]', url, err.response)
      return { data: null, err: err.response }
    })
