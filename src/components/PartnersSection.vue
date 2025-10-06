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

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        partnersRef.value.classList.add('in-view')
        startCarousel() // Start carousel when section becomes visible
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
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .partner {
    transition: none;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>