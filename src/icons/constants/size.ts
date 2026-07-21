import type { IconSize } from '../types'

/**
 * Tailwind CSS classes mapped to semantic icon sizes.
 */
export const ICON_SIZE: Record<IconSize, string> = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-8',
}

/**
 * Default icon size.
 */
export const DEFAULT_ICON_SIZE: IconSize = 'md'

/**
 * Default Lucide stroke width.
 */
export const DEFAULT_STROKE_WIDTH = 2
