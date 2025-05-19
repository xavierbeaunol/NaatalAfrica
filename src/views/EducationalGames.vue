<template>
  <div class="bg-green-50 min-h-screen py-10 px-4 text-center">
    <h1 class="text-3xl font-bold text-green-800 mb-6">Jeu éducatif : Trier les déchets</h1>
    <p class="mb-4 text-gray-700">Clique sur l'objet et glisse-le dans la bonne poubelle !</p>

    <div class="game-area max-w-4xl mx-auto">
      <div class="flex justify-center gap-6 flex-wrap">
        <div
          v-for="item in items"
          :key="item.id"
          class="draggable-item bg-white shadow p-3 rounded cursor-move"
          draggable="true"
          @dragstart="onDragStart(item)"
        >
          <img :src="item.image" :alt="item.name" class="h-20 mx-auto" />
          <p class="text-sm mt-2">{{ item.name }}</p>
        </div>
      </div>

      <div class="flex justify-center gap-8 mt-10">
        <div
          v-for="bin in bins"
          :key="bin.type"
          class="drop-zone bg-white border-2 border-dashed border-green-600 rounded-lg p-6 w-48 h-48 flex flex-col items-center justify-center"
          @dragover.prevent
          @drop="onDrop(bin.type)"
        >
          <img :src="bin.icon" alt="Bin Icon" class="h-12 mb-2" />
          <p class="text-green-700 font-bold">{{ bin.label }}</p>
        </div>
      </div>

      <div v-if="feedback" class="mt-6 text-lg font-semibold" :class="feedbackColor">
        {{ feedback }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const draggedItem = ref(null)
const feedback = ref('')

const items = ref([
  { id: 1, name: 'Bouteille en plastique', image: '/icons/plastic-bottle.svg', type: 'recyclable' },
  { id: 2, name: 'Peau de banane', image: '/icons/banana.svg', type: 'compost' },
  { id: 3, name: 'Canette', image: '/icons/can.svg', type: 'recyclable' },
  { id: 4, name: 'Papier', image: '/icons/paper.svg', type: 'recyclable' },
  { id: 5, name: 'Mouchoir sale', image: '/icons/tissue.svg', type: 'trash' },
])

const bins = ref([
  { type: 'recyclable', label: 'Recyclable', icon: '/icons/recycle-bin.svg' },
  { type: 'compost', label: 'Compost', icon: '/icons/compost.svg' },
  { type: 'trash', label: 'Ordure', icon: '/icons/trash.svg' },
])

const feedbackColor = ref('text-green-600')

function onDragStart(item) {
  draggedItem.value = item
}

function onDrop(binType) {
  if (!draggedItem.value) return

  if (draggedItem.value.type === binType) {
    feedback.value = `Bravo ! Tu as bien trié : ${draggedItem.value.name}`
    feedbackColor.value = 'text-green-600'
  } else {
    feedback.value = `Oups ! Ce n'est pas la bonne poubelle pour : ${draggedItem.value.name}`
    feedbackColor.value = 'text-red-600'
  }
  draggedItem.value = null
}
</script>

<style scoped>
.draggable-item {
  width: 120px;
  transition: transform 0.2s;
}
.draggable-item:hover {
  transform: scale(1.05);
}
</style>
