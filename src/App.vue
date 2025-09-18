<template>
  <div id="app">
    <!-- Header with Navigation Menu -->
    <header class="header">
      <div class="container">
        <div class="logo">
          <h1>SolidProof</h1>
        </div>
        <nav class="nav">
          <ul class="nav-menu">
            <li><a href="#home" @click="currentSection = 'home'" :class="{ active: currentSection === 'home' }">Home</a></li>
            <li><a href="#about" @click="currentSection = 'about'" :class="{ active: currentSection === 'about' }">About</a></li>
            <li><a href="#services" @click="currentSection = 'services'" :class="{ active: currentSection === 'services' }">Services</a></li>
            <li><a href="#contact" @click="currentSection = 'contact'" :class="{ active: currentSection === 'contact' }">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main">
      <div class="container">
        <section v-if="currentSection === 'home'" class="section">
          <h2>Welcome to SolidProof</h2>
          <p>Your trusted partner for blockchain security and smart contract auditing. We provide comprehensive security solutions to ensure your projects are safe and reliable.</p>
          <div class="features">
            <div class="feature-card">
              <h3>🔒 Security Audits</h3>
              <p>Comprehensive smart contract security auditing services</p>
            </div>
            <div class="feature-card">
              <h3>⚡ Fast Delivery</h3>
              <p>Quick turnaround times without compromising quality</p>
            </div>
            <div class="feature-card">
              <h3>🎯 Expert Team</h3>
              <p>Experienced blockchain security professionals</p>
            </div>
          </div>
        </section>

        <section v-if="currentSection === 'about'" class="section">
          <h2>About Us</h2>
          <p>SolidProof is a leading blockchain security company specializing in smart contract audits and security consulting. Our team of experts has years of experience in identifying vulnerabilities and securing blockchain projects.</p>
          <p>We are committed to making the blockchain ecosystem safer for everyone through rigorous security practices and innovative solutions.</p>
        </section>

        <section v-if="currentSection === 'services'" class="section">
          <h2>Our Services</h2>
          <ul class="services-list">
            <li>Smart Contract Security Audits</li>
            <li>Penetration Testing</li>
            <li>Security Consulting</li>
            <li>Code Review Services</li>
            <li>Bug Bounty Programs</li>
            <li>Security Training</li>
          </ul>
        </section>

        <section v-if="currentSection === 'contact'" class="section">
          <h2>Contact Us</h2>
          <p>Ready to secure your blockchain project? Get in touch with our team today!</p>
          <div class="contact-info">
            <p>📧 Email: security@solidproof.io</p>
            <p>🌐 Website: www.solidproof.io</p>
            <p>📱 Follow us on social media for updates</p>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>SolidProof</h4>
            <p>Making blockchain safer, one audit at a time.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" @click="currentSection = 'home'">Home</a></li>
              <li><a href="#about" @click="currentSection = 'about'">About</a></li>
              <li><a href="#services" @click="currentSection = 'services'">Services</a></li>
              <li><a href="#contact" @click="currentSection = 'contact'">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Telegram</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 SolidProof. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentSection: 'home'
    }
  }
}
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 2rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Main Content Styles */
.main {
  min-height: calc(100vh - 200px);
  padding: 3rem 0;
}

.section {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #667eea;
}

/* Services List */
.services-list {
  list-style: none;
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.services-list li {
  background: white;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;
}

/* Contact Info */
.contact-info p {
  font-size: 1.1rem;
  margin: 1rem 0;
  color: #555;
}

/* Footer Styles */
.footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #ecf0f1;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin: 0.5rem 0;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #3498db;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #95a5a6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-menu {
    gap: 1rem;
  }

  .section h2 {
    font-size: 2rem;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
