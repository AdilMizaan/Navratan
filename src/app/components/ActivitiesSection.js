"use client";

import { useEffect, useState } from 'react';

export default function ActivitiesCarousel() {
  
  
  const activities = [
    { id: 1, title: "Accupressure Camp_Samvayi", image: "/img/activity-1.jpeg" },
    { id: 2, title: "Completion Certificate Silai Centre", image: "/img/activity-2.jpg" },
    { id: 3, title: "Completion Certificate-Comp. Centre", image: "/img/activity-3.jpeg" },
    { id: 4, title: "Computer Center Innaugral", image: "/img/activity-4.jpg" },
    { id: 5, title: "CSR Majestic Auto", image: "/img/activity-5.jpeg" },
    { id: 6, title: "DMS-Voice Of Delhi", image: "/img/activity-6.jpeg" },
    { id: 7, title: "Eklavya ki khoj", image: "/img/activity-7.jpg" },
    { id: 8, title: "Gyanpeeth renovation", image: "/img/activity-8.png" },
    { id: 9, title: "Jashn E Tazurbat", image: "/img/activity-9.jpg" },
    { id: 10, title: "JAWG 3", image: "/img/activity-10.JPG" },
    { id: 11, title: "Kavi sammelan-Azadi Ke Deewano k Tarane", image: "/img/activity-11.png" },
    { id: 12, title: "Mohd. Rafi Memorial 32nd Night", image: "/img/activity-12.png" },
    { id: 13, title: "Ruk Jana Nahin", image: "/img/activity-13.jpeg" },
    { id: 14, title: "Samarpan 2024", image: "/img/activity-14.jpg" },
    { id: 15, title: "Shaurya Diwas_25th Shahadat Diwas_Capt. Vijayant Thaper", image: "/img/activity-15.jpg" },
    { id: 16, title: "Sheet Kawach-Petronet", image: "/img/activity-16.png" },
    { id: 17, title: "Shukriya Mukesh 2024", image: "/img/activity-17.jpg" },
  ];

  // Duplicate first 3 for infinite loop (since 3 visible)
  const extendedActivities = [...activities, ...activities.slice(0, 3)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default desktop: 3 slides

  // Detect slides visible on resize (like hero section)
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= activities.length) {
        setTimeout(() => setCurrentIndex(next - activities.length), 800); // Match transition
        return next;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        setTimeout(() => setCurrentIndex(activities.length - 1), 800);
        return prevIndex;
      }
      return prevIndex;
    });
  };

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .activities-section {
          background: #f9fafb;
          padding: 100px 20px 50px;
          text-align: center;
        }

        .section-title {
           font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .section-subtitle {
         font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -35px 0 60px 0;
        }

        .carousel-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          padding: 0 0px;  /* Extra padding for arrows */
        }

        .carousel-wrapper {
          overflow: hidden;
          border-radius: 12px;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* smooth scroll */
        }

        .carousel-slide {
          flex: 0 0 calc(100% / ${slidesToShow});  /* Dynamic: 3/2/1 slides based on screen */
          padding: 0 10px;
          box-sizing: border-box;
        }

        .activity-item {
          text-decoration: none;
          color: inherit;
          display: block;
          text-align: center;
          transition: transform 0.3s ease;
          cursor: default;  /* No pointer cursor, no clickable feel */
        }

        .activity-item:hover {
          transform: scale(1.02);
        }

        .activity-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .activity-title {
          font-size: 18px;
          font-weight: 600;
          color: #212121;
          margin: 0;
        }

        /* Arrows - positioned on container, fully outside wrapper */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: #333;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: all 0.3s;
          z-index: 10;
        }

        .carousel-arrow.prev {
          left: 0;  /* At container edge, fully visible */
        }

        .carousel-arrow.next {
          right: 0;  /* At container edge, fully visible */
        }

        .carousel-arrow:hover {
          background: #00acf0;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        @media (max-width: 1024px) {
          .carousel-slide {
            flex: 0 0 calc(100% / 2);  /* 2 slides on tablet */
          }
          .carousel-container { padding: 0 50px; }  /* Adjusted padding */
        }

        @media (max-width: 768px) {
          .carousel-slide {
            flex: 0 0 100%;  /* 1 slide on mobile */
          }
          .carousel-container { padding: 0 40px; }  /* Adjusted padding */
          .activity-image {
            height: 250px;
          }
          .activity-title {
            font-size: 1.1rem;
          }
            .section-title{
            font-size: 42px;
            }
            .section-subtitle{
            font-size: 28px;
      }
             .activities-section {
          padding: 50px 20px;
        }
      `}</style>

      <section className="activities-section">
        <h2 className="section-title">Our Activities</h2>
        <p className="section-subtitle">
          Explore Our Major Activities And Events
        </p>

        <div className="carousel-container">
          <button className="carousel-arrow prev" onClick={prevSlide}>←</button>
          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {extendedActivities.map((activity) => (
                <div key={activity.id} className="carousel-slide">
                  <div className="activity-item">  {/* Removed <a> tag, no link */}
                    <img src={activity.image} alt={activity.title} className="activity-image" />
                    <h3 className="activity-title">{activity.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow next" onClick={nextSlide}>→</button>
        </div>
      </section>
    </>
  );
}