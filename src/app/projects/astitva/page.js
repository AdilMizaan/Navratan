// src/app/projects/astitva/page.js
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AstitvaPage() {
  const statRefs = useRef([]);

  useEffect(() => {
    // Counter Animation
    const runCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      const speed = 200;
      const increment = target / speed;
      let count = 0;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count) + (target > 1000 ? '+' : '');
          setTimeout(updateCount, 1);
        } else {
          if (target === 85) {
            counter.innerText = '85%';
          } else {
            counter.innerText = target + (target >= 1000 ? '+' : '');
          }
        }
      };
      updateCount();
    };

    // Intersection Observer for stats visibility & counter trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            if (!entry.target.dataset.animated) {
              const counter = entry.target.querySelector('.counter');
              if (counter) runCounter(counter);
              entry.target.dataset.animated = 'true';
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.stat-item').forEach((item) => {
      observer.observe(item);
    });

    // Accordion (if used)
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  // Featured centers with location tag
  const featuredCenters = [
    {
      name: "Noida Sector 52 Center",
      badge: "Main Hub",
      locationTag: "Uttar Pradesh – Noida",
      address: "E-74, Sector 52, Noida, Uttar Pradesh 201307",
      courses: "Basic Stitching, Advanced Tailoring etc.",
      lat: 28.5961,
      lng: 77.3639,
    },
    {
      name: "J. J. COLONY SECTOR 17, NOIDA",
      locationTag: "Uttar Pradesh – Noida",
      address: "J. J. Colony, Sector 17, Noida",
      courses: "Basic & Advanced Tailoring",
    },
    {
      name: "SAMPOORN JAN KALYAN SOCIETY, BISRAKH, NOIDA",
      locationTag: "Uttar Pradesh – Noida",
      address: "Sampoorna Jan Kalyan Society, Bisrakh, Noida",
      courses: "Women Tailoring Training",
    },
    {
      name: "SMT.MANJU RANI WOMEN TAILORING TRAINING CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Kanchan Public School, Sect- 31, Noida",
      courses: "Basic Stitching, Tailoring",
    },
    {
      name: "RIYA FOUNDATION, HAROLA",
      locationTag: "Uttar Pradesh – Noida",
      address: "Sector 5, Harola, Noida",
      courses: "Tailoring & Stitching",
    },
    {
      name: "SONIA KOHALI WOMEN TAILORING TRAINING CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Sector-73, Noida",
      courses: "Basic & Advanced Tailoring",
    },
    {
      name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Khajur Colony, Village Sadarpur, Noida",
      courses: "Women Tailoring Training",
    },
    {
      name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Jama Masjid, Sector -8, Noida",
      courses: "Basic Stitching, Tailoring",
    },
  ];

  return (
    <>
      <style jsx global>{`
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

        :root {
          --primary: #fbd45a;
          --secondary: #fbd45a;
          --accent: white;
          --light: #f8f9fa;
          --dark: #212529;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Roboto', sans-serif; color: #333; background: #fff; line-height: 1.7; }
        h1, h2, h3, h4 { font-weight: 700; color: var(--dark); }

        .container { max-width: 1300px; margin: 0 auto; padding: 0 20px; }

        .hero h1 { color: white; font-size: 100px; margin-bottom: 3px; text-shadow: 0 4px 12px rgba(0,0,0,0.6); }
        .hero p { font-size: 1.5rem; margin-bottom: 2.5rem; font-weight: 300; }

        .btn {
          display: inline-block;
          padding: 14px 40px;
          background: var(--primary);
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

        .intro-section { background: #fffaf5; padding: 100px 0; display: flex; align-items: center; }
        .section-title {
          font-size: 42px;
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }
        .section-title::after {
          content: '';
          width: 80px;
          height: 4px;
          background: var(--primary);
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .intro-text p { font-size: 16px; margin-bottom: 1.8rem; color: #444; }
        .key-highlights { display: flex; flex-wrap: wrap; gap: 25px; margin: 40px 0; }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
          font-weight: 500;
          color: var(--dark);
        }
        .highlight-item i { font-size: 1.8rem; color: var(--primary); }

        .intro-visual { position: relative; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
        .intro-img { width: 700px; height: 450px; object-fit: cover; display: block; }
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          color: white;
          padding: 25px;
          text-align: center;
          font-size: 1.3rem;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .intro-grid { grid-template-columns: 1fr; }
          .intro-visual { order: -1; }
        }

        section { padding: 100px 0; }

        .stats {
          background: linear-gradient(135deg, var(--secondary), #fbd45a);
          color: black;
          padding: 80px 0;
        }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; text-align: center; }
        .stat-item {
          padding: 30px;
          background: rgb(255, 255, 255);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        .stat-item i { font-size: 3.5rem; margin-bottom: 15px; color: black; }
        .stat-item h3 { font-size: 2.5rem; margin: 10px 0; color: black; }

        .gallery-carousel { display: flex; overflow-x: auto; gap: 20px; padding: 20px 0; scroll-snap-type: x mandatory; }
        .gallery-carousel img, .gallery-carousel video {
          width: 500px; height: 350px; object-fit: cover; border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15); flex-shrink: 0; scroll-snap-align: center;
          transition: transform 0.4s;
        }

        .stories{
        display: none;
        }
        .stories-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; }
        .story-card {
          background: white; border-radius: 20px; overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1); transition: transform 0.4s;
        }
        .story-card:hover { transform: translateY(-15px); }
        .story-card img { width: 100%; height: 320px; object-fit: cover; }
        .story-content { padding: 25px; text-align: center; }
        .story-content h4 { color: #00acf0; font-size: 22px; margin-bottom: 15px; }

        .network-section {
          background: linear-gradient(to bottom, #fffaf5, #ffffff);
          padding: 100px 0;
        }

        .centers-carousel {
          display: flex;
          overflow-x: auto;
          gap: 30px;
          padding: 20px 0 40px;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        .centers-carousel::-webkit-scrollbar { display: none; }
        .centers-carousel { -ms-overflow-style: none; scrollbar-width: none; }

        .center-card {
          flex: 0 0 360px;
          background: white;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
          scroll-snap-align: start;
        }

        .center-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          border-color: var(--primary);
        }

        .center-location-tag {
          font-size: 0.85rem;
          font-weight: 600;
          color: #00acf0;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          gap: 12px;
        }

        .center-card h4 {
          margin: 0;
          font-size: 1.4rem;
          line-height: 1.3;
        }

        .center-badge {
          background: var(--primary);
          color: black;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .center-card .address,
        .center-card .course {
          margin: 12px 0;
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
        }

        .center-card i {
          color: var(--primary);
          margin-right: 10px;
        }

        .directions-btn {
          display: none;
          // display: inline-block;
          margin-top: 15px;
          padding: 10px 24px;
          background: var(--primary);
          color: black;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .directions-btn:hover {
          background: #00acf0;
          color: white;
          transform: translateY(-3px);
        }

        .view-all-wrapper {
          text-align: center;
          margin-top: 70px;
        }

        @media (max-width: 768px) {
          .centers-carousel .center-card { flex: 0 0 320px; }
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .course-card {
          background: white;
          border-radius: 16px;
          padding: 30px 25px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(251,212,90,0.25);
          border-color: var(--primary);
        }

        .card-icon {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 20px;
          background: rgba(251,212,90,0.1);
          width: 90px;
          height: 90px;
          line-height: 90px;
          border-radius: 50%;
          margin: 0 auto 20px;
        }

        .donation {
          background: linear-gradient(135deg, #8ddcfb, #8ddcfb);
          text-align: center;
        }

        .donation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }
            .donate-btn {
          font-size: 1.4rem !important;
          padding: 18px 60px !important;
          min-width: 280px;
          text-align: center;
        }

        .donation-item {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(233,30,99,0.15);
        }

        .donation-item h3 {
          color: var(--primary);
          font-size: 2rem;
        }

        .sticky-cta {
          text-decoration: none;
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: var(--primary);
          color: black;
          padding: 15px 30px;
          border-radius: 50px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          z-index: 1000;
          font-weight: 600;
          transition: all 0.3s;
        }

        .sticky-cta:hover {
          background: #00acf0;
          color: white;
          transform: scale(1.08);
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Astitva</h1>
          <p>Empowering Women Through Skill, Confidence & Independence</p>
          <a href="#donate" className="btn">Support A Woman Today</a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">Astitva: A Woman's Journey Towards Self-Empowerment</h2>

          <div className="intro-grid">
            <div className="intro-text">
              <p>
                Launched in <strong>2009</strong> by Navratan Foundations, <strong>Astitva</strong> is our flagship initiative dedicated to breaking this cycle. We reach out to marginalized women in villages, slums, and low-income communities across Delhi/NCR, providing them with free vocational training in tailoring and stitching — transforming them from dependent homemakers to confident, financially independent earners.
              </p>

              <div className="key-highlights">
                <div className="highlight-item">
                  <i className="fas fa-calendar-check"></i>
                  <span>Since 2009</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>Over 10,000 Women Empowered</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>37 Active Centers in Delhi/NCR</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-certificate"></i>
                  <span>Certification & Job Placement Support</span>
                </div>
              </div>

              <a href="#donate" className="btn">Join Us in Empowering More Lives</a>
            </div>

            <div className="intro-visual">
              <img
                src="/img/astitva15.jpg"
                alt="Women learning tailoring in Astitva center"
                className="intro-img"
              />
              <div className="image-overlay">
                <p>Skills Today, Independence Tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            Astitva is dedicated to uplifting underprivileged women by providing vocational training in tailoring and related skills, enabling financial independence and self-reliance since 2009.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats">
        <div className="container">
          <h2 className="section-title" style={{ color: 'black' }}>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <i className="fas fa-users"></i>
              <h3 className="counter" data-target="10000">0+</h3>
              <p>Women Empowered</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-school"></i>
              <h3 className="counter" data-target="37">0</h3>
              <p>Active Centers</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-chart-line"></i>
              <h3 className="counter" data-target="85">0%</h3>
              <p>Sustainable Livelihood</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-clock"></i>
              <h3 className="counter" data-target="18500">0+</h3>
              <p>Training Hours/Year</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-handshake"></i>
              <h3 className="counter" data-target="5">0+</h3>
              <p>Corporate Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">A Day in Astitva</h2>
          <div className="gallery-carousel">
            {/* <img src="/img/astitva1.jpg" alt="Women in sewing class" /> */}
            <img src="https://tzuchi-en-backend.storage.googleapis.com/content/images/2024/11/1-800-4.jpg" alt="Group training session" />
            {/* <img src="/img/astitva1.jpg" alt="Women learning stitching" /> */}
            <img src="https://thumbs.dreamstime.com/b/group-woman-tailoring-class-discuissing-teacher-cloth-stitching-training-concept-skill-development-250148147.jpg" alt="Tailoring discussion" />
            <img src="https://tzuchi-en-backend.storage.googleapis.com/content/images/2024/11/2-800-6.jpg" alt="Empowered women sewing" />
            <img src="https://media.holtinternational.org/wp-content/uploads/2023/07/Nisha.jpg" alt="Woman with sewing machine" />
            <img src="/img/astitva2.jpg" alt="Women learning stitching" />
            {/* <img src="/img/astitva3.jpg" alt="Women learning stitching" /> */}
            <img src="/img/astitva4.jpg" alt="Women learning stitching" />
            <img src="/img/astitva5.jpg" alt="Women learning stitching" />
            {/* <img src="/img/astitva6.jpg" alt="Women learning stitching" /> */}
            {/* <img src="/img/astitva7.jpg" alt="Women learning stitching" /> */}
            {/* <img src="/img/astitva8.jpg" alt="Women learning stitching" /> */}
            {/* <img src="/img/astitva9.jpg" alt="Women learning stitching" /> */}
            <img src="/img/astitva10.jpg" alt="Women learning stitching" />
            <img src="/img/astitva11.jpg" alt="Women learning stitching" />
            <img src="/img/astitva12.jpg" alt="Women learning stitching" />
            <img src="/img/astitva13.jpg" alt="Women learning stitching" />
            {/* <img src="/img/astitva14.jpg" alt="Women learning stitching" /> */}
            <img src="/img/astitva15.jpg" alt="Women learning stitching" />
            <img src="/img/astitva16.jpg" alt="Women learning stitching" />
            {/* <img src="/img/astitva17.jpg" alt="Women learning stitching" /> */}
            <img src="/img/astitva18.jpg" alt="Women learning stitching" />
            {/* <img src="/img/astitva19.jpg" alt="Women learning stitching" /> */}
            <img src="/img/astitva20.jpg" alt="Women learning stitching" />
            <img src="/img/astitva21.jpg" alt="Women learning stitching" />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="stories">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <img src="https://www.shutterstock.com/image-photo/portrait-happy-traditional-indian-woman-260nw-2292831577.jpg" alt="Sunita" />
              <div className="story-content">
                <h4>Sunita</h4>
                <p>From domestic worker to successful boutique owner in just 6 months through Astitva training.</p>
              </div>
            </div>
            <div className="story-card">
              <img src="/img/story1.jpg" alt="Priya" />
              <div className="story-content">
                <h4>Priya</h4>
                <p>Gained financial stability and now supports her family independently with tailoring skills.</p>
              </div>
            </div>
            <div className="story-card">
              <img src="https://www.globalgiving.org/pfil/13929/pict_original.jpg" alt="Rani" />
              <div className="story-content">
                <h4>Rani</h4>
                <p>Built her own stitching business and became a role model in her community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="network-section">
        <div className="container">
          <h2 className="section-title">Our Network of Empowerment Centers</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.2rem', color: '#555' }}>
            Astitva is now spread across 37+ centers in Delhi/NCR. Every center provides training to underprivileged women. Explore on the map and view the complete list of centers!
          </p>

          <div className="centers-carousel">
            {featuredCenters.map((center, index) => (
              <div key={index} className="center-card">
                <div className="center-location-tag">
                  {center.locationTag}
                </div>

                <div className="card-header">
                  <h4>{center.name}</h4>
                  {/* {center.badge && <span className="center-badge">{center.badge}</span>} */}
                </div>

                <p className="address">
                  <i className="fas fa-map-marker-alt"></i> {center.address}
                </p>

                <p className="course">
                  <i className="fas fa-book-open"></i> Major Courses: {center.courses}
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-btn"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>

          <div className="view-all-wrapper">
            <Link href="/projects/astitva/centers" className="btn">
              View All Centers →
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="curriculum">
        <div className="container">
          <h2 className="section-title">What We Teach</h2>

          <div className="courses-grid">
            <div className="course-card">
              <div className="card-icon"><i className="fas fa-scissors"></i></div>
              <h4>Basic Stitching</h4>
              <p>Introduction to sewing machines, basic hand & machine stitches, threading, and simple garment construction.</p>
            </div>

            <div className="course-card">
              <div className="card-icon"><i className="fas fa-cut"></i></div>
              <h4>Advanced Tailoring</h4>
              <p>Pattern making, garment fitting, advanced stitching techniques, alterations, and professional finishing.</p>
            </div>

            <div className="course-card">
              <div className="card-icon"><i className="fas fa-paint-brush"></i></div>
              <h4>Fashion Design Basics</h4>
              <p>Sketching, color theory, fabric selection, trend understanding, and basic design concepts.</p>
            </div>

            {/* <div className="course-card">
              <div className="card-icon"><i className="fas fa-wallet"></i></div>
              <h4>Financial Literacy</h4>
              <p>Budgeting, saving, basic banking, loan awareness, entrepreneurship basics, and income management.</p>
            </div> */}

            <div className="course-card">
              <div className="card-icon"><i className="fas fa-comments"></i></div>
              <h4>Soft Skills & Entrepreneurship</h4>
              <p>Communication, confidence building, time management, customer handling, and starting small business ideas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation */}
      <section className="donation" id="donate">
        <div className="container">
          <h2 className="section-title">Support Astitva</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
            Your contribution directly changes lives. See how your donation makes an impact:
          </p>
          <div className="donation-grid">
            {/* <div className="donation-item">
              <h3>₹1,000</h3>
              <p>Provides a complete sewing kit for one student</p>
            </div> */}
            <div className="donation-item">
              <h3>₹2500</h3>
              <p>Sponsors full 6-month training for one woman</p>
            </div>
            {/* <div className="donation-item">
              <h3>₹10,000</h3>
              <p>Helps maintain a training center for a month</p>
            </div> */}
          </div>

          <div className="qr-donate-center">
            <a href="YOUR_DONATION_LINK_HERE" className="btn donate-btn">Donate Now</a>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <a href="#donate" className="sticky-cta">
        Empower a Woman Today → Donate Now
      </a>
    </>
  );
}