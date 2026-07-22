import {
  BadgeCheck,
  Building2,
  KeyRound,
  Lock,
  Shield,
  ShieldCheck,
  User,
  UserCog,
  UserRound,
  Users,
} from '@lucide/vue'

import type { IconRegistry } from '../types'

/**
 * User & Access Management icon registry.
 */
export const userIcons: IconRegistry = {
  /**
   * User
   */
  user: User,

  /**
   * Profile
   */
  profile: UserRound,

  /**
   * Users
   */
  users: Users,

  /**
   * Role
   */
  role: Shield,

  /**
   * Permission
   */
  permission: KeyRound,

  /**
   * Administrator
   */
  administrator: UserCog,

  /**
   * Authentication
   */
  authentication: Lock,

  /**
   * Authorization
   */
  authorization: ShieldCheck,

  /**
   * Organization / Company
   */
  organization: Building2,

  /**
   * Verification
   */
  verified: BadgeCheck,
}
