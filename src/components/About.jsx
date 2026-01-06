export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container text-center">
        <span className="badge-line">WHO WE ARE</span>
        <h2 className="mt-2">Trishakti Equity Fund</h2>
        <p className="about-intro mt-3 mx-auto">
          With over 15 years of excellence in equity investment management,
          Trishakti Equity Fund stands as a trusted partner for investors
          seeking sustainable wealth creation. Our experienced team combines
          deep market insights with disciplined investment strategies to
          deliver consistent returns while managing risk effectively.
        </p>

        <div className="row mt-5 g-4 justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="about-card">
              <div className="about-icon blue"></div>
              <h6>Our Mission</h6>
              <p>
                To empower investors with strategic equity investment solutions
                that create sustainable wealth while maintaining the highest
                standards of transparency, integrity, and professional excellence
                in fund management.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="about-card">
              <div className="about-icon green"></div>
              <h6>Our Vision</h6>
              <p>
                To be Nepal’s most trusted equity fund management company,
                recognized for delivering exceptional returns, innovative
                investment strategies, and building long-term partnerships
                with our investors.
              </p>
            </div>
          </div>
        </div>

        <h3 className="core-title mt-5">Our Core Values</h3>
        <div className="row mt-4 g-4 justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="core-card">
              <div className="core-icon blue"><i className="bi bi-shield-check"></i></div>
              <h6>Integrity</h6>
              <p>We uphold the highest standards of honesty and transparency in all our investment decisions and client relationships.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="core-card">
              <div className="core-icon green"><i className="bi bi-trophy"></i></div>
              <h6>Excellence</h6>
              <p>Our commitment to excellence drives us to consistently deliver superior investment performance and exceptional service.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="core-card">
              <div className="core-icon blue"><i className="bi bi-lightbulb"></i></div>
              <h6>Innovation</h6>
              <p>We leverage cutting-edge research and innovative strategies to identify unique investment opportunities.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="core-card">
              <div className="core-icon green"><i className="bi bi-people"></i></div>
              <h6>Partnership</h6>
              <p>We build long-term partnerships with our clients, aligning our success with their financial goals and aspirations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}