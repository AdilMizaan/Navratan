"use client";

import Link from 'next/link';  // Add this import for navigation
import YellowCTA from '../components/YellowCTA';  // Import the YellowCTA component

export default function Projects() {
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

        .projects-section {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .project-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          position: relative;
          display: block;  /* Ensure Link passes this for <a> */
        }

        .project-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.14);
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 24px 24px 0 0;
        }

        .project-info {
          padding: 10px 20px;
        }

        .project-title {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #00acf0;
          margin: 0 0 12px 0;
        }

        .project-desc {
        //   font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #212121;
        //   line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 42px;
          }

          .section-subtitle {
            font-size: 28px;
          }

          .project-image {
            height: 280px;
          }
        }

        @media (max-width: 768px) {

        .hero h1{font-size: 50px;}
          .projects-section {
            padding: 80px 0 60px;
          }

          .section-title {
            font-size: 36px;
          }

          .section-subtitle {
            font-size: 26px;
          }

          .project-image {
            height: 240px;
          }
             .projects-section {
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
          <h1>Our Projects</h1>
          <p>The Projects that Defines Us</p>
          {/* <a href="#donate" className="btn">Support A Woman Today</a> */}
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          {/* <h2 className="section-title">Our Projects</h2> */}
          {/* <p className="section-subtitle">The Projects that Defines Us</p> */}

          <div className="projects-grid">
            <a href="/projects/astitva" className="project-card">
              <img
                src="/img/NF-projects/NF-Astitva.jpg" // apni image daal do
                alt="Astitva Project"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">Astitva</h3>
                <p className="project-desc">
                  A woman’s journey towards Self-Empowerment
                </p>
              </div>
            </a>

            <a href="/projects/gyanpeeth" className="project-card">
              <img
                src="/img/NF-projects/NF-Gyaanpeeth.jpg"
                alt="Navratan Gyanpeeth Project"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">Navratan Gyanpeeth</h3>
                <p className="project-desc">
                  Empowering Underprivileged Children
                </p>
              </div>
            </a>

            <a href="/projects/umeed" className="project-card">
              <img
                src="/img/NF-projects/NF-ummed3.jpeg"
                alt="Umeed Project"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">Umeed</h3>
                <p className="project-desc">
                  Shikshit Mahila, Unnat Rashtra
                </p>
              </div>
            </a>

            <a href="/projects/cyberurja" className="project-card">
              <img
                src="/img/NF-projects/NF-Computer Centre (2).jpg"
                alt="Cyberurja Project"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">Cyberurja</h3>
                <p className="project-desc">
                  Empowering with Computer Education
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <YellowCTA />
    </>
  );
}