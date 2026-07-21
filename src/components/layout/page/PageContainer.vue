<script setup lang="ts">
import {
  PAGE_SPACING_VARIANTS,
  PAGE_WIDTH_VARIANTS,
  type PageSpacingVariant,
  type PageWidthVariant,
} from '@/constants'

const props = withDefaults(
  defineProps<{
    width?: PageWidthVariant
    spacing?: PageSpacingVariant
  }>(),
  {
    width: 'full',
    spacing: 'normal',
  },
)
</script>

<template>
  <section :class="['flex flex-1 justify-center', PAGE_SPACING_VARIANTS[props.spacing].container]">
    <div
      :class="[
        'flex w-full flex-col',
        PAGE_WIDTH_VARIANTS[props.width],
        PAGE_SPACING_VARIANTS[props.spacing].content,
      ]"
    >
      <slot />
    </div>
  </section>
</template>
