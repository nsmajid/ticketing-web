/**
 * Options for slug generation.
 */
export interface SlugOptions {
  /**
   * Character used to separate words.
   *
   * @default '-'
   */
  separator?: '-' | '_'

  /**
   * Convert output to lowercase.
   *
   * @default true
   */
  lowercase?: boolean
}

/**
 * Escapes special characters for RegExp.
 */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Converts a string into a URL-friendly slug.
 *
 * Examples:
 * - Ticket Management -> ticket-management
 * - API & Database -> api-database
 * - Hello World! -> hello-world
 */
export function slug(
  value?: string | null,
  { separator = '-', lowercase = true }: SlugOptions = {},
): string {
  const text = value?.trim() ?? ''

  if (!text) {
    return ''
  }

  let result = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  if (lowercase) {
    result = result.toLowerCase()
  }

  result = result.replace(/[^a-zA-Z0-9]+/g, separator)

  const escapedSeparator = escapeRegExp(separator)

  return result
    .replace(new RegExp(`${escapedSeparator}{2,}`, 'g'), separator)
    .replace(new RegExp(`^${escapedSeparator}|${escapedSeparator}$`, 'g'), '')
}
