// src/app/projects/cyberurja/page.js
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CyberurjaPage() {
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
          if (target === 80) {
            counter.innerText = '80%';
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

    // Observe all stat items
    document.querySelectorAll('.stat-item').forEach((item) => {
      observer.observe(item);
    });

    // Accordion (agar HTML mein use ho to)
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

  // Featured centers for carousel
  const featuredCenters = [
    {
      name: "NAVRATAN AADARSH COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Delight Public School, Sadarpur",
      courses: "Basic Computers, Internet Safety",
    },
        {
      name: "PETRONET DIVYA TARANG COMPUTER EDU. CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: " SECTOR 10, NOIDA",
      courses : "Basic Computers, MS Office, Internet & Email",
    },
      {
      name: "PETRONET COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Ghaziabad",
      address: "MAHARAJA AGRASEN HIGHER SECONDARY SCHOOL, KHODA COLONY, GHAZIABAD",
      courses : "Basic Computers, MS Office, Internet & Email",
    },
    {
      name: "MADHURI SAXENA COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Nithari, Sector-31, Noida",
      courses: "Basic Computer Operations, MS Office",
    },
     {
      name: "DR A. B. L. SRIVASTAVA COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "NEW GREEN LAWNS PUBLIC SCHOOL, TOWER WALI GALI, VILLAGE BHANGEL, NOIDA",
      courses : "Basic Computers, MS Office, Internet & Email",
    },
       {
      name: "DR. A. B. L. SRIVASTAVA COMPUTER TRAINING CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "COMMUNITY CENTRE, SECTOR-31, NITHARI, NOIDA",
      courses : "Basic Computers, MS Office, Internet & Email",
    },
    {
      name: "DR. A. B. L. SRIVASTAVA COMPUTER TRAINING CENTRE",
      locationTag: "Delhi",
      address: "3365, GALI NO 73, E,-2 BLOCK, MOLARBAND, BADARPUR, NEW DELHI.",
      courses : "Basic Computers, MS Office, Internet & Email",
    },
    {
      name: "JAMIA MILIA- RIZVIA SCHOOL",
      locationTag: "Uttar Pradesh – Dadari",
      address: "Vill Chholos, Dadari, Gautam Buddh Nagar",
      courses: "Basic Computers, MS Office, Internet",
    }, 
    {
      name: "NAVRATAN COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Kanchan Public School, Garhi Chaukandi Sector 68, Noida",
      courses: "Basic Computers, Internet & Email",
    },
    {
      name: "J. P. SAXENA COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Chhalera, Sector-44, Noida",
      courses: "MS Office, Typing, Digital Skills",
    },
    {
      name: "M.G. BHATNAGAR COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Sector -22, Noida",
      courses: "Basic Computers, MS Office, Internet",
    },
    {
      name: "DAYA RANI COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Nithari Sector 31, Noida",
      courses: "Computer Basics, Office Applications",
    },
    
    {
      name: "SMT. KUSUM KHOSALA COMPUTER EDUCATION CENTRE",
      locationTag: "Uttar Pradesh – Noida",
      address: "Jama Masjid, Sect-8, Noida",
      courses: "MS Office, Email & Browsing",
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
          --success: #28a745;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          color: #333;
          background: #fff;
          line-height: 1.7;
        }

        h1, h2, h3, h4 {
          font-weight: 700;
          color: var(--dark);
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero h1 {
          color: white;
          font-size: 100px;
          margin-bottom: 3px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.6);
        }

        .hero p {
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

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

        .intro-section {
          background: #fffaf5;
          padding: 100px 0;
          display: flex;
          align-items: center;
        }

        .section-title {
          font-size: 42px;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .intro-text .lead-text {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .lead-text {
          text-align: center;
          margin-bottom: 35px;
          max-width: 70%;
          font-size: 19px;
        }

        .intro-text p {
          font-size: 16px;
          margin-bottom: 1.8rem;
          color: #444;
        }

        .key-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          margin: 40px 0;
        }

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

        .highlight-item i {
          font-size: 1.8rem;
          color: var(--primary);
        }

        .intro-visual {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .intro-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

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
          .intro-grid {
            grid-template-columns: 1fr;
          }
          .intro-visual {
            order: -1;
          }
        }

        section {
          padding: 100px 0;
        }

        .section-title {
          text-align: center;
          margin-bottom: 60px;
          font-size: 42px;
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

        .stats {
          background: linear-gradient(135deg, var(--secondary), #fbd45a);
          color: black;
          padding: 80px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          text-align: center;
        }

        .stat-item {
          padding: 30px;
          background: rgb(255, 255, 255);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .stat-item i {
          font-size: 3.5rem;
          margin-bottom: 15px;
          color: black;
        }

        .stat-item h3 {
          font-size: 2.5rem;
          margin: 10px 0;
          color: black;
        }

        .gallery-carousel {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          padding: 20px 0;
          scroll-snap-type: x mandatory;
        }

        .gallery-carousel img,
        .gallery-carousel video {
          width: 500px;
          height: 350px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          flex-shrink: 0;
          scroll-snap-align: center;
          transition: transform 0.4s;
        }

        .gallery-carousel img:hover,
        .gallery-carousel video:hover {
          transform: scale(1.05);
        }


        .stories{
          display: none;
        }
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .story-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          transition: transform 0.4s;
        }

        .story-card:hover {
          transform: translateY(-15px);
        }

        .story-card img {
          width: 100%;
          height: 320px;
          object-fit: cover;
        }

        .story-content {
          font-size: 14px;
          padding: 25px;
          font-weight: 500;
          text-align: center;
        }

        .story-content h4 {
          color: #00acf0;
          font-size: 22px;
          margin-bottom: 15px;
        }

        .network-section {
          background: linear-gradient(to bottom, #fffaf5, #ffffff);
          padding: 100px 0;
        }

        /* Carousel styles */
        .centers-carousel {
          display: flex;
          overflow-x: auto;
          gap: 30px;
          padding: 20px 0 40px;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        .centers-carousel::-webkit-scrollbar {
          display: none;
        }

        .centers-carousel {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

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
          color: black;
          font-size: 1.4rem;
        }

        .center-badge {
          background: var(--primary);
          color: black;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .center-card .address,
        .center-card .course {
          margin: 12px 0;
          color: #555;
          font-size: 1rem;
        }

        .center-card i {
          color: var(--primary);
          margin-right: 10px;
        }

        .directions-btn {
          display: none;
          // display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          background: var(--primary);
          color: black;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s;
        }

        .directions-btn:hover {
          background: var(--accent);
          transform: scale(1.05);
        }

        .view-all-wrapper {
          text-align: center;
          margin-top: 60px;
        }

        #map {
          height: 500px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin: 40px 0;
        }

        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 15px;
        }

        th,
        td {
          padding: 18px;
          text-align: left;
          background: white;
        }

        th {
          background: var(--primary);
          color: white;
        }

        tr {
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border-radius: 12px;
          overflow: hidden;
        }

        td a {
          color: var(--primary);
          font-weight: 600;
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

        .course-card h4 {
          font-size: 1.4rem;
          margin-bottom: 12px;
          color: var(--dark);
        }

        .course-card p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
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

        .qr-donate-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 50px auto 30px;
          max-width: 400px;
          text-align: center;
        }

        .qr-image {
          max-width: 260px;
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          margin-bottom: 20px;
          border: 8px solid white;
        }

        .qr-caption {
          font-size: 1.1rem;
          color: #444;
          margin: 0 0 25px 0;
          font-weight: 500;
        }

        .donate-btn {
          font-size: 1.4rem !important;
          padding: 18px 60px !important;
          min-width: 280px;
          text-align: center;
        }

        @media (max-width: 600px) {
          .qr-donate-center {
            max-width: 90%;
          }
          .qr-image {
            max-width: 220px;
          }
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
          text-decoration: none;
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 3rem;
          }
          .hero p {
            font-size: 1.2rem;
          }
          section {
            padding: 60px 0;
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
          <h1>Cyberurja</h1>
          <p>Empowering Youth & Communities Through Computer & Digital Education</p>
          <a href="#donate" className="btn">Support Digital Literacy Today</a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">Cyberurja: Bridging the Digital Divide</h2>

          <div className="intro-grid">
            <div className="intro-text">
              <p>
                Cyberurja is a forward-thinking initiative to provide computer education and digital literacy to underprivileged youth, women, and communities. We offer training in basic computing, internet usage, MS Office, online safety, and digital skills to help participants access better job opportunities, education, and services in the modern digital world.
              </p>

              <div className="key-highlights">
                <div className="highlight-item">
                  <i className="fas fa-calendar-check"></i>
                  <span>Since Inception</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>Hundreds of Participants Trained</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Centers in Delhi/NCR</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-certificate"></i>
                  <span>Digital Skills Certification</span>
                </div>
              </div>

              <a href="#donate" className="btn">Join Us in Empowering the Digital Future</a>
            </div>

            <div className="intro-visual">
              <img src="/img/cyberuja.jpg" alt="Students in Cyberurja computer training" className="intro-img" />
              <div className="image-overlay">
                <p>Digital Skills Today, Opportunities Tomorrow</p>
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
            Cyberurja is dedicated to equipping underprivileged individuals with essential computer and digital skills, enabling them to participate fully in the digital economy and improve their quality of life.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats">
        <div className="container">
          <h2 className="section-title" style={{ color: 'black' }}>
            Our Impact
          </h2>
          <div className="stats-grid">
            <div className="stat-item">
              <i className="fas fa-laptop"></i>
              <h3 className="counter" data-target="3000">
                0+
              </h3>
              <p>Participants Being Trained</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-desktop"></i>
              <h3 className="counter" data-target="14">
                0
              </h3>
              <p>Computer Labs/Centers</p>
            </div>
            {/* <div className="stat-item">
              <i className="fas fa-chart-line"></i>
              <h3 className="counter" data-target="80">
                0%
              </h3>
              <p>Placement & Skill Improvement Rate</p>
            </div> */}
            <div className="stat-item">
              <i className="fas fa-clock"></i>
              <h3 className="counter" data-target="3500">
                0+
              </h3>
              <p>Training Hours Delivered</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-handshake"></i>
              <h3 className="counter" data-target="6">
                0+
              </h3>
              <p>Corporate & Community Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">A Day in Cyberurja</h2>
          <div className="gallery-carousel">
            <img src="/img/cyberuja.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja1.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja2.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja3.jpeg" alt="Students learning computers" />
            <img src="/img/Cyberurja4.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja5.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja6.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja7.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja8.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja9.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja10.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja11.jpg" alt="Students learning computers" />
            <img src="/img/Cyberurja12.jpeg" alt="Students learning computers" />
            <img src="/img/Cyberurja13.jpeg" alt="Students learning computers" />
            <img src="/img/our-campaigns-7.jpg" alt="Typi3g practice session" />
            
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="stories">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <img src="/img/our-campaigns-7.jpg" alt="Amit" />
              <div className="story-content">
                <h4>Amit</h4>
                <p>Learned basic computers and got a data entry job, improving family income.</p>
              </div>
            </div>
            <div className="story-card">
              <img src="/img/our-campaigns-8.jpg" alt="Neha" />
              <div className="story-content">
                <h4>Neha</h4>
                <p>Mastered MS Office and now freelancing online.</p>
              </div>
            </div>
            <div className="story-card">
              <img src="/img/com1.jpeg" alt="Rohan" />
              <div className="story-content">
                <h4>Rohan</h4>
                <p>Gained digital skills and is now pursuing higher education online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Network Section */}
      <section className="network-section">
        <div className="container">
          <h2 className="section-title">Our Network of Digital Learning Centers</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.2rem', color: '#555' }}>
            Cyberurja is now spread across multiple centers in Delhi/NCR. Every center provides free computer and digital training to underprivileged youth and women. Explore the map and view the complete list of centers!
          </p>

          <div className="centers-carousel">
            {featuredCenters.map((center, index) => (
              <div key={index} className="center-card">
                <div className="center-location-tag">
                  {center.locationTag}
                </div>

                <div className="card-header">
                  <h4>{center.name}</h4>
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
            <Link href="/projects/cyberurja/centers" className="btn">
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
              <div className="card-icon">
                <i className="fas fa-power-off"></i>
              </div>
              <h4>Basic Computer Operations</h4>
              <p>Turning on/off computer, using mouse & keyboard, file management, folders, and basic troubleshooting.</p>
            </div>

            <div className="course-card">
              <div className="card-icon">
                <i className="fas fa-file-word"></i>
              </div>
              <h4>MS Office (Word, Excel, PowerPoint)</h4>
              <p>Document creation in Word, spreadsheets & formulas in Excel, professional presentations in PowerPoint.</p>
            </div>

            <div className="course-card">
              <div className="card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h4>Internet Browsing & Email</h4>
              <p>Safe web browsing, search techniques, using Gmail/Outlook, sending/receiving emails, attachments.</p>
            </div>

            <div className="course-card">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Online Safety & Cyber Awareness</h4>
              <p>Password security, avoiding phishing, social media safety, protecting personal data, cyber threats awareness.</p>
            </div>

            <div className="course-card">
              <div className="card-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4>Basic Digital Skills for Jobs</h4>
              <p>Online job search, resume making in Word/PDF, typing speed practice, using job portals, basic freelancing intro.</p>
            </div>

            <div className="course-card">
  <div className="card-icon">
    <i className="fas fa-calculator"></i>
  </div>
  <h4>Advance Tally Accounting</h4>
  <p>GST billing, inventory management, ledger creation, payroll handling, and complete accounting using Tally.</p>
</div>
          </div>
        </div>
      </section>

      {/* Donation */}
      <section className="donation" id="donate">
        <div className="container">
          <h2 className="section-title">Support Cyberurja</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
            Your contribution directly changes lives. See how your donation makes an impact:
          </p>
          <div className="donation-grid">
            {/* <div className="donation-item">
              <h3>₹1,000</h3>
              <p>Provides basic computer supplies for one student</p>
            </div> */}
            <div className="donation-item">
              <h3>₹10,000</h3>
              <p>Sponsors full computer course for one participant/year</p>
            </div>
            {/* <div className="donation-item">
              <h3>₹10,000</h3>
              <p>Helps maintain a computer lab for a month</p>
            </div> */}
          </div>

          <div className="qr-donate-center">
            <a href="YOUR_DONATION_LINK_HERE" className="btn donate-btn">Donate Now</a>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <a href="#donate" className="sticky-cta">
        Empower Through Digital Skills → Donate Now
      </a>
    </>
  );
}