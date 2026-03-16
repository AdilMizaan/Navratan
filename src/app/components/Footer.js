"use client";

export default function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          background:rgb(39, 35, 34);
          color: #e2e8f0;
          padding: 120px 0 40px;
          font-family: 'Inter', sans-serif;
          z-index: 0;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
        }

        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .logo-img {
          height: 80px;
          width: auto;
          object-fit: contain;
        }

        .tagline {
          font-size: 16px;
          color: #ffffff;
          font-weight: 600;
          max-width: 320px;
          line-height: 1.6;
          text-align: left;
        }

        .footer-column h3 {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        /* Increased vertical spacing here */
        .footer-column li {
          margin-bottom: 20px;   /* ← changed from 30px */
        }

        .footer-column a {
          color: #ffffff;        /* fixed typo: was #fffff */
          font-weight: 600;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.3s ease;
        }

        .footer-column a:hover {
          color: #60a5fa;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 24px;   /* ← slightly increased from 16px for better spacing */
        }

        .contact-icon {
          font-size: 22px;
          color: #fbd45a;
          min-width: 28px;
        }

        .support-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 40px;
          background: #fbd45a;
          color: #111827;
          font-size: 16px;
          font-weight: 600;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(251,191,36,0.3);
          transition: all 0.35s ease;
        }

        .support-btn:hover {
          background: #00acf0;
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(87, 198, 253, 0.4);
        }

        .copyright-bar {
          background:rgb(16, 21, 25);
          padding: 24px 0;
          margin-top: 80px;
          font-size: 14px;
          color: #ffffff;
          margin: 30px auto 0;
          max-width: 1350px;
          overflow: hidden;
        }

        .copyright-content {
          max-width: 1350px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright-text {
          flex: 1;
          text-align: left;
        }

        .social-icons {
          display: flex;
          gap: 20px;
          justify-content: flex-end;
        }

        .social-icon {
          font-size: 18px;
          color: #ffffff;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: #60a5fa;
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 60px 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .copyright-content {
            flex-direction: column;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }

          .support-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <footer>
        <div className="footer-container">
          {/* Logo Section */}
          <div className="logo-section">
            <img
              src="/img/footer-logo1.png"
              alt="Navratan Foundations Logo"
              className="logo-img"
            />
            <p className="tagline">
              Join hands to serve a purpose beyond yourself, and be the change you seek
            </p>

            <a href="/donate" className="support-btn">
              Support a Cause →
            </a>
          </div>

          {/* Non Profit */}
          <div className="footer-column">
            <h3>Non Profit</h3>
            <ul>
              <li><a href="/patrons">Patrons</a></li>
              <li><a href="/founder-profile">Founder's Profile</a></li>
              <li><a href="/executive-committee">Executive Committee</a></li>
              <li><a href="/advisors">Advisors</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/about-us">Privacy Policy</a></li>
              <li><a href="/about-us">Conditions</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <span>+91-70111540309</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span>navratanjks@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <span>
                E-74, Sector 52,<br />
                Noida, Uttar Pradesh, India
              </span>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="copyright-bar">
          <div className="copyright-content">
            <div className="copyright-text">
              © 2026 Navratan Foundation All Rights Reserved.
            </div>

            <div className="social-icons">
              <a href="https://www.facebook.com/navratanfoundations" target="_blank" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/navratanfoundations" target="_blank" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/user/navjks" target="_blank" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/company/navratan-foundations" target="_blank" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}