<svelte:head>
	<title>Privacy Policy • SolidProof</title>
</svelte:head>

<script>
	import privacyHtml from '$lib/content/privacy.html?raw';
</script>

<main class="legal-page" aria-labelledby="legal-title">
	<section class="legal-content" aria-label="Privacy content">
		<div class="lc-wrap">
			<article class="lc-card">
				<div class="lc-body">{@html privacyHtml}</div>
			</article>
		</div>
	</section>
</main>

<style>
	.legal-page {
		background: radial-gradient(900px 520px at 15% -10%, rgba(106, 255, 179, 0.18), transparent 60%),
			radial-gradient(900px 520px at 95% -10%, rgba(142, 96, 238, 0.18), transparent 55%),
			linear-gradient(180deg, #090911, #0b0b12);
		color: #fff;
		min-height: 100vh;
	}

	.legal-content {
		padding: 120px 16px 90px;
	}

	.lc-wrap {
		max-width: 980px;
		margin: 0 auto;
	}

	.lc-card {
		background:
			radial-gradient(1200px 500px at 30% 0%, rgba(106, 255, 179, 0.08), transparent 60%),
			radial-gradient(1200px 500px at 70% 0%, rgba(142, 96, 238, 0.08), transparent 60%),
			linear-gradient(180deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.03));
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 18px;
		padding: 28px;
		box-shadow:
			0 20px 60px rgba(0, 0, 0, 0.5),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(10px);
		position: relative;
		overflow: hidden;
	}

	.lc-card::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, rgba(106, 255, 179, 0.9), rgba(142, 96, 238, 0.9));
		opacity: 0.85;
	}

	.lc-body {
		color: rgba(255, 255, 255, 0.88);
		font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
			"Segoe UI Emoji";
		font-size: 15.75px;
		line-height: 1.9;
		letter-spacing: 0.006em;
		text-rendering: optimizeLegibility;
		text-wrap: pretty;
		hyphens: auto;
		max-width: 84ch;
		margin: 0 auto;
	}

	/* Minimal utility support for the provided HTML markup (no Bootstrap dependency). */
	.lc-body :global(.d-flex) {
		display: flex;
	}
	.lc-body :global(.flex-column) {
		flex-direction: column;
	}

	.lc-body :global(h3) {
		margin: 0 0 10px;
		font-size: clamp(24px, 2.6vw, 32px);
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: rgba(255, 255, 255, 0.96);
		position: relative;
	}

	.lc-body :global(h3)::after {
		content: '';
		display: block;
		margin-top: 10px;
		width: 160px;
		height: 3px;
		border-radius: 999px;
		background: linear-gradient(90deg, rgba(106, 255, 179, 0.85), rgba(142, 96, 238, 0.85));
		opacity: 0.9;
	}

	.lc-body :global(p) {
		margin: 0 0 14px;
		color: rgba(255, 255, 255, 0.88);
	}

	.lc-body :global(p + p) {
		margin-top: 2px;
	}

	.lc-body :global(small) {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.7);
	}

	.lc-body :global(strong) {
		display: block;
		margin: 22px 0 12px;
		padding: 12px 14px;
		font-size: 17.5px;
		line-height: 1.25;
		color: rgba(255, 255, 255, 0.98);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 14px;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
		position: relative;
		overflow: hidden;
	}

	.lc-body :global(strong)::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		background: linear-gradient(180deg, rgba(106, 255, 179, 0.85), rgba(142, 96, 238, 0.85));
		opacity: 0.9;
	}

	.lc-body :global(strong:first-of-type) {
		margin-top: 14px;
	}

	.lc-body :global(ul),
	.lc-body :global(ol) {
		margin: 8px 0 18px;
		padding: 14px 16px 14px 38px;
		list-style-position: outside;
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.lc-body :global(ul) {
		list-style-type: disc;
	}

	.lc-body :global(ol) {
		list-style-type: decimal;
	}

	.lc-body :global(li) {
		margin: 10px 0;
		padding-left: 2px;
		color: rgba(255, 255, 255, 0.88);
	}

	.lc-body :global(p + ul),
	.lc-body :global(p + ol) {
		margin-top: 12px;
	}

	.lc-body :global(ol li::marker) {
		color: rgba(255, 255, 255, 0.65);
		font-weight: 700;
	}

	.lc-body :global(ul li::marker) {
		color: rgba(255, 255, 255, 0.55);
	}

	@media (max-width: 840px) {
		.legal-content {
			padding-top: 110px;
		}
		.lc-card {
			padding: 18px;
		}
		.lc-body {
			max-width: 100%;
		}
		.lc-body :global(h3)::after {
			width: 130px;
		}
	}
</style>
