<template>
  <div class="bg-green-50 min-h-screen py-10 px-4">
    <h1 class="text-3xl font-bold text-green-800 text-center mb-10">Tableau de bord professionnel</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div v-for="section in dashboardLinks" :key="section.title" class="dashboard-tile" @click="goTo(section.route)">
        <img :src="section.icon" :alt="section.title" class="icon mb-2" />
        <h2 class="text-lg font-semibold text-green-700 text-center">{{ section.title }}</h2>
        <p class="text-sm text-gray-600 text-center px-2">{{ section.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (route) => {
  router.push(route)
}

const dashboardLinks = [
  {
    title: 'carte interactive',
    description: 'Visualisez les dépôts signalés, les camions de collectes, les points de collecte sur la carte',
    icon: '/icons/map.svg',
    route: '/pro/map',
  },
  {
    title: 'planifier une tournée',
    description: 'Planifiez une tournée de collecte',
    icon: '/icons/plan.svg',
    route: '/pro/plan',
  },

  {
    title: 'Voir les signalements',
    description: 'Liste des dépôts signalés par les citoyens',
    icon: '/icons/report.svg',
    route: '/pro/reports',
  },
  {
    title: 'Gérer les établissements',
    description: 'Ajout et modification des zones surveillées',
    icon: '/icons/manage.svg',
    route: '/pro/etablissements',
  },
  {
    title: 'Statistiques',
    description: 'Suivi des données de tri et de récompenses',
    icon: '/icons/stats.svg',
    route: '/pro/stats',
  },
]
</script>

<style scoped>
.dashboard-tile {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
.dashboard-tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.icon {
  height: 42px;
  width: auto;
}
</style>
