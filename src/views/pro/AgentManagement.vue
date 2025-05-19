<template>
  <div class="bg-green-50 min-h-screen py-10 px-6">
    <h1 class="text-3xl font-bold text-green-800 mb-6 text-center">Gestion des agents</h1>

    <form class="max-w-xl mx-auto bg-white p-6 rounded shadow mb-8" @submit.prevent="addAgent">
      <h2 class="text-xl font-semibold text-green-700 mb-4">Ajouter un agent</h2>
      <input v-model="newAgent.name" type="text" placeholder="Nom complet" class="input" required />
      <input v-model="newAgent.email" type="email" placeholder="Email" class="input" required />
      <select v-model="newAgent.role" class="input" required>
        <option disabled value="">Sélectionnez un rôle</option>
        <option>Agent SONAGED</option>
        <option>Agent de département</option>
        <option>Agent de sensibilisation</option>
      </select>
      <button type="submit" class="btn">{{ editIndex !== null ? 'Mettre à jour' : 'Ajouter' }}</button>
    </form>

    <div v-if="agents.length" class="max-w-4xl mx-auto">
      <h2 class="text-xl font-semibold text-green-700 mb-4">Liste des agents</h2>
      <table class="min-w-full bg-white border rounded shadow">
        <thead class="bg-green-600 text-white">
          <tr>
            <th class="py-2 px-4 text-left">Nom</th>
            <th class="py-2 px-4 text-left">Email</th>
            <th class="py-2 px-4 text-left">Rôle</th>
            <th class="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(agent, index) in agents" :key="index" class="border-t">
            <td class="py-2 px-4">{{ agent.name }}</td>
            <td class="py-2 px-4">{{ agent.email }}</td>
            <td class="py-2 px-4">{{ agent.role }}</td>
            <td class="py-2 px-4 space-x-2">
              <button class="text-blue-600 hover:underline" @click="editAgent(index)">Modifier</button>
              <button class="text-red-600 hover:underline" @click="deleteAgent(index)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newAgent = ref({ name: '', email: '', role: '' })
const agents = ref([])
const editIndex = ref(null)

function addAgent() {
  if (editIndex.value !== null) {
    agents.value[editIndex.value] = { ...newAgent.value }
    editIndex.value = null
  } else {
    agents.value.push({ ...newAgent.value })
  }
  newAgent.value = { name: '', email: '', role: '' }
}

function editAgent(index) {
  newAgent.value = { ...agents.value[index] }
  editIndex.value = index
}

function deleteAgent(index) {
  agents.value.splice(index, 1)
  if (editIndex.value === index) {
    newAgent.value = { name: '', email: '', role: '' }
    editIndex.value = null
  }
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.btn {
  width: 100%;
  background-color: #059669;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background-color: #047857;
}

th,
td {
  font-size: 0.95rem;
}
</style>
