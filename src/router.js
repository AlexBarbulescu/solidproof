import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import KYC from './pages/KYC.vue'
import Audit from './pages/Audit.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/kyc', name: 'kyc', component: KYC },
  { path: '/audit', name: 'audit', component: Audit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
