import type { ID, Timestampable } from './common'

/**
 * --------------------------------------------------------------------------
 * Permission Summary
 * --------------------------------------------------------------------------
 */

export interface PermissionSummary {
  id: ID

  name: string
}

/**
 * --------------------------------------------------------------------------
 * Permission
 * --------------------------------------------------------------------------
 */

export interface Permission extends Timestampable {
  id: ID

  name: string

  code: string

  description?: string | null

  module: string

  isActive: boolean
}
