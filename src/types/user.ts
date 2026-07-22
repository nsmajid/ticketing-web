import type { ID, Nullable, Timestamp, Timestampable } from './common'

import type { Role } from './role'

/**
 * --------------------------------------------------------------------------
 * User Summary
 * --------------------------------------------------------------------------
 */

export interface UserSummary {
  id: ID

  name: string

  email: string
}

/**
 * --------------------------------------------------------------------------
 * User
 * --------------------------------------------------------------------------
 */

export interface User extends Timestampable {
  id: ID

  username: string

  name: string

  email: string

  phone?: Nullable<string>

  role: Role

  isActive: boolean
}

/**
 * --------------------------------------------------------------------------
 * User Detail
 * --------------------------------------------------------------------------
 */

export interface UserDetail extends User {
  lastLoginAt?: Nullable<Timestamp>
}

/**
 * --------------------------------------------------------------------------
 * Create User
 * --------------------------------------------------------------------------
 */

export interface CreateUserRequest {
  username: string

  name: string

  email: string

  phone?: Nullable<string>

  roleId: ID

  password: string

  confirmPassword: string
}

/**
 * --------------------------------------------------------------------------
 * Update User
 * --------------------------------------------------------------------------
 */

export interface UpdateUserRequest {
  username: string

  name: string

  email: string

  phone?: Nullable<string>

  roleId: ID

  isActive: boolean
}
