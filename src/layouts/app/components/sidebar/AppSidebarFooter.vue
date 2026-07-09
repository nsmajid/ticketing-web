<script setup lang="ts">
const APP_NAME = 'Ticketing System'
const APP_VERSION = 'v0.1.0'
</script>

<template>
  <footer class="border-t px-4 py-3 text-xs text-muted-foreground">
    <div class="flex items-center justify-between">
      <span>{{ APP_VERSION }}</span>

      <span>{{ APP_NAME }}</span>
    </div>
  </footer>
</template>
