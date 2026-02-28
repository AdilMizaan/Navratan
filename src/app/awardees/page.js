// src/app/awardees/page.js

import AwardeesFilter from '../components/AwardeesFilter';
import AwardeesFilter2 from '../components/AwardeesFilter2';

export const metadata = {
  title: 'Our Awardees - [Your NGO Name]',
  description: 'Explore our past awardees honored over 23 years.',
};

export default function AwardeesPage() {
  return (
    <>
      <style>{`
        .awardees-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          background:rgb(255, 255, 255);
          min-height: 100vh;
        }
        .awardees-heading {
          text-align: center;
          margin-bottom: 50px;
        }
        .main-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1a3c6d;          /* dark blue - NGO feel */
          margin-bottom: 16px;
        }
        .sub-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2c5282;
          margin-bottom: 20px;
        }
        .intro-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #4a5568;
          max-width: 900px;
          margin: 0 auto 40px;
        }
        .stats-bar {
          text-align: center;
          font-size: 1.1rem;
          font-weight: 500;
          color: #2f855a;          /* green for positive impact */
          padding: 20px;
          background: #e6fffa;
          border-radius: 12px;
          margin-top: 60px;
        }

        @media (max-width: 768px) {
          .main-title { font-size: 2.4rem; }
          .sub-title { font-size: 1.6rem; }
        }
      `}</style>

      <div className="awardees-container">
        <div className="awardees-heading">
          <h1 className="main-title">Our Esteemed Awardees</h1>
          <h2 className="sub-title">Celebrating Excellence Over 23 Years</h2>
          <p className="intro-text">
            Since our inception, we have honored approximately 345 individuals and organizations 
            across various categories for their remarkable contributions to society and humanity. 
            These awardees represent the true spirit of service, innovation, and compassion.
          </p>
        </div>

        {/* <AwardeesFilter /> */}
        <AwardeesFilter2 />

        <div className="stats-bar">
          23 Years of Impact • ~345 Dedicated Awardees • 50,000+ Lives Touched & Attendees
        </div>
      </div>
    </>
  );
}