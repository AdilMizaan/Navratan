"use client";

import YellowCTA from "../../../components/YellowCTA";

export default function Patrons() {

    const patrons = [
    {
      name: "Arvind Srivastava",
      title: "CHIEF PATRON",
      subtitle: "Former Member, Trade Tax Tribunal, U.P.",
      description: "Mr. Arvind Srivastava has been a patron of Navratan for over 12 years and his guidance has been instrumental in the Commercial Tax Tribunal, Government of Uttar Pradesh in 2015 and lives in Noida.",
      image: "/img/patrons/arvind-srivastava.jpg"
    },
    {
      name: "Atul Mangal",
      title: "Chairman, Mangalmay Group of Institutes, Greater Noida",
      description: "Mr. Atul Mangal is heading Mangalmay Group of Institutions, Greater Noida. Besides being an educationist, Atul Mangal is also a well-known name in the social welfare drives for the upliftment of the underprivileged of the society.",
      image: "/img/patrons/atul-mangal.jpg"
    },
    {
      name: "Atul Srivastava",
      title: "CEO, Effective People, Mumbai",
      description: "Mr. Atul Srivastava is founder of Effective People, helping companies build efficient leadership, manage changes, and establish robust HR practices through his vast and rich experience. A postgraduate in commerce with experience in managing...",
      image: "/img/patrons/atul-srivastava.jpg"
    },
    {
      name: "Vibha Mishra",
      title: "Counselor",
      description: "Vibha Mishra, an advertising and PR professional with a dynamic attitude, after working for 25 years in the advertising industry and two years with IIM-Indore as a training head, is now associated with...",
      image: "/img/patrons/vibha-mishra.jpg"
    },
    {
      name: "Renu Adawal",
      title: "Social Entrepreneur, New Delhi",
      description: "Renu Adawal is a postgraduate in Home Science and Child Psychology from Vansathali University, Jaipur. Besides this, she has done various important courses in computer education from NIIT, Delhi. Despite being a successful homemaker, she is a great philanthropist and has been involved in many charity and religious works in Delhi NCR. She loves sharing brilliant ideas related to social welfare.",
      image: "/img/patrons/renu-adawal.jpg"
    },
    {
      name: "Dhurendra Chaturvedi",
      title: "",
      description: "A postgraduate of the University of Allahabad. Joined the State Govt Commercial Tax Department as a PCS officer. Retired as the Additional Commissioner Grade-1 of the Varanasi Zone of the Commercial Tax Department, Government of Uttar Pradesh. He was responsible for tax collection, dispute settlement, industry-department relations, policy making, and general administration of one of the biggest zones in the state.",
      image: "/img/patrons/dhurendra-chaturvedi.jpg"
    },
    {
      name: "Jamil Ahmad",
      title: "",
      description: "Jamil Ahmad is a law graduate from Lucknow University. He served the government for more than 37 years in the field of general administration, personnel department, vigilance department, and commercial and institutional department. Prior to serving the Noida Authority as Deputy Secretary, he served NEPZ as an administrative officer. Post-retirement, he is associated with Dasna Ghaziabad as Director General.",
      image: "/img/patrons/jamil-ahmad.jpg"
    },
    {
      name: "P.K. Gupta",
      title: "",
      description: "Praveen Kumar Gupta completed his B.Tech in 1976 and joined the Industries Department, Govt of UP. He was part of the industrial development in Noida and Greater Noida during 1987-97 and retired from Aligarh as Deputy Commissioner, Industries. He is currently leading a retired life and is associated with various social welfare activities.",
      image: "/img/patrons/pk-gupta.jpg"
    },
    {
      name: "Anoop Jairath",
      title: "",
      description: "A Chartered Accountant by profession, rendering professional services in corporate tax, Assurance, and Business Advisory Services. Joined Rotary in 2005, and rose to be the President of the Rotary Club of Noida. He has established a blood bank in Noida along with several social projects. He is also the Vice-President of Suprayas Centre of Excellence, an NGO involved in developing employable skills in underprivileged children.",
      image: "/img/patrons/anoop-jairath.jpg"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

        .patrons-page {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.8;
        }

        /* ------------------------- HERO SECTION ------------------------- */
        .hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -2;
        }

        .video-container .hero-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.45);
          z-index: -1;
        }

        .hero-content {
          z-index: 1;
          max-width: 900px;
          padding: 0 20px;
        }

        .hero h1 { 
          color: white; 
          font-size: 70px; 
          margin-bottom: 3px; 
          text-shadow: 0 4px 12px rgba(0,0,0,0.6); 
        }

        /* ------------------------- PATRONS SECTION ------------------------- */
        .patrons-section {
          padding: 100px 8% 200px ;
          background: #f8f9fa;
        }

        .patrons-list {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .patron-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          display: flex;
          gap: 30px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        /* Sirf Arvind Srivastava ka card highlight */
        .patron-card.chief {
          background: #fff9e6;           /* Light yellow */
          border: 2px solid #fbd45a;
        }

        .patron-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }

        .patron-photo {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid #fbd45a;
          flex-shrink: 0;
        }

        .patron-info {
          flex: 1;
        }

        .patron-name {
          font-size: 1.55rem;
          font-weight: 700;
          color: #00acf0;
          margin-bottom: 4px;
        }

        .patron-title {
          font-size: 1.05rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 12px;
        }

        /* Sirf Arvind ka title red highlight */
        .patron-card.chief .patron-title {
          background: #e63939;
          color: white;
        }

        .patron-desc {
          font-size: 0.98rem;
          color: #555;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .patron-card {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }
          .patron-photo {
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="patrons-page">
        {/* Hero Section - SAME */}
        <section className="hero">
          <div className="video-container">
            <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Patrons</h1>
          </div>
        </section>

        <section className="patrons-section">
          <div className="patrons-list">
            {patrons.map((patron, index) => (
              <div 
                key={index} 
                className={`patron-card ${index === 0 ? 'chief' : ''}`}
              >
                <img 
                  src={patron.image} 
                  alt={patron.name} 
                  className="patron-photo" 
                />
                <div className="patron-info">
                  <div className="patron-name">{patron.name}</div>
                  {patron.title && <div className="patron-title">{patron.title}</div>}
                  {patron.subtitle && <div className="patron-title" style={{fontSize:"0.95rem", color:"#666", background:"transparent"}}>{patron.subtitle}</div>}
                  <div className="patron-desc">{patron.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
       
        <YellowCTA />
      </div>
    </>
  );
}