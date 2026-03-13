"use client";

import YellowCTA from "../../../components/YellowCTA";

export default function ExecutiveCommittee() {

    const executives = [
    {
      name: "Dr. Ashok Srivastva",
      title: "President",
      description: "A man with a golden heart and a humble personality, he has dedicated the last 35 years to social work. Holding degrees from a lasting impact on various communities.",
      image: "/img/executive-committee/founder-in-circle-e1600241339973.png"
    },
    {
      name: "Mr. R. K. Saxena",
      title: "Sr. Vice President",
      description: "A retired IRS officer who served for over 40 years as Asst. Commissioner for Customs & Central Excise. He is an active Real Estate Consultant specializing in Noida, Greater Noida, and the NCR region, while remaining engaged in community welfare activities.",
      image: "/img/executive-committee/r-k-saxena-150x150-1.png"
    },
    {
      name: "Varsha Srivastva",
      title: "Vice President",
      description: "An artist, educator, and homemaker with a decade-long association with Navratan. Passionate about creative expression, she is a self-taught artist known for her vibrant works. Recently, she has dedicated herself to educating underprivileged children with utmost dedication.",
      image: "/img/executive-committee/varsha-Srivastava.png"
    },
    {
      name: "Murari Prasad Srivastva",
      title: "Vice President",
      description: "A retired professional from FCI, Noida, with a deep passion for theater and social work. Currently, he is an active Real Estate Consultant specializing in Noida, Greater Noida, and the NCR region, while remaining engaged in community welfare activities.",
      image: "/img/executive-committee/murari-prasad-150x150-1.png"
    },
    {
      name: "Hemant Sharma",
      title: "Vice President",
      description: "A retired Senior Manager from Punjab National Bank, he is now involved in the corporate world. Passionate about music and philanthropy, he is a singer who actively performs on stage while serving as a senior officer bearer in his housing group.",
      image: "/img/executive-committee/hemant-sharma-150x150-1.png"
    },
    {
      name: "Someshwar Sharma",
      title: "Vice President",
      description: "A commerce graduate from Delhi University, he has worked at Doordarshan since 1984. Passionate about cooking and Bollywood music, he co-founded Sparsh (Bhaas Zindagi Ki), a platform supporting young talents in pursuing their singing careers.",
      image: "/img/executive-committee/someshwar-sharma.png"
    },
    {
      name: "Vivek Srivastva",
      title: "Vice President",
      description: "A science graduate with a PG in Business Administration, he has 15 years of experience in healthcare administration. Having worked with major hospitals, he is actively engaged in social media and aims to improve healthcare infrastructure and social services.",
      image: "/img/executive-committee/vivek-kumar.png"
    },
    {
      name: "A.V. Murlidharan",
      title: "General Secretary",
      description: "A science graduate with a postgraduate degree in Marketing and International Trade. Since 1999, he has led RAVI International, providing automation and barcoding solutions. A dedicated social worker, he is now exploring digital outdoor media innovations.",
      image: "/img/executive-committee/mulridharan.png"
    },
    {
      name: "Anuranjan Srivastva",
      title: "Treasurer",
      description: "An entrepreneur and social worker with over 15 years of experience in IT, Publishing, and Education. Committed to vocational education, he founded 'Skilled ME', a company providing skill training programs and digital solutions, fostering growth for underprivileged youth.",
      image: "/img/executive-committee/anuranjan-srivastava-150x150-1.png"
    },
    {
      name: "Vineet Khare",
      title: "Media In Charge",
      description: "A technocrat with over 30 years of experience in digital media. Founder of Creative, a digital media company, he specializes in LAMP and search content. Passionate about technology, he actively contributes digital services to various NGO events.",
      image: "/img/executive-committee/vineet-khare.png"
    },
    {
      name: "Mrs. Shalini Agrawal",
      title: "Joint Secretary",
      description: "A yoga practitioner for over 7 years, she promotes holistic health, especially for the elderly. In Hyderabad, she teaches yoga while also managing business ventures, including a successful restaurant franchise, showcasing her entrepreneurial spirit.",
      image: "/img/executive-committee/shalini-agarwal-150x150-1.png"
    },
    {
      name: "Shubhransh Shekhar",
      title: "Joint Secretary",
      description: "An IIT graduate with nearly 20 years of experience spanning corporate and social sectors. With expertise in industrial consultancy and labor laws, he has worked with multiple NGOs, advocating social and economic development through a people-centric approach.",
      image: "/img/executive-committee/shubhranshu-shekhar.png"
    },
    {
      name: "Mrs. Geeta Misra",
      title: "Joint Secretary",
      description: "A dedicated social worker with a B.A. and B.Ed., she has served as Treasurer and Secretary at Lioness Club. Passionate about education, she records audiobooks for the blind and supports underprivileged children by providing free education at her home.",
      image: "/img/executive-committee/geeta.png"
    },
    {
      name: "Mrs. Anshumali Sinha",
      title: "Cultural Secretary and Social Media In charge",
      description: "A Computer Science graduate with an MBA in Finance & Marketing, she has 8 years of corporate experience. A trained vocalist, she passionately manages cultural and social initiatives, balancing her love for music with community service.",
      image: "/img/executive-committee/anshumali-sinha.png"
    },
    {
      name: "Anil Srivastva",
      title: "Joint Media In Charge",
      description: "A postgraduate in Sociology and experienced journalist, he has been associated with Navratan Foundation since 2015. Currently serving as Joint Media In-charge, he uses his expertise to support the organization's media outreach and social initiatives.",
      image: "/img/executive-committee/anil-srivastava.png"
    },
    {
      name: "Gurjeet Singh",
      title: "Executive Member",
      description: "A creative artist known for unique and aesthetically pleasing projects. He collaborates with businesses and individuals, embracing the mantra 'Create with the heart, build with the mind,' bringing innovation to his artistic endeavors.",
      image: "/img/executive-committee/gurjeet-singh.png"
    },
    {
      name: "Neeraj Bhatnagar",
      title: "Executive Member",
      description: "An entrepreneur since 2010, he has over 30 years of experience spanning TV and computer industries. Deeply involved in social work from a young age, he embodies his father's values and remains committed to making a meaningful societal impact.",
      image: "/img/executive-committee/neeraj-bhatnagar.png"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

        .executive-page {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.8;
        }

        /* HERO SAME */
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
        .video-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: -2; }
        .video-container .hero-bg { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; transform: translate(-50%, -50%); }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.45); z-index: -1; }
        .hero h1 { color: white; font-size: 70px; text-shadow: 0 4px 12px rgba(0,0,0,0.6); }

        /* EXECUTIVE SECTION */
        .executive-section {
          padding: 100px 8% 150px;
          background: #f8f9fa;
        }

        .executive-list {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;           /* Gap badha diya */
        }

        .executive-card {
          background: white;
          border: 2px solid #00acf0;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          position: relative;
          padding: 28px 28px 28px 110px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .executive-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.12);
        }

        /* IMAGE - LEFT + ADHA BAHAR */
        .executive-photo {
          position: absolute;
          left: -75px;
          top: 50%;
          transform: translateY(-50%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          // border: 6px solid #fff;
          box-shadow: 0 5px 20px rgba(0,172,240,0.3);
          z-index: 10;
          padding-top: 4px; /* Thoda padding diya taaki border ke andar image thoda niche aaye */
        }

        .executive-info {
          flex: 1;
          text-align: left;
        }

        .executive-name {
          font-size: 1.55rem;
          font-weight: 700;
          color: #00acf0;
          margin-bottom: 6px;
        }

        .executive-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #212121;
          margin-bottom: 12px;
        }

        .executive-desc {
          font-size: 0.98rem;
          color: #555;
          line-height: 1.65;
        }

        /* MOBILE VIEW */
        @media (max-width: 768px) {

          .executive-list {
            gap: 100px;   /* Mobile me thoda kam gap */
          }

          .executive-card {
            padding: 90px 20px 20px 20px;
            flex-direction: column;
            text-align: center;
          }
          .executive-photo {
            left: 50%;
            top: -75px;
            transform: translateX(-50%);
          }
          .executive-info {
            text-align: center;   /* Mobile me center align */
          }
        }
      `}</style>

      <div className="executive-page">
        <section className="hero">
          <div className="video-container">
            <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Executive Committee</h1>
          </div>
        </section>

        <section className="executive-section">
          <div className="executive-list">
            {executives.map((member, index) => (
              <div key={index} className="executive-card">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="executive-photo" 
                />
                <div className="executive-info">
                  <div className="executive-name">{member.name}</div>
                  <div className="executive-title">{member.title}</div>
                  <div className="executive-desc">{member.description}</div>
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