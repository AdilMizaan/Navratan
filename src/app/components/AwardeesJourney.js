"use client";

export default function AwardeesJourney() {
  const startYear = 2003;
  const endYear = 2025;

  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push({
      year,
      isCovid: year === 2020 || year === 2021,
      pdfLink: (year === 2020 || year === 2021) ? null : `/img/awardees-pdf/Awardees-${year}.pdf`
    });
  }

  return (
    <>
      <style jsx>{`
        .awards-section {
          background: #f8fafc;
          padding: 80px 20px;
          text-align: center;
        }

        .section-title-main {
          font-family: 'Shadows Into Light', cursive;
          font-size: 58px;
          font-weight: 600;
          color: #00acf0;
          margin: 0 0 20px 0;
          line-height: 1.05;
        }

        .section-title {
          font-size: 38px;
          font-weight: 600;
          color: #212121;
          margin: -25px 0 15px 0;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 720px;
          margin: 0 auto 50px;
        }

        .years-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 16px;
          padding: 0 20px;
        }

        .year-btn {
          background: white;
          color: #212121;
          font-size: 1.45rem;
          font-weight: 700;
          padding: 18px 16px;
          border-radius: 14px;
          border: 2px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 82px;
          position: relative;
        }

        .year-btn:hover {
          background: #00acf0;
          color: white;
          border-color: #00acf0;
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 172, 240, 0.25);
        }

        .year-btn.covid {
          background: #fefce8;
          border-color: #fbbf24;
          color: #d97706;
          cursor: default;
        }

        .year-btn.covid:hover {
          transform: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        /* Tooltip for COVID years */
        .year-btn.covid::after {
          content: attr(data-tooltip);
          position: absolute;
          top: -55px;
          left: 50%;
          transform: translateX(-50%);
          background: #1f2937;
          color: white;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.95rem;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .year-btn.covid:hover::after {
          opacity: 1;
          visibility: visible;
          top: -65px;
        }

        .download-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 640px) {
          .section-title-main {
            font-size: 42px;
          }
          .section-title {
            font-size: 28px;
          }
          .years-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 12px;
          }
          .year-btn {
            padding: 16px 12px;
            min-height: 76px;
            font-size: 1.3rem;
          }
        }
      `}</style>

      <section className="awards-section">
        <div className="container">
          {/* Heading */}
          <h2 className="section-title-main">Awardees List</h2>
          <h2 className="section-title">Our Journey of Recognition</h2>
          <p className="section-subtitle">
            2003 to 2025 - Honors and awards received for social contributions
          </p>

          {/* Years Grid */}
          <div className="years-grid">
            {years.map((item) => (
              <div key={item.year}>
                {item.isCovid ? (
                  <div 
                    className="year-btn covid"
                    data-tooltip="No Awardees due to the COVID-19 pandemic"
                  >
                    <div style={{ textAlign: 'center' }}>
                      <div>{item.year}</div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.pdfLink}
                    download={`Awardees-${item.year}.pdf`}
                    className="year-btn"
                  >
                    {item.year}
                    <span className="download-icon"><i className="fas fa-download"></i></span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}