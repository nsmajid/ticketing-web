import type { DateValue } from './formatter'
import { parseDate } from './parser'

const FALLBACK = '-'

/**
 * Returns relative time.
 *
 * Example:
 * - a few seconds ago
 * - 5 minutes ago
 * - 2 hours ago
 * - a day ago
 */
export function timeAgo(value: DateValue, fallback = FALLBACK): string {
  const date = parseDate(value)

  if (!date) {
    return fallback
  }

  return date.fromNow()
}

/**
 * Alias for timeAgo()
 */
export function fromNow(value: DateValue, fallback = FALLBACK): string {
  return timeAgo(value, fallback)
}
