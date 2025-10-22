import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import KYC from './pages/KYC.vue'
import Audit from './pages/Audit.vue'
import Marketing from './pages/Marketing.vue'
import Consulting from './pages/Consulting.vue'
import Development from './pages/Development.vue'
import ProactiveWeb3Security from './pages/ProactiveWeb3Security.vue'
import Lossless from './pages/Lossless.vue'
import Branding from './pages/Branding.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/kyc', name: 'kyc', component: KYC },
  { path: '/audit', name: 'audit', component: Audit },
  { path: '/marketing', name: 'marketing', component: Marketing },
  { path: '/consulting', name: 'consulting', component: Consulting },
  { path: '/development', name: 'development', component: Development },
  { path: '/proactive-web3-security', name: 'proactive-web3-security', component: ProactiveWeb3Security },
  { path: '/lossless', name: 'lossless', component: Lossless },
  { path: '/branding', name: 'branding', component: Branding },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
