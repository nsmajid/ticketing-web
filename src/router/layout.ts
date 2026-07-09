import type { Component } from 'vue'

import { AppLayout, AuthLayout, BlankLayout } from '@/layouts'

export type LayoutType = 'app' | 'auth' | 'blank'

const layouts: Record<LayoutType, Component> = {
  app: AppLayout,
  auth: AuthLayout,
  blank: BlankLayout,
}

export function resolveLayout(layout?: LayoutType): Component {
  return layouts[layout ?? 'blank']
}
