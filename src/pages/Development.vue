<template>
  <main class="development-page" aria-labelledby="development-hero-title">
    <!-- Hero -->
    <section class="development-hero">
      <div class="development-hero-inner">
        <div class="development-hero-copy">
          <h1 id="development-hero-title" class="development-hero-title">Development</h1>
          <p class="development-hero-subtitle">
            Our team of highly skilled full-stack developers excels in a wide range of development areas, including smart contracts, front-end, and back-end development, as well as DApps. We are dedicated to providing comprehensive development solutions tailored to meet your specific needs and requirements.
          </p>
          <div class="development-hero-ctas">
            <a href="https://t.me/solidproof_io" target="_blank" class="development-cta development-cta--primary">Request Development</a>
            <a href="#development-services" class="development-cta development-cta--ghost">Learn more</a>
          </div>
        </div>
        <div class="development-hero-art" aria-hidden="true">
          <div class="development-orb development-orb--lg"></div>
          <div class="development-orb development-orb--sm"></div>
          <svg class="development-hero-svg" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="gd1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#6AFFB3"/>
                <stop offset="1" stop-color="#8E60EE"/>
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="72" stroke="url(#gd1)" stroke-width="2" opacity="0.6"/>
            <circle cx="80" cy="80" r="52" stroke="url(#gd1)" stroke-width="2" opacity="0.35"/>
            <circle cx="80" cy="80" r="28" stroke="url(#gd1)" stroke-width="2" opacity="0.25"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="development-intro">
      <div class="di-wrap">
        <p class="di-text">
          SolidProof provides comprehensive development services for Web3 and blockchain projects. Whether you need smart contracts, decentralized applications, or blockchain integration with your existing systems, our experienced team delivers secure, scalable, and innovative solutions tailored to your project's unique requirements.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section id="development-services" class="development-services" aria-labelledby="development-services-title">
      <div class="ds-wrap">
        <h2 id="development-services-title" class="ds-title">Key Service Areas</h2>
        <div class="ds-grid">
          <div class="ds-item">
            <h3 class="ds-item-title">Decentralized App Development</h3>
            <p class="ds-item-desc">We build cutting-edge DApps using Ethereum, Binance and other networks. Our experienced team delivers user-friendly DApps for finance, gaming, and more. Embrace transparency, security, and innovation with our robust DApp development services.</p>
          </div>
          <div class="ds-item">
            <h3 class="ds-item-title">Smart Contract Development</h3>
            <p class="ds-item-desc">Automate, secure, and streamline processes with our smart contract development. We code secure contracts on Ethereum, BSC, and other blockchains. Our experts deliver efficient and audited smart contracts for your business needs.</p>
          </div>
          <div class="ds-item">
            <h3 class="ds-item-title">Web3 and Blockchain Integration</h3>
            <p class="ds-item-desc">Our experts connect blockchain networks with your frontend, enabling wallet functionalities, transactions, and data retrieval. Empower users with decentralized identity, secure authentication, and seamless interaction with smart contracts and DApps.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <FAQ :items="developmentFaqs"
         title="Development FAQ"
         description="Answers to common questions about our development services, process, and how we can support your project." />

    <!-- CTA -->
    <section id="development-contact" class="development-cta-section">
      <div class="dc-wrap">
        <h2 class="dc-title">Need development?</h2>
        <p class="dc-intro">Request development services to get in contact with the Solidproof team!</p>
        <a href="https://solidproof.io/contact" class="dc-button">
          <span>Request development</span>
          <svg class="dc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import FAQ from '../components/FAQ.vue'

const developmentFaqs = [
  { question: 'What kind of development services does SolidProof offer?', answer: 'SolidProof offers comprehensive development services, including smart contract development, decentralized application (dApp) development, blockchain integration, token creation, and customized solutions to leverage the power of blockchain technology.' },
  { question: 'Why should I choose SolidProof for my development needs?', answer: 'SolidProof stands out as a trusted and reliable development partner due to our extensive experience and expertise in the blockchain domain. Our team of skilled developers combines technical proficiency with deep industry knowledge to deliver high-quality, secure, and scalable solutions. We prioritize client satisfaction and are committed to meeting project deadlines and exceeding expectations.' },
  { question: 'Can SolidProof assist with both front-end and back-end development?', answer: 'Yes, SolidProof offers full-stack development capabilities, which means we can assist with both front-end and back-end development requirements. Whether you need intuitive user interfaces, robust back-end systems, or seamless integration between various components, our team has the expertise to deliver comprehensive development solutions.' },
  { question: 'What programming languages and frameworks does SolidProof specialize in?', answer: 'SolidProof specializes in a wide range of programming languages and frameworks commonly used in blockchain and decentralized application development. This includes but is not limited to Solidity, JavaScript, TypeScript, React, Ethereum, Truffle, and Web3.js. Our developers stay up-to-date with the latest industry trends and technologies to ensure the best solutions for our clients.' },
  { question: 'How can I request development services from SolidProof?', answer: 'To request development services from SolidProof, please visit solidproof.io/contact and fill out the inquiry form. Provide details about your project requirements, including the scope, timeline, and any specific functionalities or integrations needed. Our team will review your inquiry and get in touch with you to discuss your project further. Our first contacts Kevin Arens (CFO) and Brandon Willis (CSO) are available on Telegram for even faster communication.' },
]
</script>

<style scoped>
.development-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

/* Hero */
.development-hero { padding: 160px 20px 64px; position: relative; }
.development-hero-inner { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; }
.development-hero-copy { display: flex; flex-direction: column; gap: 16px; }
.development-hero-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 56px; font-weight: 700; line-height: 1.08; margin: 0; }
.development-hero-subtitle { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0; }
.development-hero-ctas { display: flex; gap: 12px; margin-top: 4px; }
.development-cta { display: inline-block; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.development-cta--primary { background: #0D6EFD; color: #fff; }
.development-cta--primary:hover { background: #0B5ED7; transform: translateY(-1px); }
.development-cta--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.18); }
.development-cta--ghost:hover { border-color: rgba(255,255,255,0.32); transform: translateY(-1px); }
.development-hero-art { position: relative; min-height: 320px; }
.development-hero-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.7; }
.development-orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.6; }
.development-orb--lg { width: 240px; height: 240px; right: 10%; bottom: 0; background: radial-gradient(60% 60% at 50% 50%, rgba(142,96,238,0.9), rgba(13,110,253,0.3)); }
.development-orb--sm { width: 160px; height: 160px; left: 5%; top: 20%; background: radial-gradient(60% 60% at 50% 50%, rgba(106,255,179,0.8), rgba(13,110,253,0.3)); }

/* Intro */
.development-intro { padding: 24px 20px 8px; }
.di-wrap { max-width: 1240px; margin: 0 auto; }
.di-text { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; margin: 0 auto; max-width: 1000px; text-align: center; }

/* Services */
.development-services { padding: 32px 20px; }
.ds-wrap { max-width: 1240px; margin: 0 auto; }
.ds-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.ds-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.ds-item { display: flex; flex-direction: column; gap: 12px; padding: 24px 16px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); transition: all 0.25s ease; }
.ds-item:hover { background: rgba(15, 16, 17, 0.8); border-color: rgba(255,255,255,0.12); }
.ds-item-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; font-weight: 600; line-height: 1.2; margin: 0; }
.ds-item-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; }

/* CTA */
.development-cta-section { position: relative; padding: 72px 20px 72px; overflow: hidden; }
.development-cta-section::before { content: ""; position: absolute; inset: 0; background:
  radial-gradient(60% 120% at 50% 100%, rgba(13,110,253,0.14), rgba(0,0,0,0) 60%),
  linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)); z-index: 0; pointer-events: none; }
.development-cta-section::after { content: ""; position: absolute; inset: 0; background:
  radial-gradient(80% 100% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%); z-index: 0; pointer-events: none; }
.dc-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; align-items: center; text-align: center; padding: 0; background: transparent; border: 0; position: relative; z-index: 1; }
.dc-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.25; margin: 0; }
.dc-intro { color: #D1D5DB; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 760px; }
.dc-button { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 12px 22px; border-radius: 9999px; background: linear-gradient(180deg, #2B2C2F 0%, #1E1F22 100%), #202124; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; line-height: 1; transition: all 0.25s ease; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.45), inset 0 1px rgba(255,255,255,0.06); }
.dc-button:hover { background: linear-gradient(180deg, #323338 0%, #222427 100%); transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,0,0,0.55), inset 0 1px rgba(255,255,255,0.08); }
.dc-arrow { display: inline-block; }

/* Responsive */
@media (max-width: 1180px) {
  .development-hero-inner { grid-template-columns: 1fr; }
  .ds-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .development-hero { padding: 140px 16px 48px; }
  .development-hero-title { font-size: 40px; }
  .development-hero-subtitle { font-size: 16px; }
  .development-hero-ctas { flex-wrap: wrap; }
  .ds-grid { grid-template-columns: 1fr; }
  .dc-title { font-size: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  .development-cta, .dc-button { transition: none; }
}
</style>
