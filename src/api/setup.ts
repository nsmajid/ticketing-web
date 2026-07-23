import { apiClient } from './client'

import { setupRequestInterceptor } from './interceptor/request'
import { setupResponseInterceptor } from './interceptor/response'

export function setupApiClient(): void {
  setupRequestInterceptor(apiClient)

  setupResponseInterceptor(apiClient)
}
