import type { ID, Nullable, Timestampable, Timestamp } from './common'

import type { UserSummary } from './user'

/**
 * --------------------------------------------------------------------------
 * Master Summary
 * --------------------------------------------------------------------------
 */

export interface MasterSummary {
  id: ID

  name: string
}

/**
 * --------------------------------------------------------------------------
 * Ticket Summary
 * --------------------------------------------------------------------------
 */

export interface TicketSummary {
  id: ID

  ticketNumber: string

  title: string
}

/**
 * --------------------------------------------------------------------------
 * Ticket
 * --------------------------------------------------------------------------
 */

export interface Ticket extends Timestampable {
  id: ID

  ticketNumber: string

  title: string

  description: string

  application: MasterSummary

  feature?: Nullable<MasterSummary>

  category: MasterSummary

  priority: MasterSummary

  status: MasterSummary

  waitingFor?: Nullable<MasterSummary>

  requester: UserSummary

  assignee?: Nullable<UserSummary>

  estimatedHours?: Nullable<number>

  actualHours?: Nullable<number>

  dueDate?: Nullable<Timestamp>
}

/**
 * --------------------------------------------------------------------------
 * Ticket Detail
 * --------------------------------------------------------------------------
 */

// export interface TicketDetail extends Ticket {
//   //
// }

export type TicketDetail = Ticket
export interface CreateTicketRequest {
  title: string

  description: string

  applicationId: ID

  featureId?: Nullable<ID>

  categoryId: ID

  priorityId: ID
}

export interface UpdateTicketRequest {
  title: string

  description: string

  applicationId: ID

  featureId?: Nullable<ID>

  categoryId: ID

  priorityId: ID
}
