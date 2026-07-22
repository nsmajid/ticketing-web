import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

import { DATE_FORMAT } from '@/constants'
import { parseDate } from './parser'

export type DateValue = string | Date | null | undefined

const FALLBACK = '-'

/**
 * Core formatter
 */
export function format(value: DateValue, pattern: string, fallback = FALLBACK): string {
  const date = parseDate(value)

  if (!date) {
    return fallback
  }

  return date.format(pattern)
}

export function formatDate(value: DateValue): string {
  return format(value, DATE_FORMAT.DATE)
}

export function formatDateTime(value: DateValue): string {
  return format(value, DATE_FORMAT.DATE_TIME)
}

export function formatShortDate(value: DateValue): string {
  return format(value, DATE_FORMAT.SHORT_DATE)
}

export function formatLongDate(value: DateValue): string {
  return format(value, DATE_FORMAT.LONG_DATE)
}

export function formatTime(value: DateValue): string {
  return format(value, DATE_FORMAT.TIME)
}

export function formatIso(value: DateValue): string {
  const date = parse(value)

  if (!date) {
    return FALLBACK
  }

  return date.toISOString()
}

export function isValidDate(value: DateValue): boolean {
  return parse(value) !== null
}
