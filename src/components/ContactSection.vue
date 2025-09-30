<template>
  <section class="contact-section">
    <div class="contact-wrapper">
      <div class="contact-card">
        <div class="contact-container">
          <div class="contact-content">
            <h2 class="contact-title">Have questions or need a quote?</h2>
            <p class="contact-description">
              Reach out to SolidProof for expert support in blockchain auditing, KYC, smart contract development, and marketing.
              <br><br>
              Our team is ready to assist you with secure, professional solutions tailored to your project.
            </p>
            <a href="#" class="contact-cta">Contact Us</a>
          </div>
          <div class="contact-image">
            <img src="/images/kevin01.png" alt="SolidProof team member" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this static component
</script>

<style scoped>
/* Contact Section */
.contact-section {
  width: 100%;
  padding: 72px 20px 40px;
  margin: 64px 0 0;
  background: transparent;
  position: relative;
}

.contact-wrapper {
  max-width: 1360px;
  margin: 0 auto;
}

.contact-card {
  background: radial-gradient(38.71% 100.4% at 69.97% 62.68%, rgba(0, 128, 255, 0.20) 33.65%, rgba(0, 0, 0, 0.00) 98.56%), #131415;
  border-radius: 20px;
  overflow: visible;
  position: relative;
}

.contact-container {
  padding: 36px 48px 44px 48px;
  display: grid;
  grid-template-columns: 1fr 600px;
  align-items: start;
  gap: 36px;
  min-height: 360px;
  position: relative;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 522px;
  align-items: flex-start;
}

.contact-title {
  color: #fff;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 90%;
  margin: 0;
}

.contact-description {
  color: #9BA1A5;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  margin: 0;
}

.contact-cta {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, #0D6EFD 0%, #6366F1 100%);
  color: #fff;
  text-decoration: none;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.3);
  transition: all 0.3s ease;
}

.contact-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(13, 110, 253, 0.45);
}

.contact-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: auto;
  position: absolute;
  right: 48px;
  bottom: 0;
  z-index: 1;
}

.contact-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 48px 32px 0 32px;
    text-align: center;
  }
  
  .contact-title {
    font-size: 56px;
  }
  
  .contact-description {
    font-size: 18px;
  }

  .contact-content {
    align-items: center !important;
    justify-content: center;
    text-align: center !important;
    margin: 0 auto;
  }

  .contact-title, .contact-description {
    text-align: center !important;
  }

  .contact-cta {
    margin: 0 auto !important;
    display: inline-block;
  }

  .contact-image {
    width: min(72vw, 520px);
    height: auto;
    position: static;
    margin: 16px auto 0;
    right: auto;
    bottom: auto;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 48px 16px 24px;
    margin: 32px 0 0;
  }
  
  .contact-card {
    overflow: hidden;
  }

  .contact-container {
    padding: 40px 20px 0;
    gap: 30px;
  }
  
  .contact-title {
    font-size: 42px;
    line-height: 95%;
  }
  
  .contact-description {
    font-size: 16px;
    line-height: 120%;
  }

  .contact-cta {
    width: auto;
    max-width: none;
    padding: 12px 24px;
    font-size: 14px;
    display: inline-block;
  }

  .contact-image {
    width: 100%;
    height: auto;
    position: static;
    transform: none;
    margin: 16px 0 0;
    right: auto;
    bottom: auto;
  }

  /* Center contact text and button */
  .contact-container {
    text-align: center;
  }

  .contact-content {
    align-items: center;
  }

  .contact-title, .contact-description {
    text-align: center;
  }

  .contact-cta {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 36px;
  }
  
  .contact-description {
    font-size: 14px;
  }
  
  .contact-container {
    padding: 16px 20px 20px 20px;
  }
}
</style>