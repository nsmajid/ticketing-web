export const QUERY_KEYS = {
  auth: {
    profile: () => ['auth', 'profile'] as const,
  },

  users: {
    all: () => ['users'] as const,

    detail: (id: number | string) => ['users', id] as const,

    list: (filters?: Record<string, unknown>) => ['users', filters] as const,
  },

  tickets: {
    all: () => ['tickets'] as const,

    detail: (id: number | string) => ['tickets', id] as const,

    list: (filters?: Record<string, unknown>) => ['tickets', filters] as const,
  },
  applications: {
    all: () => ['applications'] as const,
  },

  priorities: {
    all: () => ['priorities'] as const,
  },

  statuses: {
    all: () => ['statuses'] as const,
  },
} as const
