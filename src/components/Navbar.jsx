import logo from '../assets/img/tef.png'

export default function Navbar({ scrolled }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid px-3 px-lg-4">

        {/* Brand / logo */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
          <img src={logo} alt="Trishakti Equity Fund Logo" className="nav-logo" />
        </a>

        {/* Hamburger — visible below lg breakpoint */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#philosophy">Investment Philosophy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why">Why Us</a>
            </li>
            {/* Contact button — extra left margin on desktop only */}
            <li className="nav-item ms-lg-4 mt-2 mt-lg-0">
              <a className="btn-contact" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}