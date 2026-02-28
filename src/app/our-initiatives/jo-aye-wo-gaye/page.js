'use client'

import { useEffect, useRef } from 'react'

export default function JoAayeWoGaye() {
  const impactBarRef = useRef(null)

  useEffect(() => {
    const counters = document.querySelectorAll('.counter')

    const startCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute('data-target')
        const duration = 2500
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
          --primary-yellow: #fbd45a;     /* ← changed here */
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

        .hero {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('https://navratanfoundations.com/_next/static/media/hero-one-big.3b2cd132.jpg') center/cover;
          height: 500px;
          display: flex;
          align-items: center;
          padding: 0 10%;
          color: white;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          max-width: 600px;
        }

        .season-badge {
          background: var(--primary-yellow);
          color: #000;
          padding: 5px 15px;
          border-radius: 5px;
          display: inline-block;
          font-weight: 700;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }

        .event-details-bar {
          background: #fff;
          padding: 20px 10%;
          margin-top: -40px;
          position: relative;
          z-index: 10;
        }

        .event-info-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          gap: 20px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .info-item i {
          font-size: 1.8rem;
          color: var(--primary-yellow);
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 40px 10%;
          background: var(--light-blue);
          align-items: stretch;
        }

        .card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #212121;
        }

        .mission-desc {
          margin-bottom: 30px;
          color: var(--text-gray);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .mission-list {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .mission-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .mission-item i {
          color: var(--primary-yellow);
          font-size: 1.4rem;
          margin-top: 3px;
        }

        .mission-item strong {
          display: block;
          margin-bottom: 3px;
          font-size: 1rem;
        }

        .mission-item p {
          font-size: 0.9rem;
          color: var(--text-gray);
          margin: 0;
        }

        .mission-bg-img {
          background-image: url('https://navratanfoundations.com/assets/img/events/event-2.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 500px;
          border-radius: 12px;
        }

        .mentor-section {
          padding: 60px 10%;
          background: #fdfdfd;
          text-align: center;
        }

        .mentor-section h2 {
          font-size: 2.2rem;
          color: #212121;
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

        .mentor-card {
          background: white;
          border-left: 5px solid var(--primary-yellow);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          max-width: 800px;
          margin: 0 auto;
        }

        .mentor-tag {
          color: var(--primary-yellow);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        .rules-section {
          padding: 60px 10%;
          background: var(--light-blue);
        }

        .rules-section h2 {
          text-align: center;
          margin-bottom: 10px;
          font-size: 2.2rem;
        }

        .rules-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        .rule-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.02);
        }

        .rule-card i {
          color: var(--primary-yellow);
        }

        .supported-by {
          padding: 30px 10%;
          text-align: center;
          background: #fff;
          border-top: 1px solid #eee;
          font-style: italic;
          color: var(--text-gray);
        }

        .how-it-works {
          padding: 60px 10%;
          text-align: center;
        }

        .how-it-works h2 {
          font-size: 2.2rem;
          color: #212121;
        }

        .steps {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          position: relative;
        }

        .step {
          flex: 1;
          z-index: 1;
        }

        .step i {
          width: 60px;
          height: 60px;
          background: var(--primary-yellow);
          border-radius: 50%;
          line-height: 60px;
          font-size: 1.5rem;
          margin-bottom: 15px;
        }

        .impact-bar {
          background: var(--light-blue);
          display: flex;
          justify-content: space-around;
          padding: 30px 10%;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .stat-item h3 {
          color: var(--primary-yellow);
          font-size: 2rem;
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
            text-shadow: 0 0 5px rgba(251, 212, 90, 0.2);     /* updated shadow to match new color */
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            text-shadow: 0 0 20px rgba(251, 212, 90, 0.8),
              0 0 30px rgba(251, 212, 90, 0.4);
            transform: scale(1.02);
            color: #000;
          }
        }

        .gallery-container {
          padding: 60px 0;
          text-align: center;
          overflow: hidden;
          background: #fff;
        }

        .gallery-title-wrapper {
          padding: 0 10%;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .gallery-title-wrapper h2 {
          font-size: 2.2rem;
          color: #212121;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scrollLeft 20s linear infinite;
          padding: 10px 0;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .gallery-item {
          width: calc(33.33vw - 30px);
          min-width: 350px;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 5 - 20px * 5)); }
        }

        .registration-contact {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          padding: 60px 10%;
          background: #fff;
        }

        .reg-box,
        .contact-box {
          padding: 40px;
          border-radius: 15px;
        }

        .reg-box {
          background: var(--primary-yellow);
          color: var(--text-dark);
          text-align: left;
        }

        .reg-box h3 {
          font-size: 24px;
          color: #212121;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .reg-box p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
          color: var(--text-dark);
        }

        .reg-points {
          list-style: none;
          padding: 0;
          margin-bottom: 25px;
        }

        .reg-points li {
          position: relative;
          padding-left: 35px;
          margin-bottom: 18px;
          font-size: 0.97rem;
          line-height: 1.6;
        }

        .reg-points li::before {
          content: "\f058";
          font-family: "Font Awesome 6 Free";
          font-weight: 900;
          position: absolute;
          left: 0;
          top: 2px;
          color: #00acf0;
          font-size: 1.3rem;
        }

        .reg-points li strong {
          color: var(--dark-bg);
          display: block;
          margin-bottom: 4px;
          font-size: 1.02rem;
        }

        .event-highlight {
          background: rgba(255, 255, 255, 0.3);
          padding: 15px 20px;
          border-radius: 10px;
          border-left: 4px solid #00acf0;
        }

        .event-highlight span {
          display: block;
          font-size: 1rem;
          margin-bottom: 5px;
        }

        .event-highlight i {
          color: #00acf0;
          margin-right: 10px;
          width: 20px;
        }

        .contact-box {
          background: #00acf0;
          color: white;
          text-align: center;
        }

        .contact-box h3 {
          font-size: 24px;
          color: #fff;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .contact-info {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-item i {
          color: var(--primary-yellow);
          font-size: 1.2rem;
        }

        .btn-contact {
          background-color: var(--primary-yellow);
          color: #000;
          margin-top: 50px;
          border: none;
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .btn-contact:hover {
          background-color: #fff;
          color: #00acf0;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .btn-contact:hover i {
          transform: translateX(5px);
        }

        @media (max-width: 992px) {
          .registration-contact {
            grid-template-columns: 1fr;
            padding: 40px 5%;
          }
        }

        @media (max-width: 768px) {
          .mission-grid,
          .event-info-box,
          .rules-container,
          .impact-bar {
            grid-template-columns: 1fr;
            padding: 40px 5%;
          }

          .hero {
            height: 400px;
            padding: 0 5%;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .mission-bg-img {
            min-height: 300px;
          }

          .gallery-item {
            width: 80vw;
            min-width: 280px;
          }

          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-280px * 5 - 20px * 5)); }
          }

          .steps {
            flex-direction: column;
            gap: 40px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">
          <div className="season-badge">SEASON-4 | EPISODE-3</div>
          <h1>Jo Aaye Wo Gaye</h1>
          <p>
            A monthly musical platform fostering community bonds and providing hidden talents a stage with a live orchestra.
          </p>
        </div>
      </section>

      <section className="event-details-bar">
        <div className="event-info-box">
          <div className="info-item">
            <i className="fas fa-calendar-alt"></i>
            <div>
              <strong>Date & Time</strong>
              <p>15th March</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <strong>Venue</strong>
              <p>Club-27, Sector-27, Noida</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <strong>Contact</strong>
              <p>9818700814, 7011209901</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-grid">
        <div className="card">
          <h2>The Mission</h2>
          <p className="mission-desc">
            For millennia, music has not only been a source of entertainment but a
            potent means of communication and celebration of life. At Navratan
            Foundations, our initiative "Jo Aaye Wo Gaye" aims to revive this
            timeless tradition by providing a platform for hidden talents to
            showcase their skills with a live orchestra. We believe in the
            transformative power of music to uplift spirits, foster mental
            wellbeing, and strengthen community bonds.
          </p>
          <div className="mission-list">
            <div className="mission-item">
              <i className="fas fa-brain"></i>
              <div>
                <strong>Mental Wellbeing</strong>
                <p>Fostering community bonds and enhancing mental health through art.</p>
              </div>
            </div>
            <div className="mission-item">
              <i className="fas fa-users"></i>
              <div>
                <strong>Community Bonding</strong>
                <p>Creating a communal platform for art and music in Noida.</p>
              </div>
            </div>
            <div className="mission-item">
              <i className="fas fa-star"></i>
              <div>
                <strong>Talent Discovery</strong>
                <p>Identifying and nurturing untapped potential in hidden artists.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mission-bg-img"></div>
      </section>

      <section className="mentor-section">
        <div className="heading-wrapper">
          <h2>Special Attraction</h2>
          <div className="yellow-line"></div>
        </div>
        <div className="mentor-card">
          <div className="mentor-info">
            <h3>Mr. Ramesh Nautiyal</h3>
            <span className="mentor-tag">Special Mentor</span>
            <p>
              Disciple of our beloved Musical Magician <strong>Pancham Da (R.D Burman)</strong>. Having lived and learned music at Pancham Da's house in Mumbai, his phenomenal singing and style keep the legacy of R.D Burman alive.
            </p>
          </div>
        </div>
      </section>

      <section className="rules-section" id="rules">
        <div className="heading-wrapper">
          <h2>Terms & Conditions</h2>
          <div className="yellow-line"></div>
        </div>
        <div className="rules-container">
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>Monthly Audition Round (Alternate Month).
          </div>
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>We have two category of Ages: Juniors-5 yrs to 15 yrs, Seniors-16yrs and above.(Lyrics reading allowed only for Senior Citizens).
          </div>
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>On-the-spot registration only. Please bring your Aadhaar Card.
                Only first 30 singers (1 song each) on first-come-first basis.
          </div>
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>Only Bollywood songs will be allowed.
          </div>
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>Orchestra based Program: We have 4 pieces Musical Band to support participants musically.
          </div>
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>Prepare 3-4 popular songs to avoid repetition.
          </div>
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>Shortlist candidates according to their remarks and merit basis, judged by our GURUS from each episode will be eligible to participate in Quarter Final, Semi-Final then after Grand Finale as Auditoriom Shows if they qualify.
          </div>
          <div className="rule-card">
            <i className="fas fa-check-circle"></i>We have 3 Awards in Grand-Finale UTTAM-Gayak, UTKRISHT-Gayak & SARVOTTAM-Gayak from both categories (Jrs. & Srs.)
          </div>
        </div>
      </section>

      <section className="supported-by">
        <p>
          <strong>Supported By:</strong> Tri Group of Music, Sparsh-Ehsas Zindagi Ka, DMS-Aarhoi, Harmony Waves, Nav Kala Bhaw Sangam, Aagrim Vidhyapeeth 
        </p>
      </section>

      <section className="how-it-works">
        <div className="heading-wrapper">
          <h2>How It Works</h2>
          <div className="yellow-line"></div>
        </div>
        <div className="steps">
          <div className="step">
            <i className="fas fa-user-edit"></i>
            <h4>1. Register</h4>
            <p>Sign up for our monthly audition rounds.</p>
          </div>
          <div className="step">
            <i className="fas fa-microphone-alt"></i>
            <h4>2. Perform</h4>
            <p>Sing live with a professional orchestra Band.</p>
          </div>
          <div className="step">
            <i className="fas fa-trophy"></i>
            <h4>3. Shine</h4>
            <p>Get recognized and join our elite talent pool.</p>
          </div>
        </div>
      </section>

      <section className="impact-bar" ref={impactBarRef}>
        <div className="stat-item">
          <h3><span className="counter" data-target="9">0</span>+</h3>
          <p>Years</p>
        </div>
        <div className="stat-item">
          <h3><span className="counter" data-target="1100">0</span>+</h3>
          <p>Singers</p>
        </div>
        <div className="stat-item">
          <h3><span className="counter" data-target="100">0</span>+</h3>
          <p>Events</p>
        </div>
        <div className="stat-item">
          <h3><span className="counter" data-target="10000">0</span>+</h3>
          <p>Audience</p>
        </div>
      </section>

      <section className="gallery-container">
        <div className="gallery-title-wrapper">
          <h2>Our Initiative Gallery</h2>
          <div className="yellow-line"></div>
        </div>
        <div className="slider-track">
          <img src="/img/Jo aye wo gaye1.jpg" className="gallery-item" alt="Event" />
          <img src="/img/Jo aye wo gaye2.jpg" className="gallery-item" alt="Event" />
          <img src="/img/Jo aye wo gaye3.jpg" className="gallery-item" alt="Event" />
          <img src="/img/Jo aye wo gaye4.jpg" className="gallery-item" alt="Event" />
          <img src="/img/Jo aye wo gaye5.jpg" className="gallery-item" alt="Event" />
          <img src="/img/Jo aye wo gaye6.jpg" className="gallery-item" alt="Event" />
        </div>
      </section>

      <section className="registration-contact">
        <div className="reg-box">
          <h3>Registration Details</h3>
          <p>
            Invite Unseen Upcoming Talented Singers to participate in Delhi NCR’s The Famous & Prestigious Bollywood Singing Monthly program.
          </p>
          <ul className="reg-points">
            <li>
              <strong>On-the-Spot Registration</strong>
              Registration is available exclusively at the venue (No pre-registration).
            </li>
            <li>
              <strong>Participation Limit</strong>
              Limited to the first 30 singers on a first-come, first-served basis in two age categories.Juniors-5 yrs to 15 yrs, Seniors-16yrs and above.(Lyrics reading allowed only for Senior Citizens). 
            </li>
            {/* <li>
              <strong>Refundable Deposit</strong>
              A registration fee of ₹500 is required, which will be returned to the performer on the same day after the program.
            </li> */}
          </ul>
          <div className="event-highlight">
            <span>
              <i className="fas fa-calendar-alt"></i>
              <strong>Date:</strong> 15th March
            </span>
            <span>
              <i className="fas fa-map-marker-alt"></i>
              <strong>Place:</strong> Club-27, Sector-27, Noida
            </span>
          </div>
        </div>

        <div className="contact-box">
          <h3>Contact for Inquiries</h3>
          <p>
            For any further details regarding the event, registration, or location, please reach out to our team:
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>9818700814</span>
            </div>
            <div className="contact-item">
              <i className="fa-brands fa-whatsapp"></i>
              <span>7011209901</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>navratanjks@gmail.com</span>
            </div>
          </div>
          <div className="contact-btn-wrapper">
            <button className="btn-contact">
              Contact Us <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}