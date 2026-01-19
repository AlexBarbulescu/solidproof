<script>
	import { onDestroy, onMount } from 'svelte';

	let videoEl;
	let observer = null;
	const VIDEO_SRC = '/images/hero_video.mp4';

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

	$: currentFrame = frames[activeIndex];
	$: dynamicStyle = dynamicHeight ? `height: ${dynamicHeight}px;` : '';
	$: titleKey = `${currentFrame.titleLine1}|${currentFrame.titleLine2}`;

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
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		measureDynamicHeight();
		window.addEventListener('resize', handleResize, { passive: true });
		if (!prefersReducedMotion) startSlideshow();

		if (prefersReducedMotion) {
			loadVideo();
			return;
		}

		if (!('IntersectionObserver' in window)) {
			loadVideo();
			return;
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
	});

	onDestroy(() => {
		observer?.disconnect();
		observer = null;
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
				<!-- <p class="hero-kicker">Elevate Your Web3 Journey</p> -->
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
					<a href="mailto:info@solidproof.io" class="hero-cta primary-cta">Talk to an expert</a>
					<a href="https://app.solidproof.io/" class="hero-cta secondary-cta">
						Launch App <span class="cta-arrow" aria-hidden="true">→</span>
					</a>
				</div>
			</div>

			<!-- Reserved column for an image/SVG you can add later -->
			<div class="hero-media" aria-hidden="true"></div>
		</div>
	</div>
</section>

<style>
	.hero-section { 
		position: relative; 
		overflow: hidden; 
		padding: 80px 0 72px;
		min-height: 100vh;
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
		width: 100%;
	}

	.hero-copy {
		text-align: left;
		max-width: 620px;
		width: 100%;
	}

	.hero-media {
		min-height: 420px;
		width: 100%;
	}

	.hero-kicker {
		margin: 0 0 18px;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 18px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.9);
		letter-spacing: 0.01em;
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
	}

	.primary-cta { 
		background: #e64a3b;
		color: #fff;
		box-shadow: none;
	}

	.primary-cta:hover {
		filter: brightness(1.05);
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

	@media (max-width: 1024px) {
		.hero-section { padding: 60px 0 72px; min-height: 90vh; }
		.hero-inner { padding: 0 32px; min-height: 50vh; }
		.hero-layout { grid-template-columns: minmax(0, 560px) minmax(0, 1fr); gap: 40px; }
		.hero-media { min-height: 360px; }
	}

	@media (max-width: 767px) {
		.hero-section { padding: 112px 0 60px; min-height: 80vh; }
		.hero-inner { padding: 0 20px; min-height: 40vh; }
		.hero-layout { grid-template-columns: 1fr; gap: 28px; }
		.hero-media { min-height: 0; height: 0; }
		.hero-kicker { font-size: 16px; margin-bottom: 14px; }
		.hero-title { font-size: clamp(44px, 12vw, 72px); }
		.hero-subtitle { font-size: 16px; }
		.hero-dynamic { margin-top: 16px; }
		.hero-actions { margin-top: 24px; justify-content: flex-start; }
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
