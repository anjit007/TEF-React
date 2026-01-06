import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}

{import.meta.env.DEV && (
  <div style={{
    position: 'fixed',
    bottom: 10,
    left: 10,
    background: 'black',
    color: 'lime',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    fontSize: '12px',
    zIndex: 9999
  }}>
    <strong>DEBUG ENV:</strong><br />
    Public Key: {import.meta.env.VITE_EMAILJS_PUBLIC_KEY}<br />
    Service: {import.meta.env.VITE_EMAILJS_SERVICE_ID}<br />
    Template: {import.meta.env.VITE_EMAILJS_TEMPLATE_ID}
  </div>
)}
export default App