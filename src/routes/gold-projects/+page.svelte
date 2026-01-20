<svelte:head>
	<title>Gold Projects • SolidProof</title>
</svelte:head>

<script>
	import { onDestroy, onMount } from 'svelte';

	export let data;

	let query = '';
	const PAGE_SIZE = 12;
	let visibleCount = PAGE_SIZE;
	let sentinelEl;
	let observer;
	let lastQuery = '';
	let loadTicking = false;

	function safeHostname(url) {
		if (!url) return '';
		try {
			return new URL(url).hostname.replace(/^www\./, '');
		} catch {
			return '';
		}
	}

	function formatMonthYear(value) {
		if (!value) return '';
		const d = new Date(value);
		if (Number.isNaN(d.getTime())) return '';
		return d.toLocaleString(undefined, { month: 'long', year: 'numeric' });
	}

	function hasAuditBadge(p) {
		return Boolean(p?.audit_badge);
	}

	function hasKycBadge(p) {
		return Boolean(p?.kyc_badge);
	}

	$: normalizedQuery = query.trim().toLowerCase();
	$: filtered = (data?.projects ?? []).filter((p) => {
		if (!normalizedQuery) return true;
		const name = (p?.name ?? '').toLowerCase();
		const category = (p?.category ?? '').toLowerCase();
		return name.includes(normalizedQuery) || category.includes(normalizedQuery);
	});
	$: if (visibleCount > (filtered.length || 0)) visibleCount = filtered.length || 0;
	$: shown = filtered.slice(0, visibleCount);
	$: shownCount = shown.length;

	$: if (normalizedQuery !== lastQuery) {
		lastQuery = normalizedQuery;
		visibleCount = Math.min(PAGE_SIZE, filtered.length || 0);
	}

	onMount(() => {
		if (typeof IntersectionObserver === 'undefined') return;

		observer = new IntersectionObserver(
			(entries) => {
				if (loadTicking) return;
				if (!entries.some((e) => e.isIntersecting)) return;
				if (visibleCount >= (filtered.length || 0)) return;
				loadTicking = true;
				visibleCount = Math.min(visibleCount + PAGE_SIZE, filtered.length || 0);
				requestAnimationFrame(() => {
					loadTicking = false;
				});
			},
			{ root: null, rootMargin: '200px 0px', threshold: 0.01 }
		);
	});

	$: if (observer && sentinelEl) {
		observer.unobserve(sentinelEl);
		observer.observe(sentinelEl);
	}

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<main class="gold-page" aria-labelledby="gold-list-title">

	<section id="gold-list" class="gold-list" aria-labelledby="gold-list-title">
		<div class="gl-wrap">
			<div class="gl-header">
				<h2 id="gold-list-title" class="gl-title">Projects</h2>
				<p class="gl-intro">Cards are loaded from the SolidProof API and filtered by the Gold KYC badge.</p>
			</div>

			<div class="gl-toolbar" role="search">
				<label class="gl-search">
					<span class="sr-only">Search projects</span>
					<input
						type="search"
						placeholder="Search by name or category..."
						bind:value={query}
						class="gl-search-input"
						autocomplete="off"
					/>
				</label>
				<div class="gl-meta">{shownCount} / {filtered.length} shown</div>
			</div>

			{#if data?.error}
				<div class="gl-error" role="status">
					Could not load projects right now. Please try again later.
				</div>
			{/if}

			{#if filtered.length === 0}
				<div class="gl-empty" role="status">
					No projects found.
				</div>
			{:else}
				<ul class="gl-grid">
					{#each shown as p, i (p.id)}
						<li class="gl-item" style={`--gl-stagger: ${Math.min(i, 18)};`}>
							<a class="gl-card" href={p?.url || p?.website || '#'} target="_blank" rel="noopener" aria-label={p?.name ? `Open ${p.name}` : 'Open project'}>
								<div class="gl-top">
									{#if p?.onboarded}
										<div class="gl-date">{formatMonthYear(p.onboarded)}</div>
									{/if}

									{#if p?.score}
										<div class="gl-top-right">
											<span class="gl-tag gl-tag--score gl-score-top">Score: {p.score}</span>
										</div>
									{/if}
								</div>

								<div class="gl-logo-float" aria-hidden={p?.full_logo_url ? 'false' : 'true'}>
									{#if p?.full_logo_url}
										<img class="gl-logo" src={p.full_logo_url} alt={p?.name ?? 'Project'} loading="lazy" />
									{:else}
										<div class="gl-logo gl-logo--placeholder" aria-hidden="true"></div>
									{/if}
								</div>

								<div class="gl-bottom">
									<h3 class="gl-name">
										<svg
											class="gl-trophy"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
											aria-hidden="true"
											focusable="false"
										>
											<path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
									</svg>
										{p?.name ?? 'Untitled project'}
									</h3>
									<div class="gl-tags" aria-label="Project tags">
										{#if hasAuditBadge(p)}
											<span class="gl-tag gl-tag--audit">Audit</span>
										{/if}
										{#if hasKycBadge(p)}
											<span class="gl-tag gl-tag--kyc">KYC</span>
										{/if}
										{#if p?.category}
											<span class="gl-tag gl-tag--cat">{p.category}</span>
										{/if}
									</div>

									{#if p?.description && p.description !== 'TBA'}
										<p class="gl-desc">{p.description}</p>
									{/if}

									{#if p?.website}
										<div class="gl-site">{safeHostname(p.website)}</div>
									{/if}
								</div>


								<div class="gl-bottom-actions" aria-hidden="true">
									<div class="gl-badges" aria-label="Badges">
										{#if p?.kyc_badge}
											<img class="gl-badge" src={p.kyc_badge} alt="KYC badge" loading="lazy" />
										{/if}
										{#if p?.audit_badge}
											<img class="gl-badge" src={p.audit_badge} alt="Audit badge" loading="lazy" />
										{/if}
									</div>
									<div class="gl-corner">
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
											<path d="M7 17L17 7" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round" />
											<path d="M10 7h7v7" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</div>
								</div>
							</a>
						</li>
					{/each}
				</ul>
				<div class="gl-sentinel" bind:this={sentinelEl} aria-hidden="true"></div>
			{/if}
		</div>
	</section>
</main>

<style>
	.gold-page { flex: 1; display: flex; flex-direction: column; background: transparent; }

	/* List */
	.gold-list { padding: 160px 20px 72px; }
	.gl-wrap { max-width: 1240px; margin: 0 auto; }
	.gl-header { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
	.gl-title { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2; margin: 0; text-align: center; }
	.gl-intro { color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; margin: 0 auto; max-width: 720px; text-align: center; }

	.gl-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 18px 0 16px; }
	.gl-search { flex: 1; max-width: 520px; }
	.gl-search-input { width: 100%; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12); background: rgba(15,16,17,0.85); color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; outline: none; }
	.gl-search-input:focus { border-color: rgba(13,110,253,0.6); box-shadow: 0 0 0 3px rgba(13,110,253,0.15); }
	.gl-meta { color: #898A8B; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; white-space: nowrap; }

	.gl-error,
	.gl-empty { border-radius: 16px; background: #0F1011; border: 1px solid rgba(255,255,255,0.08); padding: 18px; color: #9BA1A5; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; text-align: center; }

	.gl-grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
	.gl-item { margin: 0; padding: 0; animation: glItemIn 950ms cubic-bezier(0.2, 0.85, 0.2, 1) both; animation-delay: calc(var(--gl-stagger, 0) * 85ms); }
	@keyframes glItemIn {
		from { opacity: 0; transform: translateY(10px) scale(0.985); filter: blur(2px); }
		to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
	}
	.gl-card {
		position: relative;
		z-index: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px 16px 34px;
		border-radius: 30px;
		text-decoration: none;
		height: 25rem;
		overflow: hidden;
		border: 1px solid rgba(255,255,255,0.12);
		box-shadow: 0 18px 55px rgba(0,0,0,0.45);
		transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
		background: linear-gradient(180deg, rgba(0, 30, 86, 0.96) 0%, rgba(0, 22, 68, 0.94) 60%, rgba(0, 0, 0, 0.12) 100%);
	}
	.gl-card::before {
		content: '';
		border-radius: 30px;
		height: 25rem;
		left: -27px;
		position: absolute;
		top: 51%;
		transform: skew(9deg,-12deg);
		width: 110%;
		z-index: -1;
		pointer-events: none;
		background-image: radial-gradient(ellipse farthest-corner at right bottom,#fedb37 0,#fdb931 8%,#9f7928 30%,#8a6e2f 40%,transparent 80%),radial-gradient(ellipse farthest-corner at left top,#fff 0,#ffffac 8%,#d1b464 25%,#5d4a1f 62.5%,#5d4a1f 100%);
	}
	.gl-card::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0) 30%),
			radial-gradient(65% 70% at 50% 25%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%);
		mix-blend-mode: overlay;
		opacity: 0.9;
	}
	.gl-card:hover {
		transform: translateY(-2px);
		border-color: rgba(255,255,255,0.18);
		box-shadow: 0 22px 70px rgba(0,0,0,0.55);
	}

	.gl-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		min-height: 56px;
		position: relative;
		z-index: 2;
	}
	.gl-top-right { display: inline-flex; align-items: flex-start; justify-content: flex-end; }
	.gl-score-top { white-space: nowrap; }
	.gl-badges { display: flex; gap: 10px; align-items: center; }
	.gl-badge { width: 100px; height: 36px; object-fit: contain; filter: drop-shadow(0 6px 14px rgba(0,0,0,0.45)); }
	.gl-date {
		display: inline-flex;
		align-items: center;
		padding: 6px 10px;
		border-radius: 999px;
		color: #fff;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 12px;
		font-weight: 600;
		background: rgba(0,0,0,0.22);
		border: 1px solid rgba(255,255,255,0.18);
		backdrop-filter: blur(10px);
	}

	.gl-logo-float {
		position: absolute;
		left: 50%;
		top: 58px;
		transform: translateX(-50%);
		width: 96px;
		height: 96px;
		border-radius: 18px;
		background: rgba(0,0,0,0.20);
		border: 1px solid rgba(255,255,255,0.18);
		backdrop-filter: blur(14px);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		z-index: 2;
		box-shadow: 0 18px 42px rgba(0,0,0,0.45);
	}
	.gl-logo { width: 100%; height: 100%; object-fit: contain; padding: 14px; }
	.gl-logo--placeholder { width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,0.18); }

	.gl-bottom {
		position: relative;
		z-index: 2;
		margin-top: 94px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex: 1 1 auto;
		min-height: 0;
		overflow: hidden;
	}
	.gl-name {
		color: #fff;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 22px;
		font-weight: 700;
		margin: 0;
		letter-spacing: -0.01em;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.gl-trophy { color: #ffd700; flex: 0 0 auto; }
	.gl-tags { display: flex; gap: 8px; flex-wrap: wrap; }
	.gl-tag {
		display: inline-flex;
		align-items: center;
		padding: 6px 10px;
		border-radius: 999px;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 12px;
		font-weight: 600;
		color: #fff;
		background: rgba(13,110,253,0.95);
		border: 1px solid rgba(255,255,255,0.14);
	}
	.gl-tag--audit { background: rgba(13,110,253,0.92); }
	.gl-tag--kyc { background: rgba(13,110,253,0.92); }
	.gl-tag--cat { background: rgba(0,0,0,0.22); }
	.gl-tag--score { background: rgba(0,0,0,0.22); border-color: rgba(254, 219, 55, 0.25); }

	.gl-desc { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 13px; line-height: 1.45; margin: 0; display: -webkit-box; line-clamp: 3; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
	.gl-site { color: #fff; font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; margin-bottom: 6px; }

	.gl-bottom-actions {
		margin-top: auto;
		padding-top: 12px;
		padding-bottom: 2px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 2;
	}

	.gl-corner {
		width: 38px;
		height: 38px;
		border-radius: 999px;
		background: rgba(0,0,0,0.22);
		border: 1px solid rgba(255,255,255,0.16);
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(10px);
	}
	.gl-sentinel { height: 1px; }

	/* Responsive */
	@media (max-width: 1180px) {
		.gl-grid { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 768px) {
		.gold-list { padding: 140px 16px 72px; }
		.gl-toolbar { flex-direction: column; align-items: stretch; }
		.gl-search { max-width: none; }
		.gl-meta { text-align: left; }
		.gl-grid { grid-template-columns: 1fr; }
		.gl-card { height: auto; min-height: 22rem; }
		.gl-card::before { height: 22rem; }
	}

	@media (prefers-reduced-motion: reduce) {
		.gl-card { transition: none; }
		.gl-item { animation: none; }
	}
</style>
