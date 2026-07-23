import type { AxiosError } from 'axios'
import type { ApiErrorResponse } from '@/types'
import { ApiError } from './api-error'

export function mapApiError(error: AxiosError<ApiErrorResponse>): ApiError {
  const data = error.response?.data

  return new ApiError({
    message: data?.message ?? error.message ?? 'Unexpected error.',
    status: error.response?.status ?? 0,
    code: data?.code,
    errors: data?.errors,
    original: error,
  })
}
