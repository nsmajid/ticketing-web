import type { RouteRecordRaw } from 'vue-router'

export const userRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'users.index',
    component: () => import('@/pages/users/UserListPage.vue'),
    meta: {
      layout: 'app',
      requiresAuth: true,
      title: 'Users',
    },
  },
]
