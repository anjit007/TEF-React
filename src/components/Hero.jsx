export default function Hero() {
  return (
    <section className="hero-main">
      <div className="hero-watermark">TRISHAKTI</div>

      <div className="container">
        <div className="row align-items-center">

          {/* Left column — always full-width on mobile, half on desktop */}
          <div className="col-12 col-lg-6 hero-card">
            <span className="hero-badge">| TRUSTED EQUITY INVESTMENT</span>

            <h1>
              Building Wealth
              {/* Use a soft break on md+; collapses to inline on xs via CSS */}
              <br className="d-none d-sm-block" />
              Through Strategic
              <br className="d-none d-sm-block" />
              <span>Equity Investment</span>
            </h1>

            <p className="hero-text">
              Partner with Nepal&apos;s premier equity fund management company.
              We deliver consistent returns through strategic investments
              and comprehensive portfolio management services.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary-lg">
                Start Investing <span aria-hidden="true">→</span>
              </a>
              <a href="#philosophy" className="hero-link">
                Learn Our Approach&nbsp;
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Right column — hidden on mobile, visible lg+ (add your card here if needed) */}
          <div className="col-lg-6 d-none d-lg-flex position-relative justify-content-end">
            {/* Stat card or illustration goes here */}
          </div>

        </div>
      </div>

      {/* Decorative shapes (hidden on xs via CSS) */}
      <div className="hero-shape shape-1" aria-hidden="true"></div>
      <div className="hero-shape shape-2" aria-hidden="true"></div>
    </section>
  );
}