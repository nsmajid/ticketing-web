import type { QueryKey, InvalidateQueryFilters } from '@tanstack/vue-query'

import { queryClient } from '../client'

/**
 * Invalidates a single query.
 */
export function invalidateQuery(queryKey: QueryKey): Promise<void> {
  return queryClient.invalidateQueries({
    queryKey,
    exact: true,
  })
}

/**
 * Invalidates multiple queries.
 */
export function invalidateQueries(filters?: InvalidateQueryFilters): Promise<void> {
  return queryClient.invalidateQueries(filters)
}

/**
 * Removes a query from cache.
 */
export function removeQuery(queryKey: QueryKey): void {
  queryClient.removeQueries({
    queryKey,
    exact: true,
  })
}

/**
 * Clears all query cache.
 */
export function clearCache(): void {
  queryClient.clear()
}
