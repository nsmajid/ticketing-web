import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import { apiClient } from '../client'

function request<TResponse>(config: AxiosRequestConfig): Promise<AxiosResponse<TResponse>> {
  return apiClient.request<TResponse>(config)
}

export function get<TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<TResponse>> {
  return request<TResponse>({
    ...config,
    url,
    method: 'GET',
  })
}

export function post<TResponse, TBody = unknown>(
  url: string,
  data?: TBody,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<TResponse>> {
  return request<TResponse>({
    ...config,
    url,
    method: 'POST',
    data,
  })
}

export function put<TResponse, TBody = unknown>(
  url: string,
  data?: TBody,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<TResponse>> {
  return request<TResponse>({
    ...config,
    url,
    method: 'PUT',
    data,
  })
}

export function patch<TResponse, TBody = unknown>(
  url: string,
  data?: TBody,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<TResponse>> {
  return request<TResponse>({
    ...config,
    url,
    method: 'PATCH',
    data,
  })
}

export function remove<TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<TResponse>> {
  return request<TResponse>({
    ...config,
    url,
    method: 'DELETE',
  })
}
