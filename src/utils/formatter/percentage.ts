import { DEFAULT_LOCALE, FORMATTER } from '@/constants'

export interface FormatPercentageOptions extends Intl.NumberFormatOptions {
  fractionDigits?: number

  /**
   * true  -> 0.82 = 82%
   * false -> 82 = 82%
   */
  scale?: boolean
}

export function formatPercentage(
  value: number,
  { fractionDigits = 0, scale = true, ...options }: FormatPercentageOptions = {},
): string {
  if (!Number.isFinite(value)) {
    return FORMATTER.FALLBACK
  }

  const percentage = scale ? value : value / 100

  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    ...options,
  }).format(percentage)
}
