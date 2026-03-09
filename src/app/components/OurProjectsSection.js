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
          padding: 5px 3px;
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
        }
      `}</style>

      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">The Projects that Defines Us</p>

          <div className="projects-grid">
            <div className="project-card">
              <img
                src="/img/astitva.jpg" // apni image daal do
                alt="Astitva Project"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">Astitva</h3>
                <p className="project-desc">
                  A woman’s journey towards Self-Empowerment
                </p>
              </div>
            </div>

            <div className="project-card">
              <img
                src="/img/gyanpeeth4.png"
                alt="Navratan Gyanpeeth Project"
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">Navratan Gyanpeeth</h3>
                <p className="project-desc">
                  Empowering Underprivileged Children
                </p>
              </div>
            </div>

            <div className="project-card">
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
            </div>

            <div className="project-card">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}