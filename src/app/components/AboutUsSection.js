"use client";

import { useState, useEffect } from 'react';

export default function AboutUsSection() {
  const images = [
    // "/img/AboutSectionImage.webp",
    // "/img/NF-projects/NF-Astitva (2).jpg",
    "/img/NF-projects/NF-Astitva (3).jpg",
    "/img/NF-projects/NF-Astitva.jpg",
    "/img/NF-projects/NF-Computer Centre (2).jpg",
    "/img/NF-projects/NF-Computer Centre (3).jpg",
    "/img/NF-projects/NF-Gyaanpeeth.jpg",
    "/img/NF-projects/NF-Gyanpeeth.jpg",
    "/img/NF-projects/NF-Sheet Kawach.jpeg",
    "/img/NF-projects/NF-ummed3.jpeg",
    "/img/NF-projects/NF-Ummeed.jpg",
    "/img/NF-projects/NF-WheelChair Distribution.jpg",
    // Agar 5th image nahi hai toh repeat kar sakte ho ya nayi add kar dena
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .about-section {
          background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 60%, #fef3c7 100%);
          padding: 80px 0 100px;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        /* Image Container with Fade Effect */
        .image-container {
          position: relative;
          height: 650px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0,0,0,0.15);
        }

        .about-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
        }

        .about-image.active {
          opacity: 1;
          z-index: 2;
        }

        /* Content Side - Same as before */
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 45px;
        }

        .about-heading {
          font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .quote {
          font-size: 30px;
          font-weight: 600;
          color: #212121;
          line-height: 1.4;
          margin: -80px 0 -30px 0;
        }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: #212121;
          max-width: 680px;
        }

        .cards-wrapper {
          padding: 20px;
          background: #fbd45a;
          display: flex;
          justify-content: center;
          gap: 0px;
          border-radius: 10px;
          flex-wrap: wrap;
        }

        .card {
          flex: 1;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #212121;
        }

        .card h3 {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0px;
        }

        .card p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #212121;
          line-height: 1.6;
        }

        .know-more {
          display: inline-block;
          width: fit-content;
          padding: 18px 56px;
          background: #fbd45a;
          color: #111827;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 12px 35px rgba(251,191,36,0.35);
          transition: all 0.3s ease;
        }

        .know-more:hover {
          background: #00acf0;
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(251,191,36,0.45);
        }

        .credentials {
          text-align: left;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #444;
          margin-top: -20px;
          padding-top: 15px;
          border-top: 1px solid #e0d9a8;
        }

        .credentials strong {
          color: #111827;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          .about-heading {
            font-size: 48px;
          }
          .image-container {
            height: 450px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 0 60px;
          }
          .about-heading {
            font-size: 42px;
          }
          .quote {
            font-size: 28px;
          }
          .image-container {
            height: 380px;
          }
          .cards-wrapper {
            flex-direction: column;
            gap: 45px;
          }
          .know-more {
            padding: 16px 44px;
            font-size: 1.2rem;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="container">
          {/* Left Side - Image Slider with Fade */}
          <div className="image-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Navratan Foundation ${index + 1}`}
                className={`about-image ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Right Content - Same as before */}
          <div className="about-content">
            <h2 className="about-heading">About Us</h2>

            <div className="quote">
              If you light a lamp for Somebody, it will also brighten your path -Buddha
            </div>

            <p className="description">
              NAVRATAN FOUNDATIONS, a registered non-profit society dedicated to advancing community development with a strong commitment to achieving the Sustainable Development Goals (SDGs). Our primary goal is to foster comprehensive and value-based community growth by extending support and resources to those in need.
            </p>

            <div className="credentials">
              <strong>Registered with NITI Aayog NGO Darpan:</strong> UP/2019/0226969
            </div>

            <div className="cards-wrapper">
              <div className="card">
                <div className="card-icon"><i className="fa-solid fa-users"></i></div>
                <h3>Join Our Team</h3>
                <p>Explore opportunities to work for Navratan Foundations</p>
              </div>

              <div className="card">
                <div className="card-icon"><i className="fa-solid fa-handshake"></i></div>
                <h3>Start Contributing</h3>
                <p>Support the cause and make a difference</p>
              </div>
            </div>

            <a href="/about-us" className="know-more">
              Know More →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}