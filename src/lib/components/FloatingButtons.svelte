<script>
	import { onMount } from 'svelte';
	let isVisible = false;

	function handleScroll() {
		isVisible = window.scrollY > 200;
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	class="floating-buttons"
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
</div>

<style>
	.floating-buttons {
		--right: 24px;
		--bottom: 24px;
		--gap: 16px;
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
	.back-to-top:hover {
		transform: translateY(-2px);
		background: rgba(0, 0, 0, 0.9);
		border-color: rgba(255, 255, 255, 0.3);
	}

	@media (max-width: 767px) {
		.floating-buttons {
			--right: 16px;
			--bottom: 20px;
			--gap: 12px;
		}
		.back-to-top {
			width: 44px;
			height: 44px;
		}
	}
</style>
