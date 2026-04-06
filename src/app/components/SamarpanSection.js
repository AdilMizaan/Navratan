"use client";

export default function SamarpanSection() {
  const samarpanYears = [
    {
      year: 2025,
      title: "Samarpan 2025",
      pdfLink: "/img/samarpan-pdf/Samarpan 2025.pdf",
    },
    {
      year: 2024,
      title: "Samarpan 2024",
      pdfLink: "/img/samarpan-pdf/Samarpan-2024.pdf",
    },
    {
      year: 2023,
      title: "Samarpan 2023",
      pdfLink: "/img/samarpan-pdf/Samarpan 2023.PDF",
    },
  ];

  return (
    <>
      <style jsx>{`
        .samarpan-section {
          padding: 100px 20px 170px 20px;

          background: #f8fafc;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 60px;
        }

        .main-title {
          font-family: 'Shadows Into Light', cursive;
          font-size: 52px;
          font-weight: 600;
          color: #00acf0;
          margin: 0 0 12px 0;
        }

        .subtitle {
          font-size: 28px;
          font-weight: 600;
          color: #212121;
          margin: 0;
        }

        .cards-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .samarpan-card {
          background: white;
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .samarpan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 45px rgba(0, 172, 240, 0.15);
          border-color: #00acf0;
        }

        .year {
          font-size: 52px;
          font-weight: 700;
          color: #00acf0;
          margin: 0 0 8px 0;
          line-height: 1;
        }

        .card-title {
          font-size: 22px;
          font-weight: 600;
          color: #212121;
          margin-bottom: 20px;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #00acf0;
          color: white;
          padding: 10px 46px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 172, 240, 0.3);
        }

        .download-btn:hover {
          background: #fbd45a;
          color: black;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 172, 240, 0.4);
        }

        .download-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .samarpan-section {
            padding: 80px 15px 120px 15px;
          }
          .main-title {
            font-size: 42px;
          }
          .subtitle {
            font-size: 24px;
          }
          .samarpan-card {
            padding: 28px 20px;
          }
        }
      `}</style>

      <section className="samarpan-section">
        {/* <div className="section-heading">
          <h2 className="main-title">Samarpan</h2>
          <p className="subtitle">Our Annual Celebration of Service & Dedication</p>
        </div> */}

        <div className="cards-container">
          {samarpanYears.map((item) => (
            <div key={item.year} className="samarpan-card">
              {/* <div className="year">{item.year}</div> */}
              <div className="card-title">{item.title}</div>

              <a
                href={item.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                View PDF
                <span className="download-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}