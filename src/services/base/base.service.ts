import type {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

import { http } from '@/services/http'

export abstract class BaseService {
  protected get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return http.get<T>(url, config)
  }

  protected post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return http.post<T>(url, data, config)
  }

  protected put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return http.put<T>(url, data, config)
  }

  protected patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return http.patch<T>(url, data, config)
  }

  protected delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return http.delete<T>(url, config)
  }
}