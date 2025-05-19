<template>
  <div class="rewards-container bg-green-50 min-h-screen py-10 px-4">
    <h1 class="text-3xl font-bold text-green-800 text-center mb-6">Accédez à vos récompenses</h1>

    <form class="max-w-md mx-auto bg-white p-6 rounded shadow" @submit.prevent="handleSubmit">
      <label class="block text-sm font-medium text-gray-700 mb-2">Entrez votre code à 6 chiffres</label>
      <input
        v-model="code"
        type="text"
        maxlength="6"
        pattern="\d{6}"
        required
        class="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Ex: 123456"
      />
      <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Valider le code</button>
    </form>

    <div v-if="rewardsVisible" class="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(reward, index) in rewards"
        :key="index"
        class="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer"
      >
        <img :src="reward.image" :alt="reward.name" class="h-24 mx-auto mb-2 object-contain" />
        <h3 class="font-semibold text-green-700">{{ reward.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')
const rewardsVisible = ref(false)

const rewards = [
  { name: 'AirTime', image: '/icons/AirTime.png' },
  { name: '200 Crédit CashPower', image: '/icons/CashPower.png' },
  { name: '150 FCFA', image: '/icons/cash.png' },
  { name: 'Un ensemble sportif', image: '/icons/maillot_sport.png' },
]

function handleSubmit() {
  if (code.value.length === 6) {
    rewardsVisible.value = true
  } else {
    alert('Code invalide')
  }
}
</script>

<style scoped>
.rewards-container input {
  border: 1px solid #ccc;
}
</style>
