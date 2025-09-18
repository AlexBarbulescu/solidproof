<template>
  <section class="hero-section">
    <div class="hero-background">
      <video ref="videoEl" class="background-video" preload="none" autoplay muted loop playsinline aria-hidden="true"></video>
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-inner">
      <div class="hero-layout">
        <div class="hero-copy">
          <h1 class="hero-title">Auditing & Security for Web3</h1>
          <p class="hero-subtitle">Solid, independent smart contract audits and blockchain security reviews to protect your protocols and users.</p>
          <div class="hero-actions">
            <a href="#" class="hero-cta primary-cta">Get Started</a>
            <a href="#" class="hero-cta secondary-cta">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoEl = ref(null)
let observer = null
const VIDEO_SRC = 'https://cdn.builder.io/o/assets%2F7aeb5cf45399475b85c3a321bfd0a8a2%2Fdf095d7627c64d3fa89d179cd8bf8f27?alt=media&token=bc6f0c15-ec8f-4fe1-9858-2427511dacdf&apiKey=7aeb5cf45399475b85c3a321bfd0a8a2'

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  const el = videoEl.value
  if (!el) return

  if (!('IntersectionObserver' in window)) {
    el.src = VIDEO_SRC
    el.load()
    el.play().catch(() => {})
    return
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        el.src = VIDEO_SRC
        el.load()
        el.play().catch(() => {})
        if (observer) observer.disconnect()
      }
    })
  }, { rootMargin: '200px 0px' })

  observer.observe(el)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.hero-section { position: relative; overflow: hidden; padding: 56px 0 72px; }
.hero-inner { max-width: 1440px; margin: 0 auto; padding: 0 16px; position: relative; z-index: 1; }

.hero-background { position: absolute; inset: 0; z-index: 0; }
.background-video { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }
.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); }

.hero-layout { display: grid; grid-template-columns: 1fr; align-items: center; gap: 32px; }

.hero-copy { max-width: 760px; }
.hero-title { font-size: 40px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em; color: var(--color-heading); }
.hero-subtitle { margin-top: 12px; color: var(--color-text); font-size: 18px; opacity: 0.9; }

.hero-actions { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
.hero-cta { display: inline-block; padding: 10px 16px; border-radius: 10px; border: 1px solid var(--color-border); }
.primary-cta { background: var(--color-background-soft); }
.secondary-cta { background: transparent; }


@media (min-width: 768px) {
  .hero-section { padding: 72px 0 96px; min-height: 880px; }
  .hero-inner { min-height: 880px; display: flex; align-items: center; }
  .hero-layout { grid-template-columns: 1fr; gap: 40px; justify-items: center; }
  .hero-copy { text-align: center; }
  .hero-actions { justify-content: center; }
  .hero-title { font-size: 56px; }
  .hero-subtitle { font-size: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  .background-video { display: none; }
}
</style>
