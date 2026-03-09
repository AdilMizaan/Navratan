"use client";

import { useEffect, useState } from 'react';

export default function Hero() {
  // Typing effect (same rakha)
  const phrases = [
    "Grassroot Education",
    "Knowledge & Opportunity",
    "Education & Empowerment",
    "Learning & Growth",
    "Futures & Dreams",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, 50);
      }
    } else {
      if (displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 80);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex]);

  // Carousel images
  const carouselImages = [
    "/img/astitva1.jpg",
    "/img/astitva2.jpg",
    "/img/astitva3.jpg",
    "/img/astitva1.jpg",
    "/img/astitva2.jpg",
    "/img/astitva3.jpg",
    "/img/astitva1.jpg",
    "/img/astitva2.jpg",
    "/img/astitva3.jpg",
    "/img/astitva1.jpg",
    "/img/astitva2.jpg",
    "/img/astitva3.jpg",
    // aur jitne chahiye add kar do
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        .hero {
          position: relative;
          background: #ffffff;
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #212121;
          text-align: center;
          padding: 80px 20px 40px;
        }

        .hero-content {
          max-width: 1100px;
          height: 350px;
          width: 100%;
        }

        .hero h1 {
          font-size: 5.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .typing-text {
          height: 120px;
          font-size: 5.2rem;
          font-weight: 600;
          color: #00acf0;
          display: inline-block;
          border-right: 4px solid #00acf0;
          white-space: nowrap;
          overflow: hidden;
          animation: blink 0.8s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #00acf0; }
        }

        .btn-explore {
          margin-top: 100px;
          padding: 16px 48px;
          background: #00acf0;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 172, 240, 0.3);
        }

        .btn-explore:hover {
          background: #0090d0;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 172, 240, 0.4);
        }

        /* Carousel - arrows bahar side mein */
        .carousel-section {
          width: 100%;
          max-width: 1400px;
          margin: 60px auto 0;
          position: relative;
        }

        .carousel-wrapper {
          overflow: hidden;
          margin: 0 70px; /* arrows ke liye left-right space */
        }

        .carousel-track {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-slide {
          flex: 0 0 33.333%; /* 3 images visible */
          padding: 0 15px;
        }

        .carousel-slide img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 24px;
          // box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .carousel-slide img:hover {
          transform: scale(1.03);
        }

        /* Arrows - bahar positioned, image se bahar */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          color: #333;
          font-size: 28px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          transition: all 0.3s;
          z-index: 10;
        }

        .carousel-arrow.prev {
          left: -30px; /* bahar left side */
        }

        .carousel-arrow.next {
          right: -30px; /* bahar right side */
        }

        .carousel-arrow:hover {
          background: #00acf0;
          color: white;
          transform: translateY(-50%) scale(1.15);
          box-shadow: 0 10px 30px rgba(0, 172, 240, 0.4);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 30px;
        }

        .dot {
          width: 14px;
          height: 14px;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          background: #00acf0;
          transform: scale(1.3);
        }

        @media (max-width: 1024px) {
          .carousel-slide { flex: 0 0 50%; }
          .carousel-wrapper { margin: 0 50px; }
          .carousel-arrow.prev { left: -20px; }
          .carousel-arrow.next { right: -20px; }
          .hero h1, .typing-text { font-size: 3.8rem; }
          .carousel-slide img { height: 360px; }
        }

        @media (max-width: 768px) {
          .carousel-slide { flex: 0 0 100%; }
          .carousel-wrapper { margin: 0 30px; }
          .carousel-arrow.prev { left: -10px; }
          .carousel-arrow.next { right: -10px; }
          .hero h1, .typing-text { font-size: 2.8rem; }
          .carousel-slide img { height: 280px; }
          .carousel-arrow { width: 50px; height: 50px; font-size: 24px; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Unlocking Futures with <br />
            <span className="typing-text">{displayText}</span>
          </h1>

          <a href="/projects" className="btn-explore">
            Explore Projects →
          </a>
        </div>

        {/* Carousel */}
        <div className="carousel-section">
          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {carouselImages.map((src, index) => (
                <div key={index} className="carousel-slide">
                  <img src={src} alt={`Project ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows bahar side mein */}
          <button className="carousel-arrow prev" onClick={prevSlide}>
            ←
          </button>
          <button className="carousel-arrow next" onClick={nextSlide}>
            →
          </button>

          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}