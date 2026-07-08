import type { RouteRecordRaw } from 'vue-router'

export const userRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'user.index',
    component: () => import('@/pages/users/UserListPage.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
      title: 'Users',
    },
  },
]