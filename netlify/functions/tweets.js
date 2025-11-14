// Netlify Function: Fetch latest posts for @SolidProof_io without Twitter API keys
// Reads Nitter RSS and returns 3 items as JSON with CORS

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

exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } }
  }

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
        const result = items.map(i => ({ ...i, time: i.time ? new Date(i.time).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Open on X' }))
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ items: result })
        }
      }
    } catch (_) {}
  }
  return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ items: [] }) }
}
