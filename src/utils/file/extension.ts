/**
 * Returns the file extension without the leading dot.
 *
 * Examples:
 * - ticket.pdf -> pdf
 * - archive.tar.gz -> gz
 * - README -> ''
 */
export function getExtension(value?: string | null): string {
  const filename = value?.trim() ?? ''

  if (!filename) {
    return ''
  }

  const index = filename.lastIndexOf('.')

  if (index <= 0 || index === filename.length - 1) {
    return ''
  }

  return filename.slice(index + 1).toLowerCase()
}

/**
 * Checks whether a filename has an extension.
 */
export function hasExtension(value?: string | null): boolean {
  return getExtension(value) !== ''
}

/**
 * Removes the extension from a filename.
 *
 * Examples:
 * - ticket.pdf -> ticket
 * - archive.tar.gz -> archive.tar
 */
export function removeExtension(value?: string | null): string {
  const filename = value?.trim() ?? ''

  if (!filename) {
    return ''
  }

  const index = filename.lastIndexOf('.')

  if (index <= 0) {
    return filename
  }

  return filename.slice(0, index)
}

/**
 * Replaces or adds a file extension.
 *
 * Examples:
 * - ticket.pdf + png -> ticket.png
 * - ticket + pdf -> ticket.pdf
 */
export function changeExtension(value?: string | null, extension?: string | null): string {
  const filename = removeExtension(value)

  const ext = extension?.trim().replace(/^\./, '').toLowerCase()

  if (!filename) {
    return ''
  }

  if (!ext) {
    return filename
  }

  return `${filename}.${ext}`
}
