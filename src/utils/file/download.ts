export interface DownloadOptions {
  /**
   * Download filename.
   */
  filename?: string

  /**
   * Automatically revoke the generated object URL.
   *
   * @default true
   */
  revoke?: boolean
}

/**
 * Downloads a Blob or File using the browser.
 */
export function download(
  file: Blob | File,
  { filename = 'download', revoke = true }: DownloadOptions = {},
): void {
  const url = URL.createObjectURL(file)

  const anchor = document.createElement('a')

  anchor.href = url
  anchor.download = filename
  anchor.style.display = 'none'

  document.body.appendChild(anchor)

  anchor.click()

  document.body.removeChild(anchor)

  if (revoke) {
    URL.revokeObjectURL(url)
  }
}
