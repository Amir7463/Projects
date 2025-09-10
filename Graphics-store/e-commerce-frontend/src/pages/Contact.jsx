import React from 'react'

function Contact() {
  return (
    <section className="container py-5 position-relative luxury-contact-section overflow-hidden" id="contact">
      <div className="luxury-contact-bg-glass position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="luxury-gradient-bar position-absolute top-0 start-50 translate-middle-x"></div>
      <div className="row justify-content-center align-items-center g-5 luxury-contact-bg rounded-4 p-4 position-relative" style={{ zIndex: 2 }}>
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3 luxury-title text-gradient-gold display-5">Contact Us</h2>
          <hr className="luxury-hr mb-4" />
          <p className="text-secondary mb-4">Have a question or want to start your next project? Fill out the form or reach us directly. Our team will respond promptly!</p>
          <ul className="list-unstyled mb-4 luxury-list">
            <li className="mb-2"><i className="bi bi-geo-alt-fill text-gradient-gold me-2 fs-5"></i>123 Main Street, City, Country</li>
            <li className="mb-2"><i className="bi bi-telephone-fill text-gradient-gold me-2 fs-5"></i>+91 98765 43210</li>
            <li className="mb-2"><i className="bi bi-envelope-fill text-gradient-gold me-2 fs-5"></i>info@printshop.com</li>
          </ul>
          <div className="d-flex align-items-center mt-3 luxury-social-bar">
            <a href="#" className="text-gradient-gold fs-3 me-3 luxury-social luxury-social-icon" title="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-gradient-gold fs-3 me-3 luxury-social luxury-social-icon" title="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-gradient-gold fs-3 me-3 luxury-social luxury-social-icon" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-gradient-gold fs-3 luxury-social luxury-social-icon" title="WhatsApp"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="luxury-form p-4 rounded-4 shadow-sm bg-white position-relative luxury-form-glass">
            <div className="mb-3">
              <label htmlFor="name" className="form-label luxury-title">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label luxury-title">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@email.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label luxury-title">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-warning px-4 luxury-title fw-bold luxury-btn-glow luxury-btn-border">Send Message</button>
          </form>
        </div>
      </div>
      <style>{`
        .luxury-contact-section {
          background: linear-gradient(120deg, #fffbe7 0%, #f8fafc 60%, #ffe9ec 100%);
        }
        .luxury-contact-bg-glass {
          z-index: 1;
          background: linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,215,0,0.08) 100%);
          backdrop-filter: blur(8px);
        }
        .luxury-gradient-bar {
          z-index: 2;
          top: 0;
          left: 50%;
          width: 180px;
          height: 8px;
          border-radius: 8px;
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 50%, #f472b6 100%);
          box-shadow: 0 2px 16px 0 rgba(234,179,8,0.18);
          animation: gradientMove 3s linear infinite alternate;
        }
        @keyframes gradientMove {
          0% { filter: brightness(1) saturate(1.2); }
          100% { filter: brightness(1.2) saturate(1.5); }
        }
        .luxury-contact-bg {
          border: 2px solid #ffe9ec99;
          box-shadow: 0 8px 32px 0 rgba(191,161,74,0.10), 0 2px 8px 0 rgba(0,0,0,0.04);
          background: rgba(255,255,255,0.85);
        }
        .luxury-title {
          color: #bfa14a !important;
          letter-spacing: 1px;
          font-family: 'Playfair Display', serif;
        }
        .text-gradient-gold {
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .luxury-list li, .luxury-social {
          font-size: 1.12rem;
          font-family: 'Inter', sans-serif;
        }
        .luxury-form-glass {
          background: rgba(255,255,255,0.98);
          border: 2px solid #fbbf24;
          box-shadow: 0 4px 24px 0 rgba(191,161,74,0.10);
        }
        .luxury-form .form-control:focus {
          border-color: #eab308;
          box-shadow: 0 0 0 0.2rem rgba(234,179,8,0.12);
        }
        .luxury-form .btn-warning.luxury-btn-glow.luxury-btn-border {
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 100%);
          border: 2px solid #fbbf24;
          box-shadow: 0 2px 16px 0 rgba(234,179,8,0.18);
          color: #fffbe7;
          transition: box-shadow 0.2s, background 0.2s, border 0.2s;
        }
        .luxury-form .btn-warning.luxury-btn-glow.luxury-btn-border:hover {
          background: #eab308;
          border: 2px solid #eab308;
          box-shadow: 0 4px 24px 0 rgba(234,179,8,0.25);
        }
        .luxury-hr {
          border: none;
          height: 3px;
          width: 80px;
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 100%);
          margin-left: 0;
          opacity: 0.7;
        }
        .luxury-social-bar {
          background: linear-gradient(90deg, #fffbe7 0%, #ffe9ec 100%);
          border-radius: 2rem;
          padding: 0.5rem 1.5rem;
          box-shadow: 0 2px 12px 0 rgba(191,161,74,0.08);
          margin-top: 1.5rem;
          display: inline-flex;
        }
        .luxury-social-icon {
          transition: transform 0.2s, box-shadow 0.2s;
          border-radius: 50%;
          padding: 0.35rem 0.5rem;
        }
        .luxury-social-icon:hover {
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 100%);
          color: #fff !important;
          transform: translateY(-3px) scale(1.12);
          box-shadow: 0 4px 16px 0 rgba(234,179,8,0.18);
        }
      `}</style>
    </section>
  )
}

export default Contact