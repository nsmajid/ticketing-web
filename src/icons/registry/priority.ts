import { AlertCircle, AlertTriangle, Flame, Info } from '@lucide/vue'

import type { IconRegistry } from '../types'

/**
 * Ticket priority icon registry.
 *
 * Represents the urgency level of a ticket.
 */
export const priorityIcons: IconRegistry = {
  /**
   * Low Priority
   */
  low: Info,

  /**
   * Medium Priority
   */
  medium: AlertCircle,

  /**
   * High Priority
   */
  high: AlertTriangle,

  /**
   * Critical Priority
   */
  critical: Flame,
}
