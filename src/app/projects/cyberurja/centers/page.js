// src/app/projects/cyberurja/centers/page.js
'use client';

import Link from 'next/link';

export default function AllCyberurjaCenters() {
  const centers = [
    {
      name: "JAMIA MILIA- RIZVIA SCHOOL, VILL CHHOLOS, DADARI, GAUTAM BUDDH NAGAR.",
      location: "Uttar Pradesh – Dadari",
      active: true,
    },
    {
      name: "MADHURI SAXENA COMPUTER EDUCATION CENTRE, NITHARI, SECTOR-31, NOIDA.",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "NAVRATAN COMPUTER EDUCATION CENTRE, KANCHAN PUBLIC SCHOOL, GARHI CHAUKANDI SECTOR 68, NOIDA.",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "J. P. SAXENA COMPUTER EDUCATION CENTRE, CHHALERA, SECTOR-44, NOIDA.",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "M.G. BHATNAGAR COMPUTER EDUCATION CENTRE SECTOR -22, NOIDA.",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "DAYA RANI COMPUTER EDUCATION CENTRE, NITHARI SECTOR 31, NOIDA.",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "NAVRATAN AADARSH COMPUTER EDUCATION CENTRE, DELIGHT PUBLIC SCHOOL, SADARPUR.",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "SMT. KUSUM KHOSALA COMPUTER EDUCATION CENTRE, JAMA MASJID, SECT-8, NOIDA",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "DR A. B. L. SRIVASTAVA COMPUTER EDUCATION CENTRE, NEW GREEN LAWNS PUBLIC SCHOOL, TOWER WALI GALI, VILLAGE BHANGEL, NOIDA",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "M.G. BHATNAGAR COMPUTER EDUCATION CENTRE, SUNPURA, GREATER NOIDA",
      location: "Uttar Pradesh – Greater Noida",
      active: true,
    },
    {
      name: "PETRONET COMPUTER EDUCATION CENTRE, MAHARAJA AGRASEN HIGHER SECONDARY SCHOOL, KHODA COLONY, GHAZIABAD",
      location: "Uttar Pradesh – Ghaziabad",
      active: true,
    },
    {
      name: "PETRONET DIVYA TARANG COMPUTER EDU. CENTRE, SECTOR 10, NOIDA",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "DR. A. B. L. SRIVASTAVA COMPUTER TRAINING CENTRE, COMMUNITY CENTRE, SECTOR-31, NITHARI, NOIDA",
      location: "Uttar Pradesh – Noida",
      active: true,
    },
    {
      name: "DR. A. B. L. SRIVASTAVA COMPUTER TRAINING CENTRE, 3365, GALI NO 73, E,-2 BLOCK, MOLARBAND, BADARPUR, NEW DELHI.",
      location: "Delhi",
      active: true,
    },
  ];

  return (
    <>
      <style jsx global>{`
        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 42px;
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }

        .section-title::after {
          content: '';
          width: 80px;
          height: 4px;
          background: #fbd45a;
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .centers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
        }

        .center-card {
          background: white;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
        }

        .center-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          border-color: #fbd45a;
        }

        .top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 12px;
        }

        .center-location-tag {
          font-size: 0.9rem;
          font-weight: 600;
          color: #00acf0;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          line-height: 1.4;
        }

        .center-badge {
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .center-badge.active {
          background: #fbd45a;
          color: black;
        }

        .center-badge.inactive {
          background: #6c757d;
          color: white;
        }

        .center-name {
          margin: 0 0 16px 0;
          font-size: 1.38rem;
          font-weight: 700;
          line-height: 1.35;
          color: #212529;
        }

        .center-card .address,
        .center-card .course {
          margin: 10px 0;
          color: #555;
          font-size: 0.98rem;
          line-height: 1.55;
        }

        .center-card i {
          color: #fbd45a;
          margin-right: 9px;
        }

        .directions-btn {
          display: none;
          // display: inline-block;
          margin-top: 14px;
          padding: 10px 22px;
          background: #fbd45a;
          color: black;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.96rem;
          transition: all 0.3s;
        }

        .directions-btn:hover {
          background: #00acf0;
          color: white;
          transform: translateY(-2px);
        }

        .btn {
          display: inline-block;
          padding: 14px 40px;
          background: #fbd45a;
          color: black;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(138, 138, 138, 0.3);
        }

        .btn:hover {
          transform: translateY(-5px);
          background: #00acf0;
          color: white;
        }

        @media (max-width: 768px) {
          .centers-grid {
            grid-template-columns: 1fr;
          }

          .top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .center-badge {
            align-self: flex-start;
          }
        }
      `}</style>

      <div className="container" style={{ padding: '80px 0 120px' }}>
        <h1 className="section-title">All Cyberurja Computer Education Centers</h1>

        <p
          style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            marginBottom: '60px',
            color: '#555',
          }}
        >
          Total Centers: <strong>{centers.length}</strong> | Empowering youth and communities with digital literacy across Delhi/NCR and nearby areas
        </p>

        <div className="centers-grid">
          {centers.map((center, index) => (
            <div key={index} className="center-card">
              <div className="top-row">
                <div className="center-location-tag">{center.location}</div>
                <span
                  className={`center-badge ${center.active ? 'active' : 'inactive'}`}
                >
                  {center.active ? 'Active' : 'Inactive'}
                </span>
              </div>

              <h4 className="center-name">{center.name}</h4>

              <p className="address">
                <i className="fas fa-map-marker-alt"></i> {center.name}
              </p>

              <p className="course">
                <i className="fas fa-book-open"></i> Basic Computers, MS Office, Internet & Email
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  center.name + ', ' + center.location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Link href="/projects/cyberurja" className="btn">
            ← Back to Cyberurja Project Page
          </Link>
        </div>
      </div>
    </>
  );
}