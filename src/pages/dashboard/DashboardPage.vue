<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { API_CONFIG } from '@/config/api'
import { APP_CONFIG } from '@/config/app'

console.log(APP_CONFIG)
console.log(API_CONFIG)

import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const { appName } = storeToRefs(appStore)
</script>

<template>
  <div class="space-y-2">
    <h1 class="text-3xl font-bold">
      {{ appName }}
    </h1>

    <p class="text-muted-foreground">Dashboard</p>
  </div>
</template>
