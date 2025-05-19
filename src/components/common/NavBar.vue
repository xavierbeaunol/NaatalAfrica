<template>
  <nav class="Navbar text-white px-6 py-4 shadow relative">
    <div class="flex items-center justify-start md:justify-between w-full">
      <!-- Liens de navigation Desktop avec logo minuscule -->
      <ul class="hidden md:flex items-center gap-6">
        <li>
          <img src="../../assets/hero-setala.png" alt="SetalA Logo" class="h-[10px] w-[10px] object-contain" />
        </li>
        <li><RouterLink to="/home" class="hover:underline">Accueil</RouterLink></li>
        <li><RouterLink to="/rewards" class="hover:underline">Récompenses</RouterLink></li>
        <li><RouterLink to="/report" class="hover:underline">Informez-nous</RouterLink></li>
        <li><RouterLink to="/games" class="hover:underline">Jeux</RouterLink></li>
        <li><RouterLink to="/pro" class="hover:underline">Espace Pro</RouterLink></li>
      </ul>

      <!-- Burger Menu Mobile -->
      <button class="md:hidden ml-auto" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Menu Mobile -->
    <ul v-if="menuOpen" class="flex flex-col gap-3 mt-4 md:hidden items-center">
      <li><RouterLink to="/home" @click="closeMenu">Accueil</RouterLink></li>
      <li><RouterLink to="/rewards" @click="closeMenu">Récompenses</RouterLink></li>
      <li><RouterLink to="/report" @click="closeMenu">Informez-nous</RouterLink></li>
      <li><RouterLink to="/games" @click="closeMenu">Jeux</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.Navbar img {
  width: 100px;
  height: auto;
}
</style>
