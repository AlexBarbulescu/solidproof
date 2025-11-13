<template>
  <section class="partners" ref="partnersRef" aria-labelledby="partners-heading">
    <div class="partners-inner">
      <h2 id="partners-heading" class="partners-title">Trusted by Leading Web3 Innovators</h2>
      <p class="partners-sub">SolidProof has secured a portfolio of over 1000 projects, proudly supporting industry leaders in the Web3 space.</p>
      <div class="partners-grid">
        <div v-for="(p,i) in visiblePartners" :key="`${p.name}-${currentIndex}-${i}`" class="partner" :style="{ '--i': i }" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
          <a v-if="p.url" :href="p.url" target="_blank" rel="noopener noreferrer" :aria-label="p.name" class="partner-link">
            <img :src="p.src" :alt="p.alt || p.name" loading="lazy" />
          </a>
          <div v-else class="partner-static" :aria-label="p.name">
            <img :src="p.src" :alt="p.alt || p.name" loading="lazy" />
          </div>
        </div>
      </div>
      <!-- Stats Box -->
      <div class="stats-box" role="group" aria-label="Company achievement statistics">
        <div v-for="s in stats" :key="s.label" class="stat">
          <div class="stat-number" :aria-label="`${s.label} ${s.value}+`">{{ displayValues[s.label] }}+</div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Partner logos - replace with actual logo paths in /public/images/partners/
const partners = [
  { name: 'PinkSale', src: '/images/partners/pinksale_logo.png', alt: 'PinkSale', url: '' },
  { name: 'UNCX', src: '/images/partners/unicrypt_logo.png', alt: 'UNCX', url: '' },
  { name: 'Gempad', src: '/images/partners/gempad_logo.png', alt: 'Gempad', url: '' },
  { name: 'DXSale', src: '/images/partners/dxsale_logo.png', alt: 'DXSale', url: '' },
  { name: 'Crypto Adventure', src: '/images/partners/crypto_adventure_logo.png', alt: 'Crypto Adventure', url: '' },
  { name: 'Cryptic', src: '/images/partners/cryptic_logo.png', alt: 'Cryptic', url: '' }
]

const partnersRef = ref(null)
const currentIndex = ref(0)
const isCarouselPaused = ref(false)
let observer = null
let carouselInterval = null
const stats = [
  { label: 'Clients', value: 1007 },
  { label: 'Audits', value: 957 },
  { label: 'KYC', value: 385 }
]
// Track animated values per stat label
const displayValues = ref(Object.fromEntries(stats.map(s => [s.label, 0])))
let statsStarted = false

// Carousel: Show 4 partners at a time, cycling through all partners
const visiblePartners = computed(() => {
  const visible = []
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex.value + i) % partners.length
    visible.push(partners[index])
  }
  return visible
})

function startCarousel() {
  carouselInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % partners.length
  }, 3000) // 3 second interval
}

function stopCarousel() {
  if (carouselInterval) {
    clearInterval(carouselInterval)
    carouselInterval = null
  }
}

function pauseCarousel() {
  isCarouselPaused.value = true
  stopCarousel()
}

function resumeCarousel() {
  isCarouselPaused.value = false
  if (!carouselInterval) {
    startCarousel()
  }
}

function startStatsCountUp() {
  if (statsStarted) return
  statsStarted = true
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = prefersReduced ? 0 : 1500 // ms

  stats.forEach(stat => {
    if (duration === 0) {
      displayValues.value[stat.label] = stat.value
      return
    }
    const startTime = performance.now()
    const startVal = 0
    const endVal = stat.value
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      displayValues.value[stat.label] = Math.floor(startVal + (endVal - startVal) * eased)
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        displayValues.value[stat.label] = endVal
      }
    }
    requestAnimationFrame(tick)
  })
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        partnersRef.value.classList.add('in-view')
        startCarousel() // Start carousel when section becomes visible
        startStatsCountUp() // Trigger stats animation when visible
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })
  
  if (partnersRef.value) {
    observer.observe(partnersRef.value)
  }
})

onBeforeUnmount(() => {
  stopCarousel()
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.partners {
  width: 100%;
  padding: 80px 20px;
  background: #000;
  position: relative;
}

.partners-inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.partners-title {
  margin: 0 0 24px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.partners-sub {
  margin: 0 auto 64px;
  max-width: 600px;
  font-size: 18px;
  line-height: 1.5;
  color: #9BA1A5;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: center;
  justify-items: center;
}

/* Stats Box */
.stats-box {
  margin-top: 72px;
  display: flex;
  position: relative;
  background: rgba(15,16,17,0.8);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  isolation: isolate;
}
.stats-box::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(80% 120% at 85% 90%, rgba(13,110,253,0.25) 0%, rgba(99,102,241,0.18) 35%, rgba(0,0,0,0) 65%);
  opacity: 0.9;
}
.stat {
  flex: 1;
  padding: 28px 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
}
.stat + .stat {
  border-left: 1px solid rgba(255,255,255,0.08);
}
.stat-number {
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  background: linear-gradient(100deg,#fff 0%, #dce1ff 50%, #c9d4ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  filter: drop-shadow(0 8px 28px rgba(13,110,253,0.35)) drop-shadow(0 2px 6px rgba(255,255,255,0.15));
  letter-spacing: -1.5px;
  text-shadow: 0 0 12px rgba(255,255,255,0.15);
}
.stat-label {
  font-size: 15px;
  letter-spacing: 0.3em;
  font-weight: 600;
  color: #9BA1A5;
  text-transform: uppercase;
  position: relative;
}
.stat:hover .stat-number {
  transform: translateY(-4px) scale(1.02);
  transition: transform 0.35s cubic-bezier(.16,.84,.44,1);
}
.stat:hover .stat-label {
  color: #ffffff;
  transition: color 0.3s ease;
}
@media (prefers-reduced-motion: reduce) {
  .stat:hover .stat-number { transform: none; }
}

.partner {
  position: relative;
  width: 100%;
  max-width: 200px;
  filter: grayscale(100%) brightness(0.7);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease, filter 0.3s ease;
}

.in-view .partner {
  opacity: 1;
  transform: translateY(0);
  animation: partnerFadeIn 0.8s ease forwards;
  animation-delay: calc(var(--i) * 150ms);
}

.partner:hover {
  filter: grayscale(0%) brightness(1);
}

.partner:hover .partner-link img,
.partner:hover .partner-static img {
  transform: scale(1.2);
}

.partner-link,
.partner-static {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
}

.partner-link img,
.partner-static img {
  max-width: 100%;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  transition: transform 0.3s ease;
}

@keyframes partnerFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .partners-title {
    font-size: 40px;
  }
  
  .partners-sub {
    font-size: 16px;
    margin-bottom: 48px;
  }
  
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  .stat-number { font-size: 44px; }
  .stat { padding: 24px 24px 28px; }
}

@media (max-width: 768px) {
  .partners {
    padding: 64px 16px;
  }
  
  .partners-title {
    font-size: 32px;
  }
  
  .partners-sub {
    font-size: 15px;
  }
  
  .partners-grid {
    gap: 28px;
  }
  .stats-box {
    flex-direction: column;
  }
  .stat + .stat {
    border-left: none;
    border-top: 1px solid #1e1e1e;
  }
  .stat-number { font-size: 40px; }
}

@media (max-width: 480px) {
  .partners-title {
    font-size: 28px;
  }
  
  .partners-sub {
    font-size: 14px;
  }
  
  .partners-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .stat-number { font-size: 36px; }
  .stat-label { font-size: 12px; letter-spacing: 0.2em; }
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .partner {
    transition: none;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .stat-number {
    transition: none;
  }
}
</style>