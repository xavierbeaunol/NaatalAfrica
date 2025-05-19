<template>
  <div class="report-container bg-green-50 min-h-screen py-10 px-4">
    <h1 class="text-3xl font-bold text-green-800 text-center mb-8">Signaler une décharge sauvage</h1>

    <form class="max-w-2xl mx-auto bg-white p-6 rounded shadow" @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Nom complet</label>
        <input v-model="form.name" type="text" required class="mt-1 block w-full border-gray-300 rounded shadow-sm" />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Adresse e-mail</label>
        <input v-model="form.email" type="email" required class="mt-1 block w-full border-gray-300 rounded shadow-sm" />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Emplacement du dépôt</label>
        <input
          v-model="form.location"
          type="text"
          required
          placeholder="Précisez une adresse ou un point de repère"
          class="mt-1 block w-full border-gray-300 rounded shadow-sm"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Description</label>
        <textarea v-model="form.description" rows="4" class="mt-1 block w-full border-gray-300 rounded shadow-sm"></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Photo (optionnel)</label>
        <input type="file" accept="image/*" class="mt-1 block w-full" @change="handleFileUpload" />
      </div>

      <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Envoyer le signalement
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  location: '',
  description: '',
  file: null,
})

function handleFileUpload(event) {
  const file = event.target.files[0]

  if (file) {
    form.value.file = file
  }
}

function handleSubmit() {
  console.log('Signalement envoyé :', form.value)
  alert('Merci pour votre signalement !')
  // reset
  form.value = {
    name: '',
    email: '',
    location: '',
    description: '',
    file: null,
  }
}
</script>

<style scoped>
.report-container input,
.report-container textarea {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
