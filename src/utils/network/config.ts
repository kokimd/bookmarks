import axiosBase from 'axios'

export const DOMAIN = 'http://localhost:8080'

const createAxiosClient = () =>
  axiosBase.create({
    baseURL: DOMAIN,
  })

export const API = createAxiosClient()
