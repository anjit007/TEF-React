export default function Hero() {
  return (
    <section className="hero-main">
      <div className="hero-watermark">TRISHAKTI</div>

      <div className="container">
        <div className="row align-items-center hero-content">
          <div className="col-lg-6">
            <span className="hero-badge">| TRUSTED EQUITY INVESTMENT</span>

            <h1>
              Building Wealth<br />
              Through Strategic<br />
              <span>Equity Investment</span>
            </h1>

            <p className="hero-text">
              Partner with Nepal&apos;s premier equity fund management company.
              We deliver consistent returns through strategic investments
              and comprehensive portfolio management services.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary-lg">
                Start Investing <span>→</span>
              </a>
              <a href="#philosophy" className="hero-link">
                Learn Our Approach  <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 position-relative">
            <div className="hero-card">
              <h3>रू 2,500 Cr+</h3>
              <p>Assets Under Management</p>
              <div className="growth">▲ 12.5%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-shape shape-1"></div>
      <div className="hero-shape shape-2"></div>
    </section>
  );
}
