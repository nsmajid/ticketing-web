import dayjs from '@/lib/dayjs'

import type { Dayjs } from 'dayjs'
import type { DateValue } from './formatter'

export function parseDate(value: DateValue): Dayjs | null {
  if (!value) {
    return null
  }

  const date = dayjs(value)

  return date.isValid() ? date : null
}
