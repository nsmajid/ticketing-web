import type { Timestamp } from './common'
import type { PaginationMeta } from './pagination'

/**
 * --------------------------------------------------------------------------
 * API Response
 * --------------------------------------------------------------------------
 */

export interface ApiResponse<T> {
  success: boolean

  message: string

  data: T
}

/**
 * --------------------------------------------------------------------------
 * API Collection Response
 * --------------------------------------------------------------------------
 */

export interface ApiCollectionResponse<T> {
  success: boolean

  message: string

  data: T[]
}

/**
 * --------------------------------------------------------------------------
 * API Pagination Response
 * --------------------------------------------------------------------------
 */

export interface ApiPaginatedResponse<T> {
  success: boolean

  message: string

  data: T[]

  meta: PaginationMeta
}

/**
 * --------------------------------------------------------------------------
 * API Error
 * --------------------------------------------------------------------------
 */

export interface ApiErrorResponse {
  success: false

  message: string

  errors?: Record<string, string[]>

  timestamp?: Timestamp
}
