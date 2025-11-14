<template>
  <section class="tweets-section" aria-labelledby="tweets-title">
    <div class="tweets-inner">
      <header class="tweets-header">
        <h2 id="tweets-title" class="tweets-title">Latest on X</h2>
        <a class="tweets-cta" href="https://x.com/SolidProof_io" target="_blank" rel="noopener noreferrer" aria-label="Open SolidProof on X in a new tab">@SolidProof_io</a>
      </header>

      <div v-if="loading" class="tweets-grid">
        <div class="tweet-card skeleton" v-for="n in 3" :key="'s'+n">
          <div class="skeleton-line w-80"></div>
          <div class="skeleton-line w-100"></div>
          <div class="skeleton-line w-60"></div>
        </div>
      </div>

      <div v-else-if="tweets.length" class="tweets-grid">
        <article v-for="t in tweets" :key="t.id" class="tweet-card">
          <p class="tweet-text">{{ t.text }}</p>
          <footer class="tweet-footer">
            <a class="tweet-link" :href="t.url" target="_blank" rel="noopener noreferrer" :aria-label="'Open tweet from ' + t.time + ' in a new tab'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>{{ t.time }}</span>
            </a>
          </footer>
        </article>
      </div>

      <div v-else class="tweets-fallback">
        <p>We couldn’t load the latest posts right now.</p>
        <a class="tweets-fallback-link" href="https://x.com/SolidProof_io" target="_blank" rel="noopener noreferrer">View on X</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const loading = ref(true)
const tweets = ref([])

function stripText(el) {
  // Convert links/emojis to plain text for a clean card view
  const clone = el.cloneNode(true)
  // Replace links with their textContent
  clone.querySelectorAll('a').forEach(a => {
    const text = a.textContent || ''
    a.replaceWith(document.createTextNode(text))
  })
  return clone.textContent.trim()
}

// Strategy 1: X/Twitter syndication (used by official embeds)
async function trySyndication() {
  const endpoints = [
    'https://cdn.syndication.twimg.com/widgets/timelines/profile?screen_name=SolidProof_io&lang=en',
    'https://syndication.twitter.com/widgets/timelines/profile?screen_name=SolidProof_io&lang=en'
  ]
  for (const url of endpoints) {
    try {
      const res = await fetch(url, { mode: 'cors', credentials: 'omit', cache: 'no-store' })
      if (!res.ok) continue
      const data = await res.json()
      if (!data || !data.body) continue

      const parser = new DOMParser()
      const doc = parser.parseFromString(data.body, 'text/html')
      const candidates = Array.from(doc.querySelectorAll('li.timeline-TweetList-tweet'))
        .map(li => ({
          textEl: li.querySelector('.timeline-Tweet-text, p'),
          timeEl: li.querySelector('time') || li.querySelector('a.timeline-Tweet-timestamp time'),
          urlEl: li.querySelector('a.timeline-Tweet-timestamp') || li.querySelector('a[rel="external nofollow"]') || li.querySelector('a[href*="/status/"]')
        }))
        .filter(x => x.textEl && x.urlEl)

      const items = candidates.slice(0, 3).map((c, idx) => {
        const text = stripText(c.textEl)
        const when = c.timeEl?.getAttribute('datetime') || ''
        const href = c.urlEl?.getAttribute('href') || 'https://x.com/SolidProof_io'
        const idMatch = href.match(/status\/(\d+)/)
        return {
          id: idMatch ? idMatch[1] : `s-${idx}`,
          text,
          url: href.startsWith('http') ? href : `https://x.com${href}`,
          time: when ? new Date(when).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Open on X'
        }
      })
      if (items.length) return items
    } catch (_) {}
  }
  return []
}

// Strategy 2: Nitter RSS (no API keys). Try multiple hosts.
async function tryNitter() {
  const hosts = [
    'https://nitter.net',
    'https://nitter.poast.org',
    'https://nitter.mint.lgbt',
    'https://nitter.privacydev.net'
  ]

  for (const host of hosts) {
    const url = `${host}/SolidProof_io/rss`
    try {
      const res = await fetch(url, { mode: 'cors', credentials: 'omit', cache: 'no-store' })
      if (!res.ok) continue
      const xml = await res.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(xml, 'text/xml')
      const items = Array.from(doc.querySelectorAll('item')).slice(0, 3).map((it, idx) => {
        const title = it.querySelector('title')?.textContent || ''
        const desc = it.querySelector('description')?.textContent || ''
        const link = it.querySelector('link')?.textContent || 'https://x.com/SolidProof_io'
        const pub = it.querySelector('pubDate')?.textContent || ''
        // Prefer description if present; it often contains full text
        const html = desc || title
        const text = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html').body.textContent?.trim() || title
        return {
          id: it.querySelector('guid')?.textContent || `n-${idx}`,
          text,
          url: link.replace('nitter.net', 'x.com'),
          time: pub ? new Date(pub).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Open on X'
        }
      })
      if (items.length) return items
    } catch (_) {}
  }
  return []
}

// Strategy 3: CORS-friendly proxy via r.jina.ai (read-only fetcher)
async function tryReadOnlyProxy() {
  const urls = [
    'https://r.jina.ai/http://nitter.net/SolidProof_io/rss',
    'https://r.jina.ai/http://nitter.poast.org/SolidProof_io/rss'
  ]
  for (const url of urls) {
    try {
      const res = await fetch(url, { mode: 'cors', credentials: 'omit', cache: 'no-store' })
      if (!res.ok) continue
      const xml = await res.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(xml, 'text/xml')
      const items = Array.from(doc.querySelectorAll('item')).slice(0, 3).map((it, idx) => {
        const title = it.querySelector('title')?.textContent || ''
        const desc = it.querySelector('description')?.textContent || ''
        const link = it.querySelector('link')?.textContent || 'https://x.com/SolidProof_io'
        const pub = it.querySelector('pubDate')?.textContent || ''
        const html = desc || title
        const text = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html').body.textContent?.trim() || title
        return {
          id: it.querySelector('guid')?.textContent || `p-${idx}`,
          text,
          url: link.replace('nitter.net', 'x.com'),
          time: pub ? new Date(pub).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Open on X'
        }
      })
      if (items.length) return items
    } catch (_) {}
  }
  return []
}

async function loadTweets() {
  loading.value = true
  // Preferred: use our serverless function if available (Vercel /api)
  try {
    const res = await fetch('/api/tweets', { cache: 'no-store' })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data.items) && data.items.length) {
        tweets.value = data.items.slice(0, 3)
        loading.value = false
        return
      }
    }
  } catch(_) {}

  // Netlify fallback (/.netlify/functions/tweets)
  try {
    const res = await fetch('/.netlify/functions/tweets', { cache: 'no-store' })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data.items) && data.items.length) {
        tweets.value = data.items.slice(0, 3)
        loading.value = false
        return
      }
    }
  } catch(_) {}

  // Try multiple client-only strategies without requiring official API keys
  const fromSyndication = await trySyndication()
  if (fromSyndication.length) {
    tweets.value = fromSyndication
    loading.value = false
    return
  }

  const fromNitter = await tryNitter()
  if (fromNitter.length) {
    tweets.value = fromNitter
    loading.value = false
    return
  }

  const fromProxy = await tryReadOnlyProxy()
  if (fromProxy.length) {
    tweets.value = fromProxy
    loading.value = false
    return
  }

  loading.value = false
}

onMounted(() => {
  loadTweets()
})
</script>

<style scoped>
.tweets-section {
  position: relative;
  padding: 48px 0;
  background: radial-gradient(1200px 600px at 50% -10%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 70%) rgba(0,0,0,0);
}

.tweets-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.tweets-header { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 22px; }
.tweets-title { font-size: 1.75rem; font-weight: 700; color: #fff; margin: 0; letter-spacing: -0.01em; }
.tweets-cta { color: #93C5FD; text-decoration: none; font-weight: 500; }
.tweets-cta:hover { text-decoration: underline; }

.tweets-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

.tweet-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 16px;
  color: #f5f7fb;
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  backdrop-filter: blur(6px);
}
.tweet-text { margin: 0 0 14px; line-height: 1.5; font-size: 0.975rem; color: rgba(255,255,255,0.92); }
.tweet-footer { display: flex; align-items: center; justify-content: space-between; }
.tweet-link { display: inline-flex; gap: 8px; align-items: center; color: #c7d2fe; text-decoration: none; font-size: 0.9rem; }
.tweet-link:hover { text-decoration: underline; }

/* Skeleton */
.skeleton { position: relative; overflow: hidden; }
.skeleton::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent); transform: translateX(-100%); animation: shimmer 1.4s infinite; }
.skeleton-line { height: 12px; background: rgba(255,255,255,0.08); border-radius: 6px; margin: 10px 0; }
.skeleton-line.w-80 { width: 80%; }
.skeleton-line.w-100 { width: 100%; }
.skeleton-line.w-60 { width: 60%; }
@keyframes shimmer { 100% { transform: translateX(100%); } }

/* Responsive grid */
@media (max-width: 1024px) { .tweets-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .tweets-grid { grid-template-columns: 1fr; } }
</style>