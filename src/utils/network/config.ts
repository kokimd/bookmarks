import axiosBase from 'axios'

export const DOMAIN = 'http://localhost:3000'

const createAxiosClient = () =>
  axiosBase.create({
    baseURL: DOMAIN,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
    timeout: 15 * 1000,
    withCredentials: true,
  })

export const API = createAxiosClient()
