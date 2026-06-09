"use client";

export default function OurProjectsSection() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

        .projects-section {
          padding: 120px 0 100px;
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

        /* Updated Projects Grid - Flexbox for perfect alignment */
        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          align-items: stretch;
        }

        .project-card {
          flex: 0 0 calc(33.333% - 16px);
          max-width: 420px;
          min-width: 280px;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .project-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.14);
        }

        .project-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 24px 24px 0 0;
        }

        .project-info {
          padding: 20px;
        }

        .project-title {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #00acf0;
          margin: 0 0 12px 0;
        }

        .project-desc {
          font-size: 14px;
          font-weight: 500;
          color: #212121;
          margin: 0;
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .project-card {
            flex: 0 0 calc(50% - 12px);
          }
          
          .section-title {
            font-size: 42px;
          }

          .section-subtitle {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 80px 0 60px;
          }

          .project-card {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .project-image {
            height: 240px;
          }
        }
      `}</style>

      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">The Projects that Defines Us</p>

          <div className="projects-grid">
            <a href="/projects/astitva" className="project-card">
              <img
                src="/img/astitva.jpg"
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
                src="/img/Gyanpeeth4.png"
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
                src="/img/umeed.jpg"
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
                src="/img/cyberuja.jpg"
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

            <a href="/projects/aparajita" className="project-card">
              <img
                src="/img/aparajita/aparajita-main.jpeg"
                style={{ objectPosition: "bottom" }}
                alt="Aparajita Project"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">Aparajita</h3>
                <p className="project-desc">
                  A Special Initiative for Women’s Empowerment Through Football
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}