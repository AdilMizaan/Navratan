"use client";

export default function SocialEmotionalSection() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');

        .social-section {
          padding: 50px 0 100px;
          background: #ffffff;
          position: relative;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 30% 70%; /* left 60%, right 40% - exact tumhare requirement ke mutabik */
          gap: 80px;
          align-items: center;
        }

        .left-graphic {
          position: relative;
        }

        .graphic-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .right-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .heading {
          font-size: 34px;
          font-weight: 700;
          color: #212121;
          margin: 0;
          line-height: 1.1;
        }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.85;
          color: #374151;
          margin: 0;
        }

        .dayarani-logo {
          width: 280px;
          height: auto;
          margin: 20px 0;
        }

        .dayarani-logo img {
          width: 100%;
          height: auto;
        }

        .discover-btn {
          display: inline-block;
          padding: 18px 56px;
          background: #fbd45a;
          color: #111827;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 12px 40px rgba(251,191,36,0.35);
          transition: all 0.35s ease;
          align-self: flex-start;
        }

        .discover-btn:hover {
          background: #00acf0;
          transform: translateY(-6px);
          box-shadow: 0 20px 55px rgba(36, 247, 251, 0.45);
        }

        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr; /* mobile pe full width stack */
            gap: 80px;
            text-align: center;
          }

          .discover-btn {
            align-self: center;
          }

          .heading {
            font-size: 44px;
          }
        }

        @media (max-width: 768px) {
          .social-section {
            padding: 80px 0 60px;
          }

          .heading {
            font-size: 38px;
          }

          .description {
            font-size: 17px;
          }

          .dayarani-logo {
            width: 240px;
          }

          .discover-btn {
            padding: 16px 48px;
            font-size: 1.25rem;
          }
        }
      `}</style>

      <section className="social-section">
        <div className="container">
          {/* Left: 60% width graphic */}
          <div className="left-graphic">
            <img
              src="/img/social-emotional.png" // yeh tumhari left side wali full graphic image hai
              alt="DayaRani Social Emotional Reach Graphic"
              className="graphic-img"
            />
          </div>

          {/* Right: 40% width content */}
          <div className="right-content">
            <h2 className="heading">
              Social Emotional Reach Programme
            </h2>

            <p className="description">
              Social-emotional development and support should become an essential piece and mainstay of our lives. Education and awareness around it should flow smoothly to establish the framework for positive social associations, bringing about effective positive mental health in the community. Youths and the old, being the most vulnerable sections of society need our helping hands and gracious charity to curb their psychological barriers and break their opinionated silence. To settle themselves they need to be counseled well and a Social Emotional Reach campaign makes it easy to reach out to such individuals. We have collaborated with DayaRani Wellness Advisory.
            </p>

            <a href="https://dayarani.in/" className="discover-btn">
              Discover More →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}