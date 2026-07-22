/**
 * Capitalizes the first character of a string.
 *
 * Example:
 * - ticket -> Ticket
 * - open -> Open
 */
export function capitalize(value?: string | null): string {
  const text = value?.trim() ?? ''

  if (!text) {
    return ''
  }

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

/**
 * Converts a string to title case.
 *
 * Example:
 * - ticket management -> Ticket Management
 * - WAITING FOR CLIENT -> Waiting For Client
 */
export function titleCase(value: string): string {
  return value.trim().split(/\s+/).filter(Boolean).map(capitalize).join(' ')
}
