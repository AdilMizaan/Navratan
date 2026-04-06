"use client";

export default function DayaRaniSection() {
  return (
    <>
      <style jsx>{`
        .dayarani-section {
          padding: 100px 20px;
          background: #ffffff;
        }

        .dayarani-box {
          max-width: 1100px;
          margin: 0 auto;
          background: #fbd45a;
          border-radius: 24px;
          padding: 70px 20px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(251, 191, 36, 0.25);
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 1px;
        }

        .dayarani-logo {
          width: 240px;           /* SVG ke liye thoda bada rakha hai */
          height: auto;
          margin-bottom: 35px;
        }

        .dayarani-logo img,
        .dayarani-logo svg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .heading {
        //   font-family: 'Shadows Into Light', cursive;
          font-size: 38px;
          font-weight: 600;
          color: #212121;
          line-height: 1.1;
          margin: 0 0 25px 0;
        }

        .description {
          font-family: 'Inter', sans-serif;
          font-size: 17.5px;
          line-height: 1.75;
          color: #253339;
          max-width: 900px;
          margin: 0 auto 40px;
        }

        .visit-btn {
          display: inline-block;
          padding: 18px 52px;
          background: #00acf0;
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.35s ease;
          box-shadow: 0 10px 30px rgba(17, 24, 39, 0.25);
        }

        .visit-btn:hover {
          background: #00acf0;
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 172, 240, 0.35);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .dayarani-box {
            padding: 60px 30px;
          }
          .heading {
            font-size: 42px;
          }
          .dayarani-logo {
            width: 300px;
          }
        }

        @media (max-width: 768px) {
          .dayarani-section {
            padding: 80px 15px;
          }
          .dayarani-box {
            padding: 50px 25px;
          }
          .heading {
            font-size: 32px;
          }
          .dayarani-logo {
            width: 180px;
          }
        }

        @media (max-width: 480px) {
          .dayarani-logo {
            width: 120px;
          }
            .heading {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="dayarani-section">
        <div className="dayarani-box">
          
          {/* SVG Logo */}
          <div className="dayarani-logo">
            <img 
              src="/img/daya-rani-Logo_new.svg"     // ← Apna SVG logo yahan daal do
              alt="DayaRani Logo" 
            />
          </div>

          {/* Heading */}
          <h2 className="heading">
            The DayaRani Emotional Wellbeing Movement
          </h2>

          {/* Description */}
          <p className="description">
            DayaRani is a purpose-driven think tank and advisory dedicated to advancing emotional wellbeing as a way of life. Founded as a tribute to values of compassion and resilience, it works to create an inclusive ecosystem where individuals can understand, rewire, and reinvent themselves through self-awareness and holistic tools. With a strong focus on preventive emotional wellness, DayaRani combines research, awareness, and innovative interventions to break stigma, build resilience, and inspire meaningful transformation across communities and workplaces.
                   </p>

          {/* Visit Website Button */}
          <a 
            href="https://dayarani.in/" 
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn"
          >
            Visit Website →
          </a>

        </div>
      </section>
    </>
  );
}