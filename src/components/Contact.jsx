import { useState } from 'react'
import emailjs from '@emailjs/browser'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export default function Contact() {
  const [charCount, setCharCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const handleMessage = (e) => {
    const value = e.target.value.slice(0, 500)
    e.target.value = value
    setCharCount(value.length)
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          fullName: e.target.name.value,
          phone: e.target.phone.value,
          interest: e.target.interest.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }
      )

      setSuccess(true)
      e.target.reset()
      setCharCount(0)
    } catch (err) {
      console.error('Email sending failed:', err)
      setSuccess(false)
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-5 contact-info">
            <h2>Get In Touch</h2>
            <p className="mt-3">
              Ready to start your investment journey? Contact our expert team to
              discuss your investment goals and discover how Trishakti Equity Fund
              can help you build lasting wealth.
            </p>

            <div className="mt-4">
              <div className="contact-item">
                <strong>Office Address</strong><br />
                <i className="bi bi-geo-alt"></i> Trishakti Equity Fund, Star Mall 7th Floor<br />
                Putalisadak, Kathmandu<br />Nepal
              </div>

              <div className="contact-item mt-3">
                <strong>Phone Number</strong><br />
                <i className="bi bi-telephone"></i> +977-9848094698
              </div>

              <div className="contact-item mt-3">
                <strong>Email Address</strong><br />
                <i className="bi bi-envelope"></i> info@trishaktiequity.com.np
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4 p-md-5 contact-form">

                <h5 className="mb-4 fw-bold">Send us a message</h5>

                <form onSubmit={sendEmail}>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <input
                        name="name"
                        className="form-control"
                        placeholder="Full Name *"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address *"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        id ="phone"
                        className="form-control"
                        placeholder="Phone Number *"
                      />
                    </div>

                    <div className="col-md-6">
                      <select className="form-select" id ="interest">
                        <option>Investment Interest</option>
                        <option>Equity Portfolio</option>
                        <option>Investment Advisory</option>
                        <option>Wealth Management</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Your Message *"
                        maxLength={500}
                        onInput={handleMessage}
                        required
                      />
                      <div className="char-count">{charCount}/500 characters</div>
                    </div>

                    <div className="col-12 mt-2">
                      <button
                        type="submit"
                        className="btn submit-btn w-100"
                        disabled={loading}
                      >
                        {loading ? 'Sending…' : 'Submit Inquiry →'}
                      </button>

                      {success === true && (
                        <div className="alert alert-success mt-4">
                          ✅ Thank you! Your message has been sent successfully.
                        </div>
                      )}

                      {success === false && (
                        <div className="alert alert-danger mt-4">
                          ❌ Failed to send message. Please try again.
                        </div>
                      )}
                    </div>

                  </div>
                </form>

                <p className="small text-muted text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
