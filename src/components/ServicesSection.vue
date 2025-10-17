<template>
  <section class="services-section" aria-labelledby="services-heading" ref="servicesRoot">
    <div class="services-wrapper">
      <div class="services-header">
        <h2 id="services-heading" class="services-title">Our Services</h2>
        <p class="services-intro">High-impact security and development solutions for Web3 teams. Built on trust, delivered with precision.</p>
      </div>

      <div class="services-grid">
        <!-- Audits (spans 2 cols, landscape) -->
  <article class="service-card card--audits" aria-labelledby="service-audits-title">
          <div class="service-content">
            <h3 id="service-audits-title" class="service-name">Audits</h3>
            <p class="service-description">
              SolidProof audits ensure project security with meticulous assessments, rigorous protocols, and detailed reports, helping clients identify and resolve potential vulnerabilities.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/audits.jpg" alt="Abstract chrome audit visual representing protocol assessments" loading="lazy" />
          </figure>
        </article>

        <!-- Marketing (tall right column) -->
  <article class="service-card card--marketing" aria-labelledby="service-marketing-title">
          <div class="service-content">
            <h3 id="service-marketing-title" class="service-name">Marketing</h3>
            <p class="service-description">
              Experienced professionals collaborating closely with clients to drive project success in the competitive market, providing tailored consultation services in development, security advisory, and marketing for blockchain startups and Web3 organizations.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/marketing.jpg" loading="lazy" />
          </figure>
        </article>

        <!-- KYC (square) -->
  <article class="service-card card--kyc" aria-labelledby="service-kyc-title">
          <div class="service-content">
            <h3 id="service-kyc-title" class="service-name">KYC</h3>
            <p class="service-description">
              Secure investor compliance with SolidProof KYC. We utilize offline AES-256 encryption, ensuring data safety, and provide widely recognized KYC certificates and badges for reputable launchpads and platforms.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/kyc.jpg" alt="Methodology graphic symbolizing secure identity verification" loading="lazy" />
          </figure>
        </article>

        <!-- Consulting (square) -->
  <article class="service-card card--consulting" aria-labelledby="service-consulting-title">
          <div class="service-content">
            <h3 id="service-consulting-title" class="service-name">Consulting</h3>
            <p class="service-description">
              Experienced professionals collaborating closely with clients to drive project success in the competitive market, providing tailored consultation services in development, security advisory, and marketing for blockchain startups and Web3 organizations.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/consulting.jpg" alt="Strategic visualization for security consulting" loading="lazy" />
          </figure>
        </article>

        <!-- Smart Contracts (landscape) -->
  <article class="service-card card--contracts" aria-labelledby="service-contracts-title">
          <div class="service-content">
            <h3 id="service-contracts-title" class="service-name">Smart Contracts</h3>
            <p class="service-description">
              Explore the limitless possibilities of smart contract development with SolidProof. From simple ERC-20 contracts to complex ecosystem solutions, our expert developers can bring your vision to life. Trust in our rigorously tested and secure smart contracts to provide the foundation for your project's success.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/smartcontract.jpg" alt="Chrome vault-like cube implying robust smart contracts" loading="lazy" />
          </figure>
        </article>

        <!-- DApp Development (landscape) -->
  <article class="service-card card--dapp" aria-labelledby="service-dapp-title">
          <div class="service-content">
            <h3 id="service-dapp-title" class="service-name">DApp Development</h3>
            <p class="service-description">
              Unlock your project's marketing potential with SolidProof's comprehensive marketing solutions. Partnered with high-class agencies, we tailor strategies to meet your goals. Our one-stop marketing arsenal ensures top-quality solutions at competitive prices.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/dapp.jpg" alt="Iridescent geometric shards suggesting dApp engineering" loading="lazy" />
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const servicesRoot = ref(null)

function escapeHtml(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

// Create a left-to-right moving highlight window of fixed length over the element's text
function setupMovingHighlight(el, { windowSize = 3, charsPerSecond = 10 } = {}) {
  if (!el) return () => {}
  const original = el.textContent || ''
  let rafId = 0
  let start = 0
  let highlightEl = null
  
  // Desync animations: random starting character offset and slight speed jitter per element
  const lenForPhase = Math.max((original || '').length, 1)
  const phaseOffset = Math.floor(Math.random() * lenForPhase) // start at random position
  const cps = charsPerSecond * (0.9 + Math.random() * 0.3) // ±15% jitter approximately

  // Create overlay highlight element
  function createHighlight() {
    if (highlightEl) return
    highlightEl = document.createElement('span')
    highlightEl.className = 'sd-highlight-overlay'
    highlightEl.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      color: transparent;
      z-index: 1;
      white-space: inherit;
      font: inherit;
      line-height: inherit;
      font-kerning: none;
      font-variant-ligatures: none;
      -webkit-font-smoothing: antialiased;
    `
    el.style.position = 'relative'
    el.appendChild(highlightEl)
  }

  function render(now) {
    const len = original.length
    if (len === 0) return
    const elapsed = (now - start) / 1000
    const pointer = (Math.floor(elapsed * cps) + phaseOffset) % Math.max(len, 1)
    const wStart = pointer
    const wEnd = Math.min(wStart + windowSize, len)
    const before = original.slice(0, wStart)
    const middle = original.slice(wStart, wEnd)
    const after = original.slice(wEnd)
    
    if (highlightEl) {
      highlightEl.innerHTML = '<span style="color: transparent;">' + escapeHtml(before) + 
                             '</span><span class="sd-window">' + escapeHtml(middle) + 
                             '</span><span style="color: transparent;">' + escapeHtml(after) + '</span>'
    }
  }

  function step(now) {
    render(now)
    rafId = requestAnimationFrame(step)
  }

  function startAnim() {
    cancelAnimationFrame(rafId)
    createHighlight()
    start = performance.now()
    rafId = requestAnimationFrame(step)
  }

  function stopAnim() {
    cancelAnimationFrame(rafId)
    if (highlightEl) {
      highlightEl.remove()
      highlightEl = null
    }
    el.style.position = ''
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) startAnim(); else stopAnim()
    })
  }, { threshold: 0.35 })

  io.observe(el)
  // initialize static state without highlight until intersection occurs
  el.textContent = original

  return () => { 
    io.disconnect(); 
    cancelAnimationFrame(rafId); 
    if (highlightEl) {
      highlightEl.remove()
      highlightEl = null
    }
    el.style.position = ''
  }
}

onMounted(() => {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return
  const els = servicesRoot.value?.querySelectorAll('.service-description') || []
  const cleaners = []
  els.forEach((el) => cleaners.push(setupMovingHighlight(el, { windowSize: 6, charsPerSecond: 25 })))
  onBeforeUnmount(() => cleaners.forEach((c) => c && c()))
})
</script>

<style scoped>
.services-section { width: 100%; padding: 80px 20px 40px; background: transparent; position: relative; }
.services-wrapper { max-width: 1240px; margin: 0 auto; }

.services-header { max-width: 900px; margin: 0 auto 36px; text-align: center; }
.services-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 48px; font-weight: 700; line-height: 1.1; margin: 0 0 12px; }
.services-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0 auto; max-width: 680px; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; grid-auto-rows: 1fr; grid-template-areas:
  'audits audits marketing'
  'kyc consulting marketing'
  'contracts dapp marketing'; }

/* Base card */
.service-card { position: relative; overflow: hidden; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); min-height: 270px; isolation: isolate; }
.service-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(55% 110% at 80% 90%, rgba(13,110,253,0.18) 0%, rgba(99,102,241,0.1) 40%, rgba(0,0,0,0) 70%); pointer-events: none; z-index: 0; }
.service-card:hover { border-color: rgba(255,255,255,0.18); box-shadow: 0 10px 28px rgba(0,0,0,0.35); }

/* Mosaic placement */
.card--audits { grid-area: audits; min-height: 360px; }
.card--marketing { grid-area: marketing; min-height: 560px; }
.card--kyc { grid-area: kyc; min-height: 500px; }
.card--consulting { grid-area: consulting; min-height: 280px; }
.card--contracts { grid-area: contracts; min-height: 300px; }
.card--dapp { grid-area: dapp; min-height: 300px; }

/* Content */
.service-content { position: relative; z-index: 2; padding: 22px; max-width: 560px; display: flex; flex-direction: column; gap: 10px; }
.service-name { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 22px; font-weight: 700; line-height: 1.2; margin: 0; }
.service-description { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; font-variant-ligatures: none; font-kerning: none; font-feature-settings: 'liga' 0, 'clig' 0, 'calt' 0; text-rendering: geometricPrecision; }

/* moving highlight window colors (use deep so dynamically injected spans are styled within scoped CSS) */
.service-description :deep(.sd-highlight-overlay) {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  font-kerning: none;
  font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'clig' 0, 'calt' 0;
}

.service-description :deep(.sd-window) {
  color: #FFFFFF;
  /* enhanced glow for better visibility */
  text-shadow:
    0 0 3px rgba(255, 255, 255, 0.8),
    0 0 8px rgba(255, 255, 255, 0.6),
    0 0 16px rgba(99, 102, 241, 0.4),
    0 0 24px rgba(13, 110, 253, 0.3);
  font-kerning: none;
  font-variant-ligatures: none;
  font-feature-settings: 'liga' 0, 'clig' 0, 'calt' 0;
}

/* Media */
.service-media { position: absolute; inset: 0; z-index: 1; display: flex; align-items: center; justify-content: center; pointer-events: none; }
.service-media::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 60%); z-index: 1; }
.service-media img { position: absolute; right: var(--img-right, auto); left: var(--img-left, 50%); bottom: var(--img-bottom, auto); top: var(--img-top, 50%); width: var(--img-w, 70%); height: var(--img-h, auto); max-height: var(--img-max-h, 78%); object-fit: var(--img-fit, cover); object-position: var(--img-pos, center); filter: saturate(115%) contrast(110%); transform: var(--img-transform, translate(-50%, -50%) scale(1)); transition: transform 0.35s ease; border-top-left-radius: 14px; }
.service-card:hover .service-media img { transform: var(--img-transform-hover, translate(-50%, -50%) scale(1.04)); }

/* Per-card image configuration via CSS custom properties per-card */
/* Audits */
.card--audits {
  --img-w: 100%; --img-h: 100%; --img-fit: cover; --img-pos: center 35%;
  --md-img-w: 100%; --md-img-h: 100%; --md-img-fit: cover; --md-img-pos: center 35%;
  --sm-img-w: 100%; --sm-img-h: 90%; --sm-img-fit: cover; --sm-img-pos: center;
  --img-transform: translate3d(0,0,0) scale(1); --img-transform-hover: translate3d(0,0,0) scale(1.02);
}
/* Marketing */
.card--marketing {
  --img-w: 100%; --img-h: 100%; --img-fit: cover; --img-pos: center;
  --md-img-w: 100%; --md-img-h: 100%; --md-img-fit: cover; --md-img-pos: center;
  --sm-img-w: 100%; --sm-img-h: 85%; --sm-img-fit: cover; --sm-img-pos: center;
  --img-transform: translate3d(0,0,0) scale(1); --img-transform-hover: translate3d(0,0,0) scale(1.02);
}
/* KYC */
.card--kyc {
  --img-w: 90%; --img-h: auto; --img-left: 50%; --img-bottom: 5%; --img-fit: contain; --img-pos: center;
  --md-img-w: 85%; --md-img-h: auto; --md-img-left: 50%; --md-img-bottom: 5%; --md-img-fit: contain; --md-img-pos: center;
  --sm-img-w: 80%; --sm-img-h: auto; --sm-img-left: 50%; --sm-img-bottom: 8%; --sm-img-fit: contain; --sm-img-pos: center;
  --img-transform: translate(-50%, 0) scale(1.2); --img-transform-hover: translate(-50%, 0) scale(1.25);
}
/* Consulting */
.card--consulting {
  --img-w: 90%; --img-h: auto; --img-left: 50%; --img-bottom: 5%; --img-fit: contain; --img-pos: center;
  --md-img-w: 85%; --md-img-h: auto; --md-img-left: 50%; --md-img-bottom: 5%; --md-img-fit: contain; --md-img-pos: center;
  --sm-img-w: 80%; --sm-img-h: auto; --sm-img-left: 50%; --sm-img-bottom: 8%; --sm-img-fit: contain; --sm-img-pos: center;
  --img-transform: translate(-50%, 0) scale(1.2); --img-transform-hover: translate(-50%, 0) scale(1.25);
}
/* Smart Contracts */
.card--contracts {
  --img-w: 90%; --img-h: auto; --img-left: 50%; --img-bottom: 5%; --img-fit: contain; --img-pos: center;
  --md-img-w: 85%; --md-img-h: auto; --md-img-left: 50%; --md-img-bottom: 5%; --md-img-fit: contain; --md-img-pos: center;
  --sm-img-w: 80%; --sm-img-h: auto; --sm-img-left: 50%; --sm-img-bottom: 8%; --sm-img-fit: contain; --sm-img-pos: center;
  --img-transform: translate(-50%, 0) scale(1.2); --img-transform-hover: translate(-50%, 0) scale(1.25);
}
/* DApp */
.card--dapp {
  --img-w: 90%; --img-h: auto; --img-left: 50%; --img-bottom: 5%; --img-fit: contain; --img-pos: center;
  --md-img-w: 85%; --md-img-h: auto; --md-img-left: 50%; --md-img-bottom: 5%; --md-img-fit: contain; --md-img-pos: center;
  --sm-img-w: 80%; --sm-img-h: auto; --sm-img-left: 50%; --sm-img-bottom: 8%; --sm-img-fit: contain; --sm-img-pos: center;
  --img-transform: translate(-50%, 0) scale(1.2); --img-transform-hover: translate(-50%, 0) scale(1.25);
}

/* Responsive */
@media (max-width: 1180px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); grid-template-areas:
    'audits marketing'
    'kyc marketing'
    'consulting marketing'
    'contracts dapp'; }
  .card--marketing { min-height: 520px; }
  .service-media img { width: var(--md-img-w, var(--img-w, 70%)); height: var(--md-img-h, var(--img-h, auto)); max-height: var(--md-img-max-h, var(--img-max-h, 78%)); right: var(--md-img-right, var(--img-right, 0)); left: var(--md-img-left, var(--img-left, auto)); bottom: var(--md-img-bottom, var(--img-bottom, 0)); top: var(--md-img-top, var(--img-top, auto)); object-fit: var(--md-img-fit, var(--img-fit, cover)); object-position: var(--md-img-pos, var(--img-pos, center)); }
}
@media (max-width: 768px) {
  .services-section { padding: 64px 16px 32px; }
  .services-title { font-size: 36px; }
  .services-intro { font-size: 16px; }
  .services-grid { grid-template-columns: 1fr; grid-template-areas: 'audits' 'marketing' 'kyc' 'consulting' 'contracts' 'dapp'; gap: 12px; }
  .service-card { min-height: 320px; }
  .service-media img { width: var(--sm-img-w, var(--md-img-w, var(--img-w, 70%))); height: var(--sm-img-h, var(--md-img-h, var(--img-h, auto))); max-height: var(--sm-img-max-h, var(--md-img-max-h, var(--img-max-h, 62%))); right: var(--sm-img-right, var(--md-img-right, var(--img-right, 0))); left: var(--sm-img-left, var(--md-img-left, var(--img-left, auto))); bottom: var(--sm-img-bottom, var(--md-img-bottom, var(--img-bottom, 0))); top: var(--sm-img-top, var(--md-img-top, var(--img-top, auto))); object-fit: var(--sm-img-fit, var(--md-img-fit, var(--img-fit, cover))); object-position: var(--sm-img-pos, var(--md-img-pos, var(--img-pos, center))); }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) { .service-media img { transition: none !important; transform: none !important; } }
</style>
