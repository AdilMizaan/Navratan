'use client'

import { useEffect, useRef } from 'react'

export default function SheetKavatch() {
  const impactBarRef = useRef(null)

  useEffect(() => {
    const counters = document.querySelectorAll('.counter')

    const startCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute('data-target')
        const duration = 3000
        let startTime = null

        const step = (currentTime) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          const easeOutQuad = (t) => t * (2 - t)
          counter.innerText = Math.floor(easeOutQuad(progress) * target)

          if (progress < 1) {
            window.requestAnimationFrame(step)
          } else {
            counter.innerText = target
            counter.classList.add('flicker-infinite')
          }
        }

        window.requestAnimationFrame(step)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (impactBarRef.current) {
      observer.observe(impactBarRef.current)
    }

    return () => {
      if (impactBarRef.current) {
        observer.unobserve(impactBarRef.current)
      }
    }
  }, [])

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
          background: #fff;
        }

        .hero {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('https://navratanfoundations.com/_next/static/media/hero-one-big.3b2cd132.jpg') center/cover;
          height: 500px;
          display: flex;
          align-items: center;
          padding: 0 10%;
          color: white;
        }

        .flagship-badge {
          background: var(--primary-yellow);
          color: #000;
          padding: 5px 15px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 4px;
          margin-bottom: 15px;
          display: inline-block;
        }

        .hero h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 1.2rem;
          max-width: 600px;
        }

        .mission-grid {
          padding: 80px 10%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          background: var(--light-blue);
          align-items: stretch;
        }

        .card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .card h2 {
          margin-bottom: 20px;
          font-size: 2.2rem;
        }

        .category-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 25px;
        }

        .cat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--light-blue);
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .cat-item i {
          color: var(--primary-yellow);
        }

        .card-image-only {
          padding: 0 !important;
          overflow: hidden;
          border-radius: 12px;
          display: flex;
        }

        .mission-right-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .how-it-works {
          padding: 80px 10% 60px;
          text-align: center;
        }

        .heading-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .yellow-line {
          width: 70px;
          height: 4px;
          background-color: var(--primary-yellow);
          margin-bottom: 20px;
        }

        .how-it-works h2,
        .awardees h2,
        .card h2 {
          font-size: 2.2rem;
          color: #212121;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .steps {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
        }

        .step {
          flex: 1;
          padding: 0 15px;
        }

        .step i {
          width: 70px;
          height: 70px;
          background: var(--primary-yellow);
          border-radius: 50%;
          line-height: 70px;
          font-size: 1.8rem;
          margin-bottom: 20px;
          display: inline-block;
        }

        .impact-bar {
          background: #fff;
          display: flex;
          justify-content: space-around;
          padding: 50px 10%;
          text-align: center;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .stat-item h3 {
          color: var(--primary-yellow);
          font-size: 2.5rem;
          margin-bottom: 5px;
        }

        .stat-item p {
          color: var(--text-gray);
          letter-spacing: 1px;
        }

        .counter {
          transition: text-shadow 0.3s ease-in-out;
        }

        .flicker-infinite {
          animation: slow-glow-flicker 3s infinite ease-in-out;
        }

        @keyframes slow-glow-flicker {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 5px rgba(251, 212, 90, 0.2);
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            text-shadow: 0 0 20px rgba(251, 212, 90, 0.8),
              0 0 30px rgba(251, 212, 90, 0.4);
            transform: scale(1.02);
            color: #000;
          }
        }

        .awardees {
          padding: 80px 0;
          background: #fff;
          text-align: center;
          overflow: hidden;
        }

        .awardees-title-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .slider-container {
          margin-top: 50px;
          width: 100%;
        }

        .slider-track {
          display: flex;
          width: calc(300px * 6);
          animation: scrollLeft 20s linear infinite;
          gap: 25px;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .awardee-card {
          width: 280px;
          flex-shrink: 0;
          text-align: center;
        }

        .awardee-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .awardee-card h4 {
          font-size: 1.1rem;
          color: var(--text-dark);
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-305px * 3)); }
        }

        .dual-cta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 60px 10%;
        }

        .cta-box {
          padding: 50px;
          text-align: center;
          border-radius: 15px;
          color: white;
        }

        .cta-nominate {
          background: #2c3e50;
        }

        .cta-sponsor {
          background: #27ae60;
        }

        .cta-box h3 {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .cta-box .btn {
          display: inline-block;
          padding: 12px 30px;
          background: #fff;
          color: #333;
          text-decoration: none;
          border-radius: 25px;
          margin-top: 25px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .mission-grid,
          .impact-bar,
          .steps,
          .dual-cta {
            display: block;
          }

          .step,
          .stat-item,
          .cta-box {
            margin-bottom: 40px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">
          <span className="flagship-badge">Annual Winter Drive</span>
          <h1>Sheet Kavatch</h1>
          <p>
            Ensuring warmth and dignity for every child. A dedicated initiative to distribute woollen uniform sweaters across government and slum schools.
          </p>
        </div>
      </section>

      <section className="mission-grid">
        <div className="card">
          <h2>The Mission of Warmth</h2>
          <p style={{ marginBottom: '20px', color: 'var(--text-gray)' }}>
            In the month of November, Navratan Foundations reaches out to those in need, distributing cozy warm uniform sweaters to ensure no child struggles with the chilly winter every year.
          </p>
          <div className="category-mini-grid">
            <div className="cat-item">
              <i className="fas fa-check-circle"></i> 50+ Schools
            </div>
            <div className="cat-item">
              <i className="fas fa-check-circle"></i> 45,000+ Sweaters
            </div>
            <div className="cat-item">
              <i className="fas fa-check-circle"></i> Slum Schools of NGOs
            </div>
            <div className="cat-item">
              <i className="fas fa-check-circle"></i>V-Neck Winter Uniforms
            </div>
            <div className="cat-item">
              <i className="fas fa-check-circle"></i> Delhi/NCR in place of GB Nagar  Coverage
            </div>
            <div className="cat-item">
              <i className="fas fa-check-circle"></i> Child Welfare
            </div>
          </div>
        </div>
        <div className="card card-image-only">
          <img
            src="/img/Sheet kavatch6.jpeg"
            alt="Sheet Kavatch Distribution"
            className="mission-right-img"
          />
        </div>
      </section>

      <section className="how-it-works">
        <div className="heading-wrapper">
          <h2>The Sheet Kavatch Journey</h2>
          <div className="yellow-line"></div>
        </div>
        <div className="steps">
          <div className="step">
            <i className="fas fa-search-location"></i>
            <h4>1. Survey</h4>
            <p>
              We identify schools and areas where children are most vulnerable to
              the winter chill.
            </p>
          </div>
          <div className="step">
            <i className="fas fa-hand-holding-heart"></i>
            <h4>2. Collection</h4>
            <p>
              Generous contributions from donors help us procure high-quality warm
              sweaters.
            </p>
          </div>
          <div className="step">
            <i className="fas fa-hands-helping"></i>
            <h4>3. Distribution</h4>
            <p>
              A grand distribution drive where we bring smiles and warmth to
              thousands of children.
            </p>
          </div>
        </div>
      </section>

      <section className="impact-bar" ref={impactBarRef}>
        <div className="stat-item">
          <h3><span className="counter" data-target="50">0</span>+</h3>
          <p>Schools Covered</p>
        </div>
        <div className="stat-item">
          <h3><span className="counter" data-target="45000">0</span>+</h3>
          <p>Sweaters Distributed</p>
        </div>
        <div className="stat-item">
          <h3><span className="counter" data-target="22">0</span>+</h3>
          <p>Years of Warmth</p>
        </div>
        <div className="stat-item">
          <h3><span className="counter" data-target="15">0</span>+</h3>
          <p>Regions Reached</p>
        </div>
      </section>

      <section className="awardees">
        <div className="awardees-title-wrapper">
          <h2>Project Gallery</h2>
          <div className="yellow-line"></div>
        </div>
        <div className="slider-container">
          <div className="slider-track">
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch1.jpg"
                alt="Gallery"
              />
              <h4>Distribution Day</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch2.jpeg"
                alt="Gallery"
              />
              <h4>Happy Faces</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch3.jpeg"
                alt="Gallery"
              />
              <h4>Volunteer Support</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch4.jpeg"
                alt="Gallery"
              />
              <h4>Distribution Day</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch5.jpeg"
                alt="Gallery"
              />
              <h4>Happy Faces</h4>
            </div>
            {/* <div className="awardee-card">
              <img
                src="/img/Sheet kavatch6.jpeg"
                alt="Gallery"
              />
              <h4>Volunteer Support</h4>
            </div> */}
            {/* <div className="awardee-card">
              <img
                src="/img/Sheet kavatch7.jpeg"
                alt="Gallery"
              />
              <h4>Happy Faces</h4>
            </div> */}

            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch1.jpg"
                alt="Gallery"
              />
              <h4>Distribution Day</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch2.jpeg"
                alt="Gallery"
              />
              <h4>Happy Faces</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch3.jpeg"
                alt="Gallery"
              />
              <h4>Volunteer Support</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch4.jpeg"
                alt="Gallery"
              />
              <h4>Distribution Day</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch5.jpeg"
                alt="Gallery"
              />
              <h4>Happy Faces</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch6.jpeg"
                alt="Gallery"
              />
              <h4>Volunteer Support</h4>
            </div>
            <div className="awardee-card">
              <img
                src="/img/Sheet kavatch7.jpeg"
                alt="Gallery"
              />
              <h4>Happy Faces</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="dual-cta">
        <div className="cta-box cta-nominate">
          <h3>Sponsor a Child</h3>
          <p>
            Help us protect one more child from the cold. Your small gift makes a
            big difference.
          </p>
          <a href="#" className="btn">Donate Now</a>
        </div>
        <div className="cta-box cta-sponsor">
          <h3>Become a Partner</h3>
          <p>
            Corporates and individuals can partner with us for bulk distribution
            drives.
          </p>
          <a href="#" className="btn">Inquire Now</a>
        </div>
      </section>
    </>
  )
}