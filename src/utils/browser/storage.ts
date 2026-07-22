export type StorageType = 'local' | 'session'

export interface StorageOptions {
  type?: StorageType
}

function getStorageInstance(type: StorageType = 'local'): Storage | null {
  if (typeof window === 'undefined') {
    return null
  }

  return type === 'local' ? window.localStorage : window.sessionStorage
}

/**
 * Checks whether Web Storage is supported.
 */
export function isStorageSupported(type: StorageType = 'local'): boolean {
  return getStorageInstance(type) !== null
}

/**
 * Stores a value in Web Storage.
 */
export function setStorage<T>(
  key: string,
  value: T,
  { type = 'local' }: StorageOptions = {},
): boolean {
  const storage = getStorageInstance(type)

  if (!storage) {
    return false
  }

  try {
    storage.setItem(key, JSON.stringify(value))

    return true
  } catch {
    return false
  }
}

/**
 * Reads a value from Web Storage.
 */
export function getStorage<T>(key: string, { type = 'local' }: StorageOptions = {}): T | null {
  const storage = getStorageInstance(type)

  if (!storage) {
    return null
  }

  const value = storage.getItem(key)

  if (value === null) {
    return null
  }

  try {
    return JSON.parse(value) as T
  } catch {
    return null
  }
}

/**
 * Removes a value from Web Storage.
 */
export function removeStorage(key: string, { type = 'local' }: StorageOptions = {}): boolean {
  const storage = getStorageInstance(type)

  if (!storage) {
    return false
  }

  storage.removeItem(key)

  return true
}

/**
 * Clears all values from Web Storage.
 */
export function clearStorage({ type = 'local' }: StorageOptions = {}): boolean {
  const storage = getStorageInstance(type)

  if (!storage) {
    return false
  }

  storage.clear()

  return true
}

export function hasStorage(key: string, { type = 'local' }: StorageOptions = {}): boolean {
  const storage = getStorageInstance(type)

  if (!storage) {
    return false
  }

  return storage.getItem(key) !== null
}
