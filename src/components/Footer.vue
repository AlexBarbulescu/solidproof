<template>
  <footer class="site-footer">
    <div class="container">
      <p>Test Footer</p>
      <small>© 2024 SolidProof</small>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed for this static component
</script>

<style scoped>
.site-footer {
  background: #131415;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.site-footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  max-width: 960px;
  margin: 0 auto;
  color: #9BA1A5;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
}

.site-footer p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.site-footer small {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
}

@media (max-width: 767px) {
  .site-footer .container {
    flex-direction: column;
    gap: 8px;
    text-align: center;
    padding: 16px;
  }
}
</style>