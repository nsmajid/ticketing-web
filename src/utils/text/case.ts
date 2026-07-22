/**
 * Splits a string into normalized words.
 */
function splitWords(value?: string | null): string[] {
  const text = value?.trim() ?? ''

  if (!text) {
    return []
  }

  return text
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.toLowerCase())
}

/**
 * ticket status -> ticketStatus
 * TicketStatus -> ticketStatus
 */
export function toCamelCase(value?: string | null): string {
  const words = splitWords(value)

  if (words.length === 0) {
    return ''
  }

  return words
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('')
}

/**
 * ticket status -> TicketStatus
 */
export function toPascalCase(value?: string | null): string {
  return splitWords(value)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

/**
 * ticket status -> ticket_status
 */
export function toSnakeCase(value?: string | null): string {
  return splitWords(value).join('_')
}

/**
 * ticket status -> ticket-status
 */
export function toKebabCase(value?: string | null): string {
  return splitWords(value).join('-')
}
