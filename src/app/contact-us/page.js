"use client";

import Link from 'next/link';
import YellowCTA from '../components/YellowCTA';

export default function ContactUs() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

        /* ------------------------- HERO SECTION ------------------------- */
        .hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -2;
        }

        .video-container .hero-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.45);
          z-index: -1;
        }

        .hero-content {
          z-index: 1;
          max-width: 900px;
          padding: 0 20px;
        }

        .hero h1 {
          color: white;
          font-size: 70px;
          margin-bottom: 3px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.6);
        }

        .btn, .submit-btn {
          display: inline-block;
          padding: 14px 40px;
          background: #fbd45a;
          color: black;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(138, 138, 138, 0.3);
          border: none;
          cursor: pointer;
        }

        .btn:hover, .submit-btn:hover {
          transform: translateY(-5px);
          background: #00acf0;
          color: white;
        }

        /* ------------------------- CONTACT DETAILS SECTION ------------------------- */
        .contact-details-section {
          padding: 100px 0 50px;
          background: #ffffff;
        }

        .contact-details-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .left-content h2 {
          font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .left-content h3 {
          font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -38px 0 30px 0;
        }

        .left-content p {
          font-size: 18px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        /* Right side - cards wrapper */
        .right-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          height: 100%;
          align-content: start;
        }

        .card-stack {
          display: flex;
          flex-direction: column;
          gap: 70px;
        }

        .single-card-center {
          display: flex;
          align-items: center;
          height: 100%;
        }
          .single-card-center .contact-card {
          display: flex;
          flex-direction: column;
          margin-top: 40px;
          align-items: center;
        //   height: 100%;
        width: 100%;

        }

        .contact-card {
          background: #B6DCEDA8;
          border-radius: 16px;
          padding: 60px 30px 35px;
          text-align: center;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
          border: 1px solid #e0f0ff;
          transition: all 0.3s ease;
          position: relative;
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 172, 240, 0.18);
        }

        .icon-circle {
          width: 90px;
          height: 90px;
          background: #fbd45a;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-size: 36px;
          box-shadow: 0 6px 15px rgba(0, 172, 240, 0.3);
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .contact-card h4 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #212121;
        }

        .contact-card p,
        .contact-card a {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
        }

        .contact-card a {
          color: #00acf0;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-card a:hover {
          text-decoration: underline;
        }

        /* ------------------------- CONTACT FORM SECTION (updated) ------------------------- */
        .contact-form-section {
          padding: 50px 0 150px;
        //   background: #f8f9fa;
        }

        .contact-form-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0; /* No gap - chipke hue */
        //   border-radius: 16px;
          overflow: hidden; /* rounded corners dono taraf */
        //   box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
        }

        .map-wrapper,
        .form-wrapper {
          height: 650px; /* Same height for both - adjust if needed */
        }

        .map-wrapper {
          background: #ddd; /* fallback */
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .form-wrapper {
          background: #b6dceda8; /* light cyan jaise image */
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-wrapper h2 {
          font-family: 'Shadows Into Light', cursive;
          font-size: 48px;
          color: rgba(0, 172, 240, 0.8);
          margin: 0 0 40px;
          text-align: center;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 16px;
          font-weight: 600;
          color: #212121;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          padding: 14px 18px;
          border: 1px solid #b0d8ff;
          border-radius: 8px;
          font-size: 16px;
          background: white;
          transition: border 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00acf0;
        }

        .form-group textarea {
          min-height: 140px;
          resize: vertical;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .submit-wrapper {
          text-align: center;
          margin-top: 30px;
        }

        @media (max-width: 1024px) {
          .contact-form-container,
          .contact-details-container {
            grid-template-columns: 1fr;
            gap: 0; /* even on mobile, but stack vertically */
          }

          .map-wrapper,
          .form-wrapper {
            height: 450px; /* smaller on smaller screens */
          }

          .right-cards {
            grid-template-columns: 1fr;
          }

          .single-card-center {
            align-items: flex-start;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 50px; }
          .contact-details-section, .contact-form-section { padding: 70px 0; }
          .left-content h2 { font-size: 48px; }
          .left-content h3 { font-size: 32px; }
          .form-wrapper h2 { font-size: 42px; }
          .form-wrapper {
          height: 850px; /* Same height for both - adjust if needed */
        }
          .map-wrapper{ height: 400px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details-section">
        <div className="contact-details-container">
          <div className="left-content">
            <h2>Contact Us</h2>
            <h3>Connect with Navratan Foundations for Change</h3>
            <p>
              Every step toward change begins with a connection. At Navratan Foundations, we believe in the power of unity and compassion to transform lives. Whether you seek help, want to contribute, or simply share your story, we are here to listen and stand by you. Together, let’s build a future filled with hope, dignity, and endless possibilities. Reach out to us — your voice matters.
            </p>
          </div>

          <div className="right-cards">
            <div className="card-stack">
              <div className="contact-card">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Our Location</h4>
                <p>
                  E-74, Sector 52,<br />
                  Noida, Uttar Pradesh,<br />
                  India
                </p>
              </div>

              <div className="contact-card">
                <div className="icon-circle">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h4>Contact Number</h4>
                <p>
                  <a href="tel:+917011540309">+91-7011540309</a>
                </p>
              </div>
            </div>

            <div className="single-card-center">
              <div className="contact-card">
                <div className="icon-circle">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:navratanjks@gmail.com">
                    navratanjks@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map Section - chipke hue */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          {/* Left: Map */}
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224319.32373614964!2d77.41554220351775!3d28.54003949771982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5821045f981%3A0x9301bbf1c0eb7aeb!2sNavratan%20Foundations!5e0!3m2!1sen!2sin!4v1773395818944!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Navratan Foundations Location"
            ></iframe>
           
          </div>

          {/* Right: Form */}
          <div className="form-wrapper">
            <h2>Send Us Message</h2>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your Phone Number" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" required />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Write Message</label>
                <textarea placeholder="Write us a Message" required></textarea>
              </div>

              <div className="submit-wrapper">
                <button type="submit" className="submit-btn">
                  Send Us Message →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <YellowCTA />
    </>
  );
}