import type { RouteRecordRaw } from 'vue-router'

export const ticketRoutes: RouteRecordRaw[] = [
  {
    path: '/tickets',
    name: 'tickets.index',
    component: () => import('@/pages/tickets/TicketListPage.vue'),
    meta: {
      layout: 'app',
      requiresAuth: true,
      title: 'Tickets',
    },
  },
]
