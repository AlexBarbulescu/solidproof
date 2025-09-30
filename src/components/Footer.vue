<template>
  <footer class="footer-site">
    <div class="footer-container">
      <!-- Top: Brand + Link columns -->
      <div class="footer-top">
        <div class="footer-left">
          <a class="footer-brand" href="#" aria-label="SolidProof">
            <img class="footer-logo" src="/logo_horizontal_white.svg" alt="SolidProof" />
          </a>

          <!-- Company details directly under the logo -->
          <address class="footer-company" aria-label="Company details">
            <p class="footer-company-name" ref="companyName">FutureVisions Deutschland UG (haftungsbeschränkt)</p>
            <p class="footer-company-address" ref="companyAddress">
              Heideland-Ost 34<br>
              24976 Handewitt<br>
              Deutschland
            </p>
            <div class="footer-company-email">
              <span class="footer-label">E-Mail:</span>
              <ul class="footer-email-list">
                <li><a href="mailto:hello@solidproof.io">hello@solidproof.io</a></li>
                <li><a href="mailto:info@solidproof.io">info@solidproof.io</a></li>
              </ul>
            </div>
          </address>
        </div>

        <nav class="footer-links" aria-label="Footer Navigation">
          <div class="footer-col">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-list">
              <li><a href="#">KYC</a></li>
              <li><a href="#">Audit</a></li>
              <li><a href="#">Development</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Projects</h4>
            <ul class="footer-list">
              <li><a href="#">Gold Projects</a></li>
              <li><a href="#">Regular Projects</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">About</h4>
            <ul class="footer-list">
              <li><a href="#">Security News</a></li>
              <li><a href="#">Milestones</a></li>
              <li><a href="#">Company</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-heading">Legal</h4>
            <ul class="footer-list">
              <li><a href="#">Legal Notice</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Divider -->
      <div class="footer-divider" role="separator" aria-hidden="true"></div>

      <!-- Bottom: Socials + Center (Flag + Copyright) + Badge -->
      <div class="footer-bottom">
        <ul class="footer-socials" aria-label="Social links">
          <li>
            <a href="https://twitter.com/SolidProof_io" aria-label="Twitter (Main)" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4l7.2 9.3L4.6 20h2.2l5.2-5.7 4.2 5.7H20l-7.5-10L19.2 4H17l-4.8 5.3L8.4 4H4z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/solidproof_news" aria-label="Twitter (News)" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4l7.2 9.3L4.6 20h2.2l5.2-5.7 4.2 5.7H20l-7.5-10L19.2 4H17l-4.8 5.3L8.4 4H4z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="http://t.me/solidproof" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9.5 14L8.9 18.8c.1.3.5.4.7.1l2.7-2.7 4.3 3.2c.5.3 1.1.1 1.3-.5L21.8 5c.2-.8-.4-1.3-1.1-1L3.4 11.4c-.7.3-.7 1.1 0 1.3l4.9 1.6 9.5-6c.4-.2.8.1.4.4L9.5 14z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCobb0xTQ7n8wa4C84-Fv4Dw" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 12s0-3.2-.4-4.6c-.2-.8-.8-1.4-1.6-1.6C18.6 5.4 12 5.4 12 5.4s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.8 2 12 2 12s0 3.2.4 4.6c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.6.4-4.6z" fill="currentColor"/>
                <path d="M10 9.75v4.5L15 12l-5-2.25z" fill="#0B0B0B"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/solidproof.io" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 8H7v3h2v9h3v-9h2.4l.6-3H12V6.5c0-.8.2-1.3 1.3-1.3H15V2.2c-.3 0-1.3-.2-2.5-.2C10 2 9 3.7 9 6.1V8z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://solidproof-io.medium.com/" aria-label="Medium" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7.5c0-.4.2-.8.6-1l3.5-2.3c.3-.2.7-.1.9.2l3.9 6.1 4.6-6.3c.2-.3.6-.3.9-.1l1.4.9c.1.1.2.3.2.5v11.2c0 .4-.2.8-.6 1l-3.5 2.3c-.3.2-.7.1-.9-.2l-4.5-7.1-4.1 6.6c-.2.3-.6.4-.9.2l-1.4-.9a.6.6 0 0 1-.2-.5V7.5z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/solidproof" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.1-3.4-1.1-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.5 1.1 3.2.8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5A10 10 0 0 0 12 2z" fill="currentColor"/>
              </svg>
            </a>
          </li>
        </ul>

        <div class="footer-center" aria-label="Country and copyright">
          <span class="footer-flag" aria-hidden="true">
            <span class="flag-band flag-black"></span>
            <span class="flag-band flag-red"></span>
            <span class="flag-band flag-gold"></span>
          </span>
          <span class="footer-copy" ref="footerCopy">© 2020 - 2025 Solidproof.io</span>
        </div>

        <img class="footer-alliance-img" src="/defi-security-alliance.svg" alt="DeFi Security Alliance" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 5s scramble reveal (duration controlled by DURATION) that resets when footer leaves viewport
const footerCopy = ref(null)
const companyName = ref(null)
const companyAddress = ref(null)

let observer
let rafId = null
let startTime = 0
let originalText = ''
let lastScrambleUpdate = 0
let lastWindowStart = -1
let windowBuffer = [] // cached random letters for the active window

const DURATION = 2500 // ms total to fully reveal
const WINDOW = 3      // only 3 characters actively reveal at a time
// Character pool for scrambling in lowercase letters (plus digits/some symbols)
const CHARS = 'abcdefghjklmnpqrstuvwxyz0123456789@$%&*+-=?#<>,.?/:;'
// How often the random letters change (lower = faster flicker)
const SCRAMBLE_INTERVAL = 60 // ms

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function escapeHtml(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

// Apply scramble reveal to any element's textContent (preserves newlines using CSS where needed)
function setupScrambleForEl(el) {
  if (!el) return () => {}
  let _rafId = 0
  let _startTime = 0
  let _original = el.textContent || ''
  let _lastScrambleUpdate = 0
  let _lastWindowStart = -1
  let _buffer = []

  function _render(progress, now = performance.now()) {
    const len = _original.length
    const pointerMax = len + WINDOW
    const pointer = Math.floor(progress * pointerMax)
    const windowStart = Math.min(Math.max(0, pointer), len)
    const windowEnd = Math.min(windowStart + WINDOW, len)

    const revealed = _original.slice(0, windowStart)
    const slice = _original.slice(windowStart, windowEnd)
    const needsNew = windowStart !== _lastWindowStart
    const needsUpdate = now - _lastScrambleUpdate >= SCRAMBLE_INTERVAL
    if (needsNew) {
      _buffer = Array.from(slice, ch => (ch === ' ' || ch === '\n' || ch === '\t') ? ch : randomChar())
      _lastWindowStart = windowStart
      _lastScrambleUpdate = now
    } else if (needsUpdate) {
      _buffer = Array.from(slice, ch => (ch === ' ' || ch === '\n' || ch === '\t') ? ch : randomChar())
      _lastScrambleUpdate = now
    }

    const windowOut = _buffer.join('')
    el.innerHTML = '<span class="revealed">' +
      escapeHtml(revealed) +
      '</span><span class="window" style="color:#FFFFFF;">' +
      escapeHtml(windowOut) +
      '</span>'
  }

  function _start() {
    cancelAnimationFrame(_rafId)
    _startTime = performance.now()
    const step = (now) => {
      const elapsed = now - _startTime
      const progress = Math.min(elapsed / DURATION, 1)
      _render(progress, now)
      if (progress < 1) {
        _rafId = requestAnimationFrame(step)
      }
    }
    _rafId = requestAnimationFrame(step)
  }

  function _reset() {
    cancelAnimationFrame(_rafId)
    _lastWindowStart = -1
    _buffer = []
    _render(0)
  }

  // Observe visibility for this element
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) _start(); else _reset();
    })
  }, { threshold: 0.25 })

  // Initialize hidden state and start observing
  _render(0)
  io.observe(el)

  return () => { io.disconnect(); cancelAnimationFrame(_rafId) }
}

function renderProgress(progress, now = performance.now()) {
  if (!footerCopy.value) return
  const len = originalText.length
  // pointer advances across text; window scrambles [pointer, pointer+WINDOW)
  const pointerMax = len + WINDOW
  const pointer = Math.floor(progress * pointerMax)
  const windowStart = Math.min(Math.max(0, pointer), len)
  const windowEnd = Math.min(windowStart + WINDOW, len)

  const revealed = originalText.slice(0, windowStart)
  // Build/update window buffer based on SCRAMBLE_INTERVAL and window movement
  const slice = originalText.slice(windowStart, windowEnd)
  const needsNewWindow = windowStart !== lastWindowStart
  const needsUpdate = now - lastScrambleUpdate >= SCRAMBLE_INTERVAL
  if (needsNewWindow) {
    windowBuffer = Array.from(slice, ch => (ch === ' ' || ch === '\n' || ch === '\t') ? ch : randomChar())
    lastWindowStart = windowStart
    lastScrambleUpdate = now
  } else if (needsUpdate) {
    // Refresh only non-whitespace positions
    windowBuffer = Array.from(slice, (ch, idx) => (ch === ' ' || ch === '\n' || ch === '\t') ? ch : randomChar())
    lastScrambleUpdate = now
  }
  let windowOut = windowBuffer.join('')
  // Render only revealed + active window; omit the rest to avoid full text showing
  footerCopy.value.innerHTML = '<span class="revealed">' +
    escapeHtml(revealed) +
    '</span><span class="window" style="color:#FFFFFF;">' +
    escapeHtml(windowOut) +
    '</span>'
}

function startScramble() {
  if (!footerCopy.value) return
  cancelAnimationFrame(rafId)
  startTime = performance.now()
  const step = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / DURATION, 1)
    renderProgress(progress, now)
    if (progress < 1) {
      rafId = requestAnimationFrame(step)
    }
  }
  rafId = requestAnimationFrame(step)
}

function resetScramble() {
  cancelAnimationFrame(rafId)
  startTime = 0
  lastWindowStart = -1
  windowBuffer = []
  // Show fully scrambled (hidden) state
  renderProgress(0)
}

onMounted(() => {
  // Leave footerCopy static (no scramble effect)

  // Setup scramblers for company details (name and address)
  const cleaners = []
  if (companyName.value) cleaners.push(setupScrambleForEl(companyName.value))
  if (companyAddress.value) cleaners.push(setupScrambleForEl(companyAddress.value))

  onBeforeUnmount(() => cleaners.forEach((c) => c && c()))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.footer-site {
  background: #0F1011;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #9BA1A5;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.footer-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 16px 24px;
}

.footer-top {
  display: grid;
  grid-template-columns: minmax(120px, 1fr) repeat(4, minmax(120px, auto));
  gap: 24px 48px;
  align-items: start;
}

.footer-left { grid-column: 1 / 2; display: flex; flex-direction: column; align-items: flex-start; gap: 6px; }
.footer-brand { display: inline-flex; align-items: center; height: 40px; }
.footer-logo { height: 40px; width: auto; display: block; opacity: 0.9; }

/* Company details */
.footer-company { margin-top: 0; font-style: normal; color: #51565a; font-size: 13px; line-height: 1.6; }
.footer-company-name { margin: 0 0 6px; color: #9BA1A5; font-weight: 600; font-size: 14px; }
.footer-company-address { margin: 0 0 10px; }
.footer-company-email { display: grid; grid-template-columns: auto 1fr; column-gap: 8px; align-items: start; }
.footer-label { color: #51565a; font-size: 12px; letter-spacing: 0.04em; margin-top: 2px; }
.footer-email-list { list-style: none; padding: 0; margin: 0; }
.footer-email-list li { margin: 2px 0; }
.footer-email-list a { color: #51565a; text-decoration: none; }
.footer-email-list a:hover { color: #FFFFFF; text-decoration: underline; }

.footer-links { display: contents; }
.footer-heading { margin: 0 0 10px; color: #fff; font-size: 14px; font-weight: 600; }
.footer-list { list-style: none; margin: 0; padding: 0; }
.footer-list li { margin: 8px 0; }
.footer-list a { color: #9BA1A5; text-decoration: none; font-size: 14px; }
.footer-list a:hover { color: #fff; }

.footer-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 28px 0 16px; }

.footer-bottom {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}

.footer-socials { display: flex; gap: 16px; align-items: center; list-style: none; padding: 0; margin: 0; justify-self: start; }
.footer-socials a { color: #9BA1A5; display: inline-flex; padding: 6px; border-radius: 6px; }
.footer-socials a:hover { color: #fff; background: rgba(255,255,255,0.06); }

.footer-center { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; justify-self: center; }
.footer-flag { display: inline-flex; gap: 6px; }
.flag-band { display: inline-block; width: 56px; height: 10px; border-radius: 2px; }
.flag-black { background: #1b1b1b; }
.flag-red { background: #d71f3b; }
.flag-gold { background: #f2c200; }
.footer-copy {
  color: #51565a;
  font-size: 13px;
  text-align: left; /* anchor left to reduce perceived vibration */
  white-space: nowrap; /* keep on one line so letters stay next to each other */
}
.footer-copy .revealed { color: #51565a; }
.footer-copy .window { color: #FFFFFF; }

/* Ensure company details reveal uses same colors and preserves line breaks */
.footer-company .revealed { color: #51565a; }
.footer-company .window { color: #FFFFFF; }
.footer-company-address { white-space: pre-line; }

/* Keep class for possible future styling; scramble is JS-driven */
.reveal { display: inline-block; }

/* Center the middle column content */
.footer-center { align-items: center; }

/* Badge image now unstyled; using intrinsic SVG sizing via width attribute in markup */
/* Alliance SVG size controlled via CSS */
.footer-alliance-img { width: 160px; height: auto; display: block; justify-self: end; }

/* Responsive */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
  .footer-brand { margin-bottom: 8px; }
  .footer-left { grid-column: 1 / 2; }
}

@media (max-width: 640px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  .footer-bottom { grid-template-columns: 1fr; row-gap: 12px; }
  .footer-socials { order: 1; }
  .footer-center { order: 2; }
  .footer-alliance-img { order: 3; }
}
</style>