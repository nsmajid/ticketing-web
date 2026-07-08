<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4">
    <h1 class="text-6xl font-bold">
      404
    </h1>

    <p class="text-muted-foreground">
      Page not found.
    </p>

    <RouterLink
      to="/"
      class="text-primary underline"
    >
      Back to Home
    </RouterLink>
  </div>
</template>