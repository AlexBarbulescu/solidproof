<section class="about" aria-labelledby="about-solidproof-heading">
	<div class="about-inner">
		<div class="about-header">
			<h2 id="about-solidproof-heading" class="about-title">About SolidProof</h2>
			<p class="about-intro">
				Our core team, led by CEO Mails Nielsen and CFO Kevin Arens, consists of highly skilled developers with
				diverse backgrounds.
			</p>
		</div>

		<div class="about-layout">
			<div class="about-copy">
				<p>
					Our core team, led by CEO Mails Nielsen and CFO Kevin Arens consists of highly skilled developers with
					diverse backgrounds. Leveraging our combined expertise from the University of Flensburg and industry
					experience, we possess an exceptional understanding of security protocols and best practices, ensuring the
					highest standards of professionalism and safeguarding our clients' interests.
				</p>

				<p>
					Based in Germany, we operate proficiently in multiple languages, including technical, German, English,
					Turkish, Swedish, Norwegian, Chinese, and Indian. Through our collaboration with a central translation
					service, we provide comprehensive KYC solutions worldwide, setting us apart as a unique and globally
					accessible provider.
				</p>

				<p>
					With a portfolio of over 1000 projects, we have acquired extensive knowledge and established a strong global
					reputation. Our recognition in Forbes magazine, with multiple features as the sole audit company and
					prominent German firm, underscores our industry achievements. Furthermore, our contributions to Hackernoon,
					generating significant interest, highlight our unwavering commitment to excellence.
				</p>

				<p>
					SolidProof takes great pride in supporting exceptional projects such as VEMP Studios, UNCX (formerly
					Unicrypt), Arker, Zyberswap, Kryxivia, Pinksale, and the promising Musure World. We showcase these projects
					on our SolidProof News channel and Gold Status, endorsing their exceptional quality and recognizing their
					remarkable potential.
				</p>
			</div>

			<aside class="about-highlights" aria-label="Highlights">
				<div class="highlight">
					<div class="h-title">Germany-based</div>
					<div class="h-sub">Global reach with multilingual support</div>
					<img class="highlight-icon" src="/images/madeingermany.png" alt="Made in Germany" loading="lazy" />
				</div>
				<div class="highlight">
					<div class="h-title">3000+ projects</div>
					<div class="h-sub">Extensive audit + compliance experience</div>
				</div>
				<div class="highlight">
					<div class="h-title">Industry recognition</div>
					<div class="h-sub">Featured by Forbes and Hackernoon</div>
				</div>
				<div class="highlight">
					<div class="h-title">KYC worldwide</div>
					<div class="h-sub">Comprehensive solutions via translation services</div>
				</div>
				<div class="highlight">
					<div class="h-title">Security-first team</div>
					<div class="h-sub">Deep protocol knowledge and best-practice engineering</div>
				</div>
				<div class="highlight">
					<div class="h-title">Gold Status support</div>
					<div class="h-sub">Showcasing standout projects via News + Gold Status</div>
				</div>
			</aside>
		</div>
	</div>
</section>

<style>
	.about {
		width: 100%;
		padding: 90px 20px;
		background: #000;
		position: relative;
	}

	.about-inner {
		max-width: 1200px;
		margin: 0 auto;
	}

	.about-header {
		max-width: 900px;
		margin: 0 auto 36px;
		text-align: center;
	}

	.about-title {
		margin: 0;
		font-size: 48px;
		font-weight: 700;
		line-height: 1.1;
		color: #fff;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		letter-spacing: -0.03em;
		margin: 0 0 12px;
	}

	.about-intro {
		color: #9BA1A5;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 18px;
		line-height: 1.6;
		margin: 0 auto;
		max-width: 680px;
	}

	.about-layout {
		display: grid;
		grid-template-columns: 1.5fr 0.9fr;
		gap: 28px;
		align-items: stretch;
	}

	.about-copy {
		background: rgba(15,16,17,0.75);
		border: 1px solid rgba(255,255,255,0.08);
		border-radius: 20px;
		padding: 26px 26px 10px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		position: relative;
		isolation: isolate;
	}

	.about-copy::before {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
		border-radius: 20px;
		background: radial-gradient(90% 120% at 90% 0%, rgba(13,110,253,0.18) 0%, rgba(0,0,0,0) 60%);
		opacity: 0.9;
	}

	.about-copy p {
		position: relative;
		margin: 0 0 16px;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 16px;
		line-height: 1.75;
		color: rgba(235,238,242,0.86);
	}

	.about-copy p:last-child {
		margin-bottom: 12px;
	}

	.about-highlights {
		display: flex;
		flex-direction: column;
		gap: 12px;
		height: 100%;
		justify-content: space-between;
	}

	.highlight {
		background: rgba(255,255,255,0.04);
		border: 1px solid rgba(255,255,255,0.08);
		border-radius: 16px;
		padding: 16px;
		position: relative;
		overflow: hidden;
	}

	.highlight-icon {
		position: relative;
		display: block;
		width: 150px;
		height: auto;
		margin: 14px 0 0;
		filter: drop-shadow(0 8px 22px rgba(0,0,0,0.45));
		opacity: 0.95;
	}

	.highlight::before {
		content: "";
		position: absolute;
		inset: -1px;
		opacity: 0.9;
		pointer-events: none;
	}

	.h-title {
		position: relative;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 18px;
		font-weight: 700;
		color: #fff;
		letter-spacing: -0.01em;
		margin-bottom: 6px;
	}

	.h-sub {
		position: relative;
		font-family: 'Geist', -apple-system, Roboto, Helvetica, sans-serif;
		font-size: 14px;
		line-height: 1.5;
		color: rgba(155,161,165,0.95);
	}

	@media (max-width: 980px) {
		.about { padding: 70px 18px; }
		.about-title { font-size: 40px; }
		.about-layout { grid-template-columns: 1fr; }
		.about-copy { padding: 22px 18px 8px; }
		.about-highlights { height: auto; }
		.highlight { flex: initial; }
	}

	@media (max-width: 520px) {
		.about-title { font-size: 32px; }
		.about-copy p { font-size: 15px; }
	}
</style>
