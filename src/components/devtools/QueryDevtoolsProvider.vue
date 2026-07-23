<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

const isDevelopment = import.meta.env.DEV
</script>

<template>
  <VueQueryDevtools v-if="isDevelopment" />
</template>
