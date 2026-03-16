"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Sticky Header */
        .sticky-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        /* Top Bar */
        .top-bar {
          background: #f8f9fa;
          border-bottom: 1px solid #e0e0e0;
          font-size: 14px;
          color: #333;
          padding: 8px 0;
        }

        .top-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-item svg {
          width: 18px;
          height: 18px;
          fill: #00acf0;
        }

        .social-icons {
          display: flex;
          gap: 18px;
        }

        .social-icons a {
          color: #555;
          font-size: 18px;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #00acf0;
        }

        /* Main Nav */
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-img {
          height: 50px;
          width: auto;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .nav-menu .nav-item {
          color: #333;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }

        .nav-menu .nav-item:hover,
        .nav-menu .nav-item.active {
          color: #00acf0;
        }

        /* Dropdown - About Us */
        .dropdown {
          position: relative;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background: white;
          min-width: 200px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          z-index: 1;
          top: 100%;
          left: 0;
          border-radius: 6px;
          padding: 10px 0;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown-content a {
          padding: 12px 20px;
          display: block;
          color: #333;
          text-decoration: none;
        }

        .dropdown-content a:hover {
          background: #f0f7ff;
          color: #00acf0;
        }

        /* Nested Dropdown - Navratan Pariwaar */
        .dropdown-content .nested-dropdown {
          position: relative;
        }

        .dropdown-content .nested-dropdown > a {
          padding-right: 30px;
          position: relative;
        }

        .dropdown-content .nested-dropdown > a::after {
          content: '›';
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
        }

        .dropdown-content .nested-dropdown .nested-content {
          display: none;
          position: absolute;
          left: 100%;
          top: 0;
          background: white;
          min-width: 180px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          z-index: 2;
          border-radius: 6px;
          padding: 10px 0;
        }

        .dropdown-content .nested-dropdown:hover .nested-content {
          display: block;
        }

        /* Support Button */
        .support-btn {
          background: #fbd45a;
          color: #212121;
          padding: 12px 32px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .support-btn:hover {
          background: #00acf0;
          color: white;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          font-size: 28px;
          cursor: pointer;
          color: #333;
          background: none;
          border: none;
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          width: 100%;
          background: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          padding: 20px 0;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-menu a {
          display: block;
          padding: 15px 25px;
          color: #333;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 1px solid #eee;
        }

        .mobile-menu a:hover {
          background: #f0f7ff;
          color: #00acf0;
        }

        /* Nested items in mobile - indented */
        .mobile-menu .nested-item {
          padding-left: 45px;
          font-size: 15px;
        }

        .mobile-menu .support-btn {
          margin: 20px 25px;
          display: block;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .top-bar {
            display: none;
          }
          .nav-container {
            height: 70px;
          }
          .hamburger {
            display: block;
          }
          .nav-menu {
            display: none;
          }
          .support-btn {
            display: none;
          }
        }
      `}</style>

      {/* Sticky Header Wrapper */}
      <div className="sticky-header">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-container">
            <div className="contact-info">
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                navratanjks@gmail.com
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                E-74, Sector 52, Noida, Uttar Pradesh, India
              </div>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/navratanfoundations" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/navratanfoundations" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/user/navjks" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.linkedin.com/company/navratan-foundations" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="nav-container">
          <div className="logo-container">
            <img src="/img/logo.png" alt="Navratan Foundations" className="logo-img" />
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            <a href="/" className="nav-item">Home</a>

            {/* About Us Dropdown */}
            <div className="dropdown">
              <a href="/about-us" className="nav-item">About Us ↓</a>
              <div className="dropdown-content">
                <a href="/about-us/founder" className="nav-item">Founder's Profile</a>

                {/* Navratan Pariwaar with nested dropdown */}
                <div className="dropdown nested-dropdown">
                  <a href="/about-us/navratan-pariwaar" className="nav-item">Navratan Pariwaar ↓</a>
                  <div className="nested-content dropdown-content">
                    <a href="/about-us/navratan-pariwaar/patrons" className="nav-item">Patrons</a>
                    <a href="/about-us/navratan-pariwaar/advisors" className="nav-item">Advisors</a>
                    <a href="/about-us/navratan-pariwaar/executive-committee" className="nav-item">Executive Committee</a>
                  </div>
                </div>
              </div>
            </div>

            <a href="/projects" className="nav-item">Projects</a>
            <a href="/get-involved" className="nav-item">Get Involved</a>
            <a href="/our-initiatives" className="nav-item">Our Initiatives</a>
            <a href="/img/Samarpan-2024.pdf" target="_blank" className="nav-item">Samararpan 2024</a>
            <a href="/contact-us" className="nav-item">Contact</a>

            <a href="/donate" className="support-btn">Support a Cause →</a>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu open">
            <a href="/" onClick={toggleMobileMenu}>Home</a>
            <a href="/about-us" onClick={toggleMobileMenu}>About Us</a>
            <a href="/founder" onClick={toggleMobileMenu} className="nested-item">→ Founder's Profile</a>
            <a href="/navratan-pariwaar" onClick={toggleMobileMenu}>Navratan Pariwaar</a>
            <a href="/patrons" onClick={toggleMobileMenu} className="nested-item">→ Patrons</a>
            <a href="/advisors" onClick={toggleMobileMenu} className="nested-item">→ Advisors</a>
            <a href="/executive-committee" onClick={toggleMobileMenu} className="nested-item">→ Executive Committee</a>
            <a href="/projects" onClick={toggleMobileMenu}>Projects</a>
            <a href="/get-involved" onClick={toggleMobileMenu}>Get Involved</a>
            <a href="/our-initiatives" onClick={toggleMobileMenu}>Our Initiatives</a>
            <a href="/img/Samarpan-2024.pdf" target="_blank" onClick={toggleMobileMenu}>Samararpan 2024</a>
            <a href="/contact-us" onClick={toggleMobileMenu}>Contact</a>
            <a href="/donate" className="support-btn" onClick={toggleMobileMenu}>Support a Cause →</a>
          </div>
        )}
      </div>
    </>
  );
}