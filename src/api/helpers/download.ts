/**
 * Downloads a Blob as a file.
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')

  link.href = url
  link.download = filename

  document.body.appendChild(link)

  link.click()

  link.remove()

  URL.revokeObjectURL(url)
}
/**
 * Downloads a file from URL.
 */
export function downloadUrl(url: string, filename?: string): void {
  const link = document.createElement('a')

  link.href = url

  if (filename) {
    link.download = filename
  }

  link.target = '_blank'

  document.body.appendChild(link)

  link.click()

  link.remove()
}

/**
 * Opens URL in a new browser tab.
 */
export function openUrl(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer')
}
