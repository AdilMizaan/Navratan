// src/app/projects/astitva/centers/page.js
'use client';

import Link from 'next/link';

export default function AllAstitvaCenters() {
  const centers = [
    // Active Centers (1–20)
    { name: "J. J. COLONY SECTOR 17, NOIDA", location: "Uttar Pradesh – Noida", active: true },
    { name: "SAMPOORN JAN KALYAN SOCIETY, BISRAKH, NOIDA", location: "Uttar Pradesh – Noida", active: true },
    { name: "SMT.MANJU RANI WOMEN TAILORING TRAINING CENTRE, KANCHAN PUBLIC SCHOOL, SECT- 31", location: "Uttar Pradesh – Noida", active: true },
    { name: "RIYA FOUNDATION, HAROLA, SECTOR 5, NOIDA", location: "Uttar Pradesh – Noida", active: true },
    { name: "SONIA KOHALI WOMEN TAILORING TRAINING CENTRE, SECTOR-73", location: "Uttar Pradesh – Noida", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, KHAJUR COLONY, VILLAGE SADARPUR", location: "Uttar Pradesh – Noida", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, JAMA MASJID, SECTOR -8, NOIDA", location: "Uttar Pradesh – Noida", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, NAVJHEEL, MATHURA", location: "Uttar Pradesh – Mathura", active: true },
    { name: "JAN SARNAM, H.NO. 3, GALI NO 1, BLOCK F-IIIRD, 7 FT, ROAD, MOLAR BAND, BADARPUR, NEW DELHI", location: "Delhi", active: true },
    { name: "SAI COMPUTER EDUCATION CENTRE, SECTOR-122", location: "Uttar Pradesh – Noida", active: true },
    { name: "NAVRATAN WOMEN TAILORING CENTRE, NIVEDA FOUNDATION, NOIDA", location: "Uttar Pradesh – Noida", active: true },
    { name: "KESHAV MADHAV SARASWATI VIDYA MANDIR, KAKOD, BULANDSHAHR", location: "Uttar Pradesh – Bulandshahr", active: true },
    { name: "BHAJAN PAL BHATI INTER COLLEGE, KAKOD, BULANDSHAHR", location: "Uttar Pradesh – Bulandshahr", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, SURAJPUR, GREATOR NOIDA", location: "Uttar Pradesh – Greater Noida", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, MAYAWATI P.G. COLLEGE, BADALPUR, G.B.NAGAR", location: "Uttar Pradesh – Greater Noida", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, BABA ACHINTYA NATH WOMEN TAILORING TRAINING CENTRE, GAZIPUR", location: "Uttar Pradesh – Gazipur", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, JAN SARNAM, 168, PARWANA ROAD, KHUREJI KHASH, DELHI", location: "Delhi", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, NEEV SHAKTI SANSTHA, GHAZIABAD", location: "Uttar Pradesh – Ghaziabad", active: true },
    { name: "SMT. NIRMALA DEVI MAHILA PRAKSHIN KENDRA, BHANGEL", location: "Uttar Pradesh – Noida", active: true },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, JUVENILE HOME, NOIDA", location: "Uttar Pradesh – Noida", active: true },

    // Handed Over Centers (21–36)
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, KHODA COLONY, GHAZIABAD", location: "Uttar Pradesh – Ghaziabad", active: false },
    { name: "BHARTUTA NUTHILA SAMITI, SHARMA MARKET, SALARPUR, SECTOR-107, NOIDA", location: "Uttar Pradesh – Noida", active: false },
    { name: "SHRI. RAM ANUGRAH NARAYAN WOMEN TAILORING TRAINING CENTRE, MOHAN MANDIR WALI GALI, SURAJPUR, GREATER NOIDA", location: "Uttar Pradesh – Greater Noida", active: false },
    { name: "WOMEN TAILORING TRAINING CENTRE, 140, SHIVPURI, GALI NO 13, VIJAY NAGAR, GHAZIABAD", location: "Uttar Pradesh – Ghaziabad", active: false },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, NICHALI CHAUPAL, VILL HARAULA, SECTOR-5, NOIDA", location: "Uttar Pradesh – Noida", active: false },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, SETU FOUNDATION C/7, NITHARI-SECTOR 31, NOIDA", location: "Uttar Pradesh – Noida", active: false },
    { name: "NAVRATAN WOMENT TAILORING TRAINING CENTRE, VILLAGE VAILANA, SMT. RAJESH", location: "Uttar Pradesh", active: false },
    { name: "NAVRATAN WOMENT TAILORING TRAINING CENTRE, MORNA. SECTOR 35", location: "Uttar Pradesh – Noida", active: false },
    { name: "SARDAR BHAG SINGH WOMEN TAILORING TRAINING CENTRE, VILLAGE KANARASI, SIKANDARABAD, DANKAUR ROAD, GAUTAM BUDDHA NAGAR", location: "Uttar Pradesh – Gautam Buddha Nagar", active: false },
    { name: "SARDAR BHAG SINGH WOMEN TAILORING TRAINING CENTRE, VILLAGE RUSTAMPUR, GAUTAM BUDDHA NAGAR", location: "Uttar Pradesh – Gautam Buddha Nagar", active: false },
    { name: "NEAR SAGEER JAN SEVA SUBIDHA KENDRA, JHAJHAR ROAD, DANKAUR", location: "Uttar Pradesh – Dankaur", active: false },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, VILLAGE THASRANA, THE. SADAR, GAUTAMBUDDH NAGAR", location: "Uttar Pradesh – Gautam Buddha Nagar", active: false },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, NEAR PRAGYAN PUBLIC, SCHOOL, JEWAR, GAUTAMBUDDH NAGAR", location: "Uttar Pradesh – Gautam Buddha Nagar", active: false },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, NIRNAY SWASTHYA SEVA & JAN KALYAN SANSTHA, VILLAGE JAWAN, KHURJA", location: "Uttar Pradesh – Khurja", active: false },
    { name: "NAVRATAN WOMEN TAILORING TRAINING CENTRE, GOVERNMENT GIRLS INTER COLLEGE, VIJAY NAGAR, GHAZIABAD", location: "Uttar Pradesh – Ghaziabad", active: false },
    { name: "DIVYA DARSHAN YOG SEVA SANSTHAN, VILL. BADALPUR, MILAK, DADARI, GAUTAM BUDDH NAGAR.", location: "Uttar Pradesh – Gautam Buddha Nagar", active: false },
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

        .center-badge.handed-over {
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
        <h1 className="section-title">All Astitva Women Tailoring Training Centers</h1>

        <p
          style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            marginBottom: '60px',
            color: '#555',
          }}
        >
          Total Centers: <strong>{centers.length}</strong> | Empowering underprivileged women across Delhi/NCR and nearby areas
        </p>

        <div className="centers-grid">
          {centers.map((center, index) => (
            <div key={index} className="center-card">
              <div className="top-row">
                <div className="center-location-tag">{center.location}</div>
                {/* <span
                  className={`center-badge ${center.active ? 'active' : 'handed-over'}`}
                >
                  {center.active ? 'Active' : 'Handed Over'}
                </span> */}
              </div>

              <h4 className="center-name">{center.name}</h4>

              <p className="address">
                <i className="fas fa-map-marker-alt"></i> {center.name}
              </p>

              <p className="course">
                <i className="fas fa-book-open"></i> Basic Stitching, Advanced Tailoring etc.
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
          <Link href="/projects/astitva" className="btn">
            ← Back to Astitva Project Page
          </Link>
        </div>
      </div>
    </>
  );
}