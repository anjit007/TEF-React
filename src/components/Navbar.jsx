import logo from '../assets/img/tef.png'

export default function Navbar({ scrolled }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
          <img src={logo} alt="Trishakti Equity Fund Logo" className="nav-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#philosophy">Investment Philosophy</a></li>
            <li className="nav-item"><a className="nav-link" href="#why">Why Us</a></li>
            <li className="nav-item ms-lg-5"><a className="btn-contact" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}