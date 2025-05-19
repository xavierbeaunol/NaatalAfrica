<template>
  <div>
    <NavBar />
    <main>
      <RouterView />
    </main>
    <footer class="bg-gray-100 text-center p-2">© SetalA 2025</footer>
  </div>
</template>

<script setup>
import NavBar from '@/components/common/NavBar.vue'
</script>
