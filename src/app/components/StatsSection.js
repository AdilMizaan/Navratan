"use client";

import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const stats = [
    { icon: "fa-handshake", number: 21, label: "Years in Service" },
    { icon: "fa-file-invoice-dollar", number: "27+", label: "Projects Funded" },
    { icon: "fa-users", number: "45+", label: "Volunteers" },
    { icon: "fa-hand-holding-heart", number: 12, label: "CSR Partnerships" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = typeof stat.number === 'string' 
        ? parseInt(stat.number.replace('+', '')) 
        : stat.number;
      
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 44);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 16);

      if (typeof stat.number === 'string' && stat.number.includes('+')) {
        setTimeout(() => {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = stat.number;
            return newCounts;
          });
        }, duration);
      }
    });
  };

  return (
    <>
      <style jsx>{`
      body {
      // background: #ffffff;
       background: #f8fafc;
      }
        .stats-section {
          background: #fbd45a;
          padding: 70px 0;
          margin: 0px auto 0;
          max-width: 1400px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        .stats-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-items: center;
          gap: 40px 60px;
          padding: 0 40px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 25px;
          min-width: 220px;
          color: #111827;
        }

        .stat-icon {
          font-size: 3.8rem;
          color: #111827;
        }

        .stat-right {
          text-align: left;
        }

        .stat-number {
          font-family: 'Inter', sans-serif;
          font-size: 40px;
          font-weight: 800;
          line-height: 1;
          margin: 0 0 4px 0;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 600;
          opacity: 0.95;
        }

        @media (max-width: 1024px) {
          .stats-container {
            gap: 50px 40px;
            padding: 0 30px;
          }

          .stat-number {
            font-size: 3.2rem;
          }

          .stat-label {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 60px 0;
            margin: 60px auto 0;
          }

          .stats-container {
            flex-direction: column;
            gap: 50px;
            padding: 0 20px;
          }

          .stat-item {
            justify-content: flex-start;
            gap: 20px;
          }

          .stat-number {
            font-size: 2.8rem;
          }
        }
      `}</style>

      <section className="stats-section" ref={sectionRef}>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <i className={`fas ${stat.icon} stat-icon`}></i>
              <div className="stat-right">
                <div className="stat-number">
                  {typeof counts[index] === 'number' 
                    ? counts[index] 
                    : counts[index] || stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}