"use client";

import Link from 'next/link';
import YellowCTA from '../components/YellowCTA';
import PartnersSection from '../components/PartnersSection';

import { useEffect, useState } from "react";

export default function AboutUs() {

  const [years,setYears]=useState(0)
  const [projects,setProjects]=useState(0)
  const [volunteers,setVolunteers]=useState(0)
  const [csr,setCsr]=useState(0)

  useEffect(()=>{

    const counter=(setState,max)=>{
      let start=0
      const interval=setInterval(()=>{
        start++
        setState(start)
        if(start===max) clearInterval(interval)
      },40)
    }

    counter(setYears,21)
    counter(setProjects,27)
    counter(setVolunteers,45)
    counter(setCsr,12)

  },[])

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

        /* ------------------------- ABOUT SECTION (Fixed Responsive) ------------------------- */
        .about-section {
          width: 100%;
          padding: 80px 0 30px;
        }

        .about-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;           /* Important: Mobile pe padding control */
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-title {
          font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
        }

        .about-heading {
          font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -38px 0 20px 0;
        }

        .about-text {
          color: #666;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .about-point {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }

        .check-icon {
          width: 40px;
          height: 40px;
          background: #fbd45a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          flex-shrink: 0;
        }

        .point-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .point-text {
          font-size: 14px;
          color: #666;
        }

        .about-images {
          position: relative;
        }

        .img-big {
          width: 100%;           /* Changed from 80% to 100% */
          border-radius: 12px;
        }

        .img-small {
          width: 200px;
          position: absolute;
          bottom: -30px;
          left: -40px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* ==================== RESPONSIVE FIX ==================== */
        @media (max-width: 1024px) {
          .about-container {
            gap: 40px;
          }
        }

        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;   /* Single column on mobile */
            gap: 50px;
          }

          .img-small {
            position: relative;           /* No absolute positioning */
            left: 0;
            bottom: 0;
            margin-top: 25px;
            width: 180px;                 /* Slightly smaller */
          }

          .about-title {
            font-size: 48px;
          }

          .about-heading {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 0 20px;
          }

          .about-container {
            padding: 0 15px;
          }

          .img-big, .img-small {
            border-radius: 10px;
          }
        }

        /* Baaki purana code same rakh diya hai */
        @media (max-width: 1024px) {
          .section-title { font-size: 42px; }
          .section-subtitle { font-size: 28px; }
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 50px; }
          .projects-section { padding: 80px 0 60px; }
        }

      `}</style>

      {/* Hero Section - Same */}
      <section className="hero">
        <div className="video-container">
          <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
        </div>
      </section>

      {/* FIXED ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">

          {/* LEFT CONTENT */}
          <div>
            <div className="about-title">About Us</div>

            <div className="about-heading">
              If you light a lamp for Somebody, it will also brighten your path - Buddha
            </div>

            <p className="about-text">
              Welcome to NAVRATAN FOUNDATIONS, a registered non-profit society dedicated
              to advancing community development with a strong commitment to achieving
              the Sustainable Development Goals (SDGs). Our primary goal is to foster
              comprehensive and value-based community growth by extending support and
              resources to those in need.
            </p>

            <div className="about-point">
              <div className="check-icon">✓</div>
              <div>
                <div className="point-title">Empowering Women through Skill Development</div>
                <div className="point-text">
                  We provide women with training programs to help them gain skills,
                  achieve financial independence, and foster self-reliance.
                </div>
              </div>
            </div>

            <div className="about-point">
              <div className="check-icon">✓</div>
              <div>
                <div className="point-title">Promoting Quality Education</div>
                <div className="point-text">
                  Our initiatives focus on grassroots education, adult education,
                  and computer training to empower underprivileged children and adults.
                </div>
              </div>
            </div>

            <div className="about-point">
              <div className="check-icon">✓</div>
              <div>
                <div className="point-title">Enhancing Mental Health and Well-being</div>
                <div className="point-text">
                  We actively support mental health awareness and provide resources
                  to improve the emotional and social well-being of communities.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="about-images">
            <img
              src="/img/who-we-are-3.jpg"
              className="img-big"
              alt="about"
            />

            <img
              src="/img/who-we-are-2.jpg"
              className="img-small"
              alt="about"
            />
          </div>

        </div>
      </section>

      {/* Baaki pura code same rakha hai (TEXT CONTENT, STATS, PRESIDENT etc.) */}
      <section className="about-extra">
        {/* ... your existing content ... */}
      </section>

      <section className="stats-section">
        {/* ... stats ... */}
      </section>

      <section className="president">
        {/* ... president message ... */}
      </section>

      <PartnersSection />
      <YellowCTA />
    </>
  );
}