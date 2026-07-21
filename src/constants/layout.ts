export const PAGE_WIDTH_VARIANTS = {
  full: 'max-w-none',
  screen: 'max-w-screen-2xl',
  '7xl': 'max-w-7xl',
  '6xl': 'max-w-6xl',
  '5xl': 'max-w-5xl',
  '4xl': 'max-w-4xl',
  '3xl': 'max-w-3xl',
  xl: 'max-w-xl',
  lg: 'max-w-lg',
  md: 'max-w-md',
} as const

export type PageWidthVariant = keyof typeof PAGE_WIDTH_VARIANTS

export const PAGE_SPACING_VARIANTS = {
  compact: {
    container: 'p-4',
    content: 'gap-4',
  },

  normal: {
    container: 'p-6',
    content: 'gap-6',
  },

  comfortable: {
    container: 'p-8',
    content: 'gap-8',
  },
} as const

export type PageSpacingVariant = keyof typeof PAGE_SPACING_VARIANTS

export const PAGE_SECTION_VARIANTS = {
  default: 'gap-4',
  compact: 'gap-2',
  comfortable: 'gap-6',
} as const

export type PageSectionVariant = keyof typeof PAGE_SECTION_VARIANTS
