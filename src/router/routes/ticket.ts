import type { RouteRecordRaw } from 'vue-router'

export const ticketRoutes: RouteRecordRaw[] = [
  {
    path: '/tickets',
    name: 'ticket.index',
    component: () => import('@/pages/tickets/TicketListPage.vue'),
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
      title: 'Tickets',
    },
  },
]
