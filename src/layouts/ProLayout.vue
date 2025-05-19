<template>
  <div class="min-h-screen bg-green-50">
    <!-- Barre de navigation horizontale pro -->
    <nav class="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow">
      <div class="flex items-center gap-4">
        <img src="../assets/hero-setala.png" alt="SetalA Logo" class="h-8 w-auto object-contain" />
        <h1 class="text-xl font-semibold">Espace Pro</h1>
      </div>
      <ul class="flex gap-8 text-sm">
        <li>
          <RouterLink to="/pro" class="hover:underline">Dashboard</RouterLink>
        </li>
        <li>
          <RouterLink to="/pro/agents" class="hover:underline">Agents</RouterLink>
        </li>
        <li>
          <RouterLink to="/pro/reports" class="hover:underline">Signalements</RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Contenu principal -->
    <main class="p-6">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav img {
  height: 100px;
}
</style>
