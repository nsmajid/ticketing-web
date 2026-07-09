<script setup lang="ts">
import { sidebarNavigation } from '@/navigation'
import AppSidebarFooter from './sidebar/AppSidebarFooter.vue'
import AppSidebarGroup from './sidebar/AppSidebarGroup.vue'
</script>

<template>
  <aside class="flex w-72 shrink-0 flex-col border-r bg-background">
    <!-- Brand -->
    <div class="border-b px-6 py-5">
      <h1 class="text-xl font-bold">Ticketing</h1>

      <!-- <p class="text-sm text-muted-foreground">Ticketing System</p> -->
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto">
      <div class="px-3 py-4">
        <AppSidebarGroup v-for="group in sidebarNavigation" :key="group.key" :group="group" />
      </div>
    </nav>

    <!-- Footer -->
    <AppSidebarFooter />
  </aside>
</template>
