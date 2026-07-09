<script setup lang="ts">
import AppShell from './AppShell.vue'
import AppMain from './components/AppMain.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppShell>
    <AppNavbar />
    <div class="flex flex-1 overflow-hidden">
      <AppSidebar />

      <AppMain>
        <RouterView />
      </AppMain>
    </div>

    <AppFooter />
  </AppShell>
</template>
