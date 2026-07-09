import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useBreadcrumb() {
  const route = useRoute()

  const items = computed(() => {
    return route.matched
      .filter((record) => record.meta?.breadcrumb)
      .map((record) => ({
        label: record.meta.breadcrumb as string,
        to: {
          name: record.name,
        },
      }))
  })

  return {
    items,
  }
}
