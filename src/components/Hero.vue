<template>
  <section class="hero-section">
    <div class="hero-background">
      <video ref="videoEl" class="background-video" preload="none" autoplay muted loop playsinline aria-hidden="true"></video>
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-inner">
      <div class="hero-layout">
        <div class="hero-copy">
          <div class="hero-badge">
            <p class="badge-text">Made in Germany</p>
            <div class="hero-flag" aria-hidden="true">
              <span class="flag-band flag-black"></span>
              <span class="flag-band flag-red"></span>
              <span class="flag-band flag-gold"></span>
            </div>
            <h2 class="badge-subtitle">Blockchain Security</h2>
          </div>
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
const VIDEO_SRC = '/images/hero_video.mp4'

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
.hero-section { 
  position: relative; 
  overflow: hidden; 
  padding: 80px 0 72px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-inner { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px; 
  position: relative; 
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.hero-background { position: absolute; inset: 0; z-index: 0; }
.background-video { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }
.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); }

.hero-layout { 
  display: flex; 
  flex-direction: column;
  align-items: center; 
  text-align: center;
  width: 100%;
  max-width: 800px;
}

.hero-copy { 
  max-width: 760px; 
  width: 100%;
}

.hero-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  gap: 8px;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.05em;
  margin: 0;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.hero-flag {
  display: inline-flex;
  gap: 4px;
}

.flag-band {
  display: inline-block;
  width: 24px;
  height: 16px;
  border-radius: 2px;
}

.flag-black {
  background: #1b1b1b;
}

.flag-red {
  background: #d71f3b;
}

.flag-gold {
  background: #f2c200;
}

.badge-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  letter-spacing: -0.01em;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.hero-subtitle { 
  margin-top: 16px; 
  color: rgba(255, 255, 255, 0.9); 
  font-size: 1.25rem; 
  opacity: 0.9; 
  line-height: 1.6;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.hero-actions { 
  margin-top: 32px; 
  display: flex; 
  gap: 16px; 
  flex-wrap: wrap; 
  justify-content: center;
}

.hero-cta { 
  display: inline-block; 
  padding: 12px 24px; 
  border-radius: 8px; 
  border: 1px solid transparent;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
}

.primary-cta { 
  background: linear-gradient(135deg, #0D6EFD 0%, #6366F1 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.3);
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(13, 110, 253, 0.4);
}

.secondary-cta { 
  background: transparent; 
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.secondary-cta:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* Tablet responsive */
@media (max-width: 1024px) {
  .hero-section {
    padding: 60px 0 72px;
    min-height: 90vh;
  }

  .hero-inner {
    padding: 0 32px;
    min-height: 50vh;
  }

  .hero-badge {
    margin-bottom: 20px;
  }

  .badge-text {
    font-size: 0.8125rem;
  }

  .badge-subtitle {
    font-size: 1.375rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }
}

/* Mobile responsive */
@media (max-width: 767px) {
  .hero-section {
    padding: 40px 0 60px;
    min-height: 80vh;
  }

  .hero-inner {
    padding: 0 20px;
    min-height: 40vh;
  }

  .hero-badge {
    margin-bottom: 16px;
    gap: 6px;
  }

  .badge-text {
    font-size: 0.75rem;
  }

  .flag-icon {
    height: 20px;
    width: 28px;
  }

  .badge-subtitle {
    font-size: 1.25rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-top: 12px;
  }

  .hero-actions {
    margin-top: 24px;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .hero-cta {
    width: 100%;
    max-width: 280px;
    padding: 14px 24px;
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  .hero-section {
    padding: 32px 0 48px;
  }

  .hero-inner {
    padding: 0 16px;
  }

  .hero-badge {
    margin-bottom: 12px;
    gap: 4px;
  }

  .badge-text {
    font-size: 0.6875rem;
  }

  .flag-icon {
    height: 18px;
    width: 24px;
  }

  .badge-subtitle {
    font-size: 1.1rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .hero-cta {
    padding: 12px 20px;
    font-size: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .background-video { display: none; }
  .hero-overlay { background: rgba(0,0,0,0.7); }
}
</style>
