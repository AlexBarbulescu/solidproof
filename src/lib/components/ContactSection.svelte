<script>
	import { onDestroy, onMount } from 'svelte';

	// Toggle slideshow behavior (default: off).
	// You can enable it from the parent via: <ContactSection slideshowEnabled={true} />
	export let slideshowEnabled = false;

	const images = ['/images/kevin01.png'];
	let index = 0;
	let isTransitioning = false;
	const FADE_DURATION = 600;
	const CYCLE_INTERVAL = 5000;

	let intervalId = null;
	let fadeTimeoutId = null;
	let mounted = false;

	$: currentSrc = images[index];

	function clearTimers() {
		if (intervalId) clearInterval(intervalId);
		if (fadeTimeoutId) clearTimeout(fadeTimeoutId);
		intervalId = null;
		fadeTimeoutId = null;
		isTransitioning = false;
	}

	function startTransition() {
		if (images.length < 2) return;
		if (isTransitioning) return;
		isTransitioning = true;

		if (fadeTimeoutId) clearTimeout(fadeTimeoutId);
		fadeTimeoutId = setTimeout(() => {
			index = (index + 1) % images.length;
			isTransitioning = false;
			fadeTimeoutId = null;
		}, FADE_DURATION / 2);
	}

	function setupSlideshow() {
		clearTimers();
		if (!slideshowEnabled || images.length < 2) {
			index = 0;
			return;
		}

		try {
			const storageKey = 'contactFlipLastIndex';
			const stored = localStorage.getItem(storageKey);
			const last = stored !== null ? parseInt(stored, 10) : -1;
			const candidates = images.map((_, i) => i).filter((i) => i !== last);
			const next = candidates[Math.floor(Math.random() * candidates.length)];
			index = Number.isFinite(next) ? next : Math.floor(Math.random() * images.length);
			localStorage.setItem(storageKey, String(index));
		} catch {
			index = Math.floor(Math.random() * images.length);
		}

		const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReduced) {
			intervalId = setInterval(() => {
				index = (index + 1) % images.length;
			}, Math.max(CYCLE_INTERVAL, 6000));
		} else {
			intervalId = setInterval(startTransition, CYCLE_INTERVAL);
		}
	}

	onMount(() => {
		mounted = true;
	});

	$: if (mounted) {
		// Explicit dependency so toggling the prop reconfigures timers.
		slideshowEnabled;
		setupSlideshow();
	}

	onDestroy(() => {
		mounted = false;
		clearTimers();
	});
</script>

<section class="contact-section">
	<div class="contact-wrapper">
		<div class="contact-card">
			<div class="contact-container">
				<div class="contact-content">
					<h2 class="contact-title">Have questions or need a quote?</h2>
					<p class="contact-description">
						Reach out to SolidProof for expert support in blockchain auditing, KYC, smart contract development,
						and marketing.
						<br /><br />
						Our team is ready to assist you with secure, professional solutions tailored to your project.
					</p>
					<button type="button" class="contact-cta">Contact Us</button>
				</div>
				<div class="contact-image">
					<div class="contact-fade">
						<img src={currentSrc} alt="SolidProof team member" class:fading={isTransitioning} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		width: 100%;
		padding: 72px 20px 40px;
		margin: 64px 0 0;
		background: transparent;
		position: relative;
	}

	.contact-wrapper {
		max-width: 1240px;
		margin: 0 auto;
	}

	.contact-card {
		background: radial-gradient(
				38.71% 100.4% at 69.97% 62.68%,
			rgba(0, 128, 255, 0.2) 33.65%,
			rgba(0, 0, 0, 0) 98.56%
		),
			#131415;
		border-radius: 20px;
		overflow: visible;
		position: relative;
	}

	.contact-container {
		padding: 36px 48px 44px 48px;
		display: grid;
		grid-template-columns: 1fr 600px;
		align-items: start;
		gap: 36px;
		min-height: 360px;
		position: relative;
	}

	.contact-content {
		display: flex;
		flex-direction: column;
		gap: 15px;
		max-width: 522px;
		align-items: flex-start;
	}

	.contact-title {
		color: #fff;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 72px;
		font-weight: 700;
		line-height: 90%;
		margin: 0;
	}

	.contact-description {
		color: #9BA1A5;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 100%;
		margin: 0;
	}

	.contact-cta {
		display: inline-block;
		padding: 12px 24px;
		border-radius: 8px;
		border: 1px solid transparent;
		background: linear-gradient(135deg, #0d6efd 0%, #6366f1 100%);
		color: #fff;
		text-decoration: none;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 14px;
		font-weight: 500;
		line-height: 1;
		box-shadow: 0 8px 25px rgba(13, 110, 253, 0.3);
		transition: all 0.3s ease;
	}

	.contact-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 35px rgba(13, 110, 253, 0.45);
	}

	.contact-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 600px;
		height: auto;
		position: absolute;
		right: 48px;
		bottom: 0;
		z-index: 1;
	}

	.contact-image img {
		width: 100%;
		height: auto;
		object-fit: contain;
		display: block;
		transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 1;
		transform: scale(1);
	}

	.contact-image img.fading {
		opacity: 0.3;
		transform: scale(1.02);
	}

	.contact-fade {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	@media (max-width: 1200px) {
		.contact-container {
			grid-template-columns: 1fr;
			gap: 32px;
			padding: 48px 32px 0 32px;
			text-align: center;
		}

		.contact-title {
			font-size: 56px;
		}

		.contact-description {
			font-size: 18px;
		}

		.contact-content {
			align-items: center !important;
			justify-content: center;
			text-align: center !important;
			margin: 0 auto;
		}

		.contact-title,
		.contact-description {
			text-align: center !important;
		}

		.contact-cta {
			margin: 0 auto !important;
			display: inline-block;
		}

		.contact-image {
			width: min(72vw, 520px);
			height: auto;
			position: static;
			margin: 16px auto 0;
			right: auto;
			bottom: auto;
		}
	}

	@media (max-width: 768px) {
		.contact-section {
			padding: 48px 16px 0;
			margin: 32px 0 0;
		}

		.contact-card {
			overflow: hidden;
		}

		.contact-container {
			padding: 40px 20px 0;
			gap: 30px;
		}

		.contact-title {
			font-size: 42px;
			line-height: 95%;
		}

		.contact-description {
			font-size: 16px;
			line-height: 120%;
		}

		.contact-cta {
			width: auto;
			max-width: none;
			padding: 12px 24px;
			font-size: 14px;
			display: inline-block;
		}

		.contact-image {
			width: 100%;
			height: auto;
			position: static;
			transform: none;
			margin: 24px 0 0;
			right: auto;
			bottom: auto;
		}

		.contact-container {
			text-align: center;
		}

		.contact-content {
			align-items: center;
		}

		.contact-title,
		.contact-description {
			text-align: center;
		}

		.contact-cta {
			margin: 0 auto;
		}
	}

	@media (max-width: 480px) {
		.contact-section {
			padding: 48px 0 0;
		}

		.contact-card {
			overflow: hidden;
		}

		.contact-title {
			font-size: 36px;
		}

		.contact-description {
			font-size: 14px;
		}

		.contact-container {
			padding: 16px 20px 0;
			gap: 24px;
		}

		.contact-image {
			width: 100%;
			margin: 12px -20px 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.contact-image img {
			transition: none !important;
		}
	}
</style>
