<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProLayout from '@/layouts/ProLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

const route = useRoute()
const layoutComponent = computed(() => {
  return route.meta.layout === 'pro' ? ProLayout : PublicLayout
})
</script>
