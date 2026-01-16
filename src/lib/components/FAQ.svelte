<script>
	import { onDestroy, onMount } from 'svelte';

	export let title = 'Frequently Asked Questions';
	export let description =
		'Find answers to common questions about our blockchain security services, auditing processes, and how we can help protect your project.';
	export let items = null;

	const defaultItems = [
		{
			question: 'What is Solidproof.io?',
			answer:
				'Solidproof.io is a leading blockchain security company that offers comprehensive auditing, KYC, development, and consulting services to businesses operating in the blockchain industry.'
		},
		{
			question: 'What is blockchain auditing?',
			answer:
				'Blockchain auditing is the process of thoroughly examining and assessing the security, integrity, and reliability of blockchain systems and smart contracts. Our auditing services help identify vulnerabilities, potential exploits, and weaknesses in blockchain implementations.'
		},
		{
			question: 'Why is blockchain auditing important?',
			answer:
				'Blockchain auditing is crucial for ensuring the robustness and security of blockchain systems. By conducting thorough audits, Solidproof.io helps clients detect and prevent potential vulnerabilities and ensures the integrity of their blockchain applications.'
		},
		{
			question: 'What is KYC and how does Solidproof.io assist with it?',
			answer:
				'KYC, or Know Your Customer, refers to the process of verifying the identity and authenticity of individuals engaging in financial transactions or using blockchain services. Solidproof.io provides KYC solutions that enable businesses to meet regulatory requirements and establish a secure and compliant environment for their users.'
		},
		{
			question: 'What services does SolidProof offer?',
			answer:
				'SolidProof focuses on high-tier security services, including smart contract and blockchain audits, KYC processes, consulting and development services. Next to our primary focus, we also offer top-notch marketing solutions through the many marketing agencies we are partnered with.'
		},
		{
			question: 'How can SolidProof help protect our project from security vulnerabilities?',
			answer:
				'SolidProof helps protect your project from vulnerabilities through comprehensive security audits and testing. Our experienced team thoroughly examines your smart contracts and system architecture, identifying potential weaknesses and vulnerabilities. We provide actionable recommendations and best practices to mitigate risks and enhance the overall security of your project, ensuring that your assets and users are safeguarded against potential threats.'
		},
		{
			question: 'How experienced is the team at SolidProof in the field of crypto security?',
			answer:
				'The team at SolidProof is highly experienced in the field of crypto security. Our team members have extensive expertise and knowledge in blockchain technology, smart contract auditing, and cybersecurity. With years of experience in the industry, we have successfully conducted over 1500 audits, gaining a strong reputation for our thoroughness, professionalism, and commitment to protecting our clients and their investors.'
		},
		{
			question: 'What is the typical timeframe for conducting a security audit or testing?',
			answer:
				'The timeframe for conducting a security audit or testing can vary depending on the projects complexity and the scope of contracts. The duration typically ranges from two days to two weeks, depending on the size and complexity of the contracts. Generally, it involves a meticulous and comprehensive evaluation of the projects codebase, smart contracts, and overall security architecture. At SolidProof, we prioritize both efficiency and accuracy in our audits, ensuring that the assessment is conducted promptly without compromising the quality of our findings.'
		},
		{
			question: 'How does SolidProof handle confidentiality and data protection?',
			answer:
				'At SolidProof, we take confidentiality and data protection seriously. As a Germany-based company, we operate under the strict guidelines of the General Data Protection Regulation (GDPR), known as Datenschutz-Grundverordnung (DSGVO) in German. This means that we adhere to robust security measures and procedures to safeguard our clients sensitive information. We ensure that all data shared with us during the auditing process is treated with the utmost confidentiality and stored securely. Our commitment to data protection and compliance allows our clients to have complete confidence in the handling of their information throughout our engagement.'
		},
		{
			question: 'Can SolidProof help with incident response and recovery in case of a security breach?',
			answer:
				'Absolutely. At SolidProof, we understand the importance of being prepared for potential security breaches. Our team of experts is well-equipped to assist you with incident response and recovery in case of any security incident. We provide timely and effective support to help identify the breach, mitigate the impact, and implement measures to prevent future occurrences. Our goal is to minimize the impact of any security breach and ensure a swift and comprehensive recovery process, allowing you to regain control and safeguard your project and investments.'
		},
		{
			question: 'How can we get started with SolidProofs services?',
			answer:
				'Getting started with SolidProof is simple. You can directly request a quote by contacting our team through our website Contact or by emailing us. Additionally, you can visit our services section on the website, where you will find detailed information and step-by-step guides on how to engage our services.'
		}
	];

	function withState(arr) {
		return arr.map((it) => ({ ...it, open: false, openedAt: null }));
	}

	let faqs = withState(items ?? defaultItems);
	$: if (items && Array.isArray(items)) {
		faqs = withState(items);
	}

	const MAX_OPEN_FAQS = 3;
	const STAGGER_DELAY = 500;

	let faqList;
	let activeObserver = null;
	let resetObserver = null;
	let lastScrollY = 0;
	let scrollDir = 'down';
	let closeTimeoutIds = new Set();
	let viewStates = faqs.map(() => '');
	$: viewStates = faqs.map((_, i) => viewStates[i] ?? '');

	function handleScroll() {
		const y = window.scrollY || document.documentElement.scrollTop || 0;
		scrollDir = y < lastScrollY ? 'up' : 'down';
		lastScrollY = y;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		activeObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const el = entry.target;
					const idx = Number(el?.dataset?.index);
					if (entry.isIntersecting) {
						if (Number.isFinite(idx)) {
							viewStates[idx] = 'in';
							viewStates = viewStates;
						}
					} else {
						if (scrollDir === 'up') {
							if (Number.isFinite(idx)) {
								viewStates[idx] = 'out';
								viewStates = viewStates;
							}
						}
					}
				}
			},
			{
				threshold: 0.01,
				root: null,
				rootMargin: '0px 0px -8% 0px'
			}
		);

		resetObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const el = entry.target;
					const idx = Number(el?.dataset?.index);
					if (!entry.isIntersecting) {
						if (Number.isFinite(idx)) {
							viewStates[idx] = '';
							viewStates = viewStates;
						}
					}
				}
			},
			{
				threshold: 0,
				root: null,
				rootMargin: '0px'
			}
		);

		if (faqList) {
			const els = faqList.querySelectorAll('.faq-item');
			els.forEach((el) => {
				const idx = Number(el?.dataset?.index);
				if (Number.isFinite(idx)) viewStates[idx] = '';
				activeObserver?.observe(el);
				resetObserver?.observe(el);
			});
			viewStates = viewStates;
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
		activeObserver?.disconnect();
		resetObserver?.disconnect();
		activeObserver = null;
		resetObserver = null;
		closeTimeoutIds.forEach((id) => clearTimeout(id));
		closeTimeoutIds.clear();
	});

	function toggleFAQ(index) {
		const faq = faqs[index];
		if (!faq) return;

		if (faq.open) {
			faq.open = false;
			faq.openedAt = null;
			faqs = faqs;
			return;
		}

		faq.open = true;
		faq.openedAt = Date.now();
		faqs = faqs;

		const openFaqs = faqs.filter((f) => f.open);
		if (openFaqs.length > MAX_OPEN_FAQS) {
			const faqsToClose = openFaqs
				.filter((f) => f !== faq)
				.sort((a, b) => (a.openedAt ?? 0) - (b.openedAt ?? 0))
				.slice(0, openFaqs.length - MAX_OPEN_FAQS);

			faqsToClose.forEach((faqToClose, closeIndex) => {
				const delay = closeIndex * STAGGER_DELAY;
				const id = setTimeout(() => {
					closeTimeoutIds.delete(id);
					if (faqToClose.open) {
						faqToClose.open = false;
						faqToClose.openedAt = null;
						faqs = faqs;
					}
				}, delay);
				closeTimeoutIds.add(id);
			});
		}
	}
</script>

<section class="faq-section">
	<div class="faq-wrapper">
		<div class="faq-container">
			<h2 class="faq-title">{title}</h2>
			<p class="faq-description">{description}</p>

			<div class="faq-list" bind:this={faqList}>
				{#each faqs as faq, index (index)}
					<div
						class="faq-item"
						data-index={index}
						style={`--i: ${index}`}
						class:in-view={viewStates[index] === 'in'}
						class:out-view={viewStates[index] === 'out'}
					>
						<button
							class="faq-question"
							on:click={() => toggleFAQ(index)}
							aria-expanded={faq.open ? 'true' : 'false'}
							type="button"
						>
							<span>{faq.question}</span>
							<svg
								class="faq-icon"
								class:rotated={faq.open}
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M4.64645 6.64645C4.84171 6.45118 5.15829 6.45118 5.35355 6.64645L8 9.29289L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L8.35355 10.3536C8.15829 10.5488 7.84171 10.5488 7.64645 10.3536L4.64645 7.35355C4.45118 7.15829 4.45118 6.84171 4.64645 6.64645Z"
									fill="currentColor"
								/>
							</svg>
						</button>
						<div class="faq-answer" class:open={faq.open}>
							<div class="faq-answer-content">{faq.answer}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.faq-section {
		width: 100%;
		padding: 72px 20px 40px;
		margin: 64px 0 0;
		background: transparent;
		position: relative;
		--flip-duration: 900ms;
		--flip-stagger: 140ms;
	}

	.faq-wrapper {
		max-width: 960px;
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
		perspective: 1000px;
	}

	.faq-item {
		background: rgba(26, 27, 29, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.8s ease;
		opacity: 0;
		transform-origin: top center;
		transform: rotateX(-80deg) translateY(20px);
		backface-visibility: hidden;
		will-change: transform, opacity;
	}

	.faq-item:hover {
		border-color: rgba(255, 255, 255, 0.2);
		background: rgba(26, 27, 29, 0.7);
	}

	.faq-item.in-view {
		animation: faqFlipIn var(--flip-duration) cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
		animation-delay: calc(var(--i, 0) * var(--flip-stagger));
	}

	.faq-item.out-view {
		animation: faqFlipIn var(--flip-duration) cubic-bezier(0.22, 0.61, 0.36, 1) reverse forwards;
		animation-delay: 0ms;
	}

	@keyframes faqFlipIn {
		0% {
			opacity: 0;
			transform: rotateX(-80deg) translateY(20px);
		}
		50% {
			opacity: 0.9;
			transform: rotateX(12deg) translateY(0);
		}
		100% {
			opacity: 1;
			transform: rotateX(0deg) translateY(0);
		}
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
		max-height: 500px;
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

	@media (max-width: 1024px) {
		.faq-section {
			padding: 48px 16px 32px;
			margin-top: 48px;
			--flip-duration: 850ms;
			--flip-stagger: 120ms;
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
			max-height: 400px;
		}

		.faq-answer-content {
			padding: 0 20px 20px;
			font-size: 15px;
		}
	}

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
			max-height: 350px;
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

	@media (prefers-reduced-motion: reduce) {
		.faq-item {
			opacity: 1 !important;
			transform: none !important;
			animation: none !important;
		}
	}
</style>
