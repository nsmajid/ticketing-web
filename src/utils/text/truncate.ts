/**
 * Truncates a string to the specified length.
 *
 * Examples:
 * - Hello World -> Hello...
 * - Very Long Ticket -> Very Long...
 */
export function truncate(value?: string | null, maxLength = 50, suffix = '...'): string {
  const text = value?.trim() ?? ''

  if (!text) {
    return ''
  }

  if (maxLength <= 0) {
    return ''
  }

  if (text.length <= maxLength) {
    return text
  }

  return text.slice(0, maxLength).trimEnd() + suffix
}
