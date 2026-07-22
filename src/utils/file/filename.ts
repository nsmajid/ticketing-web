import { getExtension } from './extension'

/**
 * Returns the filename without its extension.
 *
 * Examples:
 * - ticket.pdf -> ticket
 * - archive.tar.gz -> archive.tar
 * - README -> README
 */
export function getFilename(value?: string | null): string {
  const filename = value?.trim() ?? ''

  if (!filename) {
    return ''
  }

  const extension = getExtension(filename)

  if (!extension) {
    return filename
  }

  return filename.slice(0, -(extension.length + 1))
}

/**
 * Appends a suffix before the file extension.
 *
 * Examples:
 * - ticket.pdf + "-v2" -> ticket-v2.pdf
 * - report + "-draft" -> report-draft
 */
export function appendFilename(value?: string | null, suffix?: string | null): string {
  const filename = value?.trim() ?? ''
  const text = suffix?.trim() ?? ''

  if (!filename) {
    return ''
  }

  if (!text) {
    return filename
  }

  const extension = getExtension(filename)
  const name = getFilename(filename)

  if (!extension) {
    return `${name}${text}`
  }

  return `${name}${text}.${extension}`
}

/**
 * Prepends a prefix before the filename.
 *
 * Examples:
 * - ticket.pdf + "copy-" -> copy-ticket.pdf
 * - report + "new-" -> new-report
 */
export function prependFilename(value?: string | null, prefix?: string | null): string {
  const filename = value?.trim() ?? ''
  const text = prefix?.trim() ?? ''

  if (!filename) {
    return ''
  }

  if (!text) {
    return filename
  }

  return `${text}${filename}`
}
