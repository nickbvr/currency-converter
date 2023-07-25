import axios from 'axios'

export const exchangeClient = axios.create({
  baseURL: import.meta.env.VITE_EXCHANGE_API_URL,
  headers: {
    apiKey: import.meta.env.VITE_EXCHANGE_API_KEY,
  },
})
