<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ChevronRight } from '@lucide/vue'

import { useBreadcrumb } from '@/navigation'
// import { AppIcon } from '@/components/icons'

const { items } = useBreadcrumb()
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex items-center text-sm">
    <template v-for="item in items" :key="item.label">
      <RouterLink :to="item.to" class="text-muted-foreground hover:text-foreground">
        {{ item.label }}
      </RouterLink>

      <!-- <AppIcon
        v-if="index < items.length - 1"
        :icon="ChevronRight"
        class="mx-2 h-4 w-4 text-muted-foreground"
      /> -->
      <component :is="ChevronRight" class="mx-2 h-4 w-4 text-muted-foreground" />
    </template>
  </nav>
</template>
