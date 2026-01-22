<script>
	import { onDestroy, onMount } from 'svelte';

	let videoEl;
	let observer = null;
	const VIDEO_SRC = '/images/hero_video.mp4';
	// Adjust this to reframe the background video (e.g. '50% 35%', 'center top', 'calc(50% + 40px) 50%')
	// let videoObjectPosition = 'calc(50% + 350px) 50%';
	let videoObjectPosition = '50% 50%';
	let isMobile = false;

	// Rotating text (keeps the previous hero “text change animation” behavior)
	const frames = [
		{
			titleLine1: 'Blockchain',
			titleLine2: 'Security Auditor',
			subtitle:
				'SolidProof helps teams secure smart contracts and Web3 infrastructure with thorough audits, verification, and security-first engineering.'
		},
		{
			titleLine1: 'Smart Contract',
			titleLine2: 'Audits',
			subtitle:
				'Deep manual analysis + automated tooling, with clear remediation guidance your engineers can ship.'
		},
		{
			titleLine1: 'KYC & Compliance',
			titleLine2: 'Verification',
			subtitle:
				'Identity verification and recognized compliance badges to build investor confidence and trust.'
		},
		{
			titleLine1: 'Web3 Security',
			titleLine2: 'Engineering',
			subtitle:
				'From token standards to complex protocols—audits delivered with engineering rigor and pragmatic fixes.'
		},
		{
			titleLine1: 'Protocol',
			titleLine2: 'Consulting',
			subtitle:
				'Architecture reviews, risk mitigation, and ongoing security support to harden and scale your ecosystem.'
		}
	];

	let activeIndex = 0;
	let slideInterval = null;
	let dynamicHeight = 0;
	let resizeRaf = null;

	// Contact modal
	let contactOpen = false;
	let contactFormError = '';
	let submittingContact = false;

	let projectOrCompany = '';
	let fullName = '';
	let email = '';
	let jobTitle = '';
	let contactPlatform = 'Telegram';
	let handleOrUsername = '';
	let serviceInterest = '';
	let additionalInfo = '';

	let firstFieldEl;
	let contactCleanup = null;

	const contactEmailTo = 'info@solidproof.io';

	const heroContacts = [
		{
			name: 'Kevin Arens',
			title: 'Chief Financial Officer',
			imageSrc: '/images/kevin01.png',
			gradient: 'linear-gradient(90deg, rgba(0, 64, 160, 0.95), rgba(0, 16, 50, 0.55))',
			links: {
				telegram: 'https://t.me/solidproof_io',
				linkedin: 'https://www.linkedin.com/showcase/solidproof/about/',
				email: 'mailto:info@solidproof.io?subject=Quote Request 2026-01-19&body=Quote Request%0DThere is a new quote request (Time: 2026-01-19 09:08 UTC)%0D%0DProject name%0D➣ %0D%0DService type (Please choose)%0D➣ Audit or Kyc or Audit/KYC%0D%0DProject link%0D➣ %0D%0DContact name%0D➣ %0D%0DContact details%0D➣ %0D%0DCompany%0DCompany Name%0D➣ %0D%0DAddress%0D➣ %0D%0DDeadline%0D➣ %0D%0DLaunchpad%0D➣ %0D%0DAdditional Information%0D➣ '
			}
		},
		{
			name: 'Support & Sales',
			title: 'Chief Sales Officer',
			imageSrc: '/images/wappen.jpg',
			gradient: 'linear-gradient(90deg, rgba(155, 0, 90, 0.95), rgba(35, 0, 20, 0.55))',
			links: {
				telegram: 'https://t.me/Solidproof_io_Support',
				email: 'mailto:support@solidproof.io?subject=Quote Request 2026-01-19&amp;body=Quote Request%0DThere is a new quote request (Time: 2026-01-19 09:08 UTC)%0D%0DProject name%0D➣ %0D%0DService type (Please choose)%0D➣ Audit or Kyc or Audit/KYC%0D%0DProject link%0D➣ %0D%0DContact name%0D➣ %0D%0DContact details%0D➣ %0D%0DCompany%0DCompany Name%0D➣ %0D%0DAddress%0D➣ %0D%0DDeadline%0D➣ %0D%0DLaunchpad%0D➣ %0D%0DAdditional Information%0D➣ '
			}
		}
	];

	function closeContact() {
		contactOpen = false;
		contactFormError = '';
		submittingContact = false;
	}

	function openContact() {
		contactOpen = true;
		contactFormError = '';
	}


	function buildMailtoUrl() {
		const lines = [
			'Quote Request',
			'',
			`Project or Company Name: ${projectOrCompany.trim()}`,
			`Full Name: ${fullName.trim() || '-'}`,
			`Email: ${email.trim()}`,
			`Job Title: ${jobTitle.trim() || '-'}`,
			`Contact Platform: ${contactPlatform}`,
			`Handle / Username: ${handleOrUsername.trim()}`,
			`Service Interest: ${serviceInterest.trim() || '-'}`,
			'',
			'Additional Information:',
			additionalInfo.trim() || '-'
		];

		const subject = encodeURIComponent('Quote Request');
		const body = encodeURIComponent(lines.join('\n'));
		return `mailto:${contactEmailTo}?subject=${subject}&body=${body}`;
	}

	async function submitContact(e) {
		e?.preventDefault?.();
		contactFormError = '';
		if (submittingContact) return;

		const trimmedProject = projectOrCompany.trim();
		const trimmedEmail = email.trim();
		const trimmedHandle = handleOrUsername.trim();

		if (!trimmedProject) {
			contactFormError = 'Project or Company Name is required.';
			return;
		}
		if (!trimmedEmail) {
			contactFormError = 'Email is required.';
			return;
		}
		if (!trimmedHandle) {
			contactFormError = 'Handle / Username is required.';
			return;
		}

		submittingContact = true;
		try {
			if (typeof window !== 'undefined') {
				window.location.href = buildMailtoUrl();
			}
			closeContact();
		} catch {
			contactFormError = 'Could not open your email client. Please email us at info@solidproof.io.';
			submittingContact = false;
		}
	}

	$: currentFrame = frames[activeIndex];
	$: dynamicStyle = dynamicHeight ? `height: ${dynamicHeight}px;` : '';
	$: titleKey = `${currentFrame.titleLine1}|${currentFrame.titleLine2}`;
	$: effectiveVideoObjectPosition = isMobile ? '50% 50%' : videoObjectPosition;

	function startSlideshow() {
		if (slideInterval) return;
		slideInterval = setInterval(() => {
			activeIndex = (activeIndex + 1) % frames.length;
		}, 5200);
	}

	function stopSlideshow() {
		if (slideInterval) clearInterval(slideInterval);
		slideInterval = null;
	}

	function measureDynamicHeight() {
		if (typeof window === 'undefined') return;
		const temp = document.createElement('div');
		const vw = window.innerWidth;
		let measureWidth = 620;
		if (vw <= 480) measureWidth = 360;
		else if (vw <= 767) measureWidth = 520;

		temp.style.cssText = `position:absolute;left:-9999px;top:0;width:${measureWidth}px;visibility:hidden;pointer-events:none;`;
		document.body.appendChild(temp);

		let max = 0;
		frames.forEach((frame) => {
			const el = document.createElement('div');
			el.className = 'hero-frame';
			el.innerHTML = `<p class="hero-subtitle">${frame.subtitle}</p>`;
			temp.appendChild(el);
			max = Math.max(max, el.offsetHeight);
		});

		dynamicHeight = max;
		temp.remove();
	}

	function handleResize() {
		if (typeof window === 'undefined') return;
		if (resizeRaf) cancelAnimationFrame(resizeRaf);
		resizeRaf = requestAnimationFrame(() => {
			isMobile = window.innerWidth <= 767;
			measureDynamicHeight();
		});
	}

	function loadVideo() {
		const el = videoEl;
		if (!el) return;
		el.src = VIDEO_SRC;
		el.load();
		el.play().catch(() => {});
	}

	onMount(() => {
		const onOpenContact = () => openContact();
		window.addEventListener('solidproof:open-contact', onOpenContact);
		// If navigated from another page via /?contact=1, open the modal.
		const params = new URLSearchParams(window.location.search);
		if (params.get('contact') === '1') {
			openContact();
			try {
				const url = new URL(window.location.href);
				url.searchParams.delete('contact');
				window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
			} catch {
				// no-op
			}
		}

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		isMobile = window.innerWidth <= 767;

		measureDynamicHeight();
		window.addEventListener('resize', handleResize, { passive: true });
		if (!prefersReducedMotion) startSlideshow();

		if (prefersReducedMotion) {
			loadVideo();
			return () => {
				window.removeEventListener('solidproof:open-contact', onOpenContact);
			};
		}

		if (!('IntersectionObserver' in window)) {
			loadVideo();
			return () => {
				window.removeEventListener('solidproof:open-contact', onOpenContact);
			};
		}

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						loadVideo();
						observer?.disconnect();
						observer = null;
					}
				});
			},
			{ rootMargin: '200px 0px' }
		);

		if (videoEl) observer.observe(videoEl);

		return () => {
			window.removeEventListener('solidproof:open-contact', onOpenContact);
		};
	});

	$: {
		if (contactCleanup) {
			contactCleanup();
			contactCleanup = null;
		}
		if (contactOpen && typeof window !== 'undefined') {
			const prevOverflow = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			queueMicrotask(() => firstFieldEl?.focus?.());
			const onKeyDown = (ev) => {
				if (ev.key === 'Escape') closeContact();
			};
			window.addEventListener('keydown', onKeyDown);
			contactCleanup = () => {
				window.removeEventListener('keydown', onKeyDown);
				document.body.style.overflow = prevOverflow;
			};
		}
	}

	onDestroy(() => {
		observer?.disconnect();
		observer = null;
		if (contactCleanup) contactCleanup();
		contactCleanup = null;
		stopSlideshow();
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', handleResize);
			if (resizeRaf && typeof globalThis.cancelAnimationFrame === 'function') {
				globalThis.cancelAnimationFrame(resizeRaf);
			}
		}
	});
</script>

<section class="hero-section">
	<div class="hero-background">
		<video
			bind:this={videoEl}
			class="background-video"
			style={`object-position: ${effectiveVideoObjectPosition};`}
			preload="none"
			autoplay
			muted
			loop
			playsinline
			aria-hidden="true"
		></video>
		<div class="hero-overlay"></div>
	</div>
	<div class="hero-inner">
		<div class="hero-layout">
			<div class="hero-copy">
				<h1 class="hero-title">
					{#key titleKey}
						<span class="hero-title-frame">
							{currentFrame.titleLine1}<br />
							{currentFrame.titleLine2}
						</span>
					{/key}
				</h1>
				<div class="hero-dynamic" aria-live="polite" style={dynamicStyle}>
					{#key currentFrame.subtitle}
						<div class="hero-frame">
							<p class="hero-subtitle">{currentFrame.subtitle}</p>
						</div>
					{/key}
				</div>
				<div class="hero-actions">
					<button type="button" class="hero-cta primary-cta" on:click={openContact}>Request a quote</button>
					<a href="https://app.solidproof.io/" class="hero-cta secondary-cta">
						Launch App <span class="cta-arrow" aria-hidden="true">→</span>
					</a>
				</div>

				<div class="hero-contact-strip" aria-label="Direct contacts">
					{#each heroContacts as c}
						<div class="contact-card" style={`--card-bg: ${c.gradient};`}>
							<img class="contact-avatar" src={c.imageSrc} alt={c.name} loading="lazy" />
							<div class="contact-meta">
								<div class="contact-name">{c.name}</div>
								<div class="contact-title">{c.title}</div>
							</div>
							<div class="contact-links" aria-label={`${c.name} links`}>
								{#if c.links.telegram}
									<a class="contact-icon" href={c.links.telegram} target="_blank" rel="noopener" aria-label="Telegram">
										<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
											<path
												fill="currentColor"
												d="M9.51 14.42 9.3 18.2c.41 0 .58-.18.8-.39l1.92-1.83 3.97 2.92c.73.4 1.25.19 1.43-.67L20.8 5.64c.24-1.06-.4-1.48-1.1-1.22L2.84 10.9c-1.02.4-1.01.98-.18 1.24l4.31 1.35L17.3 7.04c.48-.3.92-.13.56.19z"
											/>
										</svg>
									</a>
								{/if}
								{#if c.links.linkedin}
									<a class="contact-icon" href={c.links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
										<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
											<path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05V23h-4v-7.53c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.95-2.88 3.98V23h-4V8.5z"/>
										</svg>
									</a>
								{/if}
								{#if c.links.email}
									<a class="contact-icon" href={c.links.email} aria-label="Email">
										<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
											<path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
										</svg>
									</a>
								{/if}
						</div>
					</div>
				{/each}
				</div>
			</div>

			<!-- Reserved column for an image/SVG you can add later -->
			<div class="hero-media" aria-hidden="true">
				<div class="hero-glitch">
					<img class="hero-right-logo" src="/images/hero_robot.png" alt="" loading="lazy" decoding="async" />
				</div>
			</div>
		</div>
	</div>
</section>

{#if contactOpen}
	<div class="contact-modal" role="dialog" aria-modal="true" aria-label="Talk to an expert">
		<button class="contact-backdrop" type="button" aria-label="Close" on:click={closeContact}></button>
		<div class="contact-panel" role="document">
			<div class="contact-header">
				<div class="contact-title-wrap">
					<h2 class="contact-title">Protect Your Project Today</h2>
					<p class="contact-subtitle">
						Share a few details and we’ll prepare an email to our team.
					</p>
				</div>
				<button class="contact-close" type="button" aria-label="Close" on:click={closeContact}>×</button>
			</div>

			<form class="contact-form" on:submit={submitContact}>
				<div class="field">
					<label for="contact-project">Project or Company Name <span class="req">*</span></label>
					<input
						id="contact-project"
						bind:this={firstFieldEl}
						bind:value={projectOrCompany}
						placeholder="Enter project or company name"
					/>
				</div>

				<div class="grid-3">
					<div class="field">
						<label for="contact-fullname">Full Name</label>
						<input id="contact-fullname" bind:value={fullName} placeholder="Enter your full name" />
					</div>
					<div class="field">
						<label for="contact-email">Email <span class="req">*</span></label>
						<input
							id="contact-email"
							bind:value={email}
							inputmode="email"
							autocomplete="email"
							placeholder="Enter your work email"
						/>
					</div>
					<div class="field">
						<label for="contact-job">Job Title</label>
						<input id="contact-job" bind:value={jobTitle} placeholder="Enter your job title" />
					</div>
				</div>

				<div class="grid-2">
					<div class="field">
						<label for="contact-platform">Contact Platform <span class="req">*</span></label>
						<select id="contact-platform" bind:value={contactPlatform}>
							<option>Telegram</option>
							<option>Discord</option>
							<option>WhatsApp</option>
							<option>Signal</option>
							<option>Email</option>
						</select>
					</div>
					<div class="field">
						<label for="contact-handle">Handle / Username <span class="req">*</span></label>
						<input id="contact-handle" bind:value={handleOrUsername} placeholder="Enter your handle or ID" />
					</div>
				</div>

				<div class="field">
					<label for="contact-service">Service Interest</label>
					<select id="contact-service" bind:value={serviceInterest}>
						<option value="">Select from available services</option>
						<option>Audit</option>
						<option>KYC</option>
						<option>Development</option>
						<option>Consulting</option>
						<option>Marketing</option>
					</select>
				</div>

				<div class="field">
					<label for="contact-additional">Additional Information</label>
					<textarea
						id="contact-additional"
						bind:value={additionalInfo}
						rows="4"
						placeholder="Include project details, relevant links, or any questions you may have"
					></textarea>
				</div>

				{#if contactFormError}
					<div class="form-error" role="alert">{contactFormError}</div>
				{/if}

				<div class="contact-actions">
					<button class="contact-submit" type="submit" disabled={submittingContact}>
						{submittingContact ? 'Opening secure chat…' : 'Request My Quote'}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	.hero-section { 
		position: relative; 
		overflow: hidden; 
		padding: 80px 0 72px;
		min-height: 100vh;
		min-height: 100svh;
		display: flex;
		align-items: center;
	}

	.hero-inner { 
		max-width: 1280px; 
		margin: 0 auto; 
		padding: 0 20px; 
		position: relative; 
		z-index: 1;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
	}

	.hero-background { position: absolute; inset: 0; z-index: 0; }
	.background-video { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }
	.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); }

	.hero-layout {
		display: grid;
		grid-template-columns: minmax(0, 620px) minmax(0, 1fr);
		align-items: center;
		gap: 56px;
		width: 95%;
	}

	.hero-copy {
		text-align: left;
		max-width: 620px;
		width: 100%;
	}

	.hero-media {
		min-height: 420px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.hero-right-logo {
		width: min(560px, 100%);
		max-width: 100%;
		height: auto;
		object-fit: contain;
		display: block;
		filter: drop-shadow(0 18px 20px rgba(0, 0, 0, 0.55));
		opacity: 0.98;
	}

	/* Glitch effect for the hero right image (slice-style, inspired by the referenced demo). */
	.hero-glitch {
		--glitch-speed: 3.2s;
		--glitch-img: url('/images/hero_robot.png');
		display: inline-block;
		position: relative;
		isolation: isolate;
		animation: heroGlitchJitter var(--glitch-speed) infinite;

		/* Bottom fade (so the image softly fades into the background). */
		-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%);
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%);
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
	}

	.hero-glitch::before,
	.hero-glitch::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: var(--glitch-img);
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		pointer-events: none;
		opacity: 0;
		mix-blend-mode: screen;
		will-change: transform, clip-path, opacity, filter;
	}

	.hero-glitch::before {
		filter: saturate(1.25) contrast(1.05) hue-rotate(25deg);
		animation: heroGlitchSliceA calc(var(--glitch-speed) * 0.82) infinite steps(1, end);
	}

	.hero-glitch::after {
		filter: saturate(1.25) contrast(1.05) hue-rotate(-25deg);
		animation: heroGlitchSliceB calc(var(--glitch-speed) * 0.9) infinite steps(1, end);
	}

	@keyframes heroGlitchJitter {
		0%,
		72%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		74% {
			transform: translate3d(-1px, 1px, 0);
		}
		76% {
			transform: translate3d(1px, -1px, 0);
		}
		78% {
			transform: translate3d(-2px, 0, 0);
		}
		80% {
			transform: translate3d(2px, 1px, 0);
		}
	}

	@keyframes heroGlitchSliceA {
		0%,
		66% {
			opacity: 0;
			clip-path: inset(0 0 0 0);
			transform: translate3d(0, 0, 0);
		}
		68% {
			opacity: 0.65;
			clip-path: inset(8% 0 72% 0);
			transform: translate3d(-10px, -2px, 0);
		}
		70% {
			opacity: 0.55;
			clip-path: inset(42% 0 46% 0);
			transform: translate3d(12px, 1px, 0);
		}
		72% {
			opacity: 0.6;
			clip-path: inset(70% 0 12% 0);
			transform: translate3d(-14px, 2px, 0);
		}
		74% {
			opacity: 0.25;
			clip-path: inset(14% 0 78% 0);
			transform: translate3d(10px, -1px, 0);
		}
		76%,
		100% {
			opacity: 0;
			clip-path: inset(0 0 0 0);
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes heroGlitchSliceB {
		0%,
		64% {
			opacity: 0;
			clip-path: inset(0 0 0 0);
			transform: translate3d(0, 0, 0);
		}
		66% {
			opacity: 0.5;
			clip-path: inset(18% 0 64% 0);
			transform: translate3d(12px, 2px, 0);
		}
		68% {
			opacity: 0.55;
			clip-path: inset(54% 0 30% 0);
			transform: translate3d(-10px, -2px, 0);
		}
		70% {
			opacity: 0.45;
			clip-path: inset(78% 0 10% 0);
			transform: translate3d(14px, 1px, 0);
		}
		72% {
			opacity: 0.22;
			clip-path: inset(10% 0 82% 0);
			transform: translate3d(-12px, 0px, 0);
		}
		74%,
		100% {
			opacity: 0;
			clip-path: inset(0 0 0 0);
			transform: translate3d(0, 0, 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-glitch {
			animation: none !important;
		}
		.hero-glitch::before,
		.hero-glitch::after {
			display: none;
			animation: none !important;
		}
	}

	@media (max-width: 980px) {
		.hero-layout { grid-template-columns: 1fr; gap: 28px; }
		.hero-media {
			min-height: auto;
			justify-content: center;
		}
		.hero-right-logo { width: min(420px, 80vw); }
	}

	.hero-title {
		font-size: clamp(56px, 6.2vw, 120px);
		line-height: 0.92;
		font-weight: 400;
		letter-spacing: -0.03em;
		color: rgba(255, 255, 255, 0.95);
		margin: 0;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}

	.hero-title-frame {
		display: inline-block;
		will-change: opacity, transform;
		animation: heroSlideIn 0.65s cubic-bezier(.16,.84,.44,1) both;
	}

	.hero-subtitle { 
		margin: 0;
		color: #9BA1A5;
		font-size: 18px;
		opacity: 1;
		line-height: 1.45;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}

	.hero-dynamic {
		margin-top: 22px;
		position: relative;
	}

	.hero-frame {
		will-change: opacity, transform;
		animation: heroSlideIn 0.65s cubic-bezier(.16,.84,.44,1) both;
	}

	@keyframes heroSlideIn {
		from { opacity: 0; transform: translateY(26px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.hero-actions { 
		margin-top: 32px;
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}

	.hero-contact-strip {
		margin-top: 18px;
		display: flex;
		gap: 14px;
		flex-wrap: nowrap;
		align-items: center;
	}

	.contact-card {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 10px;
		border-radius: 12px;
		background: var(--card-bg);
		border: 1px solid rgba(255, 255, 255, 0.10);
		box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
		flex: 1 1 0;
		min-width: 0;
	}

	.contact-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid rgba(0, 0, 0, 0.25);
		background: rgba(0, 0, 0, 0.2);
	}

	.contact-meta { min-width: 0; }
	.contact-name {
		color: rgba(255, 255, 255, 0.96);
		font-weight: 600;
		font-size: 13px;
		line-height: 1.15;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.contact-meta .contact-title {
		margin-top: 2px;
		color: rgba(255, 255, 255, 0.82);
		font-weight: 500;
		font-size: 10px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		white-space: normal;
		line-height: 1.2;
		max-height: calc(1.2em * 2);
		overflow: hidden;
		word-break: break-word;
		hyphens: auto;
	}

	.contact-links {
		margin-left: auto;
		display: flex;
		gap: 8px;
		align-items: center;
	}
	.contact-icon {
		width: 28px;
		height: 28px;
		display: grid;
		place-items: center;
		border-radius: 9px;
		color: rgba(255, 255, 255, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(0, 0, 0, 0.18);
		transition: background 0.2s ease, transform 0.2s ease;
		text-decoration: none;
	}
	.contact-icon:hover {
		background: rgba(255, 255, 255, 0.08);
		transform: translateY(-1px);
	}

	.hero-cta { 
		display: inline-block; 
		padding: 14px 22px;
		border-radius: 4px;
		border: 1px solid transparent;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.3s ease;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 14px;
		cursor: pointer;
	}

	.primary-cta { 
		background: #0D6EFD;
		color: #fff;
		box-shadow: none;
	}

	.primary-cta:hover {
		background: #0B5ED7;
	}

	.secondary-cta { 
		background: rgba(0, 0, 0, 0.2);
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.22);
	}

	.secondary-cta:hover {
		background: rgba(255, 255, 255, 0.06);
		border-color: rgba(255, 255, 255, 0.32);
	}
	.cta-arrow { margin-left: 4px; }

	/* Contact modal */
	.contact-modal {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: grid;
		place-items: center;
	}
	.contact-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.72);
		border: 0;
	}
	.contact-panel {
		position: relative;
		width: min(760px, calc(100vw - 32px));
		max-height: calc(100vh - 32px);
		overflow: auto;
		border-radius: 12px;
		background: rgba(10, 10, 10, 0.96);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 22px 70px rgba(0, 0, 0, 0.6);
		padding: 22px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
	.contact-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 18px;
	}
	.contact-panel .contact-title {
		margin: 0;
		font-size: 34px;
		line-height: 1.1;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.96);
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}
	.contact-subtitle {
		margin: 10px 0 0;
		color: #9BA1A5;
		font-size: 14px;
		line-height: 1.45;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}
	.contact-close {
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(255, 255, 255, 0.06);
		color: rgba(255, 255, 255, 0.9);
		width: 34px;
		height: 34px;
		border-radius: 10px;
		cursor: pointer;
		line-height: 1;
		font-size: 18px;
		display: grid;
		place-items: center;
	}
	.contact-close:hover { background: rgba(255, 255, 255, 0.10); }

	.contact-form { display: grid; gap: 14px; }
	.field { display: grid; gap: 8px; }
	.field label {
		color: rgba(255, 255, 255, 0.9);
		font-size: 13px;
		font-weight: 500;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}
	.req { color: #e64a3b; }
	.field input,
	.field select,
	.field textarea {
		width: 100%;
		padding: 12px 12px;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.10);
		background: rgba(0, 0, 0, 0.28);
		color: rgba(255, 255, 255, 0.92);
		outline: none;
		font-size: 14px;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}
	.field textarea { resize: vertical; min-height: 110px; }
	.field input:focus,
	.field select:focus,
	.field textarea:focus {
		border-color: rgba(13, 110, 253, 0.65);
		box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.18);
	}

	.grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
	.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }

	.form-error {
		padding: 10px 12px;
		border-radius: 10px;
		border: 1px solid rgba(230, 74, 59, 0.35);
		background: rgba(230, 74, 59, 0.12);
		color: rgba(255, 255, 255, 0.92);
		font-size: 13px;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}

	.contact-actions { display: flex; justify-content: center; padding-top: 6px; }
	.contact-submit {
		width: min(360px, 100%);
		padding: 14px 18px;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: #0D6EFD;
		color: #fff;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.2s ease, transform 0.2s ease;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
	}
	.contact-submit:hover { background: #0B5ED7; transform: translateY(-1px); }
	.contact-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

	@media (max-width: 767px) {
		.contact-panel { padding: 18px; }
		.contact-panel .contact-title { font-size: 26px; }
		.grid-3 { grid-template-columns: 1fr; }
		.grid-2 { grid-template-columns: 1fr; }
	}

	@media (max-width: 1024px) {
		.hero-section { padding: 60px 0 72px; min-height: 90vh; }
		.hero-inner { padding: 0 32px; min-height: 50vh; }
		.hero-layout { grid-template-columns: minmax(0, 560px) minmax(0, 1fr); gap: 40px; }
		.hero-media { min-height: 360px; }
		.hero-right-logo { width: min(420px, 100%); }
	}

	@media (max-width: 767px) {
		.hero-section { padding: 112px 0 60px; min-height: 80vh; }
		.hero-inner { padding: 0 20px; min-height: 40vh; }
		.hero-layout { grid-template-columns: 1fr; gap: 28px; }
		.hero-media { display: none; }
		.hero-title { font-size: clamp(44px, 12vw, 72px); }
		.hero-subtitle { font-size: 16px; }
		.hero-dynamic { margin-top: 16px; }
		.hero-actions { margin-top: 24px; justify-content: flex-start; }
		.hero-contact-strip { margin-top: 16px; gap: 10px; }
		.hero-contact-strip { flex-wrap: wrap; }
		.contact-card { min-width: 100%; }
	}

	@media (max-width: 1024px) {
		.hero-contact-strip { flex-wrap: wrap; }
	}

	@media (max-width: 480px) {
		.hero-section { padding: 120px 0 48px; }
		.hero-inner { padding: 0 16px; }
		.hero-title { font-size: clamp(40px, 12.5vw, 64px); }
	}

	@media (prefers-reduced-motion: reduce) {
		.background-video { display: none; }
		.hero-overlay { background: rgba(0,0,0,0.7); }
		.hero-frame { animation: none; }
		.hero-title-frame { animation: none; }
		.hero-dynamic { height: auto !important; }
	}
</style>
