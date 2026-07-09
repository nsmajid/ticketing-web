import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard.index',
    component: () => import('@/pages/dashboard/DashboardPage.vue'),
    meta: {
      layout: 'app',
      requiresAuth: true,
      title: 'Dashboard',
    },
  },
]
