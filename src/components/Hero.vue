<template>
  <section class="hero-section">
    <div class="hero-background">
      <video class="background-video" src="https://cdn.builder.io/o/assets%2F7aeb5cf45399475b85c3a321bfd0a8a2%2Fdf095d7627c64d3fa89d179cd8bf8f27?alt=media&token=bc6f0c15-ec8f-4fe1-9858-2427511dacdf&apiKey=7aeb5cf45399475b85c3a321bfd0a8a2" autoplay muted loop playsinline></video>
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
        <div class="hero-visual" aria-hidden="true">
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

.hero-visual { position: relative; height: 220px; }
.orb { position: absolute; border-radius: 50%; filter: blur(24px); opacity: 0.6; }
.orb-1 { width: 180px; height: 180px; right: 10%; top: 10%; background: #6ee7b7; }
.orb-2 { width: 140px; height: 140px; left: 8%; bottom: 10%; background: #93c5fd; }

@media (min-width: 768px) {
  .hero-section { padding: 72px 0 96px; }
  .hero-layout { grid-template-columns: 1.1fr 0.9fr; gap: 40px; }
  .hero-title { font-size: 56px; }
  .hero-subtitle { font-size: 20px; }
  .hero-visual { height: 320px; }
}
</style>
