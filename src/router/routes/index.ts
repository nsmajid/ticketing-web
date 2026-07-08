import type { RouteRecordRaw } from 'vue-router'

import { authRoutes } from './auth'
import { dashboardRoutes } from './dashboard'
import { ticketRoutes } from './ticket'
import { userRoutes } from './user'

export const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...dashboardRoutes,
  ...ticketRoutes,
  ...userRoutes,

  {
    path: '/:pathMatch(.*)*',
    name: 'errors.404',
    component: () => import('@/pages/errors/NotFoundPage.vue'),
    meta: {
      layout: 'blank',
      title: 'Not Found',
    },
  },
]
