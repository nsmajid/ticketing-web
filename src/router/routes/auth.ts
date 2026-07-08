import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'auth.login',
    component: () => import('@/pages/auth/LoginPage.vue'),
    meta: {
      layout: 'auth',
      guest: true,
      title: 'Login',
    },
  },
]