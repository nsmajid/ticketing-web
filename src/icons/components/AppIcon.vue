<script setup lang="ts">
// import { computed, useAttrs } from 'vue'
import { useAttrs } from 'vue'

import { DEFAULT_ICON_SIZE, DEFAULT_STROKE_WIDTH, ICON_SIZE } from '../constants'

import type { AppIconProps } from '../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<AppIconProps>(), {
  size: DEFAULT_ICON_SIZE,
  strokeWidth: DEFAULT_STROKE_WIDTH,
})

const attrs = useAttrs()

// const sizeClass = computed(() => ICON_SIZE[props.size])
</script>

<template>
  <component
    :is="props.icon"
    v-bind="attrs"
    :class="[ICON_SIZE[props.size], attrs.class]"
    :stroke-width="props.strokeWidth"
  />
</template>
