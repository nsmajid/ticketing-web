import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    initialized: false,
    isAuthenticated: false,
    accessToken: null as string | null,
    user: null as Record<string, unknown> | null,
  }),

  actions: {
    initialize() {
      this.initialized = true
    },

    login() {
      this.isAuthenticated = true
    },

    logout() {
      this.isAuthenticated = false
      this.accessToken = null
      this.user = null
    },
  },
})
