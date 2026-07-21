import { navigationIcons } from '@/icons'

import type { NavigationGroup } from '../types'

export const sidebarNavigation: NavigationGroup[] = [
  {
    key: 'main',

    items: [
      {
        key: 'dashboard',

        label: 'Dashboard',

        icon: navigationIcons.dashboard,
        to: {
          name: 'dashboard.index',
        },
      },

      {
        key: 'tickets',

        label: 'Tickets',

        icon: navigationIcons.ticket,

        to: {
          name: 'tickets.index',
        },
      },

      {
        key: 'users',

        label: 'Users',

        icon: navigationIcons.users,

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

        icon: navigationIcons.settings,

        to: {
          name: 'settings.index',
        },

        disabled: true,
      },
      {
        key: 'logout',

        label: 'Logout',

        icon: navigationIcons.logout,

        action: 'logout',
      },
    ],
  },
]
