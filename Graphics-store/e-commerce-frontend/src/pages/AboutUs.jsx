import React from 'react'

function AboutUs() {
  return (
    
    <div className="container py-5 luxury-about-bg rounded-4 position-relative overflow-hidden">
      <div className="luxury-bg-glass position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="row justify-content-center align-items-center g-5 luxury-about-border p-4 position-relative" style={{ zIndex: 2 }}>
        <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
          <div className="luxury-img-wrapper">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=700&q=80" alt="About Us" className="img-fluid rounded-4 shadow luxury-img-gold" />
            <div className="luxury-img-overlay"></div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold mb-3 luxury-title display-4 text-gradient-gold">About Us</h2>
          <hr className="luxury-hr mb-4" />
          <p className="lead text-secondary mb-4 luxury-lead">
            Welcome to <span className="fw-semibold text-gradient-gold">PrintShop</span>! With years of experience in the printing and signage industry, we are dedicated to delivering top-quality design, printing, and branding solutions for businesses of all sizes. Our team combines creativity, technology, and craftsmanship to bring your ideas to life—whether you need eye-catching banners, premium signage, or custom design services.
          </p>
          <h4 className="fw-bold mb-3 luxury-title text-gradient-gold">Printing Items</h4>
          <ul className="list-unstyled mb-4 luxury-list">
            <li className="mb-2"><i className="bi bi-check-circle-fill text-gradient-gold me-2"></i>Cutting-edge printing technology</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-gradient-gold me-2"></i>Creative and experienced design team</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-gradient-gold me-2"></i>Customer-focused service and support</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-gradient-gold me-2"></i>Timely delivery and competitive pricing</li>
          </ul>
          <div className="d-flex align-items-center mt-4 luxury-founder-card p-3 rounded-4 shadow-sm">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" className="rounded-circle me-3 luxury-founder-img" width="56" height="56" />
            <div>
              <div className="fw-bold luxury-title mb-0 text-gradient-gold">A. Sharma</div>
              <div className="text-muted small">Founder & CEO</div>
            </div>
          </div>
          <p className="mt-4 mb-0 text-muted">Let us help you make a lasting impression. <span className="fw-semibold text-gradient-gold">Contact us</span> today to discuss your next project!</p>
        </div>
      </div>
      <style>{`
        .luxury-about-bg {
          background: linear-gradient(120deg, #fffbe7 0%, #f8fafc 60%, #ffe9ec 100%);
        }
        .luxury-bg-glass {
          z-index: 1;
          background: linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,215,0,0.08) 100%);
          backdrop-filter: blur(8px);
        }
        .luxury-about-border {
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
        .luxury-lead {
          font-size: 1.18rem;
        }
        .luxury-list li {
          font-size: 1.08rem;
          font-family: 'Inter', sans-serif;
        }
        .luxury-img-wrapper {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 8px 32px 0 rgba(191,161,74,0.10);
        }
        .luxury-img-gold {
          border-radius: 1.5rem;
          box-shadow: 0 4px 32px 0 rgba(191,161,74,0.12);
        }
        .luxury-img-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(120deg, rgba(191,161,74,0.10) 0%, rgba(255,255,255,0.0) 100%);
          pointer-events: none;
        }
        .luxury-founder-card {
          background: rgba(255,255,255,0.95);
          border: 1.5px solid #ffe9ec99;
          box-shadow: 0 2px 12px 0 rgba(191,161,74,0.08);
        }
        .luxury-founder-img {
          border: 2px solid #eab30844;
          box-shadow: 0 2px 8px 0 rgba(191,161,74,0.10);
        }
        .luxury-hr {
          border: none;
          height: 3px;
          width: 80px;
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 100%);
          margin-left: 0;
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .luxury-about-border {
            padding: 1rem !important;
          }
          .luxury-img-wrapper {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AboutUs