<template>
  <div class="floating-buttons-container">
    <button
      class="back-to-top"
      v-show="showTop"
      @click="scrollToTop"
      aria-label="Back to top"
    >↑</button>

    <button
      class="chat-bubble"
      @click="handleChatClick"
      aria-label="Open chat"
      :data-tawk-property="tawkPropertyId"
      :data-tawk-widget="tawkWidgetId"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5.5C4 4.11929 5.11929 3 6.5 3H17.5C18.8807 3 20 4.11929 20 5.5V13.5C20 14.8807 18.8807 16 17.5 16H10L6 20V16H6.5C5.11929 16 4 14.8807 4 13.5V5.5Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showTop = ref(false)

// Optional Tawk.to IDs (set these later to enable embedded chat)
const tawkPropertyId = ref('68da53b0acbab119535c12ea')
const tawkWidgetId = ref('1j6addqb8')
let tawkLoaded = false

function handleScroll() {
  showTop.value = window.scrollY > 200
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function injectTawk(propertyId, widgetId) {
  if (tawkLoaded || !propertyId || !widgetId) return false
  const s1 = document.createElement('script')
  s1.async = true
  s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')
  const s0 = document.getElementsByTagName('script')[0]
  s0.parentNode.insertBefore(s1, s0)
  tawkLoaded = true
  return true
}

function waitForTawkAndMaximize() {
  // Wait for Tawk_API to be available, then maximize
  let attempts = 0
  const maxAttempts = 100 // ~5 seconds with 50ms intervals

  const checkTawk = setInterval(() => {
    attempts++
    if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      clearInterval(checkTawk)
      window.Tawk_API.maximize()
    } else if (attempts >= maxAttempts) {
      clearInterval(checkTawk)
      // Fallback if Tawk doesn't load
      window.open('https://www.tawk.to/', '_blank', 'noopener')
    }
  }, 50)
}

function handleChatClick() {
  // If Tawk is already loaded and ready, maximize immediately
  if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
    window.Tawk_API.maximize()
    return
  }
  const propertyId = tawkPropertyId.value
  const widgetId = tawkWidgetId.value
  const injected = injectTawk(propertyId, widgetId)
  if (injected) {
    // Wait for Tawk_API to be available after injection
    waitForTawkAndMaximize()
  } else {
    window.open('https://www.tawk.to/', '_blank', 'noopener')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.floating-buttons-container {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 1000;
}

.back-to-top {
  width: 44px;
  height: 44px;
  border-radius: 15px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(0,0,0,0.7);
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
}

.back-to-top:hover {
  transform: translateY(-2px);
  background: rgba(0,0,0,0.9);
  border-color: rgba(255,255,255,0.3);
}

.chat-bubble {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: linear-gradient(135deg, #0D6EFD 0%, #6366F1 100%);
  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.35);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  padding: 0;
  transition: all 0.3s ease;
}

.chat-bubble:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(13,110,253,0.45);
}

.chat-bubble svg {
  display: block;
}

@media (max-width: 767px) {
  .floating-buttons-container {
    right: 16px;
    bottom: 20px;
    gap: 12px;
  }
  
  .back-to-top {
    width: 44px;
    height: 44px;
  }
  
  .chat-bubble {
    width: 52px;
    height: 52px;
  }
}
</style>
