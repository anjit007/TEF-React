export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge-line">WHAT WE DO</span>
          <h1 className="mt-2">Our Investment Services</h1>
        </div>

        {/* SERVICE 01 - Equity Portfolio Management */}
        <div className="row align-items-center service-item">
          <div className="col-lg-6">
            <div className="service-content">
              <span className="service-watermark">01</span>
              <h2>Equity Portfolio Management</h2>
              <p>
                Comprehensive portfolio management services designed to maximize
                returns while effectively managing risk through diversified equity
                investments and strategic asset allocation.
              </p>
              <ul>
                <li>Diversified equity portfolio construction</li>
                <li>Active risk management and monitoring</li>
                <li>Regular performance review and rebalancing</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://media.istockphoto.com/id/2002270922/photo/collaborative-discussion-in-a-modern-office-with-exposed-brick-walls.jpg?s=612x612&w=0&k=20&c=KFdt6dfE300iHGAs2n_Q2zKV4kTzm3i4MKpdtgFhlKw=" 
              alt="Equity Portfolio Management" 
              className="service-img" 
            />
          </div>
        </div>

        {/* SERVICE 02 - Strategic Investment Advisory */}
        <div className="row align-items-center service-item flex-lg-row-reverse">
          <div className="col-lg-6">
            <div className="service-content">
              <span className="service-watermark">02</span>
              <h2>Strategic Investment Advisory</h2>
              <p>
                Expert advisory services providing personalized strategies,
                market insights, and comprehensive financial planning.
              </p>
              <ul>
                <li>Personalized investment strategy development</li>
                <li>Market research and analysis reports</li>
                <li>Ongoing advisory and consultation support</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" class="service-img"></img>
          </div>
        </div>

        {/* SERVICE 03 - Wealth Management Solutions */}
        <div className="row align-items-center service-item">
          <div className="col-lg-6">
            <div className="service-content">
              <span className="service-watermark">03</span>
              <h2>Wealth Management Solutions</h2>
              <p>
                Holistic wealth management services combining investments,
                financial planning, and tax optimization strategies.
              </p>
              <ul>
                <li>Comprehensive wealth planning</li>
                <li>Tax-efficient investment structures</li>
                <li>Estate planning and succession advisory</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://www.bankrate.com/2023/03/28173011/GettyImages-1460296966.jpeg?auto=webp&optimize=high&crop=16:9" 
              alt="Wealth Management Solutions" 
              className="service-img" 
            />
          </div>
        </div>

      </div>
    </section>
  )
}