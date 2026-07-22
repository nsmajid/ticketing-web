import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FolderKanban,
  Gauge,
  Home,
  LayoutDashboard,
  Menu,
  PanelLeft,
  Search,
  Settings,
  Shield,
  Users,
} from '@lucide/vue'

import type { IconRegistry } from '../types'

/**
 * Navigation icon registry.
 *
 * All application navigation icons should be registered here.
 */
export const navigationIcons: IconRegistry = {
  // General
  home: Home,
  dashboard: LayoutDashboard,

  // Ticket
  ticket: FolderKanban,

  // User Management
  users: Users,
  roles: Shield,

  // System
  settings: Settings,

  // Notification
  notification: Bell,

  // Search
  search: Search,

  // Sidebar
  sidebar: PanelLeft,
  menu: Menu,

  // Chevron
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,

  // Dashboard
  overview: Gauge,
}
