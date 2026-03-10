"use client";
import YellowCTA from '../components/YellowCTA';  // Import the YellowCTA component

export default function GetInvolved() {
  return (
    <>
      <style jsx global>{`
        :root {
          --primary-yellow: #fbd45a;
          --dark-bg: #1a1a1a;
          --light-blue: #e3f2fd;
          --text-dark: #333;
          --text-gray: #666;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
        }

        body {
          line-height: 1.6;
          color: var(--text-dark);
        }

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
        .get-involved-section {
          background: var(--light-blue);
          padding: 80px 10%;
          padding-bottom: 220px;
          margin-bottom: -130px;
          text-align: center;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          text-align: left;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary-yellow);
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        .card h3 {
          font-size: 1.8rem;
          color: #212121;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .card ul {
          list-style: none;
          padding: 0;
          margin: 20px 0 0;
        }

        .card li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
          font-size: 0.95rem;
          color: var(--text-gray);
          line-height: 1.6;
        }

        .card li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--primary-yellow);
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* New Section: GIVE Graphic + Content */
        .give-section {
        //   background: var(--light-blue);
          padding: 80px 10%;
          text-align: center;
        }

        .give-section h2 {
          font-size: 2.5rem;
          color: #212121;
          margin-bottom: 50px;
          font-weight: 700;
        }

        .give-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .give-graphic {
          flex: 0 0 40%;  /* Left side 40% for graphic */
        }

        .give-graphic img {
          width: 100%;
          height: 250px;
          max-height: 250px;
          object-fit: cover;
        }

        .give-content {
          flex: 0 0 60%;  /* Right side 60% for content */
          text-align: left;
        }

        .give-content h3 {
          font-size: 1.8rem;
          color: #212121;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .give-content p {
          font-size: 1.1rem;
          color: var(--text-gray);
          line-height: 1.7;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .hero {
            height: 400px;
            padding: 0 5%;
          }

        //   .hero-content h1 {
        //     font-size: 2.5rem;
        //   }
            .hero h1{font-size: 50px;}

          .hero-content p {
            font-size: 1rem;
          }

           .get-involved-section {
          padding-bottom: 1520px;
          margin-bottom: 100px;
        }

          .give-graphic {
            font-size: 4rem;
          }

          .get-involved-section {
            padding: 60px 5%;
          }

          .get-involved-section h2 {
            font-size: 2rem;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card {
            padding: 30px 20px;
          }

          .card h3 {
            font-size: 1.5rem;
          }

          /* Responsive for new section */
          .give-section {
            padding: 60px 5%;
          }

          .give-section h2 {
            font-size: 2rem;
            margin-bottom: 30px;
          }

          .give-container {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }

          .give-graphic {
            flex: none;
            order: 2;
          }

          .give-content {
            flex: none;
            text-align: center;
            order: 1;
          }

          .give-content h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          .give-content p {
            font-size: 1rem;
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
          <h1>Get Involved</h1>
          <p>
            Join Hands for Change: Be Part of Navratan Foundation's Transformative Journey.
          </p>
          
        </div>
      </section>

      {/* New GIVE Section - After Hero */}
      <section className="give-section">
        <h2>Get Involved with Navratan Foundations</h2>
        <div className="give-container">
          <div className="give-graphic">
            <img src="/img/give.jpg" alt="GIVE Graphic" />  {/* Tum yahan apni image link daal dena */}
          </div>
          <div className="give-content">
            <h3>Join Hands for Change: Be Part of Navratan Foundation's Transformative Journey.</h3>
            <p>
              At Navratan Foundations, we believe that change is driven by collective efforts. Our mission for comprehensive community development is only made possible with the support of passionate individuals like you. Your involvement can be the catalyst for positive change. Join Navratan Foundations and help us create a world where hope, dignity, and transformation flourish.
            </p>
          </div>
        </div>
      </section>

      <section className="get-involved-section">
        <div className="cards-grid">
          <div className="card">
            <h3>Volunteering Opportunities</h3>
            <p>Empower Lives: Volunteer with Navratan Foundations</p>
            <ul>
              <li>Navratan Foundations welcomes volunteers aged 18 and above to contribute to the development sector.</li>
              <li>Volunteers must be available for at least 12 hours per week.</li>
              <li>Opportunities are available based on your skills, whether for fieldwork or office tasks.</li>
              <li>Your efforts will support initiatives in women empowerment, out-of-school children, environmental projects, and effective communication.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Internship Program</h3>
            <p>Internship Program at Navratan Foundations</p>
            <ul>
              <li>Navratan Foundations offers internships to university students seeking meaningful exposure.</li>
              <li>Internships are available for a minimum of one month and up to three months.</li>
              <li>Although unpaid, interns will receive a certificate acknowledging their dedication.</li>
              <li>Be part of our transformative journey and make a positive impact.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Trustee Opportunities</h3>
            <p>Trustee/Honorary Trustee Opportunities</p>
            <ul>
              <li>Navratan Foundations offers the opportunity to become a Trustee or Honorary Trustee.</li>
              <li>We seek respectable individuals passionate about social development.</li>
              <li>Trustees dedicate themselves to creating a lasting positive impact.</li>
              <li>Be part of our mission to make a meaningful difference in lives.</li>
            </ul>
          </div>
        </div>
      </section>

      <YellowCTA />
    </>
  );
}