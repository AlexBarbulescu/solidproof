<script>
	import { onMount } from 'svelte';

	const tawkPropertyId = '68da53b0acbab119535c12ea';
	const tawkWidgetId = '1j6addqb8';
	let tawkLoaded = false;
	let isVisible = false;
	let tawkActive = false;
	let tawkCover = 0;
	let measureIntervalId = null;

	function handleScroll() {
		isVisible = window.scrollY > 200;
	}

	function measureTawkCover() {
		// Tawk injects host elements into the page DOM (even though the UI is rendered in iframes).
		// We measure how much vertical space it occupies at the bottom-right so we can keep
		// the back-to-top button above it.
		const el =
			document.querySelector('#tawkchat-minified-container') ||
			document.querySelector('#tawkchat-container') ||
			document.querySelector('.tawk-min-container') ||
			document.querySelector('[id^="tawkchat-"]');
		if (!el) {
			tawkCover = 0;
			return;
		}

		const rect = el.getBoundingClientRect();
		// If the widget sits at the bottom, how much of the viewport height does it cover?
		const cover = Math.max(0, window.innerHeight - rect.top);
		// Ignore tiny values from offscreen/hidden elements.
		tawkCover = cover >= 20 ? cover : 0;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function injectTawk(propertyId, widgetId) {
		if (tawkLoaded || !propertyId || !widgetId) return false;
		const s1 = document.createElement('script');
		s1.async = true;
		s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
		s1.charset = 'UTF-8';
		s1.setAttribute('crossorigin', '*');
		const s0 = document.getElementsByTagName('script')[0];
		s0?.parentNode?.insertBefore(s1, s0);
		tawkLoaded = true;
		tawkActive = true;
		return true;
	}

	function waitForTawkAndMaximize() {
		let attempts = 0;
		const maxAttempts = 100;
		const checkTawk = setInterval(() => {
			attempts++;
			if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
				clearInterval(checkTawk);
				window.Tawk_API.maximize();
			} else if (attempts >= maxAttempts) {
				clearInterval(checkTawk);
				window.open('https://www.tawk.to/', '_blank', 'noopener');
			}
		}, 50);
	}

	function openChat() {
		if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
			tawkActive = true;
			measureTawkCover();
			window.Tawk_API.maximize();
			return;
		}
		const injected = injectTawk(tawkPropertyId, tawkWidgetId);
		if (injected) {
			// After injection, the widget host elements appear asynchronously.
			measureTawkCover();
			if (measureIntervalId) clearInterval(measureIntervalId);
			let attempts = 0;
			measureIntervalId = setInterval(() => {
				attempts++;
				measureTawkCover();
				if (tawkCover > 0 || attempts >= 60) {
					clearInterval(measureIntervalId);
					measureIntervalId = null;
				}
			}, 200);
			waitForTawkAndMaximize();
		}
		else window.open('https://www.tawk.to/', '_blank', 'noopener');
	}

	onMount(() => {
		handleScroll();
		try {
			// If Tawk is already present (e.g. navigated within SPA), sync state.
			tawkActive = !!(window.Tawk_API || document.querySelector('[id^="tawkchat-"]'));
		} catch {
			tawkActive = false;
		}
		measureTawkCover();
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', measureTawkCover, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', measureTawkCover);
			if (measureIntervalId) {
				clearInterval(measureIntervalId);
				measureIntervalId = null;
			}
		};
	});
</script>

<div
	class="floating-buttons"
	class:tawk-active={tawkActive}
	style={`--tawk-cover: ${tawkCover}px`}
>
	<button
		class="back-to-top"
		type="button"
		on:click={scrollToTop}
		aria-label="Back to top"
		class:shown={isVisible}
	>
		↑
	</button>
	<button class="chat-bubble" type="button" on:click={openChat} aria-label="Open chat">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M4 5.5C4 4.11929 5.11929 3 6.5 3H17.5C18.8807 3 20 4.11929 20 5.5V13.5C20 14.8807 18.8807 16 17.5 16H10L6 20V16H6.5C5.11929 16 4 14.8807 4 13.5V5.5Z"
				stroke="white"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>

<style>
	.floating-buttons {
		--right: 24px;
		--bottom: 24px;
		--gap: 16px;
		--chat-size: 56px;
		--tawk-cover: 0px;
		--stack-cover: max(var(--chat-size), var(--tawk-cover));
		position: fixed;
		right: var(--right);
		bottom: var(--bottom);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		gap: var(--gap);
		z-index: 1000000;
	}
	.floating-buttons.tawk-active { --stack-cover: var(--tawk-cover); }

	.back-to-top {
		width: 44px;
		height: 44px;
		border-radius: 15px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		color: #fff;
		cursor: pointer;
		z-index: 1001;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		padding: 0;
		font-size: 18px;
		transition: all 0.3s ease;
		display: none;
	}
	.back-to-top.shown { display: flex; }
	.floating-buttons.tawk-active .back-to-top { margin-bottom: calc(var(--stack-cover) + var(--gap)); }
	.back-to-top:hover {
		transform: translateY(-2px);
		background: rgba(0, 0, 0, 0.9);
		border-color: rgba(255, 255, 255, 0.3);
	}

	.chat-bubble {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: linear-gradient(135deg, #0D6EFD 0%, #6366F1 100%);
		box-shadow: 0 8px 25px rgba(13, 110, 253, 0.35);
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 1000;
		padding: 0;
		transition: all 0.3s ease;
	}
	.chat-bubble:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 35px rgba(13, 110, 253, 0.45);
	}
	.chat-bubble svg { display: block; }

	/* When Tawk's own launcher is present, hide the duplicate custom chat bubble.
	   The back-to-top button stays positioned above Tawk via --tawk-cover. */
	.floating-buttons.tawk-active .chat-bubble { display: none; }

	@media (max-width: 767px) {
		.floating-buttons {
			--right: 16px;
			--bottom: 20px;
			--gap: 12px;
			--chat-size: 52px;
		}
		.back-to-top {
			width: 44px;
			height: 44px;
		}
		.chat-bubble {
			width: 52px;
			height: 52px;
		}
	}
</style>
