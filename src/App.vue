<template>
  <div class="page-root">
    <Header />

    <RouterView />

    <Footer />

    <!-- Floating Buttons Component -->
    <FloatingButtons />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import FloatingButtons from './components/FloatingButtons.vue'
import Header from './components/Header.vue'
</script>

<style scoped>
* { box-sizing: border-box; }
html, body, #app, .page-root { height: 100%; }
body { margin: 0; }

.page-root { display: flex; flex-direction: column; min-height: 100%; }
.container { max-width: 960px; margin: 0 auto; padding: 0 16px; }
</style>
