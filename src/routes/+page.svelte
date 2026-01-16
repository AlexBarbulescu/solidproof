<script>
	import Hero from '$lib/components/Hero.svelte';
	import PartnersSection from '$lib/components/PartnersSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<main class="content">
	<Hero />
	<PartnersSection />
	<ServicesSection />
	<ContactSection />
	<FAQ />
</main>

<style>
	.content { flex: 1; padding: 0 0 24px; }
</style>
