import { ENV } from './env'

export const API_CONFIG = {
  baseURL: ENV.API_BASE_URL,

  timeout: ENV.API_TIMEOUT,

  headers: {
    Accept: 'application/json',

    'Content-Type': 'application/json',
  },
} as const
