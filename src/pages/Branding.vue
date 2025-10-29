<template>
  <main class="branding-page" aria-labelledby="branding-hero-title">
    <!-- Hero -->
    <section class="branding-hero">
      <div class="branding-hero-inner">
        <div class="branding-hero-copy">
          <h1 id="branding-hero-title" class="branding-hero-title">Branding</h1>
          <p class="branding-hero-subtitle">
            Download and use SolidProof's official brand assets and logo guidelines for marketing, partnerships, and integrations.
          </p>
        </div>
      </div>
    </section>

    <!-- Logo Assets -->
    <section class="branding-section" aria-labelledby="branding-assets-title">
      <div class="branding-wrap">
        <h2 id="branding-assets-title" class="branding-title">Logo Assets</h2>
        <p class="branding-intro">Our logo is available in multiple formats. Choose the one that best fits your needs.</p>
        
        <!-- SVG Logos -->
        <div class="branding-group">
          <h3 class="branding-group-title">SVG Format</h3>

          <!-- Shield Logos -->
          <h4 class="branding-subgroup-title">Shield Logos</h4>
          <div class="shield-logos-grid">
            <div class="branding-card">
              <div class="branding-card-preview branding-card-preview--black">
                <img :src="getLogoPath('logo_shield_black')" alt="Shield Logo Black" class="branding-logo-image" />
              </div>
              <p class="branding-card-label">Shield - Black</p>
              <a href="/images/branding/logo_shield_black.svg" download="logo_shield_black.svg" class="branding-download-btn">Download</a>
            </div>

            <div class="branding-card">
              <div class="branding-card-preview">
                <img :src="getLogoPath('logo_shield_white')" alt="Shield Logo White" class="branding-logo-image" />
              </div>
              <p class="branding-card-label">Shield - White</p>
              <a href="/images/branding/logo_shield_white.svg" download="logo_shield_white.svg" class="branding-download-btn">Download</a>
            </div>

            <div class="branding-card">
              <div class="branding-card-preview branding-card-preview--black">
                <img :src="getLogoPath('logo_shield_text_black')" alt="Shield with Text - Black" class="branding-logo-image" />
              </div>
              <p class="branding-card-label">Shield + Text - Black</p>
              <a href="/images/branding/logo_shield_text_black.svg" download="logo_shield_text_black.svg" class="branding-download-btn">Download</a>
            </div>

            <div class="branding-card">
              <div class="branding-card-preview">
                <img :src="getLogoPath('logo_shield_text_white')" alt="Shield with Text - White" class="branding-logo-image" />
              </div>
              <p class="branding-card-label">Shield + Text - White</p>
              <a href="/images/branding/logo_shield_text_white.svg" download="logo_shield_text_white.svg" class="branding-download-btn">Download</a>
            </div>

            <div class="branding-card">
              <div class="branding-card-preview branding-card-preview--black">
                <img :src="getLogoPath('logo_shield_slogan_text_black')" alt="Shield with Slogan Text - Black" class="branding-logo-image" />
              </div>
              <p class="branding-card-label">Shield + Slogan - Black</p>
              <a href="/images/branding/logo_shield_slogan_text_black.svg" download="logo_shield_slogan_text_black.svg" class="branding-download-btn">Download</a>
            </div>

            <div class="branding-card">
              <div class="branding-card-preview">
                <img :src="getLogoPath('logo_shield_slogan_text_white')" alt="Shield with Slogan Text - White" class="branding-logo-image" />
              </div>
              <p class="branding-card-label">Shield + Slogan - White</p>
              <a href="/images/branding/logo_shield_slogan_text_white.svg" download="logo_shield_slogan_text_white.svg" class="branding-download-btn">Download</a>
            </div>
          </div>

          <!-- Text Logos -->
          <h4 class="branding-subgroup-title branding-subgroup-title--spaced">Text Only Logos</h4>
          <div class="centered-logos-grid">
            <div class="branding-card">
              <div class="branding-card-preview">
                <img :src="getLogoPath('logo_justtext')" alt="Logo Just Text" class="branding-logo-image" />
              </div>
              <p class="branding-card-label">Text Only</p>
              <a href="/images/branding/logo_justtext.svg" download="logo_justtext.svg" class="branding-download-btn">Download</a>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Brand Guidelines -->
    <section class="branding-guidelines" aria-labelledby="branding-guidelines-title">
      <div class="branding-wrap">
        <h2 id="branding-guidelines-title" class="branding-title">Brand Guidelines</h2>
        <p class="branding-intro">Follow these guidelines when using our logo to maintain brand consistency.</p>
        
        <div class="guidelines-grid">
          <div class="guideline-card">
            <h3 class="guideline-title">Logo Usage</h3>
            <p class="guideline-desc">Use the official SolidProof logo in all marketing materials, websites, and integrations. Always maintain clear space around the logo.</p>
          </div>

          <div class="guideline-card">
            <h3 class="guideline-title">Color Palette</h3>
            <p class="guideline-desc">Primary blue: #0D6EFD. White and dark backgrounds are both supported. Do not modify or recolor the logo.</p>
          </div>

          <div class="guideline-card">
            <h3 class="guideline-title">Clear Space</h3>
            <p class="guideline-desc">Maintain a minimum clear space around the logo equal to half the height of the 'S' to prevent visual clutter.</p>
          </div>

          <div class="guideline-card">
            <h3 class="guideline-title">Size Requirements</h3>
            <p class="guideline-desc">Use the logo at a minimum size of 32px to ensure clarity and legibility across all media.</p>
          </div>

          <div class="guideline-card">
            <h3 class="guideline-title">Format Selection</h3>
            <p class="guideline-desc">Use SVG for web and digital applications for the best quality and performance. Use PNG for print and other media.</p>
          </div>

          <div class="guideline-card">
            <h3 class="guideline-title">Do Not</h3>
            <p class="guideline-desc">Do not rotate, skew, distort, or change the proportions of the logo. Do not use the logo on backgrounds that make it unreadable.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="branding-cta-section">
      <div class="branding-cta-wrap">
        <h2 class="branding-cta-title">Need Custom Assets?</h2>
        <p class="branding-cta-intro">Contact us for custom branding requirements or if you need assets in a different format.</p>
        <a href="#" class="branding-cta-button">
          <span>Get in Touch</span>
          <svg class="branding-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
function getLogoPath(logoName) {
  return `/images/branding/${logoName}.svg`
}
</script>

<style scoped>
.branding-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

/* Hero */
.branding-hero { padding: 160px 20px 64px; position: relative; }
.branding-hero-inner { max-width: 1240px; margin: 0 auto; }
.branding-hero-copy { display: flex; flex-direction: column; gap: 16px; }
.branding-hero-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 56px; font-weight: 700; line-height: 1.08; margin: 0; }
.branding-hero-subtitle { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0; max-width: 720px; }

/* Section */
.branding-section { padding: 32px 20px; }
.branding-wrap { max-width: 1240px; margin: 0 auto; }
.branding-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 8px; text-align: center; }
.branding-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; margin: 0 auto 28px; max-width: 720px; text-align: center; }

/* Logo Groups */
.branding-group { margin-bottom: 32px; }
.branding-group:last-child { margin-bottom: 0; }
.branding-group-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 20px; font-weight: 600; line-height: 1.2; margin: 0 0 16px; }
.branding-subgroup-title { color: #D1D5DB; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; line-height: 1.2; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px; }
.branding-subgroup-title--spaced { margin-top: 24px; }

/* Grid */
.branding-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.shield-logos-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 900px; margin: 0 auto; }
.centered-logos-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 16px; max-width: 600px; margin: 0 auto; }

/* Card */
.branding-card { display: flex; flex-direction: column; gap: 12px; padding: 16px; border-radius: 12px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); text-align: center; }
.branding-card--horizontal { grid-column: span 1; }

.branding-card-preview { display: flex; align-items: center; justify-content: center; min-height: 120px; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); padding: 8px; }
.branding-card-preview--horizontal { min-height: 80px; }
.branding-card-preview--black { background: #ffffff; border-color: rgba(0,0,0,0.1); }

.branding-logo-preview { width: 100%; height: 100%; object-fit: contain; }
.branding-logo-preview--horizontal { max-width: 100%; }
.branding-logo-image { width: 100%; height: 100%; object-fit: contain; }

.branding-card-label { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; line-height: 1; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }

.branding-download-btn { display: inline-block; padding: 8px 16px; border-radius: 6px; background: #0D6EFD; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 600; line-height: 1; transition: all 0.25s ease; }
.branding-download-btn:hover { background: #0B5ED7; transform: translateY(-1px); }

/* Guidelines */
.branding-guidelines { padding: 32px 20px; }
.guidelines-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

.guideline-card { padding: 20px 16px; border-radius: 12px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); }
.guideline-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; margin: 0 0 8px; }
.guideline-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; }

/* CTA */
.branding-cta-section { position: relative; padding: 72px 20px 72px; overflow: hidden; }
.branding-cta-section::before { content: ""; position: absolute; inset: 0; background: radial-gradient(60% 120% at 50% 100%, rgba(13,110,253,0.14), rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)); z-index: 0; pointer-events: none; }
.branding-cta-section::after { content: ""; position: absolute; inset: 0; background: radial-gradient(80% 100% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%); z-index: 0; pointer-events: none; }

.branding-cta-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; align-items: center; text-align: center; padding: 0; background: transparent; border: 0; position: relative; z-index: 1; }
.branding-cta-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.25; margin: 0; }
.branding-cta-intro { color: #D1D5DB; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 760px; }

.branding-cta-button { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 12px 22px; border-radius: 9999px; background: linear-gradient(180deg, #2B2C2F 0%, #1E1F22 100%), #202124; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; line-height: 1; transition: all 0.25s ease; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.45), inset 0 1px rgba(255,255,255,0.06); }
.branding-cta-button:hover { background: linear-gradient(180deg, #323338 0%, #222427 100%); transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,0,0,0.55), inset 0 1px rgba(255,255,255,0.08); }
.branding-cta-arrow { display: inline-block; }

/* Responsive */
@media (max-width: 1180px) {
  .branding-grid { grid-template-columns: repeat(2, 1fr); }
  .shield-logos-grid { grid-template-columns: repeat(2, 1fr); }
  .centered-logos-grid { grid-template-columns: repeat(1, 1fr); }
  .guidelines-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .branding-hero { padding: 140px 16px 48px; }
  .branding-hero-title { font-size: 40px; }
  .branding-hero-subtitle { font-size: 16px; }
  .branding-grid { grid-template-columns: 1fr; }
  .shield-logos-grid { grid-template-columns: 1fr; }
  .centered-logos-grid { grid-template-columns: 1fr; }
  .branding-card--horizontal { grid-column: span 1; }
  .guidelines-grid { grid-template-columns: 1fr; }
  .branding-cta-title { font-size: 28px; }
}

@media (prefers-reduced-motion: reduce) {
  .branding-download-btn, .branding-cta-button { transition: none; }
}
</style>
