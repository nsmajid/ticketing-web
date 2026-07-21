<script setup lang="ts">
defineProps<{
  sticky?: boolean
}>()
</script>

<template>
  <header
    :class="[
      'flex items-start justify-between gap-4',
      sticky && 'sticky top-0 z-10 bg-background py-4',
    ]"
  >
    <div class="min-w-0 flex-1">
      <slot />
    </div>

    <div v-if="$slots.actions" class="flex shrink-0 items-center gap-2">
      <slot name="actions" />
    </div>
  </header>
</template>
