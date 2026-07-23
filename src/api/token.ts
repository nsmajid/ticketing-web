import { STORAGE_KEYS } from '@/constants'
import { getStorage, removeStorage, setStorage } from '@/utils'

/**
 * Stores the access token.
 */
export function setAccessToken(token: string): boolean {
  return setStorage(STORAGE_KEYS.ACCESS_TOKEN, token)
}

/**
 * Returns the stored access token.
 */
export function getAccessToken(): string | null {
  return getStorage<string>(STORAGE_KEYS.ACCESS_TOKEN)
}

/**
 * Removes the stored access token.
 */
export function clearAccessToken(): boolean {
  return removeStorage(STORAGE_KEYS.ACCESS_TOKEN)
}
