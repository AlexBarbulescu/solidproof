<template>
  <section class="services-section" aria-labelledby="services-heading">
    <div class="services-wrapper">
      <div class="services-header">
        <h2 id="services-heading" class="services-title">Our Services</h2>
        <p class="services-intro">High-impact security and development solutions for Web3 teams. Built on trust, delivered with precision.</p>
      </div>

      <div class="services-grid">
        <!-- Audits -->
        <article class="service-card service-card--tall" aria-labelledby="service-audits-title">
          <div class="service-content">
            <h3 id="service-audits-title" class="service-name">Audits</h3>
            <p class="service-description">
              SolidProof audits ensure project security with meticulous assessments, rigorous protocols, and detailed reports, helping clients identify and resolve potential vulnerabilities.
            </p>
          </div>
          <figure class="service-media">
            <img src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg" alt="Futuristic glowing cube representing smart contract auditing" loading="lazy" />
          </figure>
        </article>

        <!-- KYC -->
        <article class="service-card" aria-labelledby="service-kyc-title">
          <div class="service-content">
            <h3 id="service-kyc-title" class="service-name">KYC</h3>
            <p class="service-description">
              Secure investor compliance with SolidProof KYC. We utilize offline AES-256 encryption, ensuring data safety, and provide widely recognized KYC certificates and badges for reputable launchpads and platforms.
            </p>
          </div>
          <figure class="service-media">
            <img src="https://images.pexels.com/photos/17483873/pexels-photo-17483873.png" alt="Abstract AI network visualization symbolizing identity verification" loading="lazy" />
          </figure>
        </article>

        <!-- Consulting -->
        <article class="service-card" aria-labelledby="service-consulting-title">
          <div class="service-content">
            <h3 id="service-consulting-title" class="service-name">Consulting</h3>
            <p class="service-description">
              Experienced professionals collaborating closely with clients to drive project success in the competitive market, providing tailored consultation services in development, security advisory, and marketing for blockchain startups and Web3 organizations.
            </p>
          </div>
          <figure class="service-media">
            <img src="https://images.pexels.com/photos/17486099/pexels-photo-17486099.png" alt="Holographic cylinders representing strategic consulting" loading="lazy" />
          </figure>
        </article>

        <!-- DApp Development -->
        <article class="service-card" aria-labelledby="service-dapp-title">
          <div class="service-content">
            <h3 id="service-dapp-title" class="service-name">DApp Development</h3>
            <p class="service-description">
              Unlock your project's marketing potential with SolidProof's comprehensive marketing solutions. Partnered with high-class agencies, we tailor strategies to meet your goals. Our one-stop marketing arsenal ensures top-quality solutions at competitive prices.
            </p>
          </div>
          <figure class="service-media">
            <img src="https://images.pexels.com/photos/17485705/pexels-photo-17485705.png" alt="Geometric 3D artwork symbolizing decentralized application development" loading="lazy" />
          </figure>
        </article>

        <!-- Smart Contracts -->
        <article class="service-card" aria-labelledby="service-contracts-title">
          <div class="service-content">
            <h3 id="service-contracts-title" class="service-name">Smart Contracts</h3>
            <p class="service-description">
              Explore the limitless possibilities of smart contract development with SolidProof. From simple ERC-20 contracts to complex ecosystem solutions, our expert developers can bring your vision to life. Trust in our rigorously tested and secure smart contracts to provide the foundation for your project's success.
            </p>
          </div>
          <figure class="service-media">
            <img src="https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg" alt="Pastel chrome cubes with spheres representing smart contract engineering" loading="lazy" />
          </figure>
        </article>

        <!-- Marketing -->
        <article class="service-card" aria-labelledby="service-marketing-title">
          <div class="service-content">
            <h3 id="service-marketing-title" class="service-name">Marketing</h3>
            <p class="service-description">
              Experienced professionals collaborating closely with clients to drive project success in the competitive market, providing tailored consultation services in development, security advisory, and marketing for blockchain startups and Web3 organizations.
            </p>
          </div>
          <figure class="service-media">
            <img src="https://images.pexels.com/photos/32624441/pexels-photo-32624441.jpeg" alt="Metallic spiral ring showcasing growth and reach for marketing" loading="lazy" />
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

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

.service-card { position: relative; overflow: hidden; border-radius: 18px; background: #111213; border: 1px solid rgba(255,255,255,0.08); min-height: 260px; isolation: isolate; }
.service-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(60% 120% at 80% 90%, rgba(13,110,253,0.18) 0%, rgba(99,102,241,0.10) 40%, rgba(0,0,0,0) 70%); pointer-events: none; z-index: 0; }
.service-card:hover { border-color: rgba(255,255,255,0.16); box-shadow: 0 12px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.03); }

.service-card--tall { grid-row: span 2; min-height: 540px; }

.service-content { position: relative; z-index: 2; padding: 24px; max-width: 560px; display: flex; flex-direction: column; gap: 10px; }
.service-name { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 24px; font-weight: 700; line-height: 1.2; margin: 0; }
.service-description { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; margin: 0; }

.service-media { position: absolute; right: 0; bottom: 0; z-index: 1; width: 56%; height: 70%; display: flex; align-items: flex-end; justify-content: flex-end; pointer-events: none; }
.service-media img { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; filter: saturate(115%) contrast(110%); transform: translate3d(8px, 8px, 0) scale(1.02); transition: transform 0.35s ease; border-top-left-radius: 16px; }
.service-card:hover .service-media img { transform: translate3d(0, 0, 0) scale(1.06); }

/* Responsive */
@media (max-width: 1180px) { .services-grid { grid-template-columns: repeat(2, 1fr); } .service-card--tall { grid-row: auto; min-height: 320px; } }
@media (max-width: 768px) {
  .services-section { padding: 64px 16px 32px; }
  .services-title { font-size: 36px; }
  .services-intro { font-size: 16px; }
  .services-grid { grid-template-columns: 1fr; gap: 14px; }
  .service-card { min-height: 280px; }
  .service-media { position: absolute; right: 0; bottom: 0; width: 68%; height: 56%; }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) { .service-media img { transition: none !important; transform: none !important; } }
</style>
