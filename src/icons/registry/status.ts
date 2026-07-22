import {
  BadgeCheck,
  CircleDashed,
  CirclePause,
  CircleX,
  Clock3,
  Eye,
  LoaderCircle,
} from '@lucide/vue'

import type { IconRegistry } from '../types'

/**
 * Ticket status icon registry.
 *
 * Represents the current lifecycle status of a ticket.
 */
export const statusIcons: IconRegistry = {
  /**
   * Draft
   */
  draft: CircleDashed,

  /**
   * Submitted
   */
  submitted: Eye,

  /**
   * Reviewed
   */
  reviewed: BadgeCheck,

  /**
   * In Progress
   */
  inProgress: LoaderCircle,

  /**
   * Waiting
   */
  waiting: CirclePause,

  /**
   * Resolved
   */
  resolved: BadgeCheck,

  /**
   * Closed
   */
  closed: BadgeCheck,

  /**
   * Cancelled
   */
  cancelled: CircleX,

  /**
   * SLA Warning / Due Soon
   */
  dueSoon: Clock3,
}
