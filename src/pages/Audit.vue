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
        <ul class="vc-grid" role="list">
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Reentrancy</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Timestamp Dependence</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Gas Limit and Loops</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">DoS with Block Gas Limit</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">TX-Ordering Dependence</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Use of tx.origin</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Exception disorder</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Gasless send</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Balance equality</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Byte array</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Transfer forwards all gas</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">ERC20 API violation</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Malicious libraries</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Non-fixed Compiler version</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Redundant fallback function</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Send instead of transfer</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Style guide violation</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Unchecked external call</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Unchecked math</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Unsafe type inference</span></li>
          <li class="vc-item" role="listitem"><span class="vc-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#6AFFB3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="vc-text">Implicit visibility level</span></li>
        </ul>
      </div>
    </section>

    <!-- Process -->
    <section class="audit-process" aria-labelledby="audit-process-title">
      <div class="ap-wrap">
        <h2 id="audit-process-title" class="ap-title">How to Audit</h2>
        <ol class="ap-steps">
          <li class="ap-step">
            <div class="ap-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="#6AFFB3" stroke-width="1.5"/><path d="M8 9h6M8 13h8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="ap-step-content">
              <h3 class="ap-step-title">Request a quote</h3>
              <p class="ap-step-desc">Share your source code. We estimate cost and timeline based on scope, size, and complexity.</p>
            </div>
          </li>
          <li class="ap-step">
            <div class="ap-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke="#fff" stroke-width="1.5"/><path d="M8 10v6M16 10v6" stroke="#8E60EE" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="ap-step-content">
              <h3 class="ap-step-title">Begin of review</h3>
              <p class="ap-step-desc">Manual code checks supplemented by automated tools to uncover vulnerabilities and design issues.</p>
            </div>
          </li>
          <li class="ap-step">
            <div class="ap-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 2l7 4v6c0 5-3.5 8-7 10C8.5 20 5 17 5 12V6l7-4Z" stroke="#fff" stroke-width="1.5"/><path d="M9.5 12l2 2 4-4" stroke="#6AFFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="ap-step-content">
              <h3 class="ap-step-title">Initial audit report</h3>
              <p class="ap-step-desc">We report findings and work with your team on fixes, clarifications, and improvements.</p>
            </div>
          </li>
          <li class="ap-step">
            <div class="ap-step-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="1.5"/><path d="M12 7v5l3 3" stroke="#8E60EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="ap-step-content">
              <h3 class="ap-step-title">Complete audit</h3>
              <p class="ap-step-desc">After fixes or acknowledgments, we issue the final audit report that summarizes results and recommendations.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Trust -->
    <section class="audit-trust" aria-labelledby="audit-trust-title">
      <div class="at-wrap">
        <h2 id="audit-trust-title" class="at-title">Trusted by leading launchpads</h2>
        <p class="at-intro">Our audits are recognized across the Web3 ecosystem. Partner with a team focused on security, transparency, and excellence.</p>
        <div class="at-logos">
          <img src="/images/partners/unicrypt_logo.png" alt="Unicrypt" class="at-logo" loading="lazy"/>
          <img src="/images/partners/pinksale_logo.png" alt="Pinksale" class="at-logo" loading="lazy"/>
          <img src="/images/partners/dxsale_logo.png" alt="DxSale" class="at-logo" loading="lazy"/>
          <img src="/images/partners/gempad_logo.png" alt="Gempad" class="at-logo" loading="lazy"/>
          <img src="/images/partners/cryptic_logo.png" alt="Cryptic" class="at-logo" loading="lazy"/>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="audit-faq" class="audit-faq" aria-labelledby="audit-faq-title">
      <div class="af-wrap">
        <h2 id="audit-faq-title" class="af-title">Audit FAQ</h2>
        <div class="af-list" role="list">
          <article class="af-item" role="listitem">
            <h3 class="af-qh">
              <button class="af-q" :aria-expanded="faq[0] ? 'true' : 'false'" :aria-controls="'af-a-0'" @click="toggle(0)">
                <span class="af-qtext">What is a smart contract audit?</span>
                <svg class="af-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" :stroke="faq[0] ? '#6AFFB3' : '#ffffff'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </h3>
            <div class="af-a" :id="'af-a-0'" role="region" aria-labelledby="audit-faq-title" v-show="faq[0]">
              <p class="af-atext">A thorough review of your smart contract code and behavior to identify vulnerabilities, security risks, and coding errors before deployment.</p>
            </div>
          </article>

          <article class="af-item" role="listitem">
            <h3 class="af-qh">
              <button class="af-q" :aria-expanded="faq[1] ? 'true' : 'false'" :aria-controls="'af-a-1'" @click="toggle(1)">
                <span class="af-qtext">Why is a smart contract audit important?</span>
                <svg class="af-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" :stroke="faq[1] ? '#6AFFB3' : '#ffffff'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </h3>
            <div class="af-a" :id="'af-a-1'" role="region" aria-labelledby="audit-faq-title" v-show="faq[1]">
              <p class="af-atext">It mitigates risk of exploits and bugs, ensures reliability, and builds trust for developers, users, and investors.</p>
            </div>
          </article>

          <article class="af-item" role="listitem">
            <h3 class="af-qh">
              <button class="af-q" :aria-expanded="faq[2] ? 'true' : 'false'" :aria-controls="'af-a-2'" @click="toggle(2)">
                <span class="af-qtext">What does the audit process involve?</span>
                <svg class="af-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" :stroke="faq[2] ? '#6AFFB3' : '#ffffff'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </h3>
            <div class="af-a" :id="'af-a-2'" role="region" aria-labelledby="audit-faq-title" v-show="faq[2]">
              <p class="af-atext">Manual and automated analysis of code, logic, and architecture; testing and simulations to evaluate behavior under different scenarios.</p>
            </div>
          </article>

          <article class="af-item" role="listitem">
            <h3 class="af-qh">
              <button class="af-q" :aria-expanded="faq[3] ? 'true' : 'false'" :aria-controls="'af-a-3'" @click="toggle(3)">
                <span class="af-qtext">How long does an audit take?</span>
                <svg class="af-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" :stroke="faq[3] ? '#6AFFB3' : '#ffffff'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </h3>
            <div class="af-a" :id="'af-a-3'" role="region" aria-labelledby="audit-faq-title" v-show="faq[3]">
              <p class="af-atext">Typically from two days to two weeks, depending on contract complexity and scope.</p>
            </div>
          </article>

          <article class="af-item" role="listitem">
            <h3 class="af-qh">
              <button class="af-q" :aria-expanded="faq[4] ? 'true' : 'false'" :aria-controls="'af-a-4'" @click="toggle(4)">
                <span class="af-qtext">Do I get a report after the audit?</span>
                <svg class="af-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" :stroke="faq[4] ? '#6AFFB3' : '#ffffff'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </h3>
            <div class="af-a" :id="'af-a-4'" role="region" aria-labelledby="audit-faq-title" v-show="faq[4]">
              <p class="af-atext">Yes. You receive an initial report during review and a final report after fixes or acknowledgments are complete.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="audit-contact" class="audit-cta-section">
      <div class="ac-wrap">
        <h2 class="ac-title">Ready for an Audit?</h2>
        <p class="ac-intro">Contact us to get a fast quote and timeline. Share your repository or source code to begin.</p>
        <a href="#" class="ac-button">Request an Audit</a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const faq = ref([true, false, false, false, false])
function toggle(i) {
  faq.value[i] = !faq.value[i]
}
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
.am-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.am-card { padding: 16px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); }
.am-card-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; margin: 0 0 6px; }
.am-card-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; }

/* Process */
.audit-process { padding: 32px 20px; }
.ap-wrap { max-width: 1240px; margin: 0 auto; }
.ap-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.ap-steps { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; counter-reset: step; }
.ap-step { position: relative; display: grid; grid-template-columns: 28px 1fr; gap: 12px; padding: 16px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); }
.ap-step::before { counter-increment: step; content: counter(step); position: absolute; right: 12px; top: 12px; color: #464649; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; }
.ap-step-icon { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 8px; background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33; border: 1px solid #606061; }
.ap-step-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; margin: 0; }
.ap-step-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 4px 0 0; }

/* Trust */
.audit-trust { padding: 8px 20px 8px; }
.at-wrap { max-width: 1240px; margin: 0 auto; }
.at-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 28px; font-weight: 700; line-height: 1.3; margin: 0 0 8px; text-align: center; }
.at-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0 auto 16px; max-width: 720px; text-align: center; }
.at-logos { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; align-items: center; justify-items: center; }
.at-logo { height: 42px; width: auto; filter: brightness(1.1) contrast(1.1); }

/* FAQ */
.audit-faq { padding: 8px 20px 24px; }
.af-wrap { max-width: 1240px; margin: 0 auto; }
.af-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 32px; font-weight: 700; line-height: 1.25; margin: 0 0 12px; text-align: center; }
.af-list { display: grid; grid-template-columns: 1fr; gap: 10px; }
.af-item { border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); overflow: hidden; }
.af-qh { margin: 0; }
.af-q { width: 100%; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 12px; padding: 16px; background: transparent; border: 0; text-align: left; cursor: pointer; color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; }
.af-q:focus { outline: 2px solid #0D6EFD; outline-offset: 2px; }
.af-qtext { display: inline-block; }
.af-caret { transition: transform 0.2s ease; }
.af-a { padding: 0 16px 16px; }
.af-atext { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; }

/* CTA */
.audit-cta-section { padding: 32px 20px 64px; }
.ac-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); padding: 24px; }
.ac-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 28px; font-weight: 700; line-height: 1.3; margin: 0; }
.ac-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 720px; }
.ac-button { display: inline-block; margin-top: 6px; padding: 12px 18px; border-radius: 8px; background: #0D6EFD; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.ac-button:hover { background: #0B5ED7; transform: translateY(-1px); }

/* Responsive */
@media (max-width: 1180px) {
  .audit-hero-inner { grid-template-columns: 1fr; }
  .ab-grid { grid-template-columns: repeat(2, 1fr); }
  .am-grid { grid-template-columns: repeat(2, 1fr); }
  .ap-steps { grid-template-columns: repeat(2, 1fr); }
  .at-logos { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .audit-hero { padding: 140px 16px 48px; }
  .audit-hero-title { font-size: 40px; }
  .audit-hero-subtitle { font-size: 16px; }
  .audit-hero-ctas { flex-wrap: wrap; }
  .ab-grid, .am-grid { grid-template-columns: 1fr; }
  .ap-steps { grid-template-columns: 1fr; }
  .at-logos { grid-template-columns: repeat(2, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  .audit-cta, .ac-button { transition: none; }
}
/* Checklist */
.audit-checklist { padding: 32px 20px; }
.vc-wrap { max-width: 1240px; margin: 0 auto; }
.vc-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.vc-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.vc-item { display: grid; grid-template-columns: 22px 1fr; gap: 10px; align-items: center; padding: 12px 14px; border-radius: 14px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); }
.vc-icon { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 7px; background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33; border: 1px solid #606061; }
.vc-text { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.4; }

@media (max-width: 1180px) {
  .vc-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .vc-grid { grid-template-columns: 1fr; }
}

</style>
