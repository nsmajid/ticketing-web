<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import { resolveLayout } from '@/router/layout'

const route = useRoute()

const layout = computed(() => resolveLayout(route.meta.layout as 'app' | 'auth' | 'blank'))
</script>
