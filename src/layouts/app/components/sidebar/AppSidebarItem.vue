<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { NavigationItem } from '@/navigation'

interface Props {
  item: NavigationItem
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    v-if="item.to && !item.disabled"
    v-slot="{ href, navigate, isActive }"
    :to="item.to"
    custom
  >
    <a
      :href="href"
      :class="[
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
        isActive
          ? 'bg-muted font-medium text-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
      ]"
      @click="navigate"
    >
      <component :is="item.icon" v-if="item.icon" class="h-4 w-4 shrink-0" />

      <span class="truncate">
        {{ item.label }}
      </span>
    </a>
  </RouterLink>

  <button
    v-else-if="item.action"
    type="button"
    class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
  >
    <component :is="item.icon" v-if="item.icon" class="h-4 w-4" />

    {{ item.label }}
  </button>

  <div v-else class="flex items-center gap-3 rounded-md px-3 py-2 text-sm opacity-50">
    <component :is="item.icon" v-if="item.icon" class="h-4 w-4" />

    {{ item.label }}
  </div>
</template>
