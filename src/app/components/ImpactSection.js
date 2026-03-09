"use client";

import { useState, useEffect } from 'react';

export default function ImpactSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/img/awards-1.jpg",
    "/img/awards-2.jpg",
    "/img/awards-3.jpg",
    "/img/awards-4.jpg",
    // jitne chahiye add kar do
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .impact-section {
          position: relative;
          padding: 100px 0 100px;
          background: url('/img/map.png') center/cover no-repeat;
          background-attachment: fixed;
          text-align: center;
          color: white;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(181, 233, 253, 0.91);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .heading-main {
          font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .heading-sub {
          font-size: 40px;
          font-weight: 700;
          color: #212121;
          margin: -30px 0 60px 0;
        }

        .slider-wrapper {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
        }

        .slider {
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 25px 70px rgba(0,0,0,0.25);
        }

        .slider-track {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          width: 100%;
        }

        .slide {
          flex: 0 0 100%;
          width: 100%;
          height: 520px;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgb(255, 255, 255);
          backdrop-filter: blur(6px);
          border: none;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          color: #212121;
          font-size: 32px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.35s;
          z-index: 100; /* bahut upar rakha taaki image ke upar na aaye */
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .arrow.prev {
          left: -80px; /* bahar side zyada left mein */
        }

        .arrow.next {
          right: -80px; /* bahar side zyada right mein */
        }

        .arrow:hover {
          background: rgba(96,165,250,0.7);
          transform: translateY(-50%) scale(1.12);
          box-shadow: 0 12px 35px rgba(96,165,250,0.4);
        }

        @media (max-width: 1024px) {
          .heading-main {
            font-size: 42px;
          }

          .heading-sub {
            font-size: 30px;
          }

          .slide {
            height: 420px;
          }

          .arrow {
            width: 55px;
            height: 55px;
            font-size: 26px;
          }

          .arrow.prev { left: -60px; }
          .arrow.next { right: -60px; }
        }

        @media (max-width: 768px) {
          .impact-section {
            padding: 80px 0 60px;
          }

          .heading-main {
            font-size: 36px;
          }

          .heading-sub {
            font-size: 26px;
          }

          .slide {
            height: 320px;
          }

          .arrow {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          .arrow.prev { left: -40px; }
          .arrow.next { right: -40px; }
        }
      `}</style>

      <section className="impact-section">
        <div className="overlay" />

        <div className="container">
          <h2 className="heading-main">Recognizing Impact</h2>
          <h3 className="heading-sub">
            Navratan Foundations in the Spotlight
          </h3>

          <div className="slider-wrapper">
            <div className="slider">
              <div 
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((src, index) => (
                  <div key={index} className="slide">
                    <img
                      src={src}
                      alt={`Impact Event ${index + 1}`}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/1100x520/cccccc/000000?text=Image+Not+Found";
                        console.error("Image failed to load:", src);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button className="arrow prev" onClick={prevSlide}>
              ←
            </button>
            <button className="arrow next" onClick={nextSlide}>
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}