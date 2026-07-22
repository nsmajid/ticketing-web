import type { ID, Timestamp } from './common'
import type { Role } from './role'
import type { Permission } from './permission'
/**
 * --------------------------------------------------------------------------
 * Login
 * --------------------------------------------------------------------------
 */

export interface LoginRequest {
  username: string

  password: string
}

export interface LoginResponse {
  accessToken: string

  refreshToken: string

  expiresIn: number

  tokenType: string

  user: AuthUser
}

/**
 * --------------------------------------------------------------------------
 * Refresh Token
 * --------------------------------------------------------------------------
 */

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface RefreshTokenResponse {
  accessToken: string

  refreshToken: string

  expiresIn: number

  tokenType: string
}

/**
 * --------------------------------------------------------------------------
 * Change Password
 * --------------------------------------------------------------------------
 */

export interface ChangePasswordRequest {
  currentPassword: string

  newPassword: string

  confirmPassword: string
}

/**
 * --------------------------------------------------------------------------
 * Auth User
 * --------------------------------------------------------------------------
 */

export interface AuthUser {
  id: ID
  name: string
  username: string
  email: string

  role: Role

  permissions: Permission[]

  lastLoginAt?: Timestamp | null
}
