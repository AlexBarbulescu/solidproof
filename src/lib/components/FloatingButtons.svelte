<script>
	import { onMount } from 'svelte';

	const tawkPropertyId = '68da53b0acbab119535c12ea';
	const tawkWidgetId = '1j6addqb8';
	let tawkLoaded = false;
	let isVisible = false;

	function handleScroll() {
		isVisible = window.scrollY > 200;
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
			window.Tawk_API.maximize();
			return;
		}
		const injected = injectTawk(tawkPropertyId, tawkWidgetId);
		if (injected) waitForTawkAndMaximize();
		else window.open('https://www.tawk.to/', '_blank', 'noopener');
	}

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="floating-buttons">
	<button class="floating-btn chat" type="button" on:click={openChat} aria-label="Open chat">
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M4 4h16v12H7l-3 3V4z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
		</svg>
	</button>
	<button class="floating-btn top" type="button" on:click={scrollToTop} aria-label="Back to top" class:visible={isVisible}>
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M12 5l-7 7h4v7h6v-7h4l-7-7z" fill="currentColor" />
		</svg>
	</button>
</div>

<style>
	.floating-buttons {
		position: fixed;
		right: 18px;
		bottom: 18px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		z-index: 50;
	}
	.floating-btn {
		width: 44px;
		height: 44px;
		border-radius: 14px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(22, 22, 22, 0.7);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
	}
	.floating-btn:hover { transform: translateY(-1px); background: rgba(255, 255, 255, 0.08); }
	.floating-btn.top { opacity: 0; pointer-events: none; }
	.floating-btn.top.visible { opacity: 1; pointer-events: auto; }
	.floating-btn.chat { background: rgba(13, 110, 253, 0.75); border-color: rgba(13, 110, 253, 0.3); }
	.floating-btn.chat:hover { background: rgba(13, 110, 253, 0.9); }
</style>
