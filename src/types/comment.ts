import type { ID, Nullable, Timestampable, Timestamp } from './common'

import type { UserSummary } from './user'

import type { TicketSummary } from './ticket'
// import type { AttachmentSummary } from './attachment'

/**
 * --------------------------------------------------------------------------
 * Comment Summary
 * --------------------------------------------------------------------------
 */

export interface CommentSummary {
  id: ID

  message: string
}

/**
 * --------------------------------------------------------------------------
 * Comment
 * --------------------------------------------------------------------------
 */

export interface Comment extends Timestampable {
  id: ID

  ticket: TicketSummary

  author: UserSummary

  message: string

  isInternal: boolean

  parent?: Nullable<CommentSummary>

  editedAt?: Nullable<Timestamp>
}

/**
 * --------------------------------------------------------------------------
 * Comment Detail
 * --------------------------------------------------------------------------
 */

// export interface CommentDetail extends Comment {
//   attachments: AttachmentSummary[]

//   mentions: UserSummary[]
// }

export type CommentDetail = Comment

/**
 * --------------------------------------------------------------------------
 * Create Comment
 * --------------------------------------------------------------------------
 */

export interface CreateCommentRequest {
  message: string

  isInternal?: boolean
}

/**
 * --------------------------------------------------------------------------
 * Update Comment
 * --------------------------------------------------------------------------
 */

export interface UpdateCommentRequest {
  message: string
}
