export default function WhyUs() {
  return (
    <section id="why" className="why-section">
      <div className="container">
        <span className="badge-line">---- WHY TRISHAKTI ----</span>
        <h2 className="mb-5">Why Choose Us</h2>

        <div className="row g-5 align-items-stretch">
          <div className="col-lg-7">
            <div className="why-main-card h-100">
              <div className="d-flex align-items-start gap-4">
                <div className="why-years">15+</div>
                <div>
                  <h5>Years of Excellence</h5>
                  <p>
                    Since our inception, we have consistently delivered superior
                    investment performance while maintaining the highest standards
                    of professionalism and client service.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-muted">
                Our experienced team brings deep market knowledge and proven
                expertise in equity fund management, navigating multiple market
                cycles while delivering consistent long-term value.
              </p>
              <div className="row text-center mt-5 g-4">
                <div className="col-md-4">
                  <div className="why-stat">
                    <h6>रु 2,500+ Cr</h6>
                    <span>Assets Under Management</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="why-stat highlight">
                    <h6>18.5%</h6>
                    <span>Average Annual Returns</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="why-stat">
                    <h6>5,000+</h6>
                    <span>Satisfied Investors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="why-side-card">
              <div className="icon blue"><i className="bi bi-award"></i></div>
              <h6>Proven Track Record</h6>
              <p>Consistent outperformance with industry-leading returns and risk-adjusted metrics across market cycles.</p>
            </div>
            <div className="why-side-card mt-4">
              <div className="icon green"><i className="bi bi-person-check"></i></div>
              <h6>Personalized Service</h6>
              <p>Dedicated relationship managers providing tailored investment strategies for every client.</p>
            </div>
            <div className="why-side-card mt-4">
              <div className="icon navy"><i className="bi bi-shield-check"></i></div>
              <h6>Regulatory Compliance</h6>
              <p>Full compliance with SEBI regulations and best practices ensuring transparent and secure investment management.</p>
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
  )
}