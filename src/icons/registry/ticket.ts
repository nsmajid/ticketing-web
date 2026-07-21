import {
  CalendarClock,
  ClipboardCheck,
  Clock3,
  FilePenLine,
  History,
  MessageSquare,
  Paperclip,
  SquarePen,
  Ticket,
  Timer,
  UserCheck,
  Users,
} from '@lucide/vue'

import type { IconRegistry } from '../types'

/**
 * Ticket domain icon registry.
 *
 * All ticket-related icons should be registered here.
 */
export const ticketIcons: IconRegistry = {
  /**
   * Ticket
   */
  ticket: Ticket,

  /**
   * Comment
   */
  comment: MessageSquare,

  /**
   * Attachment
   */
  attachment: Paperclip,

  /**
   * Timeline / Activity
   */
  history: History,
  timeline: Clock3,

  /**
   * Assignment
   */
  assign: UserCheck,
  assignee: Users,

  /**
   * Review
   */
  review: ClipboardCheck,

  /**
   * Estimation
   */
  estimate: Timer,

  /**
   * Schedule
   */
  schedule: CalendarClock,

  /**
   * Update
   */
  edit: SquarePen,

  /**
   * Change Request
   */
  change: FilePenLine,
}
