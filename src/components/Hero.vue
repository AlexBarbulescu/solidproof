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
          <div class="hero-slideshow" aria-label="Core service highlights" aria-live="polite" :style="slideshowStyle">
            <transition name="hero-slide" mode="out-in">
              <div class="hero-frame" :key="currentFrame.title">
                <h1 class="hero-title">{{ currentFrame.title }}</h1>
                <p class="hero-subtitle">{{ currentFrame.subtitle }}</p>
              </div>
            </transition>
          </div>
          <div class="hero-actions">
            <div class="hero-actions-main">
              <a href="#" class="hero-cta primary-cta">Get Started</a>
              <a href="#" class="hero-cta secondary-cta">Contact Us</a>
            </div>
            <span class="hero-or" aria-hidden="true">OR</span>
            <div class="hero-actions-icons" aria-label="Alternate contact channels">
              <a href="mailto:hello@solidproof.io" class="hero-cta icon-cta mail-cta" aria-label="Email SolidProof">
                <span class="icon-cta-inner" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 5h18v14H3z" />
                    <path d="M3 5l9 7 9-7" />
                  </svg>
                </span>
              </a>
              <a href="https://t.me/solidproof_io" target="_blank" rel="noopener noreferrer" class="hero-cta icon-cta telegram-cta" aria-label="Open SolidProof Telegram">
                <span class="icon-cta-inner" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 3L10 14" />
                    <path d="M22 3L15 21l-5-7-7-3 19-8z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const videoEl = ref(null)
let observer = null
const VIDEO_SRC = '/images/hero_video.mp4'

// Slideshow frames (title + subtitle)
const frames = [
  {
    title: 'Auditing & Security for Web3',
    subtitle: 'Solid, independent smart contract audits and blockchain security reviews to protect your protocols and users.'
  },
  {
    title: 'Smart Contract Audits',
    subtitle: 'Deep manual analysis, automated tooling, and actionable remediation guidance for resilient protocols.'
  },
  {
    title: 'Trusted KYC & Compliance',
    subtitle: 'Encrypted identity verification and recognized compliance badges to build investor confidence.'
  },
  {
    title: 'Secure Contract Development',
    subtitle: 'From token standards to complex protocol architectures—shipped with audit-grade engineering rigor.'
  },
  {
    title: 'Strategic Web3 Consulting',
    subtitle: 'Architecture, risk mitigation, and growth guidance to harden and scale your ecosystem.'
  }
]
const activeIndex = ref(0)
let slideInterval = null
const currentFrame = computed(() => frames[activeIndex.value])
const slideshowHeight = ref(0)
const slideshowStyle = computed(() => slideshowHeight.value ? { height: slideshowHeight.value + 'px' } : {})

function measureSlideshowHeight() {
  // Create temporary measuring container; adapt width to viewport for tighter height on mobile
  const temp = document.createElement('div')
  let measureWidth = 800
  const vw = window.innerWidth
  if (vw <= 480) measureWidth = 360
  else if (vw <= 767) measureWidth = 560
  temp.style.cssText = `position:absolute;left:-9999px;top:0;width:${measureWidth}px;visibility:hidden;pointer-events:none;`
  document.body.appendChild(temp)
  let max = 0
  frames.forEach(frame => {
    const el = document.createElement('div')
    el.className = 'hero-frame'
    el.innerHTML = `<h1 class="hero-title">${frame.title}</h1><p class="hero-subtitle">${frame.subtitle}</p>`
    temp.appendChild(el)
    const h = el.offsetHeight
    if (h > max) max = h
  })
  // Cap height for smaller viewports to reduce vertical space while keeping stability
  let targetHeight = max
  if (vw <= 480) {
    targetHeight = Math.min(max, 60)
  } else if (vw <= 767) {
    targetHeight = Math.min(max, 148)
  }
  slideshowHeight.value = targetHeight
  temp.remove()
}

let resizeRaf = null
function handleResize() {
  if (resizeRaf) cancelAnimationFrame(resizeRaf)
  resizeRaf = requestAnimationFrame(() => {
    measureSlideshowHeight()
  })
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // Measure height for stability (even with reduced motion)
  measureSlideshowHeight()
  window.addEventListener('resize', handleResize, { passive: true })
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

  // Start slideshow rotation (skip if reduced motion)
  if (!prefersReducedMotion) {
    slideInterval = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % frames.length
    }, 5200) // ~5.2s per frame
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (slideInterval) clearInterval(slideInterval)
  window.removeEventListener('resize', handleResize)
  if (resizeRaf) cancelAnimationFrame(resizeRaf)
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
  gap: 0px;
}

.badge-text {
  font-size: 1.25rem;
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
  width: 55px;
  height: 8px;
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

/* Slideshow container now gets fixed height inline; fallback min-height for very early render */
.hero-slideshow { position: relative; min-height: 150px; }
.hero-frame { will-change: opacity, transform; }

/* Slide / fade transition */
.hero-slide-enter-active, .hero-slide-leave-active { transition: opacity 0.65s ease, transform 0.65s cubic-bezier(.16,.84,.44,1); }
.hero-slide-enter-from { opacity: 0; transform: translateY(26px); }
.hero-slide-enter-to { opacity: 1; transform: translateY(0); }
.hero-slide-leave-from { opacity: 1; transform: translateY(0); }
.hero-slide-leave-to { opacity: 0; transform: translateY(-20px); }

@media (prefers-reduced-motion: reduce) {
  .hero-slide-enter-active, .hero-slide-leave-active { transition: none; }
  .hero-slide-enter-from, .hero-slide-leave-to { opacity: 1; transform: none; }
  .hero-slideshow { min-height: auto; }
}

.hero-actions { 
  margin-top: 32px; 
  display: flex; 
  gap: 28px; 
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
}
.hero-actions-main { display: flex; gap: 16px; align-items: center; }
.hero-actions-icons { display: flex; gap: 16px; align-items: center; }
.hero-or { font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 0.08em; color: #FFFFFF; opacity: 0.9; position: relative; }


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

/* Icon CTA buttons */
.icon-cta {
  padding: 0; 
  width: 48px; 
  height: 48px; 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  border-radius: 50%;
  position: relative;
  background: linear-gradient(135deg, #0D6EFD 0%, #6366F1 100%);
  box-shadow: 0 6px 18px rgba(13,110,253,0.35);
  border: 1px solid rgba(255,255,255,0.25);
  color: #fff;
  transition: transform 0.35s cubic-bezier(.16,.84,.44,1), box-shadow 0.35s ease;
}
.icon-cta svg { display: block; }
.icon-cta:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(13,110,253,0.5); }
.icon-cta:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

/* Mail specific subtle overlay */
.mail-cta::after {
  content: ""; position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(60% 90% at 70% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%); mix-blend-mode: overlay; pointer-events: none;
}

/* Telegram slight color shift */
.telegram-cta { background: linear-gradient(135deg, #6366F1 0%, #0D6EFD 100%); }
.telegram-cta::after { content: ""; position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(70% 100% at 30% 70%, rgba(99,102,241,0.55) 0%, rgba(255,255,255,0) 70%); mix-blend-mode: screen; pointer-events: none; }

@media (max-width: 767px) {
  .icon-cta { width: 52px; height: 52px; }
}
@media (max-width: 480px) {
  .icon-cta { width: 50px; height: 50px; }
}

@media (prefers-reduced-motion: reduce) {
  .icon-cta { transition: none; }
  .icon-cta:hover { transform: none; }
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
    font-size: 1.125rem;
  }

  .flag-band {
    width: 48px;
    height: 7px;
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
  /* height provided inline */
}

/* Mobile responsive */
@media (max-width: 767px) {
  .hero-section {
    padding: 112px 0 60px;
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
    font-size: 1rem;
  }

  .flag-band {
    width: 42px;
    height: 6px;
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
  /* height provided inline */
  .hero-slideshow { min-height:128px; }

  .hero-actions {
    margin-top: 24px;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 22px;
  }
  /* Center main call-to-action buttons vertically without stretching full width */
  .hero-actions-main { flex-direction: column; width:auto; align-items: center; gap:14px; }
  .hero-actions-icons { gap:20px; }
  /* Constrain button width for nicer centering; allow them to shrink on very narrow screens */
  .hero-actions-main .hero-cta { width:auto; min-width:220px; max-width: 280px; padding: 14px 24px; margin:0 auto; }
  .hero-actions-icons .icon-cta { width: 52px; height: 52px; flex: 0 0 auto; }
  /* Keep OR text above the icon buttons (DOM order) */
  .hero-or { font-size:13px; }
  .hero-or::after { display:none; }
}

/* Extra small mobile */
@media (max-width: 480px) {
  .hero-section {
    padding: 120px 0 48px;
  }

  .hero-inner {
    padding: 0 16px;
  }

  .hero-badge {
    margin-bottom: 12px;
    gap: 4px;
  }

  .badge-text {
    font-size: 0.875rem;
  }

  .flag-band {
    width: 36px;
    height: 5px;
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
  /* height provided inline */
  .hero-slideshow { min-height:120px; }

  .hero-actions-main .hero-cta {
    padding: 12px 20px;
    font-size: 14px;
    min-width:200px;
  }
  .hero-actions-icons .icon-cta { width: 50px; height: 50px; }
  .hero-actions-icons { gap:18px; }
  .hero-or { font-size:12px; }
}

@media (prefers-reduced-motion: reduce) {
  .background-video { display: none; }
  .hero-overlay { background: rgba(0,0,0,0.7); }
}

/* Added bottom padding to slideshow to keep space between subtitle and buttons */
.hero-slideshow { padding-bottom: 24px; }
@media (max-width:1024px){ .hero-slideshow { padding-bottom:30px; } }
@media (max-width:767px){ .hero-slideshow { padding-bottom:16px; } }
@media (max-width:480px){ .hero-slideshow { padding-bottom:10px; } }
</style>
