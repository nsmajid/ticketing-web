<script setup lang="ts">
import AppNavbarActions from './navbar/AppNavbarActions.vue'
import AppNavbarBreadcrumb from './navbar/AppNavbarBreadcrumb.vue'
import AppNavbarBrand from './navbar/AppNavbarBrand.vue'
import AppNavbarUser from './navbar/AppNavbarUser.vue'
</script>

<template>
  <header class="flex h-14 items-center border-b bg-background px-6">
    <!-- Brand -->
    <AppNavbarBrand />

    <!-- Breadcrumb -->
    <div class="ml-6 flex-1">
      <AppNavbarBreadcrumb />
    </div>

    <!-- Right Action -->
    <AppNavbarActions />

    <!-- User -->
    <div class="ml-4">
      <AppNavbarUser />
    </div>
  </header>
</template>
