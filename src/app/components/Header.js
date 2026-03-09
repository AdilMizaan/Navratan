"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Top Bar (contact + social) */
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
          flex-wrap: wrap;
          gap: 15px;
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
          font-size: 14px;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #00acf0;
        }

        /* Main Nav Bar */
        .main-nav {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

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

        .logo-text {
          font-size: 22px;
          font-weight: 700;
          color: #00acf0;
          letter-spacing: 0.5px;
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

        .nav-menu .nav-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -6px;
          left: 0;
          background: #00acf0;
          transition: width 0.3s;
        }

        .nav-menu .nav-item:hover::after {
          width: 100%;
        }

        /* Dropdown (About Us) - simple hover example */
        .dropdown {
          position: relative;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background: white;
          min-width: 180px;
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

        /* Support Button */
        .support-btn {
          background: #fbd45a;
          color: #212121;
          padding: 12px 32px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
        //   box-shadow: 0 4px 10px rgba(251,191,36,0.3);
          transition: all 0.3s;
          white-space: nowrap;
        }

        .support-btn:hover {
          background: #00acf0;
        //   transform: translateY(-2px);
        //   box-shadow: 0 6px 15px rgba(251,191,36,0.4);
        }

        @media (max-width: 1024px) {
          .nav-menu {
            gap: 20px;
            font-size: 15px;
          }
          .support-btn {
            padding: 10px 24px;
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .top-container {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .nav-container {
            flex-direction: column;
            height: auto;
            padding: 15px 20px;
          }

          .nav-menu {
            flex-wrap: wrap;
            justify-content: center;
            margin: 15px 0;
          }

          .support-btn {
            margin-top: 10px;
          }
        }
      `}</style>

      {/* Top Contact + Social Bar */}
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

          {/* <div className="social-icons">
            <a href="#"><svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.228.228 2.695.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.228 4.358 2.695 6.825 7.053 6.981 1.32.058 1.728.072 4.987.072s3.667-.014 4.947-.072c4.358-.228 6.825-2.695 6.981-7.053.058-1.32.072-1.728.072-4.987s-.014-3.667-.072-4.947c-.228-4.358-2.695-6.825-7.053-6.981C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          </div> */}
          <div className="social-icons">
  <a href="https://www.facebook.com/navratanfoundations" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="https://www.instagram.com/navratanfoundations" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://www.youtube.com/@navratanfoundations" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
  <a href="https://www.linkedin.com/company/navratan-foundations" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="nav-container">
          <div className="logo-container">
            {/* Logo image daal do public folder me (real logo download kar ke) */}
            <img src="/img/logo.png" alt="Navratan Foundations" className="logo-img" />
            {/* <span className="logo-text">Navratan Foundations</span> */}
          </div>

          <div className="nav-menu">
            <a href="/" className="nav-item">Home</a>

            <div className="dropdown">
              <a href="/about" className="nav-item">About Us ↓</a>
              <div className="dropdown-content">
                <a href="/founder" className="nav-item">Founder Profile</a>
                <a href="/advisors" className="nav-item">Advisors Committee</a>
                {/* aur sub items agar hain */}
              </div>
            </div>

            <a href="/projects" className="nav-item">Projects</a>
            <a href="/get-involved" className="nav-item">Get Involved</a>
            <a href="/our-initiatives" className="nav-item">Our Initiatives</a>
            <a href="/samararpan-2024" className="nav-item">Samararpan 2024</a>
            <a href="/contact" className="nav-item">Contact</a>

            <a href="/support" className="support-btn">Support a Cause →</a>
          </div>
        </div>
      </div>
    </>
  );
}