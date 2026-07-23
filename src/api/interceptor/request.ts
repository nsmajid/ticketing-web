import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

import { getAccessToken } from '../token'

export function setupRequestInterceptor(client: AxiosInstance): void {
  client.interceptors.request.use(onRequest)
}

function onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  applyDefaultHeaders(config)

  applyAuthorization(config)

  return config
}

function applyDefaultHeaders(config: InternalAxiosRequestConfig): void {
  config.headers.Accept = 'application/json'

  config.headers['Content-Type'] = 'application/json'

  config.headers['X-Requested-With'] = 'XMLHttpRequest'
}

function applyAuthorization(config: InternalAxiosRequestConfig): void {
  const token = getAccessToken()

  if (!token) {
    return
  }

  config.headers.Authorization = `Bearer ${token}`
}
