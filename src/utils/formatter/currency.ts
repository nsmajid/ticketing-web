import { DEFAULT_CURRENCY, DEFAULT_LOCALE, FORMATTER } from '@/constants'

export interface FormatCurrencyOptions extends Intl.NumberFormatOptions {
  currency?: string
  fractionDigits?: number
}

export function formatCurrency(
  value: number,
  { currency = DEFAULT_CURRENCY, fractionDigits = 0, ...options }: FormatCurrencyOptions = {},
): string {
  if (!Number.isFinite(value)) {
    return FORMATTER.FALLBACK
  }

  return new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    ...options,
  }).format(value)
}
