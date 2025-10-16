import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import KYC from './pages/KYC.vue'
import Audit from './pages/Audit.vue'
import Marketing from './pages/Marketing.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/kyc', name: 'kyc', component: KYC },
  { path: '/audit', name: 'audit', component: Audit },
  { path: '/marketing', name: 'marketing', component: Marketing },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
