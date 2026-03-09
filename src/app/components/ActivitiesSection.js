"use client";

import { useEffect, useState } from 'react';

export default function ActivitiesCarousel() {
  // Placeholder activities data – tum real list se replace kar dena (title + image path)
  // Images `/public/img/activities/` folder mein ready hain
  const activities = [
    { id: 1, title: "Samarpan 2003", image: "/img/activities/samarpan-2003.jpg" },
    { id: 2, title: "Samarpan 2004", image: "/img/activities/samarpan-2004.jpg" },
    { id: 3, title: "Samarpan 2005", image: "/img/activities/samarpan-2005.jpg" },
    { id: 4, title: "Samarpan 2006", image: "/img/activities/samarpan-2006.jpg" },
    { id: 5, title: "Samarpan 2007", image: "/img/activities/samarpan-2007.jpg" },
    { id: 6, title: "Samarpan 2008", image: "/img/activities/samarpan-2008.jpg" },
    { id: 7, title: "Samarpan 2009", image: "/img/activities/samarpan-2009.jpg" },
    { id: 8, title: "Samarpan 2010", image: "/img/activities/samarpan-2010.jpg" },
    { id: 9, title: "Samarpan 2011", image: "/img/activities/samarpan-2011.jpg" },
    { id: 10, title: "Samarpan 2012", image: "/img/activities/samarpan-2012.jpg" },
    // Add more from your list...
  ];

  // Duplicate first 3 for infinite loop (since 3 visible)
  const extendedActivities = [...activities, ...activities.slice(0, 3)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3; // Desktop: 3 slides visible

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
          padding: 60px 20px;
          text-align: center;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 15px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #4b5563;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .carousel-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* smooth scroll */
        }

        .carousel-slide {
          flex: 0 0 calc(100% / ${slidesToShow});  /* 3 slides visible on desktop */
          padding: 0 10px;
          box-sizing: border-box;
        }

        .activity-item {
          text-decoration: none;
          color: inherit;
          display: block;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .activity-item:hover {
          transform: scale(1.02);
        }

        .activity-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .activity-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1e40af;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .carousel-slide {
            flex: 0 0 calc(100% / 2);  /* 2 slides on tablet */
          }
        }

        @media (max-width: 768px) {
          .carousel-slide {
            flex: 0 0 100%;  /* 1 slide on mobile */
          }
          .activity-image {
            height: 250px;
          }
          .activity-title {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section className="activities-section">
        <h2 className="section-title">Our Activities</h2>
        <p className="section-subtitle">
          Explore our major activities and events from 2003 to 2025
        </p>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {extendedActivities.map((activity) => (
              <div key={activity.id} className="carousel-slide">
                <a href={`/activities/${activity.id}`} className="activity-item">
                  <img src={activity.image} alt={activity.title} className="activity-image" />
                  <h3 className="activity-title">{activity.title}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}