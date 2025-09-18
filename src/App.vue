<template>
  <div class="page-root">
    <header class="site-header">
      <div class="container">
        <a href="#" class="brand">SolidProof</a>
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
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="content">
      <div class="container">
        <h1>Responsive Test Page</h1>
        <p>Minimal page with a responsive menu and footer.</p>
      </div>
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>Test Footer</p>
        <small>© 2024 SolidProof</small>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

function handleResize() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
* { box-sizing: border-box; }
html, body, #app, .page-root { height: 100%; }
body { margin: 0; }

.page-root { display: flex; flex-direction: column; min-height: 100%; }
.container { max-width: 960px; margin: 0 auto; padding: 0 16px; }

.site-header { border-bottom: 1px solid #e5e7eb; background: #fff; }
.site-header .container { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; }
.brand { font-weight: 600; color: #111; text-decoration: none; }

.nav-toggle { display: inline-flex; flex-direction: column; gap: 4px; padding: 8px; border: 1px solid #e5e7eb; border-radius: 6px; background: transparent; }
.nav-toggle .bar { width: 20px; height: 2px; background: #111; border-radius: 1px; }

.primary-nav { position: absolute; top: 56px; left: 0; right: 0; background: #fff; border-bottom: 1px solid #e5e7eb; display: none; }
.primary-nav.open { display: block; }
.nav-list { list-style: none; margin: 0; padding: 8px; }
.nav-list li { margin: 4px 0; }
.nav-list a { display: block; padding: 8px 12px; border-radius: 6px; color: #111; text-decoration: none; }
.nav-list a:hover { background: #f3f4f6; }

.content { flex: 1; padding: 24px 0; }

.site-footer { border-top: 1px solid #e5e7eb; background: #fff; }
.site-footer .container { display: flex; align-items: center; justify-content: space-between; padding: 16px; }

@media (min-width: 768px) {
  .nav-toggle { display: none; }
  .primary-nav { all: unset; }
  .primary-nav { display: block; }
  .primary-nav .nav-list { display: flex; gap: 16px; align-items: center; }
  .nav-list li { margin: 0; }
  .nav-list a { padding: 8px 10px; }
}

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
</style>
