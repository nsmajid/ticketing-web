export const API_ENDPOINT = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
    REFRESH: '/auth/refresh',
  },

  USER: {
    INDEX: '/users',
  },

  TICKET: {
    INDEX: '/tickets',
  },
} as const