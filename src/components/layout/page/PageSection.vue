<script setup lang="ts">
import { PAGE_SECTION_VARIANTS, type PageSectionVariant } from '@/constants'

const props = withDefaults(
  defineProps<{
    spacing?: PageSectionVariant
  }>(),
  {
    spacing: 'default',
  },
)
</script>

<template>
  <section :class="['flex flex-col', PAGE_SECTION_VARIANTS[props.spacing]]">
    <slot />
  </section>
</template>
