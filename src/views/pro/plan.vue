<template>
  <div class="bg-green-50 min-h-screen p-4 sm:p-6">
    <h1 class="text-2xl sm:text-3xl font-bold text-green-800 text-center mb-4 sm:mb-6">Planification de tournée</h1>

    <!-- Formulaire camion -->
    <div class="w-full sm:max-w-3xl mx-auto bg-white rounded shadow p-4 mb-6">
      <h2 class="text-lg sm:text-xl font-semibold text-green-700 mb-4">Informations sur le camion</h2>
      <form @submit.prevent>
        <label class="block mb-2 text-sm">Numéro du camion</label>
        <input v-model="truck.number" class="input mb-4" type="text" placeholder="Ex: CMN-001" />

        <label class="block mb-2 text-sm">Type de camion</label>
        <select v-model="truck.type" class="input mb-4">
          <option value="ménagère">Ordures ménagères</option>
          <option value="triée">Ordures triées</option>
        </select>
      </form>
    </div>

    <!-- Carte -->
    <div class="w-full sm:max-w-7xl mx-auto">
      <h2 class="text-lg sm:text-xl font-semibold text-green-700 mb-2 text-center">Touchez la carte pour définir les arrêts</h2>
      <div id="map" class="w-full h-[40vh] sm:h-[65vh] rounded shadow"></div>
      <div class="text-center mt-4">
        <button
          class="bg-green-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-green-700 text-sm sm:text-base"
          @click="exportRoute"
        >
          Exporter le tracé GPS
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import L from 'leaflet'
import { onMounted, ref } from 'vue'

const truck = ref({ number: '', type: 'ménagère' })
const waypoints = ref([])
let map
let routingControl

onMounted(() => {
  map = L.map('map', {
    zoomControl: false,
    dragging: true,
    tap: false,
    zoomAnimation: false,
    inertia: true,
    preferCanvas: true,
  }).setView([14.7154, -17.2635], 14)

  L.control.zoom({ position: 'topright' }).addTo(map)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
    minZoom: 10,
  }).addTo(map)

  map.on('click', function (e) {
    const { lat, lng } = e.latlng

    waypoints.value.push(L.latLng(lat, lng))
    L.marker([lat, lng]).addTo(map)
    updateRoute()
  })
})

function updateRoute() {
  if (routingControl) map.removeControl(routingControl)
  routingControl = L.Routing.control({
    waypoints: waypoints.value,
    routeWhileDragging: false,
    draggableWaypoints: true,
    show: false,
    addWaypoints: false,
    fitSelectedRoutes: true,
  }).addTo(map)
}

function exportRoute() {
  if (!routingControl) return
  const coordinates = routingControl.getWaypoints().map((wp) => wp.latLng)
  const geoJson = {
    type: 'LineString',
    coordinates: coordinates.map((coord) => [coord.lng, coord.lat]),
  }
  const blob = new Blob([JSON.stringify(geoJson, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `tournee-${truck.value.number || 'camion'}.geojson`
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.875rem;
}

#map {
  max-width: 100%;
  overflow: hidden;
  height: 40vh;
  border-radius: 10px;
}
@media (min-width: 640px) {
  #map {
    height: 65vh;
  }
}
</style>
