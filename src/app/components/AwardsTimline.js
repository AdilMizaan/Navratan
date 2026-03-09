"use client";

export default function AwardsTimeline() {
  // Data with unique links per year
  const awards = [
    {
      year: 2003,
      title: "First F.B. Nigam Memorial Awards",
      category: "Social Welfare",
      link: "/awardees?year=2003",
    },
    {
      year: 2004,
      title: "F.B. Nigam Smriti Puraskaar",
      category: "Social Service",
      link: "/awardees?year=2004",
    },
    {
      year: 2005,
      title: "F.B. Nigam Memorial Award",
      category: "Community & Sports",
      link: "/awardees?year=2005",
    },
    {
      year: 2006,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Sports",
      link: "/awardees?year=2006",
    },
    {
      year: 2007,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Education",
      link: "/awardees?year=2007",
    },
    {
      year: 2008,
      title: "F.V. Mag Memorial Award",
      category: "Education & Social",
      link: "/awardees?year=2008",
    },
    {
      year: 2009,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Health",
      link: "/awardees?year=2009",
    },
    {
      year: 2010,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2010",
    },
    {
      year: 2011,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Health",
      link: "/awardees?year=2011",
    },
    {
      year: 2012,
      title: "Navratna Legend Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2012",
    },
    {
      year: 2013,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2013",
    },
    {
      year: 2014,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Bravery",
      link: "/awardees?year=2014",
    },
    {
      year: 2015,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2015",
    },
    {
      year: 2016,
      title: "Navratna Legend Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2016",
    },
    {
      year: 2017,
      title: "Navratan Legend Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2017",
    },
    {
      year: 2018,
      title: "Navratan Legend Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2018",
    },
    {
      year: 2019,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2019",
    },
    {
      year: 2020,
      title: "No Awards Ceremony",
      category: "N/A",
      description: "No awardees for 2020 due to the COVID-19 pandemic.",
      link: "/awardees?year=2020",
      isCovid: true,
    },
    {
      year: 2021,
      title: "No Awards Ceremony",
      category: "N/A",
      description: "No awardees for 2021 due to the COVID-19 pandemic.",
      link: "/awardees?year=2021",
      isCovid: true,
    },
    {
      year: 2022,
      title: "F.B. Nigam Memorial Award",
      category: "Social & COVID Heroes",
      link: "/awardees?year=2022",
    },
    {
      year: 2023,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2023",
    },
    {
      year: 2024,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Youth Achievers",
      link: "/awardees?year=2024",
    },
    {
      year: 2025,
      title: "F.B. Nigam Memorial Award",
      category: "Social & Women's Empowerment",
      link: "/awardees?year=2025",
    },
  ];

  return (
    <>
      <style jsx>{`
        .awards-timeline {
          background: #f8fafc;
          padding: 60px 20px;
          text-align: center;
        }

        .section-title-main {
           font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .section-title {
          font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -38px 0 10px 0;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #4b5563;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          width: 3px;
          background: #d1d5db;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1.5px;
          z-index: 0;
        }

        .timeline-item {
          padding: 15px 25px;
          position: relative;
          background-color: inherit;
          width: 50%;
          box-sizing: border-box;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .timeline-item:hover {
          opacity: 0.8;
        }

        .timeline-item.left {
          left: 0;
        }

        .timeline-item.right {
          left: 50%;
        }

        .timeline-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .timeline-content {
          padding: 15px 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          position: relative;
          border: 1px solid #e5e7eb;
          margin-bottom: 10px;
          transition: all 0.3s ease;
          z-index: 3;  /* higher z-index for content */
        }

        .timeline-content:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        .timeline-content::after {
          content: '';
          position: absolute;
          top: 20px;
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          z-index: 2;  /* arrow z-index below content */
        }

        .timeline-item.left .timeline-content::after {
          right: -16px;
          border-left: 10px solid white;
        }

        .timeline-item.right .timeline-content::after {
          left: -16px;
          border-right: 10px solid white;
        }

        .year-badge {
          position: absolute;
          top: 10px;
          width: 60px;
          height: 60px;
          background: #fbd45a;
          color: #212121;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(30,64,175,0.2);
          z-index: 4;  /* highest z-index for year badge */
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .year-badge:hover {
          transform: scale(1.1);
          background: #00acf0;
          z-index: 5;  /* bring to front on hover */
        }

        .timeline-item.left .year-badge {
          right: -30px;
        }

        .timeline-item.right .year-badge {
          left: -30px;
        }

        .timeline-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #212121;
          margin-bottom: 6px;
        }

        .timeline-category {
          font-size: 0.95rem;
          color: #00acf0;
          font-weight: 600;
        }

        .covid {
          background: #fefce8;
          border-color: #fbbf24;
        }

        .covid .timeline-title {
          color: #d97706;
        }

        .covid .timeline-category {
          color: #d97706;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 60px;
            padding-right: 20px;
          }

          .timeline-item.left,
          .timeline-item.right {
            left: 0;
          }

          .year-badge {
            left: 0 !important;
          }

          .timeline-content::after {
            left: -10px !important;
            border-right: 10px solid white !important;
            border-left: none !important;
          }
        }
      `}</style>

      <section className="awards-timeline">
        <div className="container">
            <h2 className="section-title-main">Awardees List</h2>
          <h2 className="section-title">Our Journey of Recognition</h2>
          <p className="section-subtitle">
            2003 to 2025 - Honors and awards received for social contributions
          </p>

          <div className="timeline">
            {awards.map((award, index) => (
              <div
                key={award.year}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <a href={award.link} className="timeline-link">
                  <div className={`year-badge ${award.isCovid ? 'covid' : ''}`}>
                    {award.year}
                  </div>

                  <div className={`timeline-content ${award.isCovid ? 'covid' : ''}`}>
                    <h3 className="timeline-title">{award.title}</h3>
                    <div className="timeline-category">Category: {award.category}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}