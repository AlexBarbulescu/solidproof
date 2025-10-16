<template>
  <main class="kyc-page" aria-labelledby="kyc-hero-title">
    <!-- Hero -->
    <section class="kyc-hero">
      <div class="kyc-hero-inner">
        <div class="kyc-hero-copy">
          <h1 id="kyc-hero-title" class="kyc-hero-title">Know Your Customer</h1>
          <p class="kyc-hero-subtitle">
            We combine automated verification with multi-step manual checks for a secure, accurate, and straightforward KYC process. All sensitive data is stored offline on AES-256 encrypted drives for maximum confidentiality.
          </p>
          <div class="kyc-hero-ctas">
            <a href="#kyc-contact" class="kyc-cta kyc-cta--primary">Request KYC</a>
            <a href="#kyc-process" class="kyc-cta kyc-cta--ghost">Learn more</a>
          </div>
          <div class="kyc-hero-note">
            Supported by AI verification in partnership with Veriff.
          </div>
        </div>
        <div class="kyc-hero-art" aria-hidden="true">
          <div class="kyc-orb kyc-orb--lg"></div>
          <div class="kyc-orb kyc-orb--sm"></div>
          <svg class="kyc-hero-svg" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#6AFFB3"/>
                <stop offset="1" stop-color="#8E60EE"/>
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="72" stroke="url(#g1)" stroke-width="2" opacity="0.6"/>
            <circle cx="80" cy="80" r="52" stroke="url(#g1)" stroke-width="2" opacity="0.35"/>
            <circle cx="80" cy="80" r="28" stroke="url(#g1)" stroke-width="2" opacity="0.25"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="kyc-benefits" aria-labelledby="kyc-benefits-title">
      <div class="kb-wrap">
        <h2 id="kyc-benefits-title" class="kb-title">Benefits of KYC</h2>
        <p class="kb-intro">Increase trust, strengthen compliance, and reduce risk across your ecosystem by verifying the identity of core participants and stakeholders.</p>
        <div class="kb-grid">
          <div class="kb-item">
            <div class="kb-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2l7 4v6c0 5-3.5 8-7 10C8.5 20 5 17 5 12V6l7-4Z" stroke="#fff" stroke-width="1.5"/><path d="M9.5 12l2 2 4-4" stroke="#6AFFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="kb-content">
              <h3 class="kb-item-title">Enhanced Security</h3>
              <p class="kb-item-desc">KYC helps mitigate the risks of identity theft, fraud, and money laundering. By verifying the identities of participants, blockchain platforms can prevent unauthorized access, minimize the potential for illicit activities, and ensure compliance with regulatory requirements.</p>
            </div>
          </div>
          <div class="kb-item">
            <div class="kb-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke="#fff" stroke-width="1.5"/><path d="M7 7h6M7 11h10" stroke="#8E60EE" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="kb-content">
              <h3 class="kb-item-title">Regulatory Compliance</h3>
              <p class="kb-item-desc">By integrating the Solidproof KYC processes into blockchain systems, organizations ensure regulatory compliance, mitigating legal penalties and reputational harm, as jurisdictions mandate financial institutions to adhere to stringent KYC regulations.</p>
            </div>
          </div>
          <div class="kb-item">
            <div class="kb-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><circle cx="9" cy="8" r="3" stroke="#fff" stroke-width="1.5"/><path d="M3 20a6 6 0 0 1 12 0" stroke="#fff" stroke-width="1.5"/><path d="M16 11l3 3 4-6" stroke="#6AFFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="kb-content">
              <h3 class="kb-item-title">Trust & Transparency</h3>
              <p class="kb-item-desc">KYC implementation fosters trust and transparency in blockchain networks. By verifying the identities of participants, users can have increased confidence in the integrity of the network, knowing that all participants have undergone a vetting process.</p>
            </div>
          </div>
          <div class="kb-item">
            <div class="kb-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke="#fff" stroke-width="1.5"/><path d="M8 7V5a4 4 0 1 1 8 0v2" stroke="#8E60EE" stroke-width="1.5"/></svg>
            </div>
            <div class="kb-content">
              <h3 class="kb-item-title">Reduced Risk</h3>
              <p class="kb-item-desc">KYC mitigates risks tied to unknown or unverified entities, aiding in assessing participant credibility. By linking real-world identities to blockchain addresses, it facilitates traceability, attributing actions to individuals/entities, enhancing accountability, deterring misconduct, and fostering greater responsibility in network participants.</p>
            </div>
          </div>
          <div class="kb-item">
            <div class="kb-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6v10" stroke="#6AFFB3" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="kb-content">
              <h3 class="kb-item-title">Traceability</h3>
              <p class="kb-item-desc">KYC implementation allows for increased accountability within blockchain networks. By tying real-world identities to blockchain addresses, it becomes easier to trace and attribute actions and transactions to specific individuals or entities. This accountability can deter malicious activities and provide a higher level of responsibility among network participants.</p>
            </div>
          </div>
          <div class="kb-item">
            <div class="kb-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9Z" stroke="#fff" stroke-width="1.5"/><path d="M12 7v5h4" stroke="#8E60EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="kb-content">
              <h3 class="kb-item-title">Enforcement</h3>
              <p class="kb-item-desc">Anti-Money Laundering (AML) regulations are designed to prevent the use of financial systems for money laundering and terrorist financing. KYC processes play a crucial role in enabling compliance with AML regulations by ensuring that participants are identified and verified, making it easier to track suspicious activities and report them if necessary.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="kyc-process" class="kyc-process" aria-labelledby="kyc-process-title">
      <div class="kp-wrap">
        <h2 id="kyc-process-title" class="kp-title">How to KYC</h2>
        <div class="kp-grid">
          <div class="kp-card">
            <h3 class="kp-card-title">Submit full team info</h3>
            <p class="kp-card-desc">Provide personal details for every core team member via our secure endpoint for initial screening.</p>
          </div>
          <div class="kp-card">
            <h3 class="kp-card-title">Book a live call</h3>
            <p class="kp-card-desc">Join a verification specialist to review IDs, confirm ownership, and answer a short questionnaire.</p>
          </div>
          <div class="kp-card">
            <h3 class="kp-card-title">Internal review</h3>
            <p class="kp-card-desc">We perform background checks and risk assessment. Typical turnaround is up to 48 hours.</p>
          </div>
          <div class="kp-card">
            <h3 class="kp-card-title">KYC certification</h3>
            <p class="kp-card-desc">Upon success, data is archived offline on AES-256 encrypted drives and certificates are issued.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <FAQ :items="kycFaqs"
         title="KYC FAQ"
         description="Answers to common questions about our KYC process, verification requirements, and data protection." />

    <!-- CTA -->
    <section id="kyc-contact" class="kyc-cta-section">
      <div class="kc-wrap">
        <h2 class="kc-title">Need a KYC?</h2>
        <p class="kc-intro">Click the button below to contact our team. We will guide you through the next steps and platform requirements.</p>
        <a href="#" class="kc-button">Request a KYC</a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import FAQ from '../components/FAQ.vue'

const kycFaqs = [
  { question: 'What makes SolidProof stand out from other KYC providers?', answer: 'We are a registered KYC provider based in Germany and have verified hundreds of projects since 2020. Our process uses first-class verification standards and supports investors in fraud cases. Sensitive data is handled with strict security: stored offline on AES-256 encrypted drives and communicated via end-to-end encrypted email servers.' },
  { question: 'How long does the KYC verification process take?', answer: 'Timelines vary per project and team responsiveness, but we aim to complete verifications within 48 hours after receiving all required information.' },
  { question: 'Can I update my information after completing the KYC process?', answer: 'Yes, in most cases. Please reach out to our KYC department with the updates; feasibility depends on compliance requirements and verification status.' },
  { question: 'What documents are typically required for KYC verification?', answer: 'Company details: name, address, registration number, certificate of incorporation. Founders: passport scans (front/back) and a self-portrait; personal residential addresses. Proof of address: a recent utility bill or invoice for verification. Live verification: video call, SMS phone verification, and random identity checks. High-risk jurisdictions may require additional business licenses or documents.' },
  { question: 'How does SolidProof handle confidentiality and data protection?', answer: 'We follow GDPR/DSGVO and maintain robust security controls. KYC data is kept offline on AES-256 encrypted drives and treated with strict confidentiality throughout the process.' },
]
</script>

<style scoped>
.kyc-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

/* Hero */
.kyc-hero { padding: 160px 20px 64px; position: relative; }
.kyc-hero-inner { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; }
.kyc-hero-copy { display: flex; flex-direction: column; gap: 16px; }
.kyc-hero-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 56px; font-weight: 700; line-height: 1.08; margin: 0; }
.kyc-hero-subtitle { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0; }
.kyc-hero-ctas { display: flex; gap: 12px; margin-top: 4px; }
.kyc-cta { display: inline-block; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.kyc-cta--primary { background: #0D6EFD; color: #fff; }
.kyc-cta--primary:hover { background: #0B5ED7; transform: translateY(-1px); }
.kyc-cta--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.18); }
.kyc-cta--ghost:hover { border-color: rgba(255,255,255,0.32); transform: translateY(-1px); }
.kyc-hero-note { color: #898A8B; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; }
.kyc-hero-art { position: relative; min-height: 320px; }
.kyc-hero-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.7; }
.kyc-orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.6; }
.kyc-orb--lg { width: 240px; height: 240px; right: 10%; bottom: 0; background: radial-gradient(60% 60% at 50% 50%, rgba(142,96,238,0.9), rgba(13,110,253,0.3)); }
.kyc-orb--sm { width: 160px; height: 160px; left: 5%; top: 20%; background: radial-gradient(60% 60% at 50% 50%, rgba(106,255,179,0.8), rgba(13,110,253,0.3)); }

/* Benefits */
.kyc-benefits { padding: 24px 20px 8px; }
.kb-wrap { max-width: 1240px; margin: 0 auto; }
.kb-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 8px; text-align: center; }
.kb-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; margin: 0 auto 20px; max-width: 720px; text-align: center; }
.kb-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.kb-item { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 12px; padding: 24px 16px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); transition: all 0.25s ease; }
.kb-item:hover { background: rgba(15, 16, 17, 0.8); border-color: rgba(255,255,255,0.12); }
.kb-icon { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33; border: 1px solid #606061; flex-shrink: 0; }
.kb-icon svg { width: 22px; height: 22px; }
.kb-content { display: flex; flex-direction: column; gap: 8px; width: 100%; }
.kb-item-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 15px; font-weight: 600; line-height: 1.2; margin: 0; }
.kb-item-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 13px; line-height: 1.4; margin: 0; }

/* Process */
.kyc-process { padding: 32px 20px; }
.kp-wrap { max-width: 1240px; margin: 0 auto; }
.kp-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.kp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; counter-reset: kpstep; }
.kp-card { position: relative; padding: 16px 16px 16px 56px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); counter-increment: kpstep; }
.kp-card-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; margin: 0 0 6px; }
.kp-card-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; }
.kp-card::before { content: counter(kpstep); position: absolute; left: 16px; top: 16px; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; color: #fff; background: linear-gradient(180deg, rgba(47, 47, 51, 0.87) 0%, rgba(61, 62, 67, 0.87) 34.82%, rgba(47, 47, 51, 0.87) 100%), #2F2F33; border: 1px solid #606061; }

/* CTA */
.kyc-cta-section { padding: 32px 20px 64px; }
.kc-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); padding: 24px; }
.kc-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 28px; font-weight: 700; line-height: 1.3; margin: 0; }
.kc-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 720px; }
.kc-button { display: inline-block; margin-top: 6px; padding: 12px 18px; border-radius: 8px; background: #0D6EFD; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.kc-button:hover { background: #0B5ED7; transform: translateY(-1px); }

/* Responsive */
@media (max-width: 1180px) {
  .kyc-hero-inner { grid-template-columns: 1fr; }
  .kp-grid { grid-template-columns: repeat(2, 1fr); }
  .kb-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .kyc-hero { padding: 140px 16px 48px; }
  .kyc-hero-title { font-size: 40px; }
  .kyc-hero-subtitle { font-size: 16px; }
  .kyc-hero-ctas { flex-wrap: wrap; }
  .kp-grid { grid-template-columns: 1fr; }
  .kb-grid { grid-template-columns: 1fr; }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .kyc-cta, .kc-button { transition: none; }
}

</style>
