"use client";

export default function SDGSection() {
  const sdgCards = [
    {
      number: "4",
      // title: "QUALITY EDUCATION",
      image: "/img/sdg-1.png",
      desc: "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all"
    },
    {
      number: "5",
      // title: "GENDER EQUALITY",
      image: "/img/sdg-2.png",
      desc: "Working towards achieving gender equality and empowering all women and girls"
    },
    {
      number: "8",
      // title: "DECENT WORK AND ECONOMIC GROWTH",
      image: "/img/sdg-3.png",
      desc: "Promoting sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all"
    },
    {
      number: "3",
      // title: "GOOD HEALTH AND WELL-BEING",
      image: "/img/sdg-4.png",
      desc: "Ensuring healthy lives and promoting well-being for all at all ages"
    }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

        .sdg-section {
          padding: 70px 0 70px;
          margin: 80px auto 0;
          background: #f8fafc;
          text-align: center;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .heading {
          font-size: 48px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 16px 0;
          line-height: 1.1;
        }

        .highlight-navratan {
          color: #00acf0;
        }

        .sub-heading {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-style: italic;
          color: #60a5fa;
          margin: 0 0 40px 0;
        }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.8;
          color: #374151;
          max-width: 900px;
          margin: 0 auto 70px auto;
        }

        .cards-row {
          display: flex;
          flex-wrap: wrap;           /* ← important fix */
          justify-content: center;
          gap: 24px 20px;
          margin-bottom: 40px;
        }

        .sdg-card {
          flex: 0 0 280px;           /* base size for large screens */
          background: white;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 15px 45px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          text-align: center;
          min-height: 340px;         /* better consistency */
        }

        .sdg-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 35px 90px rgba(0,0,0,0.14);
        }

        .card-image {
          width: 60%;
          object-fit: contain;       /* better than cover for SDG icons */
          margin: 20px auto 0;
          display: block;
        }

        .card-content {
          padding: 20px;
        }

        .card-title {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 12px 0;
        }

        .card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }

        .learn-more-btn {
          display: inline-block;
          margin-top: 30px;
          padding: 18px 52px;
          background: #fbd45a;
          color: #111827;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 12px 40px rgba(251,191,36,0.35);
          transition: all 0.35s ease;
        }

        .learn-more-btn:hover {
          background: #00acf0;
          transform: translateY(-6px);
          box-shadow: 0 20px 55px rgba(36, 219, 251, 0.45);
        }

        /* ────────────────────────────────────────
           Responsive adjustments
        ──────────────────────────────────────── */

        @media (max-width: 1100px) {
          .sdg-card {
            flex: 0 0 45%;           /* 2 cards per row */
            max-width: 45%;
          }
        }

        @media (max-width: 640px) {
          .sdg-section {
            padding: 60px 0 50px;
          }

          .heading {
            font-size: 38px;
          }

          .description {
            font-size: 16px;
          }

          .cards-row {
            gap: 32px 20px;
          }

          .sdg-card {
            flex: 0 0 100%;          /* 1 card per row on mobile */
            max-width: 420px;        /* nice max width on small screens */
            margin: 0 auto;
          }

          .learn-more-btn {
            padding: 16px 48px;
            font-size: 17px;
          }
        }
      `}</style>

      <section className="sdg-section">
        <div className="container">
          <h2 className="heading">At <span className="highlight-navratan">NAVRATAN FOUNDATIONS</span> our efforts<br/>are towards achieving SDG</h2>

          <p className="description">
            We are dedicated to promoting SDG 3 /Good Health & Well being , SDG 4 -Quality Education, SDG 5 -Gender Equality and SDG 8  -Decent Work and Economic Growth
          </p>

          <div className="cards-row">
            {sdgCards.map((card, index) => (
              <div key={index} className="sdg-card">
                <img
                  src={card.image}
                  alt={`SDG ${card.number}`}
                  className="card-image"
                />
                <div className="card-content">
                  {/* Uncomment if you want to show titles again */}
                  {/* <h3 className="card-title">{card.title || `SDG ${card.number}`}</h3> */}
                  <p className="card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/projects" className="learn-more-btn">
            Learn More →
          </a>
        </div>
      </section>
    </>
  );
}