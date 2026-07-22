import type { ID, Timestampable } from './common'

/**
 * --------------------------------------------------------------------------
 * Role Summary
 * --------------------------------------------------------------------------
 */

export interface RoleSummary {
  id: ID

  name: string
}

/**
 * --------------------------------------------------------------------------
 * Role
 * --------------------------------------------------------------------------
 */

export interface Role extends Timestampable {
  id: ID

  name: string

  code: string

  description?: string | null

  isActive: boolean
}

/**
 * --------------------------------------------------------------------------
 * Role Detail
 * --------------------------------------------------------------------------
 */

import type { Permission } from './permission'

export interface RoleDetail extends Role {
  permissions: Permission[]
}
