/**
 * Returns initials from a person's name.
 *
 * Examples:
 * - John Doe -> JD
 * - John -> J
 * - John Michael Doe -> JD
 */
export function getInitials(value?: string | null, maxLength = 2): string {
  const text = value?.trim() ?? ''

  if (!text || maxLength <= 0) {
    return ''
  }

  const words = text.split(/\s+/).filter(Boolean)

  let initials: string

  if (words.length === 1) {
    initials = words[0].charAt(0)
  } else {
    initials = words[0].charAt(0) + words[words.length - 1].charAt(0)
  }

  return initials.toUpperCase().slice(0, maxLength)
}
