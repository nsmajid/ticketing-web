<template>
  <div class="flex min-h-screen">
    <AppSidebar />

    <div class="flex flex-1 flex-col">
      <AppHeader />

      <main class="flex-1 p-6">
        <RouterView />
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
</script>
