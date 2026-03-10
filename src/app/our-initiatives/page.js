"use client";

import Link from 'next/link';  // Import for navigation
import YellowCTA from '../components/YellowCTA';  // Import the YellowCTA component

export default function Initiatives() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

        // ------------------------- HERO SECTION -------------------------

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

        body { font-family: 'Roboto', sans-serif; color: #333; background: #fff; line-height: 1.7; }
        h1, h2, h3, h4 { font-weight: 700; color: var(--dark); }

        .container { max-width: 1300px; margin: 0 auto; padding: 0 20px; }

        .hero h1 { color: white; font-size: 70px; margin-bottom: 3px; text-shadow: 0 4px 12px rgba(0,0,0,0.6); }
        .hero p { font-size: 1.5rem; margin-bottom: 2.5rem; font-weight: 300; }

        .btn {
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
        }

        .btn:hover {
          transform: translateY(-5px);
          background: #00acf0;
          color: white;
          box-shadow: 0 12px 30px rgba(126, 126, 126, 0.4);
        }

        // -----------------------------------------------------------------------------------------------------------------------

        .initiatives-section {
          padding: 120px 0 200px;
          background: #ffffff;
          text-align: center;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .section-title {
           font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .section-subtitle {
          font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -38px 0 70px 0;
        }

        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .initiative-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          position: relative;
          display: block;  /* Ensure Link passes this for <a> */
        }

        .initiative-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.14);
        }

        .initiative-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 24px 24px 0 0;
        }

        .initiative-info {
          padding: 40px 20px;
        }

        .initiative-title {
          font-family: 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #00acf0;
          margin: 0 0 12px 0;
        }

        .initiative-desc {
          font-size: 16px;
          font-weight: 500;
          color: #212121;
          margin: 0;
        }

        

        @media (max-width: 768px) {
        .hero h1{font-size: 50px;}
          .initiatives-section {
            padding: 80px 0 60px;
          }

          .section-title {
            font-size: 36px;
          }

          .section-subtitle {
            font-size: 26px;
          }

          .initiative-image {
            height: 240px;
          }

          .initiatives-section {
          padding: 50px 0 100px;
          
        }

          
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Initiatives</h1>
          <p>Initiatives that Drive Change</p>
          {/* <a href="#donate" className="btn">Support A Woman Today</a> */}
        </div>
      </section>

      <section className="initiatives-section">
        <div className="container">
          {/* <h2 className="section-title">Our Initiatives</h2> */}
          {/* <p className="section-subtitle">Initiatives that Drive Change</p> */}

          <div className="initiatives-grid">
            <a href="/our-initiatives/jo-aye-wo-gaye" className="initiative-card">
              <img
                src="/img/initiative-1.jpg"  // apni image daal do
                alt="Jo Aye Wo Gaye Initiative"
                className="initiative-image"
              />
              <div className="initiative-info">
                <h3 className="initiative-title">Jo Aye Wo Gaye</h3>
                <p className="initiative-desc">
                  Singing competition that has effectively brought people together and provided a platform for hidden talents to shine.
                </p>
              </div>
            </a>

            <a href="/our-initiatives/samarpan" className="initiative-card">
              <img
                src="/img/initiative-2.jpg"
                alt="Samarpan Initiative"
                className="initiative-image"
              />
              <div className="initiative-info">
                <h3 className="initiative-title">Samarpan</h3>
                <p className="initiative-desc">
                  It is an award function that showcases the organization's accomplishments and is attended by hundreds of people.
                </p>
              </div>
            </a>

            <a href="/our-initiatives/sheet-kavatch" className="initiative-card">
              <img
                src="/img/initiative-3.jpg"
                alt="Sheet Kavach Initiative"
                className="initiative-image"
              />
              <div className="initiative-info">
                <h3 className="initiative-title">Sheet Kavach</h3>
                <p className="initiative-desc">
                  Distributing cozy V-neck blue uniform sweaters to school children.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Yellow CTA Section - half overlapping footer */}
      <YellowCTA />
    </>
  );
}