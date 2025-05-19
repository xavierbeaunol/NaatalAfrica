<template>
  <div class="home bg-green-50 min-h-screen">
    <h1 class="hero-title">Agir pour un environnement propre</h1>
    <p class="text-white text-lg mt-2">Participez à la gestion intelligente des déchets</p>
    <button class="mt-6 px-6 py-2 bg-white text-green-700 font-semibold rounded hover:bg-green-100" @click="start">
      Je commence
    </button>
  </div>

  <div class="content-grid">
    <div v-for="card in cards" :key="card.route" class="card" @click="goTo(card.route)">
      <img :src="card.icon" :alt="card.title" />
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (route) => {
  router.push(route)
}

const start = () => {
  alert('Bienvenue sur SetalA !')
}

const cards = [
  {
    title: 'Voir les récompenses',
    description: 'Accédez à vos récompenses via un code à 6 chiffres',
    icon: '/icons/reward.svg',
    route: '/rewards',
  },
  {
    title: 'Signaler une décharge sauvage',
    description: 'Envoyez-nous un signalement avec localisation',
    icon: '/icons/warning.svg',
    route: '/report',
  },
  {
    title: 'Lancer un jeu éducatif',
    description: 'Jouez tout en apprenant les bons gestes',
    icon: '/icons/game.svg',
    route: '/games',
  },
  {
    title: 'Voir les vidéos d’explication',
    description: 'Apprenez grâce à nos contenus visuels',
    icon: '/icons/video.svg',
    route: '/videos',
  },
]
</script>

<style scoped>
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
  padding: 0 20px 120px;
}

.card {
  border: 1px solid #cceccc;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.02);
  background-color: #f0fff4;
}

.card img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 15px;
}
</style>
