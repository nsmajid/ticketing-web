/**
 * --------------------------------------------------------------------------
 * Authentication
 * --------------------------------------------------------------------------
 */

const AUTH = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
} as const

/**
 * --------------------------------------------------------------------------
 * Dashboard
 * --------------------------------------------------------------------------
 */

const DASHBOARD = {
  HOME: '/dashboard',
} as const

/**
 * --------------------------------------------------------------------------
 * User
 * --------------------------------------------------------------------------
 */

const USER = {
  INDEX: '/users',
  CREATE: '/users/create',
  DETAIL: '/users/:id',
  EDIT: '/users/:id/edit',
} as const

/**
 * --------------------------------------------------------------------------
 * Role
 * --------------------------------------------------------------------------
 */

const ROLE = {
  INDEX: '/roles',
  CREATE: '/roles/create',
  DETAIL: '/roles/:id',
  EDIT: '/roles/:id/edit',
} as const

/**
 * --------------------------------------------------------------------------
 * Ticket
 * --------------------------------------------------------------------------
 */

const TICKET = {
  INDEX: '/tickets',
  CREATE: '/tickets/create',
  DETAIL: '/tickets/:id',
  EDIT: '/tickets/:id/edit',
} as const

/**
 * --------------------------------------------------------------------------
 * Master Data
 * --------------------------------------------------------------------------
 */

const MASTER = {
  APPLICATION: '/master/applications',
  FEATURE: '/master/features',
  CATEGORY: '/master/categories',
  PRIORITY: '/master/priorities',
  STATUS: '/master/statuses',
  WAITING_FOR: '/master/waiting-for',
  SLA: '/master/sla-rules',
} as const

/**
 * --------------------------------------------------------------------------
 * Export
 * --------------------------------------------------------------------------
 */

export const ROUTE = {
  ROOT: '/',

  AUTH,

  DASHBOARD,

  USER,

  ROLE,

  TICKET,

  MASTER,
} as const
