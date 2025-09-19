<template>
  <div class="page-root">
    <header class="site-header">
      <div class="container">
        <a href="#" class="brand">
          <span class="sr-only">SolidProof</span>
          <img src="/logo_horizontal_white.svg" alt="SolidProof" class="brand-logo brand-logo--dark" />
          <img src="/logo_horizontal_black.svg" alt="SolidProof" class="brand-logo brand-logo--light" />
        </a>
        <button
          class="nav-toggle"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-controls="primary-nav"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-nav" class="primary-nav" :class="{ open: isOpen }">
          <ul class="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="content">
      <Hero />
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>Test Footer</p>
        <small>© 2024 SolidProof</small>
      </div>
    </footer>

    <button
      class="back-to-top"
      v-show="showTop"
      @click="scrollToTop"
      aria-label="Back to top"
    >↑</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Hero from './components/Hero.vue'

const isOpen = ref(false)
const showTop = ref(false)

function handleResize() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    isOpen.value = false
  }
}
function handleScroll() {
  showTop.value = window.scrollY > 200
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
* { box-sizing: border-box; }
html, body, #app, .page-root { height: 100%; }
body { margin: 0; }

.page-root { display: flex; flex-direction: column; min-height: 100%; }
.container { max-width: 960px; margin: 0 auto; padding: 0 16px; }

.site-header { position: fixed; top: 40px; left: 0; right: 0; z-index: 20; background: transparent; border-bottom: none; }
.site-header .container { position: relative; display: flex; align-items: center; justify-content: space-between; padding: 12px 30px; height: 80px; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.08); border-radius: 100px; }
.brand { font-weight: 600; color: #fff; text-decoration: none; }

.nav-toggle { display: inline-flex; flex-direction: column; gap: 4px; padding: 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; background: transparent; }
.nav-toggle .bar { width: 20px; height: 2px; background: #fff; border-radius: 1px; }

.primary-nav { position: absolute; top: 56px; left: 0; right: 0; background: rgba(0,0,0,0.7); border-bottom: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); display: none; }
.primary-nav.open { display: block; }
.nav-list { list-style: none; margin: 0; padding: 8px; }
.nav-list li { margin: 4px 0; }
.nav-list a { display: block; padding: 8px 12px; border-radius: 6px; color: #fff; text-decoration: none; }
.nav-list a:hover { background: rgba(255,255,255,0.08); }

.content { flex: 1; padding: 0 0 24px; }

.site-footer { background: #000; }
.site-footer .container { display: flex; align-items: center; justify-content: space-between; padding: 16px; }

.back-to-top { position: fixed; right: 20px; bottom: 24px; width: 44px; height: 44px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); color: #fff; cursor: pointer; }

@media (min-width: 768px) {
  .nav-toggle { display: none; }
  .primary-nav { all: unset; }
  .primary-nav { display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
  .primary-nav .nav-list { display: flex; gap: 16px; align-items: center; justify-content: center; }
  .nav-list li { margin: 0; }
  .nav-list a { padding: 8px 10px; }
  .site-header .container { max-width: 1240px; }
}

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.brand { display: inline-flex; align-items: center; gap: 8px; }
.brand-logo { height: 24px; width: auto; display: block; }
@media (min-width: 768px) { .brand-logo { height: 28px; } }
.brand-logo--light { display: none; }
@media (prefers-color-scheme: light) {
  .brand-logo--dark { display: none; }
  .brand-logo--light { display: block; }
}
</style>
