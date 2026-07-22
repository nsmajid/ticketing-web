import { DEFAULT_LOCALE } from '@/constants'
import { FORMATTER } from '@/constants'

export interface FormatNumberOptions extends Intl.NumberFormatOptions {
  fractionDigits?: number
}

export function formatNumber(
  value: number,
  { fractionDigits = 0, ...options }: FormatNumberOptions = {},
): string {
  if (!Number.isFinite(value)) {
    return FORMATTER.FALLBACK
  }

  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    ...options,
  }).format(value)
}
