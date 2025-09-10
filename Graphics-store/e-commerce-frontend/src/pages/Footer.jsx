import React from 'react'
import copilotLogo from '../assets/Copilot_20250626_210622.png';

function Footer() {
  return (
    <footer className="luxury-footer-bg text-dark pt-5 pb-3 mt-5 border-top position-relative overflow-hidden">
      <div className="luxury-footer-gradient-bar position-absolute top-0 start-50 translate-middle-x"></div>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <span className="luxury-footer-logo-wrapper d-flex align-items-center justify-content-center me-2">
                <img src={copilotLogo} alt="Logo" width="36" height="36" className="luxury-footer-logo" />
              </span>
              <span className="fw-bold fs-4 luxury-title luxury-footer-title">M N Graphic</span>
            </div>
            <div className="text-muted small">Premium Printing & Design Solutions</div>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="fw-semibold mb-2 luxury-title">Contact Us</div>
            <div className="small">
              <i className="bi bi-geo-alt-fill text-gradient-gold me-2"></i>123 Main Street, City, Country<br />
              <i className="bi bi-telephone-fill text-gradient-gold me-2"></i>+91 98765 43210<br />
              <i className="bi bi-envelope-fill text-gradient-gold me-2"></i>info@mn-graphic.com
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <div className="fw-semibold mb-2 luxury-title">Follow Us</div>
            <a href="#" className="text-gradient-gold fs-4 me-3 luxury-footer-social"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-gradient-gold fs-4 me-3 luxury-footer-social"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-gradient-gold fs-4 me-3 luxury-footer-social"><i className="bi bi-whatsapp"></i></a>
            <a href="#" className="text-gradient-gold fs-4 me-3 luxury-footer-social"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-gradient-gold fs-4 luxury-footer-social"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
        <hr className="my-4 luxury-hr" />
        <div className="row">
          <div className="col text-center text-muted small">
            &copy; {new Date().getFullYear()} <span className="luxury-title luxury-footer-title">M N Graphic</span>. All rights reserved.
          </div>
        </div>
      </div>
      <style>{`
        .luxury-footer-bg {
          background: linear-gradient(90deg, #fffbe7 0%, #f8fafc 100%);
        }
        .luxury-footer-gradient-bar {
          z-index: 2;
          top: 0;
          left: 50%;
          width: 160px;
          height: 7px;
          border-radius: 8px;
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 50%, #818cf8 100%);
          box-shadow: 0 2px 16px 0 rgba(234,179,8,0.12);
          animation: gradientMove 3s linear infinite alternate;
        }
        @keyframes gradientMove {
          0% { filter: brightness(1) saturate(1.2); }
          100% { filter: brightness(1.2) saturate(1.5); }
        }
        .luxury-footer-logo-wrapper {
          background: linear-gradient(135deg, #fffbe7 0%, #ffe9ec 100%);
          border-radius: 1.2rem;
          box-shadow: 0 2px 12px 0 rgba(191,161,74,0.10);
          padding: 4px 10px 4px 4px;
          border: 1.5px solid #fbbf24;
          margin-right: 8px;
        }
        .luxury-footer-logo {
          height: 32px;
          width: 32px;
          border-radius: 1rem;
          box-shadow: 0 2px 8px 0 rgba(191,161,74,0.10);
          background: #fffbe7;
          object-fit: contain;
        }
        .luxury-footer-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 60%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1.2px;
          text-shadow: 0 2px 8px rgba(191,161,74,0.08);
        }
        .luxury-title {
          color: #bfa14a !important;
          letter-spacing: 1px;
        }
        .luxury-hr {
          border-top: 2px solid #bfa14a22;
        }
        .luxury-footer-bg a:hover {
          color: #eab308 !important;
        }
        .text-gradient-gold {
          background: linear-gradient(90deg, #eab308 0%, #fbbf24 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </footer>
  )
}

export default Footer