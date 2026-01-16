<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FloatingButtons from '$lib/components/FloatingButtons.svelte';
</script>

<div class="page-root">
	<Header />
	<slot />
	<Footer />
	<FloatingButtons />
</div>

<style>
	* { box-sizing: border-box; }
	:global(html), :global(body) { height: 100%; }
	.page-root { display: flex; flex-direction: column; min-height: 100%; }
	.page-root :global(main) { flex: 1; }
</style>
