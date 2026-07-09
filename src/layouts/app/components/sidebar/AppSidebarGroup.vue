<script setup lang="ts">
import type { NavigationGroup } from '@/navigation'
import AppSidebarItem from './AppSidebarItem.vue'

interface Props {
  group: NavigationGroup
}

defineProps<Props>()
</script>

<template>
  <section class="space-y-2">
    <!-- Group Label -->
    <h2
      v-if="group.label"
      class="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
    >
      {{ group.label }}
    </h2>

    <!-- Menu -->
    <ul class="space-y-1">
      <li v-for="item in group.items" :key="item.key">
        <AppSidebarItem :item="item" />
      </li>
    </ul>
  </section>
</template>
