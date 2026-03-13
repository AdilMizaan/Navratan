"use client";

import YellowCTA from "../../../components/YellowCTA";

export default function Advisors() {

    const advisors = [
      
    {
      name: "Mr. Mukesh Nigam",
      title: "",
      subtitle: "",
      description: "He is retired as Branch Manager from a Nationalized Bank of India. He has been involved with many social activities in Noida for the last 32 years. Mr. Mukesh is known for his dedication and commitment.",
      image: "/img/advisors/mukesh-nigam-150x150-1.png"
    },
    {
      name: "Chitranjan Saxena",
      title: "",
      subtitle: "",
      description: "He is a graduate from Delhi University. Worked with Parasnath & Association as a Director from 1986 to 1992 and then started his own business of real estate consultancy in 1992. He has a keen interest in social work.",
      image: "/img/advisors/chitranjan-saxena-1-150x150-1.png"
    },
    {
      name: "Ratan Kumar",
      title: "",
      subtitle: "",
      description: "He is B.Tech. (Mechanical) from IET, Bundelkhand University. Retired after 35 years with the Tata Group. Currently, he works as a Lead Auditor for certification and is a Rotarian with a keen interest in social work.",
      image: "/img/advisors/ratan-kumar.png"
    },
    {
      name: "Dr. Achyut Kumar Tripathi",
      title: "",
      subtitle: "",
      description: "He hails from a lineage rich in Ayurvedic wisdom, inheriting the legacy of Ayurvedic knowledge from his esteemed ancestors. Recognized for his profound expertise and research in Ayurveda, he has been honored with prestigious accolades such as the 'Ratna membership' by the Government of India. He continues to lead studies on Ayurvedic medicine globally.",
      image: "/img/advisors/Achyut-Kumar-tripathi.png"
    },
    {
      name: "Chitranh Shekhar Dhar",
      title: "",
      subtitle: "",
      description: "Mr. Shekhar Dhar, a law postgraduate, started his business at a very early age. After a successful business career, he shifted to Delhi and is currently working as a social worker for a noble cause and associated with RSS as Town head of the Noida region.",
      image: "/img/advisors/shekhar-dhar.png"
    },
    {
      name: "Sanjay Pandey",
      title: "",
      subtitle: "",
      description: "Young, energetic, and a sensational singer who stole a million hearts, Sanjay Pandey started his career in the Army and was heading EME Regimental Musical Band for over 19 years. His graceful stage presence mesmerizes audiences in no time.",
      image: "/img/advisors/sanjay-pandey.png"
    },
    {
      name: "Deepak Naidu",
      title: "",
      subtitle: "",
      description: "Born and brought up in Delhi, Deepak Naidu is passionate about singing. After retiring in 2014, he started his second inning of singing, supported by his family, and is now associated with NGO's cultural music activities.",
      image: "/img/advisors/deepak-naidu.png"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

        .advisors-page {
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

        /* ------------------------- ADVISORS SECTION ------------------------- */
        .advisors-section {
          padding: 100px 8% 150px;
          background: #f8f9fa;
        }

        .advisors-list {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .advisor-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          display: flex;
          gap: 30px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        /* Sirf pehle card (Chief Advisor) highlight */
        // .advisor-card.chief {
        //   background: #fff9e6;
        //   border: 2px solid #fbd45a;
        // }

        .advisor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }

        .advisor-photo {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid #fbd45a;
          flex-shrink: 0;
          padding-top: 4px;
        }

        .advisor-info {
          flex: 1;
        }

        .advisor-name {
          font-size: 1.55rem;
          font-weight: 700;
          color: #00acf0;
          margin-bottom: 4px;
        }

        .advisor-title {
          font-size: 1.05rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 12px;
        }

        /* Sirf Chief Advisor ka title red */
        .advisor-card.chief .advisor-title {
          background: #e63939;
          color: white;
        }

        .advisor-desc {
          font-size: 0.98rem;
          color: #555;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .advisor-card {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }
          .advisor-photo {
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="advisors-page">
        {/* Hero Section - SAME */}
        <section className="hero">
          <div className="video-container">
            <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Advisors</h1>
          </div>
        </section>

        <section className="advisors-section">
          <div className="advisors-list">
            {advisors.map((advisor, index) => (
              <div 
                key={index} 
                className={`advisor-card ${index === 0 ? 'chief' : ''}`}
              >
                <img 
                  src={advisor.image} 
                  alt={advisor.name} 
                  className="advisor-photo" 
                />
                <div className="advisor-info">
                  <div className="advisor-name">{advisor.name}</div>
                  {advisor.title && <div className="advisor-title">{advisor.title}</div>}
                  {advisor.subtitle && <div className="advisor-title" style={{fontSize:"0.95rem", color:"#666", background:"transparent"}}>{advisor.subtitle}</div>}
                  <div className="advisor-desc">{advisor.description}</div>
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