import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    appName: 'Ticketing',
    loading: false,
    sidebarCollapsed: false,
    theme: 'light' as 'light' | 'dark',
  }),

  getters: {
    isDark: (state) => state.theme === 'dark',
  },

  actions: {
    setLoading(value: boolean) {
      this.loading = value
    },

    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },

    setTheme(theme: 'light' | 'dark') {
      this.theme = theme
    },
  },
})
