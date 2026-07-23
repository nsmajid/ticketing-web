/**
 * --------------------------------------------------------------------------
 * Local Storage
 * --------------------------------------------------------------------------
 */

const APP_STORAGE_PREFIX = 'ticketing'

export const LOCAL_STORAGE_KEY = {
  ACCESS_TOKEN: `${APP_STORAGE_PREFIX}:access_token`,
  REFRESH_TOKEN: `${APP_STORAGE_PREFIX}:refresh_token`,
  USER: `${APP_STORAGE_PREFIX}:user`,
  THEME: `${APP_STORAGE_PREFIX}:theme`,
  SIDEBAR_STATE: `${APP_STORAGE_PREFIX}:sidebar_state`,
  LANGUAGE: `${APP_STORAGE_PREFIX}:language`,
} as const

/**
 * --------------------------------------------------------------------------
 * Session Storage
 * --------------------------------------------------------------------------
 */

export const SESSION_STORAGE_KEY = {
  REDIRECT_URL: 'redirect_url',
} as const

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
} as const
