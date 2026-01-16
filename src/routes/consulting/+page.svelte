<svelte:head>
	<title>Consulting • SolidProof</title>
</svelte:head>

<script>
	import FAQ from '$lib/components/FAQ.svelte'

	const consultingFaqs = [
		{ question: 'What types of consulting services does SolidProof offer?', answer: 'SolidProof offers a range of security consulting services tailored to meet the unique needs of individual projects. This includes but is not limited to risk assessments, vulnerability management, security architecture design, incident response planning and more. Our team of experts works closely with clients to develop customized security solutions aligned with their specific industry and organizational requirements.' },
		{ question: 'Why is security consulting important?', answer: 'Security consulting is crucial to proactively address security challenges. It helps projects understand their security risks, comply with industry regulations, and implement robust security practices. Security consulting assists in reducing the likelihood of security breaches, minimise financial losses, and preserve investors trust.' },
		{ question: 'Are SolidProof\'s consulting services only for large enterprises?', answer: 'No, security consulting is beneficial for businesses and projects of all sizes. While larger enterprises may have more complex security needs, small and medium-sized businesses and projects can also greatly benefit from security consulting services. SolidProof offers scalable solutions that can be tailored to the size and requirements of the project, ensuring that security measures are implemented effectively and efficiently.' },
		{ question: 'How does the consulting process work at SolidProof?', answer: 'The security consulting process at SolidProof begins with an initial consultation to understand the clients security goals, challenges, and requirements. Our consultants conduct thorough assessments, which may include analyzing existing security controls, identifying vulnerabilities, and evaluating the effectiveness of current security practices. Based on the assessment findings, we provide actionable recommendations and work collaboratively with the client to implement the proposed security measures.' },
		{ question: 'How can I request consultation from SolidProof?', answer: 'To request security consulting services from SolidProof, please visit solidproof.io/contact and fill out the inquiry form. Our team will promptly get in touch with you to discuss your specific security needs, propose a customized consulting plan, and guide you through the consulting process. For direct contact on Telegram, you can contact Kevins Arens (CFO), or Brandon Willis (CSO) directly via our homepage.' },
	]
</script>

<main class="consulting-page" aria-labelledby="consulting-hero-title">
	<!-- Hero -->
	<section class="consulting-hero">
		<div class="consulting-hero-inner">
			<div class="consulting-hero-copy">
				<h1 id="consulting-hero-title" class="consulting-hero-title">Consulting</h1>
				<p class="consulting-hero-subtitle">
					Our team of experienced professionals collaborates closely with clients to determine the best way to proceed, ensuring that your project thrives in the competitive market.
				</p>
				<div class="consulting-hero-ctas">
					<a href="https://t.me/solidproof_io" target="_blank" class="consulting-cta consulting-cta--primary">Request now</a>
					<a href="#consulting-services" class="consulting-cta consulting-cta--ghost">Learn more</a>
				</div>
			</div>
			<div class="consulting-hero-art" aria-hidden="true">
				<div class="consulting-orb consulting-orb--lg"></div>
				<div class="consulting-orb consulting-orb--sm"></div>
				<svg class="consulting-hero-svg" viewBox="0 0 160 160" fill="none" aria-hidden="true">
					<defs>
						<linearGradient id="gc1" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0" stop-color="#6AFFB3" />
							<stop offset="1" stop-color="#8E60EE" />
						</linearGradient>
					</defs>
					<circle cx="80" cy="80" r="72" stroke="url(#gc1)" stroke-width="2" opacity="0.6" />
					<circle cx="80" cy="80" r="52" stroke="url(#gc1)" stroke-width="2" opacity="0.35" />
					<circle cx="80" cy="80" r="28" stroke="url(#gc1)" stroke-width="2" opacity="0.25" />
				</svg>
			</div>
		</div>
	</section>

	<!-- Intro -->
	<section class="consulting-intro">
		<div class="ci-wrap">
			<p class="ci-text">
				Consultation services cover a range of crucial areas, including project and contract development, security advisory, and marketing consultations. Whether you are a blockchain startup or an established Web3 organization, we are here to provide guidance to meet your specific needs.
			</p>
		</div>
	</section>

	<!-- Services -->
	<section id="consulting-services" class="consulting-services" aria-labelledby="consulting-services-title">
		<div class="cs-wrap">
			<h2 id="consulting-services-title" class="cs-title">Key Service Areas</h2>
			<div class="cs-grid">
				<div class="cs-card">
					<h3 class="cs-card-title">Development</h3>
					<p class="cs-card-desc">SolidProof's experts will work closely with you to develop and refine your Web3 project and smart contracts. We understand the intricacies of blockchain technology and the importance of robust, secure code. With our technical expertise, we can help you optimize your project's architecture, enhance functionality, and ensure smart contract reliability.</p>
				</div>
				<div class="cs-card">
					<h3 class="cs-card-title">Security Advisory</h3>
					<p class="cs-card-desc">In the Web3 world, security is paramount. Our team will conduct comprehensive security evaluations of your project, identifying potential vulnerabilities and providing actionable recommendations to mitigate risks. We leverage our in-depth knowledge of Web3 security best practices to protect you and your stakeholders.</p>
				</div>
				<div class="cs-card">
					<h3 class="cs-card-title">Marketing Consultations</h3>
					<p class="cs-card-desc">Building a strong brand presence and engaging users are crucial elements for success. Our marketing consultations offer strategic insights to help you develop a recognizable brand. We provide guidance on user engagement strategies, effective communication channels, and community building, empowering you to connect with your target audience and drive adoption.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<FAQ
		items={consultingFaqs}
		title="Consulting FAQ"
		description="Answers to common questions about our consulting services, process, and how we can support your project."
	/>

	<!-- CTA -->
	<section id="consulting-contact" class="consulting-cta-section">
		<div class="cc-wrap">
			<h2 class="cc-title">Need consultations?</h2>
			<p class="cc-intro">Send a request for a consultation now!</p>
			<a href="https://solidproof.io/contact" class="cc-button">
				<span>Request now</span>
				<svg class="cc-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M3 8h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
					<path d="M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
	</section>
</main>

<style>
.consulting-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

/* Hero */
.consulting-hero { padding: 160px 20px 64px; position: relative; }
.consulting-hero-inner { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; }
.consulting-hero-copy { display: flex; flex-direction: column; gap: 16px; }
.consulting-hero-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 56px; font-weight: 700; line-height: 1.08; margin: 0; }
.consulting-hero-subtitle { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; margin: 0; }
.consulting-hero-ctas { display: flex; gap: 12px; margin-top: 4px; }
.consulting-cta { display: inline-block; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; line-height: 1; transition: all 0.25s ease; }
.consulting-cta--primary { background: #0D6EFD; color: #fff; }
.consulting-cta--primary:hover { background: #0B5ED7; transform: translateY(-1px); }
.consulting-cta--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.18); }
.consulting-cta--ghost:hover { border-color: rgba(255,255,255,0.32); transform: translateY(-1px); }
.consulting-hero-art { position: relative; min-height: 320px; }
.consulting-hero-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.7; }
.consulting-orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.6; }
.consulting-orb--lg { width: 240px; height: 240px; right: 10%; bottom: 0; background: radial-gradient(60% 60% at 50% 50%, rgba(142,96,238,0.9), rgba(13,110,253,0.3)); }
.consulting-orb--sm { width: 160px; height: 160px; left: 5%; top: 20%; background: radial-gradient(60% 60% at 50% 50%, rgba(106,255,179,0.8), rgba(13,110,253,0.3)); }

/* Intro */
.consulting-intro { padding: 24px 20px 8px; }
.ci-wrap { max-width: 1240px; margin: 0 auto; }
.ci-text { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; margin: 0 auto; max-width: 1000px; text-align: center; }

/* Services */
.consulting-services { padding: 32px 20px; }
.cs-wrap { max-width: 1240px; margin: 0 auto; }
.cs-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; text-align: center; }
.cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.cs-card { display: flex; flex-direction: column; gap: 12px; padding: 24px 16px; border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); transition: all 0.25s ease; }
.cs-card:hover { background: rgba(15, 16, 17, 0.8); border-color: rgba(255,255,255,0.12); }
.cs-card-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 18px; font-weight: 600; line-height: 1.2; margin: 0; }
.cs-card-desc { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; margin: 0; }

/* CTA */
.consulting-cta-section { position: relative; padding: 72px 20px 72px; overflow: hidden; }
.consulting-cta-section::before { content: ""; position: absolute; inset: 0; background:
  radial-gradient(60% 120% at 50% 100%, rgba(13,110,253,0.14), rgba(0,0,0,0) 60%),
  linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)); z-index: 0; pointer-events: none; }
.consulting-cta-section::after { content: ""; position: absolute; inset: 0; background:
  radial-gradient(80% 100% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%); z-index: 0; pointer-events: none; }
.cc-wrap { max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; align-items: center; text-align: center; padding: 0; background: transparent; border: 0; position: relative; z-index: 1; }
.cc-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.25; margin: 0; }
.cc-intro { color: #D1D5DB; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0; max-width: 760px; }
.cc-button { display: inline-flex; align-items: center; gap: 8px; margin-top: 10px; padding: 12px 22px; border-radius: 9999px; background: linear-gradient(180deg, #2B2C2F 0%, #1E1F22 100%), #202124; color: #fff; text-decoration: none; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 600; line-height: 1; transition: all 0.25s ease; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 8px 24px rgba(0,0,0,0.45), inset 0 1px rgba(255,255,255,0.06); }
.cc-button:hover { background: linear-gradient(180deg, #323338 0%, #222427 100%); transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,0,0,0.55), inset 0 1px rgba(255,255,255,0.08); }
.cc-arrow { display: inline-block; }

/* Responsive */
@media (max-width: 1180px) {
  .consulting-hero-inner { grid-template-columns: 1fr; }
  .cs-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .consulting-hero { padding: 140px 16px 48px; }
  .consulting-hero-title { font-size: 40px; }
  .consulting-hero-subtitle { font-size: 16px; }
  .consulting-hero-ctas { flex-wrap: wrap; }
  .cs-grid { grid-template-columns: 1fr; }
  .cc-title { font-size: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  .consulting-cta, .cc-button { transition: none; }
}
</style>
