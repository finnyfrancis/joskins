import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', spice: '', message: '' });
  const [sent, setSent] = useState(false);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || 'Not provided',
          company: form.company || 'Not provided',
          spice: form.spice || 'Not specified',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setPopup(true);
      setTimeout(() => setSent(false), 5000);
      setForm({ name: '', email: '', phone: '', company: '', spice: '', message: '' });
    } catch {
      setError('Failed to send. Please try again or email us directly at joskins.foods@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="label">Contact Us</span>
            <h2 className="heading">Let's Talk <span className="accent">Spices</span></h2>
            <p>
              Have a bulk requirement or need a custom quote? Drop us a line and
              our team will respond within 24 hours.
            </p>
            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Office</strong>
                  <p>Joskins Foods and Spices<br/>10219, Phase 2, Vijayanagar 4th Stage<br/>Mysuru, Karnataka, India 570032</p>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+919902933398">+91 99029 33398</a></p>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:joskins.foods@gmail.com">joskins.foods@gmail.com</a></p>
                </div>
              </div>
              <div className="contact__card">
                <div className="contact__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <strong>Website</strong>
                  <p><a href="https://joskins.com" target="_blank" rel="noopener noreferrer">joskins.com</a></p>
                </div>
              </div>
            </div>

            <div className="contact__map">
              <h4 className="contact__map-title">Find Our Shop</h4>
              <div className="contact__map-wrap">
                <iframe
                  title="Joskins Foods and Spices Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.5!2d76.5908329!3d12.320662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b84a303d023%3A0x36a877017bbac48f!2sJoskins%20Agro%20Production!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/9aoELRawng27b4Cc8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Open in Google Maps
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={submit}>
            {sent && <div className="contact__ok">Thank you! We'll get back to you shortly.</div>}
            {error && <div className="contact__err">{error}</div>}
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" required placeholder="Your name" value={form.name} onChange={change} />
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={change} />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={change} />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" placeholder="Company name" value={form.company} onChange={change} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="spice">Spice of Interest</label>
              <select id="spice" name="spice" value={form.spice} onChange={change}>
                <option value="">Select a spice</option>
                <option>Black Pepper</option>
                <option>Green Cardamom</option>
                <option>Turmeric</option>
                <option>Cinnamon</option>
                <option>Cloves</option>
                <option>Cumin Seeds</option>
                <option>Red Chillies</option>
                <option>Star Anise</option>
                <option>Coriander Seeds</option>
                <option>Multiple / Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required rows="4" placeholder="Tell us about your requirement — quantity, delivery location, timeline..." value={form.message} onChange={change} />
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
              {loading ? 'Sending…' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </div>
      {popup && (
        <div className="popup__overlay" onClick={() => setPopup(false)}>
          <div className="popup__card" onClick={(e) => e.stopPropagation()}>
            <div className="popup__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                <circle cx="12" cy="12" r="10" />
                <path d="M7 13l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="popup__title">Enquiry Sent!</h3>
            <p className="popup__msg">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button className="btn btn--primary popup__btn" onClick={() => setPopup(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
