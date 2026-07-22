/**
 * --------------------------------------------------------------------------
 * Authentication
 * --------------------------------------------------------------------------
 */

const AUTH = {
  LOGIN: 'auth.login',
  LOGOUT: 'auth.logout',
  PROFILE: 'auth.profile',
} as const

/**
 * --------------------------------------------------------------------------
 * Dashboard
 * --------------------------------------------------------------------------
 */

const DASHBOARD = {
  VIEW: 'dashboard.view',
} as const

/**
 * --------------------------------------------------------------------------
 * User
 * --------------------------------------------------------------------------
 */

const USER = {
  VIEW: 'user.view',
  CREATE: 'user.create',
  UPDATE: 'user.update',
  DELETE: 'user.delete',
} as const

/**
 * --------------------------------------------------------------------------
 * Role
 * --------------------------------------------------------------------------
 */

const ROLE = {
  VIEW: 'role.view',
  CREATE: 'role.create',
  UPDATE: 'role.update',
  DELETE: 'role.delete',
} as const

/**
 * --------------------------------------------------------------------------
 * Ticket
 * --------------------------------------------------------------------------
 */

const TICKET = {
  VIEW: 'ticket.view',
  CREATE: 'ticket.create',
  UPDATE: 'ticket.update',
  DELETE: 'ticket.delete',

  REVIEW: 'ticket.review',

  ASSIGN: 'ticket.assign',

  REASSIGN: 'ticket.reassign',

  COMMENT: 'ticket.comment',

  ATTACHMENT: 'ticket.attachment',
} as const

/**
 * --------------------------------------------------------------------------
 * Master Data
 * --------------------------------------------------------------------------
 */

const MASTER = {
  APPLICATION: 'master.application',

  FEATURE: 'master.feature',

  CATEGORY: 'master.category',

  PRIORITY: 'master.priority',

  STATUS: 'master.status',

  WAITING_FOR: 'master.waiting-for',

  SLA: 'master.sla',
} as const

/**
 * --------------------------------------------------------------------------
 * Export
 * --------------------------------------------------------------------------
 */

export const PERMISSION = {
  AUTH,

  DASHBOARD,

  USER,

  ROLE,

  TICKET,

  MASTER,
} as const
