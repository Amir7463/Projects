import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import copilotLogo from '../../assets/Copilot_20250626_210622.png';
function Navbar() {
  const navigate = useNavigate();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Animation variants
  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  const navItemVariants = {
    rest: { color: '#212529', borderBottom: '2px solid rgba(0,0,0,0)' },
    hover: {
      color: '#0d6efd', // Bootstrap primary
      borderBottom: '2px solid #0d6efd',
      transition: { duration: 0.3, type: 'spring' }
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Flex', path: '/Flex' },
    { label: 'Design', path: '/design' },
    { label: 'Ink', path: '/Ink' },
    { label: 'PVC Foam Sheet', path: '/PVC' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login', path: '/login' },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        className="navbar navbar-expand-lg bg-white shadow-sm px-3 py-2 sticky-top"
        variants={navVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="container-fluid">
          {/* Brand/Logo */}
          <span
            className="navbar-brand fw-bold text-primary fs-3 d-flex align-items-center gap-2 luxury-navbar-brand"
            style={{ cursor: "pointer", letterSpacing: '1px', fontFamily: 'system-ui, sans-serif', fontWeight: 700 }}
            onClick={() => navigate("/")}
          >
            <span className="luxury-logo-wrapper d-flex align-items-center justify-content-center me-2">
              <img src={copilotLogo} alt="Copilot Logo" className="luxury-navbar-logo" />
            </span>
            <span className="luxury-navbar-title">M N Graphic</span>
          </span>
          {/* Hamburger for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end${isNavCollapsed ? '' : ' show'}`} id="navbarNav">
            <ul className="navbar-nav gap-lg-4 gap-2 align-items-lg-center text-center">
              {navLinks.map((link, idx) => (
                <motion.li
                  className="nav-item"
                  key={link.label}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={navItemVariants}
                  style={{ display: 'inline-block' }}
                >
                  <motion.span
                    className="nav-link fw-semibold text-dark px-3 py-2 rounded nav-link-standard"
                    style={{ cursor: "pointer", fontSize: '1.05rem', letterSpacing: '0.5px', fontFamily: 'system-ui, sans-serif' }}
                    onClick={() => navigate(link.path)}
                    variants={navItemVariants}
                  >
                    {link.label}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <style>{`
          .bg-white {
            background: #fff !important;
          }
          .luxury-logo-wrapper {
            background: linear-gradient(135deg, #fffbe7 0%, #ffe9ec 100%);
            border-radius: 1.2rem;
            box-shadow: 0 2px 12px 0 rgba(191,161,74,0.10);
            padding: 4px 10px 4px 4px;
            border: 1.5px solid #fbbf24;
            margin-right: 8px;
          }
          .luxury-navbar-logo {
            height: 38px;
            width: 38px;
            border-radius: 1rem;
            box-shadow: 0 2px 8px 0 rgba(191,161,74,0.10);
            background: #fffbe7;
            object-fit: contain;
          }
          .luxury-navbar-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.45rem;
            font-weight: 700;
            background: linear-gradient(90deg, #eab308 0%, #fbbf24 60%, #818cf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: 1.5px;
            text-shadow: 0 2px 8px rgba(191,161,74,0.08);
          }
          .nav-link-standard {
            position: relative;
            transition: color 0.2s, background 0.2s;
            color: #212529 !important;
            border-radius: 0.375rem;
          }
          .nav-link-standard:after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #0d6efd;
            transition: width 0.3s;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 2px;
          }
          .nav-link-standard:hover {
            background: #f8f9fa;
            color: #0d6efd !important;
          }
          .nav-link-standard:hover:after {
            width: 100%;
          }
        `}</style>
      </motion.nav>
    </AnimatePresence>
  )
}

export default Navbar
