<svelte:head>
	<title>Lossless • SolidProof</title>
</svelte:head>

<main class="lossless-page" aria-labelledby="lossless-hero-title">
	<!-- Hero -->
	<section class="lossless-hero">
		<div class="lossless-hero-inner">
			<div class="lossless-hero-copy">
				<h1 id="lossless-hero-title" class="lossless-hero-title">Lossless</h1>
				<p class="lossless-hero-subtitle">
					Lossless incorporates a new layer of blockchain transaction security, protecting selected projects and their communities from malicious exploits and the associated financial loss.
				</p>
				<p class="lossless-hero-note">*Products are from Lossless</p>
				<div class="lossless-hero-ctas">
					<a href="https://lossless.io/contact-us/" target="_blank" class="lossless-cta lossless-cta--primary">Request now</a>
					<a href="#lossless-features" class="lossless-cta lossless-cta--ghost">Learn more</a>
				</div>
			</div>
			<div class="lossless-hero-art" aria-hidden="true">
				<div class="lossless-orb lossless-orb--lg"></div>
				<div class="lossless-orb lossless-orb--sm"></div>
				<svg class="lossless-hero-svg" viewBox="0 0 160 160" fill="none" aria-hidden="true">
					<defs>
						<linearGradient id="gl1" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0" stop-color="#FFD600" />
							<stop offset="1" stop-color="#FF9E00" />
						</linearGradient>
					</defs>
					<circle cx="80" cy="80" r="72" stroke="url(#gl1)" stroke-width="2" opacity="0.6" />
					<circle cx="80" cy="80" r="52" stroke="url(#gl1)" stroke-width="2" opacity="0.35" />
					<circle cx="80" cy="80" r="28" stroke="url(#gl1)" stroke-width="2" opacity="0.25" />
				</svg>
			</div>
		</div>
	</section>

	<!-- Intro -->
	<section class="lossless-intro">
		<div class="li-wrap">
			<h2 class="li-title">Restoring Trust in Web3 Security</h2>
			<p class="li-text">Lossless protocol is designed to reinforce token security framework, ensuring project creators and their communities have a fail-safe against malicious exploits.</p>
		</div>
	</section>

	<!-- Features -->
	<section id="lossless-features" class="lossless-features" aria-labelledby="lossless-features-title">
		<div class="lf-wrap">
			<h2 id="lossless-features-title" class="lf-title">Key Security Features</h2>
			<div class="lf-grid">
				<div class="lf-item">
					<h3 class="lf-item-title">Lossless Protocol</h3>
					<p class="lf-item-desc">Reinforce your project's token with the option to recover them if stolen</p>
					<a href="https://platform.lossless.io/latest-transfers?chain=mainnet" target="_blank" class="lf-link">Learn more →</a>
				</div>
				<div class="lf-item">
					<h3 class="lf-item-title">Aegis</h3>
					<p class="lf-item-desc">Lossless Aegis provides industry-leading threat monitoring and smart contract defence capabilities, designed to prevent exploits before they happen</p>
					<a href="https://aegis.lossless.io/" target="_blank" class="lf-link">Learn more →</a>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section id="lossless-contact" class="lossless-cta-section">
		<div class="lc-wrap">
			<h2 class="lc-title">Need help?</h2>
			<p class="lc-intro">Click on the button "Help" to get in contact with the Lossless team!</p>
			<a href="https://lossless.io/contact-us/" target="_blank" class="lc-button">
				<span>Help</span>
				<svg class="lc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M3 8h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
					<path d="M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
	</section>
</main>

<style>
.lossless-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

/* Hero */
.lossless-hero { padding: 160px 20px 64px; position: relative; }
.lossless-hero-inner { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; }
.lossless-hero-copy { display: flex; flex-direction: column; gap: 16px; }
.lossless-hero-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 56px; font-weight: 700; line-height: 1.08; margin: 0; }
.lossless-hero-subtitle { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0; }
.lossless-hero-note { color: #FFD600; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; font-weight: 500; }
.lossless-hero-ctas { display: flex; gap: 12px; margin-top: 4px; }
.lossless-cta { display: inline-block; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.lossless-cta--primary { background: #FFD600; color: #000; }
.lossless-cta--primary:hover { background: #FF9E00; color: #fff; transform: translateY(-1px); }
.lossless-cta--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.18); }
.lossless-cta--ghost:hover { border-color: rgba(255,255,255,0.32); transform: translateY(-1px); }
.lossless-hero-art { position: relative; min-height: 320px; }
.lossless-hero-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.7; }
.lossless-orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.6; }
.lossless-orb--lg { width: 240px; height: 240px; right: 10%; bottom: 0; background: radial-gradient(60% 60% at 50% 50%, rgba(255, 222, 0, 0.9), rgba(255, 158, 0, 0.3)); }
.lossless-orb--sm { width: 160px; height: 160px; left: 5%; top: 20%; background: radial-gradient(60% 60% at 50% 50%, rgba(255, 214, 0, 0.8), rgba(255, 158, 0, 0.3)); }

/* Intro */
.lossless-intro { padding: 24px 20px 8px; }
.li-wrap { max-width: 1240px; margin: 0 auto; }
.li-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 28px; font-weight: 700; line-height: 1.3; margin: 0 0 12px; text-align: center; }
.li-text { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; margin: 0 auto; max-width: 1000px; text-align: center; }

/* Features */
.lossless-features { padding: 32px 20px; }
.lf-wrap { max-width: 1240px; margin: 0 auto; }
.lf-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.lf-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
.lf-item { display: flex; flex-direction: column; gap: 16px; padding: 32px 24px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255, 214, 0, 0.15); transition: all 0.25s ease; }
.lf-item:hover { background: rgba(15, 16, 17, 0.8); border-color: rgba(255, 214, 0, 0.3); }
.lf-item-title { color: #FFD600; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 20px; font-weight: 700; line-height: 1.2; margin: 0; }
.lf-item-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; flex-grow: 1; }
.lf-link { color: #FFD600; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: color 0.25s ease; }
.lf-link:hover { color: #FF9E00; }

/* CTA */
.lossless-cta-section { position: relative; padding: 72px 20px 72px; overflow: hidden; }
.lossless-cta-section::before { content: ""; position: absolute; inset: 0; background:
  radial-gradient(60% 120% at 50% 100%, rgba(255, 214, 0, 0.14), rgba(0,0,0,0) 60%),
  linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)); z-index: 0; pointer-events: none; }
.lossless-cta-section::after { content: ""; position: absolute; inset: 0; background:
  radial-gradient(80% 100% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%); z-index: 0; pointer-events: none; }
.lc-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; align-items: center; text-align: center; padding: 0; background: transparent; border: 0; position: relative; z-index: 1; }
.lc-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.25; margin: 0; }
.lc-intro { color: #D1D5DB; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 760px; }
.lc-button { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 12px 22px; border-radius: 9999px; background: linear-gradient(180deg, #2B2C2F 0%, #1E1F22 100%), #202124; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; line-height: 1; transition: all 0.25s ease; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.45), inset 0 1px rgba(255,255,255,0.06); }
.lc-button:hover { background: linear-gradient(180deg, #323338 0%, #222427 100%); transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,0,0,0.55), inset 0 1px rgba(255,255,255,0.08); }
.lc-arrow { display: inline-block; }

/* Responsive */
@media (max-width: 1180px) {
  .lossless-hero-inner { grid-template-columns: 1fr; }
  .lf-grid { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .lossless-hero { padding: 140px 16px 48px; }
  .lossless-hero-title { font-size: 40px; }
  .lossless-hero-subtitle { font-size: 16px; }
  .lossless-hero-ctas { flex-wrap: wrap; }
  .lc-title { font-size: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  .lossless-cta, .lc-button { transition: none; }
}
</style>
