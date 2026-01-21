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
  const [apiStatus, setApiStatus] = useState(null)

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Backend check
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/api/users')
      .then(res => res.json())
      .then(() => setApiStatus('ok'))
      .catch(() => setApiStatus('offline'))
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

      {/* Backend status */}
      {/* {import.meta.env.DEV && apiStatus && (
        <div style={{
          position: 'fixed',
          bottom: 60,
          left: 10,
          background: 'black',
          color: apiStatus === 'ok' ? 'lime' : 'red',
          padding: '8px',
          borderRadius: '6px',
          fontSize: '10px',
          zIndex: 9999
        }}>
          API: {apiStatus}
        </div>
      )} */}

      {/* ENV Debug */}
      {/* {import.meta.env.DEV && (
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
      )} */}
    </>
  )
}

export default App
