import type { FunctionalComponent, SVGAttributes } from 'vue'

/**
 * Base type for all icon components.
 *
 * Compatible with Lucide Vue and other SVG component libraries.
 */
export type IconComponent = FunctionalComponent<SVGAttributes>

/**
 * Available icon sizes.
 *
 * Mapped to Tailwind utility classes
 * in constants/size.ts.
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Generic registry for icon collections.
 *
 * Example:
 * navigationIcons
 * ticketIcons
 * statusIcons
 */
export type IconRegistry = Record<string, IconComponent>

/**
 * Props used by AppIcon component.
 */
export interface AppIconProps {
  /**
   * Icon component.
   */
  icon: IconComponent

  /**
   * Icon size.
   *
   * Default: md
   */
  size?: IconSize

  /**
   * Stroke width.
   *
   * Default: 2
   */
  strokeWidth?: number

  /**
   * Additional Tailwind classes.
   */
  class?: string
}
