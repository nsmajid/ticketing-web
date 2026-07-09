<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="text-7xl font-bold">404</h1>

    <p class="mt-4 text-muted-foreground">Page not found.</p>

    <RouterLink to="/" class="mt-6">
      <Button>Back to Dashboard</Button>
    </RouterLink>
  </div>
</template>
