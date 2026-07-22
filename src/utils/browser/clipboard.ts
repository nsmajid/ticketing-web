/**
 * Checks whether the Clipboard API is supported.
 */
export function isClipboardSupported(): boolean {
  return typeof navigator !== 'undefined' && !!navigator.clipboard
}

/**
 * Copies text to the clipboard.
 *
 * Returns true if the operation succeeds.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!isClipboardSupported()) {
    return false
  }

  try {
    await navigator.clipboard.writeText(text)

    return true
  } catch {
    return false
  }
}

/**
 * Reads text from the clipboard.
 *
 * Returns null if the operation fails.
 */
export async function readClipboard(): Promise<string | null> {
  if (!isClipboardSupported()) {
    return null
  }

  try {
    return await navigator.clipboard.readText()
  } catch {
    return null
  }
}
