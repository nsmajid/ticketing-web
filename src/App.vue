<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { AppLayout, AuthLayout, BlankLayout } from '@/layouts'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'auth':
      return AuthLayout

    case 'blank':
      return BlankLayout

    default:
      return AppLayout
  }
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
