import type { DefaultOptions } from '@tanstack/vue-query'

const ONE_MINUTE = 60 * 1000
const FIVE_MINUTES = 5 * ONE_MINUTE

export const QUERY_DEFAULT_OPTIONS: DefaultOptions = {
  queries: {
    retry: 1,

    staleTime: ONE_MINUTE,

    gcTime: FIVE_MINUTES,

    refetchOnWindowFocus: false,

    refetchOnReconnect: true,

    refetchOnMount: true,
  },

  mutations: {
    retry: 0,
  },
}
