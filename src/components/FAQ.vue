<template>
  <section class="faq-section">
    <div class="faq-wrapper">
      <div class="faq-container">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        <p class="faq-description">
          Find answers to common questions about our blockchain security services, auditing processes, and how we can help protect your project.
        </p>
        
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button 
              class="faq-question" 
              @click="toggleFAQ(index)"
              :aria-expanded="faq.open ? 'true' : 'false'"
            >
              <span>{{ faq.question }}</span>
              <svg class="faq-icon" :class="{ 'rotated': faq.open }" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645L8 9.29289L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L8.35355 10.3536C8.15829 10.5488 7.84171 10.5488 7.64645 10.3536L4.64645 7.35355C4.45118 7.15829 4.45118 6.84171 4.64645 6.64645Z" fill="currentColor"/>
              </svg>
            </button>
            <div class="faq-answer" :class="{ 'open': faq.open }">
              <div class="faq-answer-content">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: "What is Solidproof.io?",
    answer: "Solidproof.io is a leading blockchain security company that offers comprehensive auditing, KYC, development, and consulting services to businesses operating in the blockchain industry.",
    open: false,
    openedAt: null
  },
  {
    question: "What is blockchain auditing?",
    answer: "Blockchain auditing is the process of thoroughly examining and assessing the security, integrity, and reliability of blockchain systems and smart contracts. Our auditing services help identify vulnerabilities, potential exploits, and weaknesses in blockchain implementations.",
    open: false,
    openedAt: null
  },
  {
    question: "Why is blockchain auditing important?",
    answer: "Blockchain auditing is crucial for ensuring the robustness and security of blockchain systems. By conducting thorough audits, Solidproof.io helps clients detect and prevent potential vulnerabilities and ensures the integrity of their blockchain applications.",
    open: false,
    openedAt: null
  },
  {
    question: "What is KYC and how does Solidproof.io assist with it?",
    answer: "KYC, or Know Your Customer, refers to the process of verifying the identity and authenticity of individuals engaging in financial transactions or using blockchain services. Solidproof.io provides KYC solutions that enable businesses to meet regulatory requirements and establish a secure and compliant environment for their users.",
    open: false,
    openedAt: null
  },
  {
    question: "What services does SolidProof offer?",
    answer: "SolidProof focuses on high-tier security services, including smart contract and blockchain audits, KYC processes, consulting and development services. Next to our primary focus, we also offer top-notch marketing solutions through the many marketing agencies we are partnered with.",
    open: false,
    openedAt: null
  },
  {
    question: "How can SolidProof help protect our project from security vulnerabilities?",
    answer: "SolidProof helps protect your project from vulnerabilities through comprehensive security audits and testing. Our experienced team thoroughly examines your smart contracts and system architecture, identifying potential weaknesses and vulnerabilities. We provide actionable recommendations and best practices to mitigate risks and enhance the overall security of your project, ensuring that your assets and users are safeguarded against potential threats.",
    open: false,
    openedAt: null
  },
  {
    question: "How experienced is the team at SolidProof in the field of crypto security?",
    answer: "The team at SolidProof is highly experienced in the field of crypto security. Our team members have extensive expertise and knowledge in blockchain technology, smart contract auditing, and cybersecurity. With years of experience in the industry, we have successfully conducted over 1500 audits, gaining a strong reputation for our thoroughness, professionalism, and commitment to protecting our clients and their investors.",
    open: false,
    openedAt: null
  },
  {
    question: "What is the typical timeframe for conducting a security audit or testing?",
    answer: "The timeframe for conducting a security audit or testing can vary depending on the projects complexity and the scope of contracts. The duration typically ranges from two days to two weeks, depending on the size and complexity of the contracts. Generally, it involves a meticulous and comprehensive evaluation of the projects codebase, smart contracts, and overall security architecture. At SolidProof, we prioritize both efficiency and accuracy in our audits, ensuring that the assessment is conducted promptly without compromising the quality of our findings.",
    open: false,
    openedAt: null
  },
  {
    question: "How does SolidProof handle confidentiality and data protection?",
    answer: "At SolidProof, we take confidentiality and data protection seriously. As a Germany-based company, we operate under the strict guidelines of the General Data Protection Regulation (GDPR), known as Datenschutz-Grundverordnung (DSGVO) in German. This means that we adhere to robust security measures and procedures to safeguard our clients sensitive information. We ensure that all data shared with us during the auditing process is treated with the utmost confidentiality and stored securely. Our commitment to data protection and compliance allows our clients to have complete confidence in the handling of their information throughout our engagement.",
    open: false,
    openedAt: null
  },
  {
    question: "Can SolidProof help with incident response and recovery in case of a security breach?",
    answer: "Absolutely. At SolidProof, we understand the importance of being prepared for potential security breaches. Our team of experts is well-equipped to assist you with incident response and recovery in case of any security incident. We provide timely and effective support to help identify the breach, mitigate the impact, and implement measures to prevent future occurrences. Our goal is to minimize the impact of any security breach and ensure a swift and comprehensive recovery process, allowing you to regain control and safeguard your project and investments.",
    open: false,
    openedAt: null
  },
  {
    question: "How can we get started with SolidProofs services?",
    answer: "Getting started with SolidProof is simple. You can directly request a quote by contacting our team through our website Contact or by emailing us. Additionally, you can visit our services section on the website, where you will find detailed information and step-by-step guides on how to engage our services.",
    open: false,
    openedAt: null
  }
])

const MAX_OPEN_FAQS = 3
const STAGGER_DELAY = 500 // 500ms between each close for animation effect

function toggleFAQ(index) {
  const faq = faqs.value[index]
  
  if (faq.open) {
    // Close the FAQ
    faq.open = false
    faq.openedAt = null
  } else {
    // Open the FAQ
    faq.open = true
    faq.openedAt = Date.now()
    
    // Check if we have more than MAX_OPEN_FAQS open
    const openFaqs = faqs.value.filter(f => f.open)
    if (openFaqs.length > MAX_OPEN_FAQS) {
      // Find all FAQs that need to be closed (excluding the one we just opened)
      const faqsToClose = openFaqs
        .filter(f => f !== faq) // Don't close the one we just opened
        .sort((a, b) => a.openedAt - b.openedAt) // Sort by oldest first
        .slice(0, openFaqs.length - MAX_OPEN_FAQS) // Take only the ones that exceed the limit
      
      // Close each FAQ with staggered animation
      faqsToClose.forEach((faqToClose, index) => {
        const delay = index * STAGGER_DELAY
        
        setTimeout(() => {
          // Double-check it's still open before closing
          if (faqToClose.open) {
            faqToClose.open = false
            faqToClose.openedAt = null
          }
        }, delay)
      })
    }
  }
}
</script>

<style scoped>
/* FAQ Section */
.faq-section {
  width: 100%;
  padding: 72px 20px 40px;
  margin: 64px 0 0;
  background: transparent;
  position: relative;
}

.faq-wrapper {
  max-width: 1360px;
  margin: 0 auto;
}

.faq-container {
  max-width: 1360px;
  margin: 0 auto;
  text-align: center;
}

.faq-title {
  color: #fff;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 16px;
}

.faq-description {
  color: #898A8B;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.faq-item {
  background: rgba(26, 27, 29, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.8s ease;
}

.faq-item:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(26, 27, 29, 0.7);
}

.faq-question {
  width: 100%;
  padding: 24px;
  background: transparent;
  border: none;
  color: #fff;
  text-align: left;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: color 0.2s ease;
}

.faq-question span {
  flex: 1;
  text-align: center;
}

.faq-question:hover {
  color: #0D6EFD;
}

.faq-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: #898A8B;
}

.faq-icon.rotated {
  transform: rotate(180deg);
  color: #0D6EFD;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-answer.open {
  max-height: 500px; /* Adjust based on content needs */
}

.faq-answer-content {
  padding: 0 24px 24px;
  color: #898A8B;
  font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  transition: opacity 0.2s ease;
}

/* Tablet responsive */
@media (max-width: 1024px) {
  .faq-section {
    padding: 48px 16px 32px;
    margin-top: 48px;
  }
  
  .faq-wrapper {
    max-width: 800px;
  }
  
  .faq-container {
    max-width: 800px;
  }
  
  .faq-title {
    font-size: 40px;
  }
  
  .faq-description {
    font-size: 16px;
    margin-bottom: 40px;
  }
  
  .faq-question {
    padding: 20px;
    font-size: 16px;
  }
  
  .faq-answer.open {
    max-height: 400px; /* Slightly smaller for tablet */
  }
  
  .faq-answer-content {
    padding: 0 20px 20px;
    font-size: 15px;
  }
}

/* Mobile responsive */
@media (max-width: 767px) {
  .faq-section {
    margin-top: 40px;
    padding: 40px 16px 32px;
  }
  
  .faq-wrapper {
    max-width: none;
  }
  
  .faq-container {
    max-width: none;
  }
  
  .faq-title {
    font-size: 32px;
  }
  
  .faq-description {
    font-size: 15px;
    margin-bottom: 32px;
  }
  
  .faq-list {
    gap: 12px;
  }
  
  .faq-question {
    padding: 18px;
    font-size: 15px;
    line-height: 1.3;
  }
  
  .faq-answer.open {
    max-height: 350px; /* Smaller for mobile */
  }
  
  .faq-answer-content {
    padding: 0 18px 18px;
    font-size: 14px;
  }
  
  .faq-icon {
    width: 14px;
    height: 14px;
  }
}
</style>