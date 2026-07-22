import type { SortDirection } from './common'

/**
 * --------------------------------------------------------------------------
 * Pagination Meta
 * --------------------------------------------------------------------------
 */

export interface PaginationMeta {
  currentPage: number

  perPage: number

  total: number

  lastPage: number

  from: number | null

  to: number | null
}

/**
 * --------------------------------------------------------------------------
 * Pagination Query
 * --------------------------------------------------------------------------
 */

export interface PaginationQuery {
  page?: number

  perPage?: number
}

/**
 * --------------------------------------------------------------------------
 * Sorting Query
 * --------------------------------------------------------------------------
 */

export interface SortQuery {
  sortBy?: string

  sortDirection?: SortDirection
}

/**
 * --------------------------------------------------------------------------
 * Search Query
 * --------------------------------------------------------------------------
 */

export interface SearchQuery {
  search?: string
}

/**
 * --------------------------------------------------------------------------
 * Pagination Request
 * --------------------------------------------------------------------------
 */

// export interface PaginationRequest extends PaginationQuery {}

// export interface ListQuery extends PaginationQuery, SortQuery, SearchQuery {}

/**
 * --------------------------------------------------------------------------
 * Pagination State
 * --------------------------------------------------------------------------
 */

export interface PaginationState {
  page: number

  perPage: number

  total: number

  lastPage: number

  loading: boolean
}
