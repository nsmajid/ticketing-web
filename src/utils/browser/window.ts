export interface OpenWindowOptions {
  target?: '_blank' | '_self' | '_parent' | '_top'
  features?: string
}

/**
 * Opens a URL in a new browser window or tab.
 */
export function openWindow(
  url: string,
  { target = '_blank', features }: OpenWindowOptions = {},
): Window | null {
  if (typeof window === 'undefined') {
    return null
  }

  return window.open(url, target, features)
}

/**
 * Reloads the current browser window.
 */
export function reloadWindow(): void {
  if (typeof window === 'undefined') {
    return
  }

  window.location.reload()
}

/**
 * Opens the browser print dialog.
 */
export function printWindow(): void {
  if (typeof window === 'undefined') {
    return
  }

  window.print()
}
