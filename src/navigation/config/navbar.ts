import { Bell, Search } from '@lucide/vue'

import type { NavigationItem } from '../types'

export const navbarNavigation: NavigationItem[] = [
  {
    key: 'search',

    label: 'Search',

    icon: Search,

    disabled: true,
  },

  {
    key: 'notification',

    label: 'Notifications',

    icon: Bell,

    disabled: true,
  },
]
