"use client";

import YellowCTA from "../../components/YellowCTA";

export default function Founder() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

        .founder-page {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.8;
        }

        // ------------------------- HERO SECTION -------------------------

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

         body { font-family: 'Roboto', sans-serif; color: #333; background: #fff; line-height: 1.7; }
        h1, h2, h3, h4 { font-weight: 700; color: var(--dark); }

        .container { max-width: 1300px; margin: 0 auto; padding: 0 20px; }

        .hero h1 { color: white; font-size: 70px; margin-bottom: 3px; text-shadow: 0 4px 12px rgba(0,0,0,0.6); }
        .hero p { font-size: 1.5rem; margin-bottom: 2.5rem; font-weight: 300; }

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
          box-shadow: 0 12px 30px rgba(126, 126, 126, 0.4);
        }

        // -----------------------------------------------------------------------------------------------------------------------
        

         .founder-text h1 {
          font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
        //   letter-spacing: -1.5px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .quote {
          font-size: 30px;
          font-weight: 600;
          color: #212121;
          line-height: 1.4;
          margin: -30px 0 -0px 0;
        }

        // ----------------------------------------------------------------------

        /* Two Column Section */
        .main-content {
          max-width: 1400px;
          margin: 100px auto 0 auto;
          padding: 0 8%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Left - Photo + Banner */
        .photo-container {
          position: relative;
          text-align: center;
        }

        .founder-photo {
          width: 100%;
          max-width: 420px;
          border-radius: 12px;
        }

        /* Decorative yellow bubbles */
        .bubble {
          position: absolute;
          background: #ffeb3b;
          border-radius: 50%;
          opacity: 0.25;
          z-index: -1;
        }
        .bubble1 { width: 80px; height: 80px; top: 10%; left: -10%; }
        .bubble2 { width: 50px; height: 50px; top: 35%; right: -8%; }
        .bubble3 { width: 65px; height: 65px; bottom: 15%; left: 5%; }

        /* Yellow Name Banner */
        .name-banner {
          background: #ffeb3b;
          color: #212121;
          padding: 18px 30px;
          border-radius: 12px;
          margin-top: -30px;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 380px;
          margin-left: auto;
          margin-right: auto;
        }

        .name-banner h2 {
          font-size: 1.65rem;
          font-weight: 700;
          margin: 0;
        }

        .name-banner p {
          font-size: 0.95rem;
          margin: 4px 0 0;
          font-weight: 500;
        }

        /* Right - Text Content */
        .founder-text h3 {
          font-size: 2.1rem;
          font-weight: 700;
          color: #212121;
          margin-bottom: 25px;
        }

        .founder-text p {
          font-size: 1.05rem;
          color: #444;
          margin-bottom: 22px;
        }

         .bottom-content {
          max-width: 1500px;
          margin: 30px auto;
          margin-bottom: 150px;
          padding: 0 8%;
          display: grid;
          // grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .main-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .quote {
            font-size: 2.2rem;
          }
          .hero h1 {
            font-size: 42px;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 60px 5% 40px;
          }
        }
      `}</style>

      <div className="founder-page">
          {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Founder’s Profile</h1>
          {/* <p>The Projects that Defines Us</p> */}
          {/* <a href="#donate" className="btn">Support A Woman Today</a> */}
        </div>
      </section>
       

        {/* Main Content - Photo + Text */}
        <section className="main-content">
          {/* Left Photo + Banner */}
          <div className="photo-container">
            <img 
              src="/img/founder_image.png" 
              alt="Dr. Ashok Srivastava" 
              className="founder-photo" 
            />
            
            {/* Decorative bubbles */}
            {/* <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>

            
            <div className="name-banner">
              <h2>DR. ASHOK SRIVASTAVA</h2>
              <p>FOUNDER &amp; PRESIDENT</p>
              <p>NAVRATAN FOUNDATIONS</p>
            </div>
            */}
          </div> 

          {/* Right Text */}
          <div className="founder-text">
            <h1>Founder’s Message</h1>
            <div className="quote">
              “Be the change you wish to see in the world.”
            </div>
            
            <p>
              These words of Mahatma Gandhi aptly describe the founder of Navratan 
              Foundations, Dr. Ashok Srivastava. An electrifying, charismatic, and charming 
              personality, he is a man with a noble mission – to touch the lives of those in 
              need of a healing presence.
            </p>

            <p>
              His rock-solid determination and never-say-no attitude make him stand apart from 
              others. He is an avid believer in Doing what you can, with what you have, wherever 
              you are. With this thought, Dr. Ashok started the Navratan Foundation in 2002.
            </p>

          </div>
        </section>
        <section className="bottom-content">

          {/* Right Text */}
          <div className="bottom-text">


            <p>
              Being a member of many prominent social organizations since his early youth gave 
              him an edge while viewing different perspectives of issues on the ground. Leaving 
              behind a lucrative corporate life to work with people at the grassroots level was 
              not a sacrifice but a compulsive desire to inspire those who had the intent but 
              lacked the motivation to bring change.
            </p>

            <p>
              A philanthropist and a social thought leader, Dr. Ashok focused his energies on 
              creating a social enterprise. The foundation focused on unseen talent and created 
              programs and initiatives around it which were pursued in a holistic and sustainable 
              manner.
            </p>

            <p>
              An orator and speaker of the highest caliber, it is Dr. Ashok’s wit and ability 
              to hold a conversation that makes him a people person. A social entrepreneur with 
              a penchant for honing talent, he aims to bring a new dawn in the lives of the 
              less fortunate. With the passing of time, his desire to improve and enhance the 
              quality of life for the oppressed and marginalized sections, build capacity, and 
              help those who have been suppressed in the social and economic domain is on a high.
            </p>
          </div>
        </section>
        <YellowCTA />
      </div>
    </>
  );
}