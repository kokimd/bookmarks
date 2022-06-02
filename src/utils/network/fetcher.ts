import { AxiosResponse } from 'axios'
import { API } from './config'

export const fetcherGet = <T>(url: string, token?: string) =>
  API.get<T>(url, {
    headers: { Authorization: 'Bearer' + ' ' + token },
    // params: JSON.parse(params),
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
