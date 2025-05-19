import { createRouter, createWebHashHistory } from 'vue-router'
// Vues publiques
import Home from '@/views/Home.vue'

// Lazy loading des vues professionnelles (optionnel)
//const Pro = () => import('@/views/Pro.vue')
const Rewards = () => import('@/views/Rewards.vue')
const ReportWaste = () => import('@/views/ReportWaste.vue')
const EducationalGames = () => import('@/views/EducationalGames.vue')

const Dashboard = () => import('@/views/pro/Dashboard.vue')
const AgentManagement = () => import('@/views/pro/AgentManagement.vue')
const WasteReports = () => import('@/views/pro/WasteReports.vue')
const InteractiveMap = () => import('@/views/pro/map.vue')
const planification = () => import('@/views/pro/plan.vue')

const history = createWebHashHistory()

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'public',
    },
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards,
    meta: {
      layout: 'public',
    },
  },
  {
    path: '/report',
    name: 'ReportWaste',
    component: ReportWaste,
    meta: {
      layout: 'public',
    },
  },
  {
    path: '/games',
    name: 'EducationalGames',
    component: EducationalGames,
    meta: {
      layout: 'public',
    },
  },
  {
    path: '/pro/map',
    name: 'interactiveMap',
    component: InteractiveMap,
    meta: {
      layout: 'pro',
    },
  },
  {
    path: '/pro/planification',
    name: 'planification',
    component: planification,
    meta: {
      layout: 'pro',
    },
  },
  {
    path: '/pro',
    name: 'ProDashboard',
    component: Dashboard,
    meta: {
      layout: 'pro',
    },
  },
  {
    path: '/pro/agents',
    name: 'AgentManagement',
    component: AgentManagement,
    meta: {
      layout: 'pro',
    },
  },
  {
    path: '/pro/reports',
    name: 'WasteReports',
    component: WasteReports,
    meta: {
      layout: 'pro',
    },
  },
]

const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes,
})

export { router }
