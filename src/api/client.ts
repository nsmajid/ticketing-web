import axios from 'axios'

import { API_CONFIG } from './config'

/**
 * Shared Axios instance for all API requests.
 */
export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,

  timeout: API_CONFIG.timeout,

  headers: API_CONFIG.headers,
})
