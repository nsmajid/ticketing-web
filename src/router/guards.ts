import type { Router } from 'vue-router'

export function registerGuards(router: Router): void {
  router.beforeEach(() => {
    /**
     * Placeholder
     *
     * Authentication akan diimplementasikan
     * pada milestone berikutnya.
     */

    // Contoh:
    //
    // if (to.meta.requiresAuth && !isAuthenticated) {
    //   return { name: 'auth.login' }
    // }
    //
    // if (to.meta.guest && isAuthenticated) {
    //   return { name: 'dashboard.index' }
    // }

    return true
  })

  router.afterEach((to) => {
    if (typeof to.meta.title === 'string') {
      document.title = `${to.meta.title} | Ticketing`
    } else {
      document.title = 'Ticketing'
    }
  })
}