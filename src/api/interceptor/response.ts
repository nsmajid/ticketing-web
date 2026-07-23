import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { mapApiError } from '../errors'

export function setupResponseInterceptor(client: AxiosInstance): void {
  client.interceptors.response.use(onResponse, onResponseError)
}

function onResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
  return response
}

function onResponseError(error: AxiosError): Promise<never> {
  return Promise.reject(mapApiError(error))
}
