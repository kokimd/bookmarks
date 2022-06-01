import axiosBase from 'axios'

export const DOMAIN = 'http://localhost:3000'

const createAxiosClient = () =>
  axiosBase.create({
    baseURL: DOMAIN,
  })

export const API = createAxiosClient()
