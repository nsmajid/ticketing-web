import { DEFAULT_LOCALE, FORMATTER } from '@/constants'
import { FILE_SIZE_UNITS } from '@/constants'

export interface FormatFileSizeOptions {
  fractionDigits?: number
}

export function formatFileSize(
  bytes: number,
  { fractionDigits = 2 }: FormatFileSizeOptions = {},
): string {
  if (!Number.isFinite(bytes)) {
    return FORMATTER.FALLBACK
  }

  if (bytes < 0) {
    return FORMATTER.FALLBACK
  }

  if (bytes === 0) {
    return '0 B'
  }

  const unitIndex = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    FILE_SIZE_UNITS.length - 1,
  )

  const value = bytes / Math.pow(1024, unitIndex)

  const formatted = new Intl.NumberFormat(DEFAULT_LOCALE, {
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  }).format(value)

  return `${formatted} ${FILE_SIZE_UNITS[unitIndex]}`
}
