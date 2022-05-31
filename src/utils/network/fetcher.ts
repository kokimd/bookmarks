import axios from 'axios'

export const fetcherGet = (url: string, token?: string) =>
  axios
    .get(url, {
      headers: { Authorization: 'Bearer' + ' ' + token },
      // params: JSON.parse(params),
    })
    .then((res) => {
      console.log('>>> GET [success]', url, res.data)
      return res
    })
    .catch((err) => {
      console.log('>>> GET [error]', err.message, url, err.response)
      if (err?.message.startsWith('Network Error'))
        err.response = { message: 'Network Error' }
      throw err.response
    })
