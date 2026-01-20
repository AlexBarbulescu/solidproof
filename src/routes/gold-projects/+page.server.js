const API_URL = 'https://app.solidproof.io/api/v1/projects?sort=1&limit=500';
const GOLD_BADGE_URL = 'https://app.solidproof.io/static/img/media/kyc_gold.webp';

const CACHE_TTL_MS = 60_000;

/** @type {{ at: number; projects: any[] } | null} */
let cached = null;

/** @type {Promise<any[]> | null} */
let inFlight = null;

/**
 * Fetch and cache projects (TTL 60s) to avoid spamming upstream.
 * @param {typeof fetch} fetchFn
 */
async function getProjectsCached(fetchFn) {
	const now = Date.now();
	if (cached && now - cached.at < CACHE_TTL_MS) return cached.projects;

	if (inFlight) return inFlight;

	inFlight = (async () => {
		try {
			const response = await fetchFn(API_URL, {
				headers: { accept: 'application/json' }
			});

			if (!response.ok) {
				// If upstream fails, fall back to stale cache (if any)
				if (cached?.projects) return cached.projects;
				return [];
			}

			const json = await response.json();
			const projects = Array.isArray(json?.data) ? json.data : [];
			cached = { at: Date.now(), projects };
			return projects;
		} finally {
			inFlight = null;
		}
	})();

	return inFlight;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, setHeaders }) {
	setHeaders({
		// The page itself may be cached at the edge for a minute.
		'cache-control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300'
	});

	try {
		const projects = await getProjectsCached(fetch);
		const goldProjects = projects.filter((p) => p?.kyc_badge === GOLD_BADGE_URL);

		return {
			projects: goldProjects,
			error: null
		};
	} catch (e) {
		return {
			projects: [],
			error: 'Failed to fetch projects'
		};
	}
}
