<template>
  <div class="bg-green-50 min-h-screen py-10 px-6">
    <h1 class="text-3xl font-bold text-green-800 mb-6 text-center">Signalements de décharges sauvages</h1>

    <div v-if="reports.length" class="overflow-x-auto">
      <table class="min-w-full bg-white border rounded shadow">
        <thead>
          <tr class="bg-green-600 text-white">
            <th class="py-2 px-4 text-left">Nom</th>
            <th class="py-2 px-4 text-left">Email</th>
            <th class="py-2 px-4 text-left">Emplacement</th>
            <th class="py-2 px-4 text-left">Description</th>
            <th class="py-2 px-4 text-left">Photo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(report, index) in reports" :key="index" class="border-t">
            <td class="py-2 px-4">{{ report.name }}</td>
            <td class="py-2 px-4">{{ report.email }}</td>
            <td class="py-2 px-4">{{ report.location }}</td>
            <td class="py-2 px-4">{{ report.description }}</td>
            <td class="py-2 px-4">
              <img v-if="report.image" :src="report.image" alt="photo" class="h-16 w-16 object-cover rounded border" />
              <span v-else class="text-gray-400 italic">Aucune</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="text-center text-gray-600 mt-10">Aucun signalement pour le moment.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const reports = ref([])

onMounted(() => {
  // Simulation de chargement de données
  reports.value = [
    {
      name: 'Aminata Sow',
      email: 'aminata@example.com',
      location: 'Rue du Marché, Dakar',
      description: 'Tas de déchets près du rond-point.',
      image: '/photos/depot1.jpg',
    },
    {
      name: 'Ibrahima Diallo',
      email: 'ibrahima@example.com',
      location: 'Avenue Blaise Diagne',
      description: 'Vieux appareils électriques abandonnés.',
      image: '',
    },
  ]
})
</script>

<style scoped>
th,
td {
  font-size: 0.95rem;
}
</style>
