"use client";

import { useEffect } from 'react';

export default function SupportedBySection() {
  // Left carousel: 14 logos (tumhare diye hue logos repeat kar ke fill kar sakte ho)
  const leftLogos = [
    "/img/supported-by/agrim.jpg",
    "/img/supported-by/dms.png",
    "/img/supported-by/harmony logo.jpg",
    "/img/supported-by/sparrch.png",
    "/img/supported-by/trigroup.png",
    "/img/supported-by/WhatsApp Image 2023-07-14 at 20.31.20.png",
  
  ];

  // Right carousel: 13 logos (thoda kam, jaise tumne bola)
  const rightLogos = [
    "/img/client-15.jpeg",
    "/img/client-16.jpeg",
    "/img/client-17.png",
    "/img/client-18.jpeg",
    "/img/client-19.jpeg",
    "/img/client-20.jpeg",
    "/img/client-21.jpeg",
    "/img/client-22.jpeg",
    "/img/client-23.jpeg",
    "/img/client-24.jpeg",
    "/img/client-25.jpeg",
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');

        .partners-section {
          padding: 60px 0 60px;
          background: #ffffff;
          text-align: left;
          overflow: hidden;
        }

        .container {
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
          margin: -38px 0 80px 0;
        }

        // --------------------------------
        .heading-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .heading-wrapper h2 {
        font-size: 2.2rem;
          color: #212121;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .yellow-line {
          width: 70px;
          height: 4px;
          background-color: var(--primary-yellow);
          margin-bottom: 20px;
        }
        // -------------------------------

        .carousel-wrapper {
          position: relative;
          overflow: hidden;
          margin: 0 -30px;
        }

        .carousel-track {
          display: flex;
          animation: scrollLeft 35s linear infinite;
          width: max-content;
        }

        .carousel-track.reverse {
          animation: scrollRight 40s linear infinite; /* right side wala alag speed se */
        }

        .logo-item {
          flex: 0 0 auto;
          padding: 0 40px;
          min-width: 220px;
        }

        .logo-item img {
          width: 130px;
          height: 100%;
          object-fit: contain;
        //   filter: grayscale(80%);
          transition: all 0.4s ease;
        }

        // .logo-item img:hover {
        //   filter: grayscale(0%);
        //   transform: scale(1.12);
        // }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        // .carousel-wrapper:hover .carousel-track {
        //   animation-play-state: paused; /* hover pe ruk jaye optional */
        // }

        @media (max-width: 1024px) {
          .heading-main {
            font-size: 42px;
          }

          .heading-sub {
            font-size: 28px;
          }

          .logo-item img {
            height: 80px;
          }

          .logo-item {
            padding: 0 30px;
          }
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 80px 0 60px;
          }

          .heading-main {
            font-size: 42px;
          }

          .heading-sub {
            font-size: 28px;
          }

          .carousel-wrapper {
            margin: 0 -20px;
          }

          .logo-item img {
            height: 70px;
          }
        }
      `}</style>

      <section className="partners-section">
        <div className="container">
          {/* <h2 className="heading-main">Partners</h2>
          <h3 className="heading-sub">
            Supported By
          </h3> */}
          <div className="heading-wrapper">
          <h2>Supported By</h2>
          <div className="yellow-line"></div>
        </div>

          <div className="carousel-wrapper">
            {/* Left carousel - right to left */}
            <div className="carousel-track">
              {leftLogos.concat(leftLogos).map((src, index) => ( // duplicate for infinite smooth loop
                <div key={index} className="logo-item">
                  <img src={src} alt={`Partner Logo ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* Right carousel - left to right (reverse direction) */}
            {/* <div className="carousel-track reverse" style={{ marginTop: '60px' }}>
              {rightLogos.concat(rightLogos).map((src, index) => (
                <div key={index} className="logo-item">
                  <img src={src} alt={`Partner Logo ${index + 1}`} />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}