import type { App } from 'vue'

import { VueQueryPlugin } from '@tanstack/vue-query'

import { queryClient } from './client'

export function setupQueryClient(app: App): void {
  app.use(VueQueryPlugin, {
    queryClient,
  })
}
