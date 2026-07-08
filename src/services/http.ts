import axios from 'axios'

import { API_CONFIG } from '@/config/api'

export const http = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use(
  (config) => {
    /**
     * JWT akan ditambahkan
     * setelah Authentication selesai.
     */

    return config
  },

  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (response) => response,

  async (error) => {
    /**
     * Refresh Token
     * akan diimplementasikan
     * setelah Authentication.
     */

    return Promise.reject(error)
  },
)
