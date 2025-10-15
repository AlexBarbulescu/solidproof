<template>
  <main class="audit-page" aria-labelledby="audit-hero-title">
    <!-- Hero -->
    <section class="audit-hero">
      <div class="audit-hero-inner">
        <div class="audit-hero-copy">
          <h1 id="audit-hero-title" class="audit-hero-title">Security Audit</h1>
          <p class="audit-hero-subtitle">
            SolidProof conducts strict audits of smart contracts to identify vulnerabilities, enhance code quality, and optimize gas utilization. Our experienced team follows a rigorous methodology that prioritizes security and reliability.
          </p>
          <div class="audit-hero-ctas">
            <a href="#audit-contact" class="audit-cta audit-cta--primary">Request Audit</a>
            <a href="#audit-methods" class="audit-cta audit-cta--ghost">Learn more</a>
          </div>
        </div>
        <div class="audit-hero-art" aria-hidden="true">
          <div class="audit-orb audit-orb--lg"></div>
          <div class="audit-orb audit-orb--sm"></div>
          <svg class="audit-hero-svg" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="ga1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#6AFFB3"/>
                <stop offset="1" stop-color="#8E60EE"/>
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="120" height="120" rx="18" stroke="url(#ga1)" stroke-width="2" opacity="0.5"/>
            <rect x="36" y="36" width="88" height="88" rx="14" stroke="url(#ga1)" stroke-width="2" opacity="0.35"/>
            <rect x="56" y="56" width="48" height="48" rx="10" stroke="url(#ga1)" stroke-width="2" opacity="0.25"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="audit-benefits" aria-labelledby="audit-benefits-title">
      <div class="ab-wrap">
        <h2 id="audit-benefits-title" class="ab-title">Why Audit with SolidProof</h2>
        <p class="ab-intro">Identify and resolve vulnerabilities before deployment. Improve code quality, reduce gas costs, and boost stakeholder confidence with a rigorous, transparent process.</p>
        <div class="ab-grid">
          <div class="ab-item">
            <div class="ab-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2l7 4v6c0 5-3.5 8-7 10C8.5 20 5 17 5 12V6l7-4Z" stroke="#fff" stroke-width="1.5"/><path d="M9.5 12l2 2 4-4" stroke="#6AFFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="ab-content">
              <h3 class="ab-item-title">Vulnerability Discovery</h3>
              <p class="ab-item-desc">Detect critical, high, and medium-risk issues across logic, design, and integrations before they can be exploited.</p>
            </div>
          </div>
          <div class="ab-item">
            <div class="ab-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke="#fff" stroke-width="1.5"/><path d="M7 7h10M7 11h7" stroke="#8E60EE" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="ab-content">
              <h3 class="ab-item-title">Code Quality</h3>
              <p class="ab-item-desc">Improve maintainability and correctness with actionable recommendations and best-practice guidance.</p>
            </div>
          </div>
          <div class="ab-item">
            <div class="ab-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke="#fff" stroke-width="1.5"/><path d="M9 12h6M8 9h8" stroke="#6AFFB3" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="ab-content">
              <h3 class="ab-item-title">Gas Optimization</h3>
              <p class="ab-item-desc">Evaluate gas usage and address costly patterns to keep execution efficient on-chain.</p>
            </div>
          </div>
          <div class="ab-item">
            <div class="ab-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="1.5"/><path d="M12 7v5l3 3" stroke="#8E60EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="ab-content">
              <h3 class="ab-item-title">Experienced Review</h3>
              <p class="ab-item-desc">A rigorous methodology by senior blockchain security engineers using manual analysis and advanced tooling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Methods / Techniques -->
    <section id="audit-methods" class="audit-methods" aria-labelledby="audit-methods-title">
      <div class="am-wrap">
        <h2 id="audit-methods-title" class="am-title">Techniques and Methods</h2>
        <div class="am-grid">
          <div class="am-card">
            <h3 class="am-card-title">Structural Analysis</h3>
            <p class="am-card-desc">Review design patterns and contract architecture to prevent systemic issues and promote secure upgrades.</p>
          </div>
          <div class="am-card">
            <h3 class="am-card-title">Static Analysis</h3>
            <p class="am-card-desc">Leverage automated scanners and targeted rules to detect common vulnerabilities and code smells.</p>
          </div>
          <div class="am-card">
            <h3 class="am-card-title">Manual Code Review</h3>
            <p class="am-card-desc">Deep manual inspection of logic, state transitions, and assumptions against specs and whitepaper.</p>
          </div>
          <div class="am-card">
            <h3 class="am-card-title">Gas Consumption</h3>
            <p class="am-card-desc">Analyze execution costs, recommend optimizations, and balance performance with clarity and safety.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vulnerability Checklist -->
    <section id="audit-checklist" class="audit-checklist" aria-labelledby="audit-checklist-title">
      <div class="vc-wrap">
        <h2 id="audit-checklist-title" class="vc-title">Vulnerability Checklist</h2>
        <div class="vc-table" role="table" aria-label="Vulnerability coverage comparison">
          <div class="vc-row vc-head" role="row">
            <div class="vc-cell vc-col-name" role="columnheader">Vulnerabilities</div>
            <div class="vc-cell vc-col-brand" role="columnheader">Solidproof.io</div>
            <div class="vc-cell vc-col-other" role="columnheader">Others</div>
          </div>
          <div class="vc-row" v-for="r in vcRows" :key="r.name" role="row">
            <div class="vc-cell vc-col-name" role="cell">{{ r.name }}</div>
            <div class="vc-cell vc-col-brand" role="cell">
              <span class="vc-badge vc-badge--ok" aria-label="Included"></span>
            </div>
            <div class="vc-cell vc-col-other" role="cell">
              <span class="vc-badge" :class="r.others ? 'vc-badge--ok' : 'vc-badge--no'" :aria-label="r.others ? 'Included' : 'Not included'"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="audit-process" aria-labelledby="audit-process-title">
      <div class="ap-wrap">
        <h2 id="audit-process-title" class="ap-title">How to Audit</h2>
        <div class="ap-grid" role="list">
          <article class="ap-card ap-card--lead" role="listitem">
            <span class="ap-badge">1</span>
            <h3 class="ap-card-title">Request a quote</h3>
            <p class="ap-card-desc">Share your source code. We estimate cost and timeline based on scope, size, and complexity.</p>
          </article>

          <article class="ap-card ap-card--accent" role="listitem">
            <span class="ap-badge">2</span>
            <h3 class="ap-card-title">Begin of review</h3>
            <p class="ap-card-desc">Manual code checks supplemented by automated tools to uncover vulnerabilities and design issues.</p>
          </article>

          <article class="ap-card ap-card--half ap-card--s3" role="listitem">
            <span class="ap-badge">3</span>
            <h3 class="ap-card-title">Initial audit report</h3>
            <p class="ap-card-desc">We report findings and work with your team on fixes, clarifications, and improvements.</p>
          </article>

          <article class="ap-card ap-card--half ap-card--s4" role="listitem">
            <span class="ap-badge">4</span>
            <h3 class="ap-card-title">Complete audit</h3>
            <p class="ap-card-desc">After fixes or acknowledgments, we issue the final audit report that summarizes results and recommendations.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <FAQ :items="auditFaqs"
         title="Audit FAQ"
         description="Answers to common questions about our audit methodology, timelines, and deliverables." />

    <!-- CTA -->
    <section id="audit-contact" class="audit-cta-section">
      <div class="ac-wrap">
        <h2 class="ac-title">Ready to Transform Your Web3 Project?</h2>
        <p class="ac-intro">Let’s collaborate to bring your blockchain vision to life with our expert services and innovative solutions.</p>
        <a href="#" class="ac-button">
          <span>Get Started</span>
          <svg class="ac-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import FAQ from '../components/FAQ.vue'

const auditFaqs = [
  { question: 'What is a smart contract audit?', answer: 'A thorough review of your smart contract code and behavior to identify vulnerabilities, security risks, and coding errors before deployment.' },
  { question: 'Why is a smart contract audit important?', answer: 'It mitigates risk of exploits and bugs, ensures reliability, and builds trust for developers, users, and investors.' },
  { question: 'What does the audit process involve?', answer: 'Manual and automated analysis of code, logic, and architecture; testing and simulations to evaluate behavior under different scenarios.' },
  { question: 'How long does an audit take?', answer: 'Typically from two days to two weeks, depending on contract complexity and scope.' },
  { question: 'Do I get a report after the audit?', answer: 'Yes. You receive an initial report during review and a final report after fixes or acknowledgments are complete.' },
]

const vcRows = [
  { name: 'Reentrancy', others: true },
  { name: 'Timestamp Dependence', others: true },
  { name: 'Gas Limit and Loops', others: true },
  { name: 'DoS with Block Gas Limit', others: true },
  { name: 'TX-Ordering Dependence', others: true },
  { name: 'Use of tx.origin', others: true },
  { name: 'Exception disorder', others: true },
  { name: 'Gasless send', others: true },
  { name: 'Balance equality', others: true },
  { name: 'Byte array', others: true },
  { name: 'Transfer forwards all gas', others: true },
  { name: 'ERC20 API violation', others: true },
  { name: 'Malicious libraries', others: true },
  { name: 'Non-fixed Compiler version', others: true },
  { name: 'Redundant fallback function', others: true },
  { name: 'Send instead of transfer', others: true },
  { name: 'Style guide violation', others: false },
  { name: 'Unchecked external call', others: false },
  { name: 'Unchecked math', others: false },
  { name: 'Unsafe type inference', others: false },
  { name: 'Implicit visibility level', others: false },
]
</script>

<style scoped>
.audit-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

/* Hero */
.audit-hero { padding: 160px 20px 64px; position: relative; }
.audit-hero-inner { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; }
.audit-hero-copy { display: flex; flex-direction: column; gap: 16px; }
.audit-hero-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 56px; font-weight: 700; line-height: 1.08; margin: 0; }
.audit-hero-subtitle { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0; }
.audit-hero-ctas { display: flex; gap: 12px; margin-top: 4px; }
.audit-cta { display: inline-block; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.audit-cta--primary { background: #0D6EFD; color: #fff; }
.audit-cta--primary:hover { background: #0B5ED7; transform: translateY(-1px); }
.audit-cta--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.18); }
.audit-cta--ghost:hover { border-color: rgba(255,255,255,0.32); transform: translateY(-1px); }
.audit-hero-art { position: relative; min-height: 320px; }
.audit-hero-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.7; }
.audit-orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.6; }
.audit-orb--lg { width: 220px; height: 220px; right: 12%; bottom: 0; background: radial-gradient(60% 60% at 50% 50%, rgba(142,96,238,0.85), rgba(13,110,253,0.25)); }
.audit-orb--sm { width: 140px; height: 140px; left: 8%; top: 18%; background: radial-gradient(60% 60% at 50% 50%, rgba(106,255,179,0.75), rgba(13,110,253,0.25)); }

/* Benefits */
.audit-benefits { padding: 24px 20px 8px; }
.ab-wrap { max-width: 1240px; margin: 0 auto; }
.ab-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 8px; text-align: center; }
.ab-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; margin: 0 auto 20px; max-width: 720px; text-align: center; }
.ab-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.ab-item { display: grid; grid-template-columns: 32px 1fr; gap: 12px; padding: 16px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); }
.ab-icon { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33; border: 1px solid #606061; }
.ab-item-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; margin: 0; }
.ab-item-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 4px 0 0; }

/* Methods */
.audit-methods { padding: 32px 20px; }
.am-wrap { max-width: 1240px; margin: 0 auto; }
.am-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.am-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; counter-reset: amstep; }
.am-card { position: relative; padding: 16px 16px 16px 56px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); counter-increment: amstep; }
.am-card-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; margin: 0 0 6px; }
.am-card-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; }
.am-card::before { content: counter(amstep); position: absolute; left: 16px; top: 16px; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; color: #fff; background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33; border: 1px solid #606061; }

/* Process */
.audit-process { padding: 32px 20px; }
.ap-wrap { max-width: 1240px; margin: 0 auto; }
.ap-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }

.ap-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; grid-template-areas:
  'lead accent'
  's3 s4'; gap: 12px; }

.ap-card { position: relative; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); padding: 18px; overflow: hidden; min-height: 140px; }
.ap-card--lead { grid-area: lead; }
.ap-card--accent { grid-area: accent; position: relative; }
.ap-card--half { }
.ap-card--s3 { grid-area: s3; }
.ap-card--s4 { grid-area: s4; }

.ap-badge { position: absolute; left: 14px; top: 14px; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; color: #fff; background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33; border: 1px solid #606061; }
.ap-card-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; font-weight: 700; line-height: 1.2; margin: 0 0 6px 44px; }
.ap-card-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0 0 0 44px; max-width: 56ch; }



/* CTA */
.audit-cta-section { position: relative; padding: 72px 20px 72px; overflow: hidden; }
.audit-cta-section::before { content: ""; position: absolute; inset: 0; background:
  radial-gradient(60% 120% at 50% 0%, rgba(142,96,238,0.15), rgba(0,0,0,0) 60%),
  radial-gradient(60% 120% at 50% 100%, rgba(13,110,253,0.22), rgba(0,0,0,0) 60%),
  linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)); pointer-events: none; }
.ac-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; align-items: center; text-align: center; padding: 0; background: transparent; border: 0; }
.ac-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 32px; font-weight: 700; line-height: 1.25; margin: 0; }
.ac-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 760px; }
.ac-button { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 12px 20px; border-radius: 9999px; background: #0D6EFD; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; line-height: 1; transition: all 0.25s ease; box-shadow: 0 8px 24px rgba(13,110,253,0.25); }
.ac-button:hover { background: #0B5ED7; transform: translateY(-1px); box-shadow: 0 10px 28px rgba(13,110,253,0.35); }
.ac-arrow { display: inline-block; }

/* Responsive */
@media (max-width: 1180px) {
  .audit-hero-inner { grid-template-columns: 1fr; }
  .ab-grid { grid-template-columns: repeat(2, 1fr); }
  .am-grid { grid-template-columns: repeat(2, 1fr); }
  .ap-grid { grid-template-columns: 1fr 1fr; grid-template-areas: 'lead accent' 's3 s4'; }
}
@media (max-width: 768px) {
  .audit-hero { padding: 140px 16px 48px; }
  .audit-hero-title { font-size: 40px; }
  .audit-hero-subtitle { font-size: 16px; }
  .audit-hero-ctas { flex-wrap: wrap; }
  .ab-grid, .am-grid { grid-template-columns: 1fr; }
  .ap-grid { grid-template-columns: 1fr; grid-template-areas: 'lead' 'accent' 's3' 's4'; }
  .ac-title { font-size: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  .audit-cta, .ac-button { transition: none; }
}
/* Checklist */
.audit-checklist { padding: 32px 20px; }
.vc-wrap { max-width: 1240px; margin: 0 auto; }
.vc-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.vc-table { display: grid; grid-template-columns: 1.3fr 160px 120px; gap: 0; border-radius: 16px; overflow: hidden; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); }
.vc-row { display: contents; }
.vc-head > .vc-cell { background: rgba(255,255,255,0.04); font-weight: 700; }
.vc-cell { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.4; }
.vc-col-name { text-align: left; }
.vc-col-brand, .vc-col-other { text-align: center; }
.vc-row:last-child > .vc-cell { border-bottom: 0; }

.vc-badge { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%; border: 1px solid #606061; background: linear-gradient(180deg, rgba(47,47,51,0.87) 0%, rgba(61,62,67,0.87) 34.82%, rgba(47,47,51,0.87) 100%), #2F2F33; position: relative; }
.vc-badge--ok { border-color: #2A9F72; background: radial-gradient(65% 70% at 50% 50%, rgba(106,255,179,0.85), rgba(13,110,253,0.2)); }
.vc-badge--ok::after { content: ""; width: 8px; height: 4px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg); margin-top: -1px; }
.vc-badge--no { border-color: #B94A7D; background: radial-gradient(65% 70% at 50% 50%, rgba(233, 64, 87, 0.55), rgba(13,110,253,0.08)); }
.vc-badge--no::after { content: ""; width: 10px; height: 2px; background: #fff; border-radius: 2px; }

@media (max-width: 1180px) {
  .vc-table { grid-template-columns: 1fr 120px 100px; }
}
@media (max-width: 768px) {
  .vc-table { grid-template-columns: 1fr 100px 80px; }
}

</style>
