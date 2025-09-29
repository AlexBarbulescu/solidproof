<template>
  <div class="page-root">
    <Header />
    <main class="content">
      <Hero />
      <ContactSection />
    </main>
    <FAQ />
    <Footer />
    <FloatingButtons />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ContactSection from './components/ContactSection.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'
import FloatingButtons from './components/FloatingButtons.vue'
</script>

<style scoped>
* { 
  box-sizing: border-box; 
}

html, body, #app, .page-root { 
  height: 100%; 
}

body { 
  margin: 0;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif;
}

.page-root { 
  display: flex; 
  flex-direction: column; 
  min-height: 100%;
  background: #000;
  color: #fff;
}

.content { 
  flex: 1; 
  padding: 0 0 24px; 
}

/* Container utility */
.container { 
  max-width: 960px; 
  margin: 0 auto; 
  padding: 0 16px; 
}

/* CSS Variables */
:root {
  --color-border: rgba(255, 255, 255, 0.1);
}
</style>
