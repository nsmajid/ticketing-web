/**
 * --------------------------------------------------------------------------
 * API Version
 * --------------------------------------------------------------------------
 */

export const API_VERSION = 'v1'

/**
 * --------------------------------------------------------------------------
 * API Prefix
 * --------------------------------------------------------------------------
 */

export const API_PREFIX = `/api/${API_VERSION}`

/**
 * --------------------------------------------------------------------------
 * API Timeout
 * --------------------------------------------------------------------------
 */

export const API_TIMEOUT = 30_000

/**
 * --------------------------------------------------------------------------
 * Default Header
 * --------------------------------------------------------------------------
 */

export const API_HEADER = {
  JSON: 'application/json',
  MULTIPART: 'multipart/form-data',
} as const

/**
 * --------------------------------------------------------------------------
 * HTTP Method
 * --------------------------------------------------------------------------
 */

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const

/**
 * --------------------------------------------------------------------------
 * API Endpoint
 * --------------------------------------------------------------------------
 */

export const API_ENDPOINT = {
  /**
   * Authentication
   */
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
    REFRESH: '/auth/refresh',
    CHANGE_PASSWORD: '/auth/change-password',
  },

  /**
   * User
   */
  USER: {
    INDEX: '/users',
    STORE: '/users',
    SHOW: '/users/:id',
    UPDATE: '/users/:id',
    DELETE: '/users/:id',
  },

  /**
   * Role
   */
  ROLE: {
    INDEX: '/roles',
    STORE: '/roles',
    SHOW: '/roles/:id',
    UPDATE: '/roles/:id',
    DELETE: '/roles/:id',
  },

  /**
   * Ticket
   */
  TICKET: {
    INDEX: '/tickets',
    STORE: '/tickets',
    SHOW: '/tickets/:id',
    UPDATE: '/tickets/:id',
    DELETE: '/tickets/:id',
  },

  /**
   * Ticket Comment
   */
  COMMENT: {
    INDEX: '/tickets/:ticketId/comments',
    STORE: '/tickets/:ticketId/comments',
    DELETE: '/comments/:id',
  },

  /**
   * Attachment
   */
  ATTACHMENT: {
    UPLOAD: '/attachments',
    DOWNLOAD: '/attachments/:id',
    DELETE: '/attachments/:id',
  },

  /**
   * Master Data
   */
  MASTER: {
    APPLICATION: '/master/applications',
    FEATURE: '/master/features',
    CATEGORY: '/master/categories',
    PRIORITY: '/master/priorities',
    STATUS: '/master/statuses',
    WAITING_FOR: '/master/waiting-for',
    SLA: '/master/sla-rules',
  },
} as const
