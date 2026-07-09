import { CircleUserRound, Settings, Palette, LogOut } from '@lucide/vue'

import type { NavigationItem } from '../types'

export const userMenuNavigation: NavigationItem[] = [
  {
    key: 'profile',

    label: 'Profile',

    icon: CircleUserRound,

    disabled: true,
  },

  {
    key: 'settings',

    label: 'Account Settings',

    icon: Settings,

    disabled: true,
  },

  {
    key: 'theme',

    label: 'Theme',

    icon: Palette,

    disabled: true,
  },

  {
    key: 'logout',

    label: 'Logout',

    icon: LogOut,

    action: 'logout',
  },
]
