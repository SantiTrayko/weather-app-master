import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/',
  timeout: 3000,
  mode: 'cors',
  credentials: 'include',
})

// bdd594109e8e4008a7263003220201
