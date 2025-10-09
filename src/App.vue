<template>
  <div class="page-root">
    <Header />

    <main class="content">
      <Hero />
      <PartnersSection />
      <ContactSection />
      <FAQ />
    </main>

    <Footer />

    <!-- Floating Buttons Component -->
    <FloatingButtons />
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
import PartnersSection from './components/PartnersSection.vue'
import ContactSection from './components/ContactSection.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'
import FloatingButtons from './components/FloatingButtons.vue'
import Header from './components/Header.vue'
</script>

<style scoped>
* { box-sizing: border-box; }
html, body, #app, .page-root { height: 100%; }
body { margin: 0; }

.page-root { display: flex; flex-direction: column; min-height: 100%; }
.content { flex: 1; padding: 0 0 24px; }
.container { max-width: 960px; margin: 0 auto; padding: 0 16px; }
</style>
