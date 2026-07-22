import type { ID, Nullable, Timestamp, Timestampable } from './common'

import type { UserSummary } from './user'

/**
 * --------------------------------------------------------------------------
 * Attachment Summary
 * --------------------------------------------------------------------------
 */

export interface AttachmentSummary {
  id: ID

  fileName: string
}

/**
 * --------------------------------------------------------------------------
 * Attachment
 * --------------------------------------------------------------------------
 */

export interface Attachment extends Timestampable {
  id: ID

  owner: AttachmentOwner

  uploadedBy: UserSummary

  fileName: string

  originalFileName: string

  mimeType: string

  extension: string

  size: number

  url: string

  previewUrl?: Nullable<string>

  downloadedAt?: Nullable<Timestamp>
}

/**
 * --------------------------------------------------------------------------
 * Upload Attachment
 * --------------------------------------------------------------------------
 */

export interface UploadAttachmentRequest {
  files: File[]
}

export interface AttachmentOwner {
  id: ID
  type: 'ticket' | 'comment'
}
