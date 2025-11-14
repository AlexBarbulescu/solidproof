<template>
  <main class="content">
    <Hero />
    <PartnersSection />
    <TweetsSection />
    <ServicesSection />
    <ContactSection />
    <FAQ />
  </main>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import PartnersSection from '../components/PartnersSection.vue'
import TweetsSection from '../components/TweetsSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FAQ from '../components/FAQ.vue'
</script>

<style scoped>
.content { flex: 1; padding: 0 0 24px; }
</style>
