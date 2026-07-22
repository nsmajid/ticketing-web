import { ROUTE } from './route'

/**
 * --------------------------------------------------------------------------
 * Authentication
 * --------------------------------------------------------------------------
 */

export const AUTH = {
  TOKEN_TYPE: 'Bearer',
  AUTHORIZATION_HEADER: 'Authorization',
  REFRESH_THRESHOLD: 60,

  LOGIN_REDIRECT: ROUTE.DASHBOARD.HOME,
  LOGOUT_REDIRECT: ROUTE.AUTH.LOGIN,
} as const

/**
 * --------------------------------------------------------------------------
 * Authentication Status
 * --------------------------------------------------------------------------
 */

export const AUTH_STATUS = {
  AUTHENTICATED: 'authenticated',

  UNAUTHENTICATED: 'unauthenticated',

  LOADING: 'loading',
} as const
