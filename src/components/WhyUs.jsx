export default function WhyUs() {
  return (
    <section id="why" className="why-section">
      <div className="container">
        <span className="badge-line">WHY TRISHAKTI</span>
        <h2 className="mb-5 why-title">Why Choose Us</h2>

        <div className="row g-5 align-items-stretch">
          <div className="col-lg-7">
            <div className="why-main-card h-100">
              <div className="d-flex align-items-start gap-4">
                <div>
                  <h5></h5>
                  <p>
                    We offer investors a disciplined, research-driven approach to
                    equity investing with a focus on long-term value creation.
                    By identifying high-potential businesses and actively
                    supporting their growth, we aim to deliver sustainable
                    returns while managing risk responsibly. Our transparent
                    governance, structured investment process, and commitment to
                    Nepal’s growing private market make us a trusted partner for
                    investors seeking both financial performance and meaningful
                    economic impact.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-muted">
                We are more than just a source of capital—we are a long-term
                growth partner. We work closely with entrepreneurs to strengthen
                strategy, improve operations, and navigate market challenges.
                With flexible investment structures, hands-on support, and a
                shared commitment to sustainable growth, we help businesses
                unlock their full potential while preserving their vision and
                independence.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="why-side-card">
              <div className="icon blue">
                <i className="bi bi-award"></i>
              </div>
              <h6>Proven Track Record</h6>
              <p>
                Consistent outperformance with industry-leading returns and
                risk-adjusted metrics across market cycles.
              </p>
            </div>
            <div className="why-side-card mt-4">
              <div className="icon green">
                <i className="bi bi-person-check"></i>
              </div>
              <h6>Personalized Service</h6>
              <p>
                Dedicated relationship managers providing tailored investment
                strategies for every client.
              </p>
            </div>
            <div className="why-side-card mt-4">
              <div className="icon navy">
                <i className="bi bi-shield-check"></i>
              </div>
              <h6>Regulatory Compliance</h6>
              <p>
                Full compliance with SEBI regulations and best practices ensuring
                transparent and secure investment management.
              </p>
            </div>
          </div>
        </div>

        <div className="row text-center mt-5 g-4 why-bottom">
          <div className="col-md-4">
            <div className="why-mini">
              <i className="bi bi-globe"></i>
              <h6>Market Expertise</h6>
              <p>Deep understanding of equity markets and global trends.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="why-mini">
              <i className="bi bi-lightning"></i>
              <h6>Quick Response</h6>
              <p>Rapid execution and responsive client support.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="why-mini">
              <i className="bi bi-file-earmark-text"></i>
              <h6>Transparent Reporting</h6>
              <p>Clear performance reports with no hidden costs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}