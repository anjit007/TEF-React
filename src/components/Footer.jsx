import logo from '../assets/img/tef.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p>
            Building wealth through strategic equity investment solutions
            with over 15 years of market excellence and proven performance.
          </p>
          <a href="#" className="footer-cta">Start Your Journey</a>
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Philosophy</a></li>
            <li><a href="#">Why Choose Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Investment Guide</a></li>
            <li><a href="#">Market Insights</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Investor Portal</a></li>
            <li><a href="#">Disclosures</a></li>
          </ul>
        </div>

        <div className="footer-col newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest market insights and investment updates delivered to your inbox.</p>
          <div className="newsletter-box">
            <input type="email" id="newsletterEmail" placeholder="Enter your email" />
            <button>➜</button>
          </div>
          <p id="newsletterMsg" className="mt-2"></p>
          <div className="social-icons">
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="company">
        <span>© 2024 Trishakti Equity Fund. All rights reserved.</span>
        </div>
        <div className="bottom-links">
          <a href="#">Privacy Policy </a>
          |
          <a href="#">Terms of Service</a>
          |
          <a href="#">Disclaimers</a>
          |
        </div>
      </div>
    </footer>
  )
}