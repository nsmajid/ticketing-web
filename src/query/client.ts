import { QueryClient } from '@tanstack/vue-query'

import { QUERY_DEFAULT_OPTIONS } from './defaults'

export const queryClient = new QueryClient({
  defaultOptions: QUERY_DEFAULT_OPTIONS,
})
