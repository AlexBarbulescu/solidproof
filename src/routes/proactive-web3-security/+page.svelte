<svelte:head>
	<title>Proactive Web3 Security • SolidProof</title>
</svelte:head>

<main class="security-page" aria-labelledby="security-hero-title">
	<!-- Hero -->
	<section class="security-hero">
		<div class="security-hero-inner">
			<div class="security-hero-copy">
				<h1 id="security-hero-title" class="security-hero-title">Proactive Web3 Security</h1>
				<p class="security-hero-subtitle">
					Cyvers is a next-generation security company that provides real-time detection and prevention of crypto attacks for Web3 and a decentralized economy.
				</p>
				<p class="security-hero-note">Our Proactive Web3 Security is a product from our partner Cyvers.ai</p>
				<div class="security-hero-ctas">
					<a href="https://cyvers.ai/demo" target="_blank" class="security-cta security-cta--primary">Request now</a>
					<a href="#security-features" class="security-cta security-cta--ghost">Learn more</a>
				</div>
			</div>
			<div class="security-hero-art" aria-hidden="true">
				<div class="security-orb security-orb--lg"></div>
				<div class="security-orb security-orb--sm"></div>
				<svg class="security-hero-svg" viewBox="0 0 160 160" fill="none" aria-hidden="true">
					<defs>
						<linearGradient id="gs1" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0" stop-color="#FF6B6B" />
							<stop offset="1" stop-color="#FF1744" />
						</linearGradient>
					</defs>
					<circle cx="80" cy="80" r="72" stroke="url(#gs1)" stroke-width="2" opacity="0.6" />
					<circle cx="80" cy="80" r="52" stroke="url(#gs1)" stroke-width="2" opacity="0.35" />
					<circle cx="80" cy="80" r="28" stroke="url(#gs1)" stroke-width="2" opacity="0.25" />
				</svg>
			</div>
		</div>
	</section>

	<!-- Intro -->
	<section class="security-intro">
		<div class="si-wrap">
			<h2 class="si-title">Fortify Blockchain Security</h2>
			<p class="si-text">Unleashing the Potential of Blockchain real-time detection and prevention of malicious crypto activity</p>
		</div>
	</section>

	<!-- Features -->
	<section id="security-features" class="security-features" aria-labelledby="security-features-title">
		<div class="sf-wrap">
			<h2 id="security-features-title" class="sf-title">Key Security Features</h2>
			<div class="sf-grid">
				<div class="sf-item">
					<div class="sf-icon-wrapper">
						<h3 class="sf-icon-title">Screen</h3>
					</div>
					<p class="sf-item-desc">Build a cross-blockchain meta graph by scanning off-chain business data, smart contracts, and major blockchain networks</p>
					<a href="https://cyvers.ai/platform" target="_blank" class="sf-link">Learn more →</a>
				</div>
				<div class="sf-item">
					<div class="sf-icon-wrapper">
						<h3 class="sf-icon-title">Detect</h3>
					</div>
					<p class="sf-item-desc">Analyze the cross-blockchain graph to find anomalies, based on attack patterns and illicit behavior indicators</p>
					<a href="https://cyvers.ai/platform" target="_blank" class="sf-link">Learn more →</a>
				</div>
				<div class="sf-item">
					<div class="sf-icon-wrapper">
						<h3 class="sf-icon-title">Respond</h3>
					</div>
					<p class="sf-item-desc">Leverage the "golden window" to prevent the registry of malicious activity on the blockchain</p>
					<a href="https://cyvers.ai/platform" target="_blank" class="sf-link">Learn more →</a>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section id="security-contact" class="security-cta-section">
		<div class="sc-wrap">
			<h2 class="sc-title">Need help?</h2>
			<p class="sc-intro">Click on the button "Help" to get in contact with the Cyvers team!</p>
			<a href="https://cyvers.ai/" target="_blank" class="sc-button">
				<span>Help</span>
				<svg class="sc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M3 8h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
					<path d="M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
	</section>
</main>

<style>
.security-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

/* Hero */
.security-hero { padding: 160px 20px 64px; position: relative; }
.security-hero-inner { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; }
.security-hero-copy { display: flex; flex-direction: column; gap: 16px; }
.security-hero-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 56px; font-weight: 700; line-height: 1.08; margin: 0; }
.security-hero-subtitle { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0; }
.security-hero-note { color: #FF6B6B; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; font-weight: 500; }
.security-hero-ctas { display: flex; gap: 12px; margin-top: 4px; }
.security-cta { display: inline-block; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.security-cta--primary { background: #FF6B6B; color: #fff; }
.security-cta--primary:hover { background: #FF1744; transform: translateY(-1px); }
.security-cta--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.18); }
.security-cta--ghost:hover { border-color: rgba(255,255,255,0.32); transform: translateY(-1px); }
.security-hero-art { position: relative; min-height: 320px; }
.security-hero-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.7; }
.security-orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.6; }
.security-orb--lg { width: 240px; height: 240px; right: 10%; bottom: 0; background: radial-gradient(60% 60% at 50% 50%, rgba(255, 107, 107, 0.9), rgba(255, 23, 68, 0.3)); }
.security-orb--sm { width: 160px; height: 160px; left: 5%; top: 20%; background: radial-gradient(60% 60% at 50% 50%, rgba(255, 107, 107, 0.8), rgba(255, 23, 68, 0.3)); }

/* Intro */
.security-intro { padding: 24px 20px 8px; }
.si-wrap { max-width: 1240px; margin: 0 auto; }
.si-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 28px; font-weight: 700; line-height: 1.3; margin: 0 0 12px; text-align: center; }
.si-text { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; margin: 0 auto; max-width: 1000px; text-align: center; }

/* Features */
.security-features { padding: 32px 20px; }
.sf-wrap { max-width: 1240px; margin: 0 auto; }
.sf-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.sf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.sf-item { display: flex; flex-direction: column; gap: 16px; padding: 32px 24px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255, 107, 107, 0.15); transition: all 0.25s ease; }
.sf-item:hover { background: rgba(15, 16, 17, 0.8); border-color: rgba(255, 107, 107, 0.3); }
.sf-icon-wrapper { display: flex; align-items: center; justify-content: flex-start; }
.sf-icon-title { color: #FF6B6B; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 20px; font-weight: 700; line-height: 1.2; margin: 0; }
.sf-item-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; flex-grow: 1; }
.sf-link { color: #FF6B6B; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: color 0.25s ease; }
.sf-link:hover { color: #FF1744; }

/* CTA */
.security-cta-section { position: relative; padding: 72px 20px 72px; overflow: hidden; }
.security-cta-section::before { content: ""; position: absolute; inset: 0; background:
  radial-gradient(60% 120% at 50% 100%, rgba(255, 107, 107, 0.14), rgba(0,0,0,0) 60%),
  linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)); z-index: 0; pointer-events: none; }
.security-cta-section::after { content: ""; position: absolute; inset: 0; background:
  radial-gradient(80% 100% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%); z-index: 0; pointer-events: none; }
.sc-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; align-items: center; text-align: center; padding: 0; background: transparent; border: 0; position: relative; z-index: 1; }
.sc-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.25; margin: 0; }
.sc-intro { color: #D1D5DB; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 760px; }
.sc-button { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 12px 22px; border-radius: 9999px; background: linear-gradient(180deg, #2B2C2F 0%, #1E1F22 100%), #202124; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; line-height: 1; transition: all 0.25s ease; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.45), inset 0 1px rgba(255,255,255,0.06); }
.sc-button:hover { background: linear-gradient(180deg, #323338 0%, #222427 100%); transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,0,0,0.55), inset 0 1px rgba(255,255,255,0.08); }
.sc-arrow { display: inline-block; }

/* Responsive */
@media (max-width: 1180px) {
  .security-hero-inner { grid-template-columns: 1fr; }
  .sf-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .security-hero { padding: 140px 16px 48px; }
  .security-hero-title { font-size: 40px; }
  .security-hero-subtitle { font-size: 16px; }
  .security-hero-ctas { flex-wrap: wrap; }
  .sf-grid { grid-template-columns: 1fr; }
  .sc-title { font-size: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  .security-cta, .sc-button { transition: none; }
}
</style>
