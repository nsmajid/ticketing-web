export interface BuildUrlOptions {
  query?: Record<string, string | number | boolean | null | undefined>
}

/**
 * Builds a URL with query parameters.
 */
export function buildUrl(base: string, { query = {} }: BuildUrlOptions = {}): string {
  const url = new URL(base, window.location.origin)

  Object.entries(query).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') {
      return
    }

    url.searchParams.set(key, String(value))
  })

  return url.toString()
}
/**
 * Returns a query parameter value.
 */
export function getQuery(key: string, url: string = window.location.href): string | null {
  return new URL(url).searchParams.get(key)
}

/**
 * Sets or replaces a query parameter.
 */
export function setQuery(
  key: string,
  value: string | number | boolean,
  url: string = window.location.href,
): string {
  const parsed = new URL(url)

  parsed.searchParams.set(key, String(value))

  return parsed.toString()
}

/**
 * Removes a query parameter.
 */
export function removeQuery(key: string, url: string = window.location.href): string {
  const parsed = new URL(url)

  parsed.searchParams.delete(key)

  return parsed.toString()
}
