export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container text-center">
        <span className="badge-line">OUR APPROACH</span>
        <h2 className="mt-2 philosophy-title">Investment Philosophy</h2>
        <p className="philosophy-intro mt-4 mx-auto">
          Our investment philosophy is built on the foundation of disciplined research,
          strategic diversification, and long-term value creation. We believe in making
          informed decisions based on comprehensive analysis and maintaining a patient
          approach to wealth building.
        </p>

        <div className="row mt-5 g-4">
          <div className="col-md-3">
            <div className="philosophy-card">
              <div className="philosophy-icon"><i className="bi bi-search"></i></div>
              <h6>Research-Driven Analysis</h6>
              <p>We conduct thorough fundamental and technical analysis to identify undervalued securities with strong growth potential.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="philosophy-card">
              <div className="philosophy-icon"><i className="bi bi-pie-chart"></i></div>
              <h6>Diversified Risk Management</h6>
              <p>Portfolio diversification across sectors and market capitalizations helps minimize risk while maximizing returns.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="philosophy-card">
              <div className="philosophy-icon"><i className="bi bi-hourglass-split"></i></div>
              <h6>Long-Term Value Creation</h6>
              <p>We focus on patient capital deployment, avoiding short-term volatility and emphasizing fundamental business value.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="philosophy-card">
              <div className="philosophy-icon"><i className="bi bi-graph-up-arrow"></i></div>
              <h6>Performance Monitoring</h6>
              <p>Continuous monitoring and portfolio optimization ensure alignment with market conditions and client objectives.</p>
            </div>
          </div>
        </div>

        <div className="philosophy-quote mt-5">
          <span></span>
          <p>
            “Our investment philosophy centers on disciplined research, patient capital
            deployment, and unwavering focus on fundamental value creation as the
            cornerstones of sustainable wealth building.”
          </p>
          <strong>— Trishakti Investment Team</strong>
        </div>
      </div>
    </section>
  )
}