import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type NavigationAction = 'logout' | 'refresh' | 'profile' | 'theme'
/**
 * Badge yang ditampilkan pada menu.
 */
export interface NavigationBadge {
  label: string
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

/**
 * Item navigasi.
 */
export interface NavigationItem {
  /**
   * Unique key.
   */
  key: string

  /**
   * Label yang ditampilkan.
   */
  label: string

  /**
   * Tujuan route.
   */
  to?: RouteLocationRaw

  /**
   * Icon Vue Component.
   */
  icon?: Component

  /**
   * Deskripsi (opsional).
   */
  description?: string

  /**
   * Badge.
   */
  badge?: NavigationBadge

  /**
   * Permission yang dibutuhkan.
   *
   * Belum digunakan pada Milestone 2,
   * tetapi akan digunakan pada Milestone 19.
   */
  permission?: string

  /**
   * Role yang diperbolehkan.
   */
  roles?: string[]

  /**
   * External URL.
   */
  external?: boolean

  /**
   * Disable menu.
   */
  disabled?: boolean

  /**
   * Hidden menu.
   */
  hidden?: boolean
  /**
   * Action yang dijalankan ketika item diklik.
   * Contoh:
   * - logout
   * - refresh
   * - switch-theme
   */
  action?: NavigationAction
  /**
   * Child menu.
   *
   * Future:
   * Sidebar Tree.
   */
  children?: NavigationItem[]
}

/**
 * Group Sidebar.
 */
export interface NavigationGroup {
  /**
   * Unique key.
   */
  key: string

  /**
   * Judul group.
   */
  label?: string

  /**
   * Item pada group.
   */
  items: NavigationItem[]
}
