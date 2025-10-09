<template>
  <section class="services-section" aria-labelledby="services-heading">
    <div class="services-wrapper">
      <div class="services-header">
        <h2 id="services-heading" class="services-title">Our Services</h2>
        <p class="services-intro">High-impact security and development solutions for Web3 teams. Built on trust, delivered with precision.</p>
      </div>

      <div class="services-grid">
        <!-- Audits (spans 2 cols, landscape) -->
        <article class="service-card card--audits" aria-labelledby="service-audits-title" style="--img-w:100%; --img-h:100%; --img-fit:cover; --img-pos:60% 85%; --md-img-pos:58% 85%; --sm-img-h:70%; --sm-img-pos:center bottom; --img-transform:translate3d(0,0,0) scale(1); --img-transform-hover:translate3d(0,0,0) scale(1.02);">
          <div class="service-content">
            <h3 id="service-audits-title" class="service-name">Audits</h3>
            <p class="service-description">
              SolidProof audits ensure project security with meticulous assessments, rigorous protocols, and detailed reports, helping clients identify and resolve potential vulnerabilities.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/Blockchain_Protocol_Audit_2-1.avif" alt="Abstract chrome audit visual representing protocol assessments" loading="lazy" />
          </figure>
        </article>

        <!-- Marketing (tall right column) -->
        <article class="service-card card--marketing" aria-labelledby="service-marketing-title" style="--img-w:100%; --img-h:100%; --img-fit:cover; --img-pos:center; --img-transform:none; --img-transform-hover:none;">
          <div class="service-content">
            <h3 id="service-marketing-title" class="service-name">Marketing</h3>
            <p class="service-description">
              Experienced professionals collaborating closely with clients to drive project success in the competitive market, providing tailored consultation services in development, security advisory, and marketing for blockchain startups and Web3 organizations.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/Metodology_02-1.avif" alt="Iridescent chrome ring composition highlighting growth and awareness" loading="lazy" />
          </figure>
        </article>

        <!-- KYC (square) -->
        <article class="service-card card--kyc" aria-labelledby="service-kyc-title" style="--img-w:40%; --img-max-h:62%; --img-left:20px; --img-bottom:20px; --img-fit:contain; --img-pos:left bottom; --md-img-w:46%; --sm-img-w:58%;">
          <div class="service-content">
            <h3 id="service-kyc-title" class="service-name">KYC</h3>
            <p class="service-description">
              Secure investor compliance with SolidProof KYC. We utilize offline AES-256 encryption, ensuring data safety, and provide widely recognized KYC certificates and badges for reputable launchpads and platforms.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/Pebetration_Testing_1.avif" alt="Methodology graphic symbolizing secure identity verification" loading="lazy" />
          </figure>
        </article>

        <!-- Consulting (square) -->
        <article class="service-card card--consulting" aria-labelledby="service-consulting-title" style="--img-w:54%; --img-max-h:70%; --img-left:50%; --img-bottom:18px; --img-fit:contain; --img-pos:center bottom; --img-transform:translate(-50%, 6px) scale(1.01); --img-transform-hover:translate(-50%, 0) scale(1.04);">
          <div class="service-content">
            <h3 id="service-consulting-title" class="service-name">Consulting</h3>
            <p class="service-description">
              Experienced professionals collaborating closely with clients to drive project success in the competitive market, providing tailored consultation services in development, security advisory, and marketing for blockchain startups and Web3 organizations.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/Blockchain_Protocol_Audit_3.avif" alt="Strategic visualization for security consulting" loading="lazy" />
          </figure>
        </article>

        <!-- Smart Contracts (landscape) -->
        <article class="service-card card--contracts" aria-labelledby="service-contracts-title" style="--img-w:56%; --img-max-h:80%; --img-left:18px; --img-bottom:16px; --img-fit:contain; --img-pos:left bottom; --md-img-w:58%; --sm-img-w:64%;">
          <div class="service-content">
            <h3 id="service-contracts-title" class="service-name">Smart Contracts</h3>
            <p class="service-description">
              Explore the limitless possibilities of smart contract development with SolidProof. From simple ERC-20 contracts to complex ecosystem solutions, our expert developers can bring your vision to life. Trust in our rigorously tested and secure smart contracts to provide the foundation for your project's success.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/Proof_of_Reserves_2.avif" alt="Chrome vault-like cube implying robust smart contracts" loading="lazy" />
          </figure>
        </article>

        <!-- DApp Development (landscape) -->
        <article class="service-card card--dapp" aria-labelledby="service-dapp-title" style="--img-w:60%; --img-max-h:78%; --img-right:18px; --img-bottom:20px; --img-fit:contain; --img-pos:right bottom; --md-img-w:62%; --sm-img-w:66%;">
          <div class="service-content">
            <h3 id="service-dapp-title" class="service-name">DApp Development</h3>
            <p class="service-description">
              Unlock your project's marketing potential with SolidProof's comprehensive marketing solutions. Partnered with high-class agencies, we tailor strategies to meet your goals. Our one-stop marketing arsenal ensures top-quality solutions at competitive prices.
            </p>
          </div>
          <figure class="service-media">
            <img src="/images/Protect_1.avif" alt="Iridescent geometric shards suggesting dApp engineering" loading="lazy" />
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// purely presentational
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
.card--kyc { grid-area: kyc; min-height: 280px; }
.card--consulting { grid-area: consulting; min-height: 280px; }
.card--contracts { grid-area: contracts; min-height: 300px; }
.card--dapp { grid-area: dapp; min-height: 300px; }

/* Content */
.service-content { position: relative; z-index: 2; padding: 22px; max-width: 560px; display: flex; flex-direction: column; gap: 10px; }
.service-name { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 22px; font-weight: 700; line-height: 1.2; margin: 0; }
.service-description { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; }

/* Media */
.service-media { position: absolute; inset: 0; z-index: 1; display: flex; align-items: flex-end; justify-content: flex-end; pointer-events: none; }
.service-media::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 60%); z-index: 1; }
.service-media img { position: absolute; right: var(--img-right, 0); left: var(--img-left, auto); bottom: var(--img-bottom, 0); top: var(--img-top, auto); width: var(--img-w, 70%); height: var(--img-h, auto); max-height: var(--img-max-h, 78%); object-fit: var(--img-fit, cover); object-position: var(--img-pos, center); filter: saturate(115%) contrast(110%); transform: var(--img-transform, translate3d(6px, 6px, 0) scale(1.01)); transition: transform 0.35s ease; border-top-left-radius: 14px; }
.service-card:hover .service-media img { transform: var(--img-transform-hover, translate3d(0, 0, 0) scale(1.04)); }

/* Per-card image configuration is controlled via CSS variables set on each card element (style attribute). */

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
