<template>
  <div class="bg-green-50 min-h-screen">
    <h1 class="text-3xl font-bold text-green-800 text-center py-4">Carte interactive</h1>
    <h2 class="text-xl font-medium text-center text-gray-700 mb-2">Zone : Rufisque, Sénégal</h2>
    <div id="map" class="w-full h-[80vh] rounded shadow mx-auto max-w-7xl"></div>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { onMounted } from 'vue'

let map

const dumpLocations = [
  { lat: 14.7154, lng: -17.2635, label: 'Dépôt sauvage 1' },
  { lat: 14.7178, lng: -17.2701, label: 'Dépôt sauvage 2' },
]

const trucks = [
  { lat: 14.713, lng: -17.268, label: 'Camion 1' },
  { lat: 14.719, lng: -17.261, label: 'Camion 2' },
]

const publicZones = [
  { lat: 14.716, lng: -17.265, label: 'Zone de dépôt public A' },
  { lat: 14.72, lng: -17.269, label: 'Zone de dépôt public B' },
]

onMounted(() => {
  map = L.map('map').setView([14.7154, -17.2635], 14)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  dumpLocations.forEach((loc) => {
    L.marker([loc.lat, loc.lng], {
      icon: L.icon({
        iconUrl: '/icons/trash.svg',
        iconSize: [24, 24],
      }),
    })
      .addTo(map)
      .bindPopup(loc.label)
  })

  trucks.forEach((loc) => {
    L.marker([loc.lat, loc.lng], {
      icon: L.icon({
        iconUrl: '/icons/truck.svg',
        iconSize: [26, 26],
      }),
    })
      .addTo(map)
      .bindPopup(loc.label)
  })

  publicZones.forEach((loc) => {
    L.circle([loc.lat, loc.lng], {
      radius: 150,
      color: 'green',
      fillColor: '#5eead4',
      fillOpacity: 0.4,
    })
      .addTo(map)
      .bindPopup(loc.label)
  })
})
</script>

<style>
#map {
  height: 80vh;
  width: 100%;
}
</style>
