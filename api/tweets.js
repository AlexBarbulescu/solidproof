// Vercel serverless function: fetch latest posts for @SolidProof_io without Twitter API keys
// Strategy: read Nitter RSS (several hosts), parse minimal fields, return 3 items

export const config = { runtime: 'nodejs18.x' }

function decodeHtml(str = '') {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function stripHtml(html = '') {
  return decodeHtml(html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim())
}

function parseRss(xml) {
  const items = []
  const itemRe = /<item>([\s\S]*?)<\/item>/g
  let m
  while ((m = itemRe.exec(xml)) && items.length < 3) {
    const block = m[1]
    const get = (tag) => {
      const r = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'i').exec(block)
      return r ? r[1].trim() : ''
    }
    const title = get('title')
    const desc = get('description')
    const link = get('link')
    const guid = get('guid')
    const pub = get('pubDate')
    items.push({
      id: guid || link || String(items.length),
      text: stripHtml(desc || title),
      url: (link || '').replace('nitter.net', 'x.com'),
      time: pub ? new Date(pub).toISOString() : ''
    })
  }
  return items
}

async function fetchFrom(host) {
  const url = `${host}/SolidProof_io/rss`
  const res = await fetch(url, { headers: { 'user-agent': 'solidproof-site-bot' } })
  if (!res.ok) throw new Error('bad status')
  const xml = await res.text()
  return parseRss(xml)
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(204).end()

  const hosts = [
    'https://nitter.net',
    'https://nitter.poast.org',
    'https://nitter.mint.lgbt',
    'https://nitter.privacydev.net'
  ]
  for (const h of hosts) {
    try {
      const items = await fetchFrom(h)
      if (items.length) {
        // normalize dates
        const result = items.map((i) => ({
          ...i,
          time: i.time ? new Date(i.time).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Open on X'
        }))
        return res.status(200).json({ items: result })
      }
    } catch (_) {}
  }
  return res.status(200).json({ items: [] })
}
