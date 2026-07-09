import { LayoutDashboard, Ticket, Users, Settings, LogOut } from '@lucide/vue'

import type { NavigationGroup } from '../types'

export const sidebarNavigation: NavigationGroup[] = [
  {
    key: 'main',

    items: [
      {
        key: 'dashboard',

        label: 'Dashboard',

        icon: LayoutDashboard,

        to: {
          name: 'dashboard.index',
        },
      },

      {
        key: 'tickets',

        label: 'Tickets',

        icon: Ticket,

        to: {
          name: 'tickets.index',
        },
      },

      {
        key: 'users',

        label: 'Users',

        icon: Users,

        to: {
          name: 'users.index',
        },
      },
    ],
  },

  {
    key: 'system',

    label: 'System',

    items: [
      {
        key: 'settings',

        label: 'Settings',

        icon: Settings,

        to: {
          name: 'settings.index',
        },

        disabled: true,
      },
      {
        key: 'logout',

        label: 'Logout',

        icon: LogOut,

        action: 'logout',
      },
    ],
  },
]
