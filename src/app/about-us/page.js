"use client";

import Link from 'next/link';  // Add this import for navigation
import YellowCTA from '../components/YellowCTA';  // Import the YellowCTA component
import PartnersSection from '../components/PartnersSection';  // Import the PartnersSection component

import { useEffect, useState } from "react";

export default function AboutUs() {

    const [years,setYears]=useState(0)
  const [projects,setProjects]=useState(0)
  const [volunteers,setVolunteers]=useState(0)
  const [csr,setCsr]=useState(0)

  useEffect(()=>{

    const counter=(setState,max)=>{
      let start=0
      const interval=setInterval(()=>{
        start++
        setState(start)
        if(start===max) clearInterval(interval)
      },40)
    }

    counter(setYears,21)
    counter(setProjects,27)
    counter(setVolunteers,45)
    counter(setCsr,12)

  },[])

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');


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

        .projects-section {
          padding: 120px 0 200px;
          background: #ffffff;
          text-align: center;
        }

        .about-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .section-title {
           font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .section-subtitle {
          font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -38px 0 70px 0;
        }

        // -----------------------------------------------------------------------------------------------------------------------
         .about-section{
          width:100%;
          padding:80px 0 0px;
        //   background:#f7f7f7;
          font-family:Arial, Helvetica, sans-serif;
        }

        .about-container{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:60px;
          align-items:center;
        }

        .about-title{
         font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .about-heading{
         font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -38px 0 20px 0;
        }

        .about-text{
          color:#666;
          font-size:15px;
          line-height:1.7;
          margin-bottom:30px;
        }

        .about-point{
          display:flex;
          gap:15px;
          margin-bottom:25px;
        }

        .check-icon{
          width:40px;
          height:40px;
          background: #fbd45a;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:bold;
          color:white;
        }

        .point-title{
          font-size:18px;
          font-weight:600;
          margin-bottom:5px;
        }

        .point-text{
          font-size:14px;
          color:#666;
        }

        .about-images{
          position:relative;
        }

        .img-big{
          width:80%;
          border-radius:12px;
        }

        .img-small{
          width:200px;
          position:absolute;
          bottom:-30px;
          left:-40px;
          border-radius:12px;
          box-shadow:0 10px 20px rgba(0,0,0,0.1);
        }

        @media(max-width:900px){
          .about-container{
            grid-template-columns:1fr;
          }

          .img-small{
            position:relative;
            left:0;
            bottom:0;
            margin-top:20px;
          }
        }s


        @media (max-width: 1024px) {
          .section-title {
            font-size: 42px;
          }

          .section-subtitle {
            font-size: 28px;
          }

        }

        @media (max-width: 768px) {

        .hero h1{font-size: 50px;}
          .projects-section {
            padding: 80px 0 60px;
          }

          .section-title {
            font-size: 36px;
          }

          .section-subtitle {
            font-size: 26px;
          }

        }

        // -----------------------------------------------------------------------------------------------------------------------

         .about-extra{
         max-width: 1200px;
          margin: 0 auto;
        padding:80px 0;
        background:#fff;
        font-family:Arial;
      }

      .about-extra p{
        color:#555;
        line-height:1.8;
        margin-bottom:20px;
        font-size:16px;
      }

      .event-image{
        width:100%;
        border-radius:8px;
        margin:40px 0;
        margin-bottom: -400px;
      }

      .stats-section{
      
        background:#1fa0cf;
        color:white;
        padding:60px 14%;
        padding-top:380px;
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:40px;
        text-align:center;
      }

      .stat i{
        font-size:32px;
        margin-bottom:10px;
      }

      .stat-number{
        font-size:36px;
        font-weight:bold;
      }

      .stat-title{
        font-size:18px;
        margin-top:5px;
      }

      .stat-desc{
        font-size:16px;
        margin-top:10px;
        opacity:0.9;
      }

      .president{
      max-width: 1230px;
          margin: 0 auto;
        padding:80px 0;
        // background:#f4f4f4;
        // padding:80px 8%;
        margin-bottom: -100px;
      }

      .president h2{
        font-size:32px;
        margin-bottom:10px;
      }

      .president h4{
        margin-bottom:20px;
        font-weight:500;
      }

      .quote-box{
        background:#f6c453;
        padding:25px;
        border-radius:20px;
        margin:30px 0;
        font-size:16px;
        line-height:1.7;
      }

      .sign{
        margin-top:20px;
        font-weight:bold;
      }

      @media(max-width:900px){

      .president{
      max-width: 1230px;
          margin: 0 auto;
        padding:20px 8%;
      }

      .event-image{
        margin:40px 0;
        margin-bottom: 0px;
      }

      .stats-section{
      
        background:#1fa0cf;
        color:white;
        padding:60px 14%;
        // padding-top:0px;
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:40px;
      }

       .about-extra{
         max-width: 1200px;
          margin: 0 auto;
        padding:80px 8%;
       
      }

        .stats-section{
          grid-template-columns:1fr 1fr;
        }

      }

      `}</style>

       {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <img className="hero-bg" src="/img/hero-one-big.3b2cd132.jpg" alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          {/* <p>The Projects that Defines Us</p> */}
          {/* <a href="#donate" className="btn">Support A Woman Today</a> */}
        </div>
      </section>

       <section className="about-section">
        <div className="about-container">

          {/* LEFT CONTENT */}

          <div>
            <div className="about-title">About Us</div>

            <div className="about-heading">
              If you light a lamp for Somebody, it will also brighten your path - Buddha
            </div>

            <p className="about-text">
              Welcome to NAVRATAN FOUNDATIONS, a registered non-profit society dedicated
              to advancing community development with a strong commitment to achieving
              the Sustainable Development Goals (SDGs). Our primary goal is to foster
              comprehensive and value-based community growth by extending support and
              resources to those in need.
            </p>


            <div className="about-point">
              <div className="check-icon">✓</div>
              <div>
                <div className="point-title">Empowering Women through Skill Development</div>
                <div className="point-text">
                  We provide women with training programs to help them gain skills,
                  achieve financial independence, and foster self-reliance.
                </div>
              </div>
            </div>


            <div className="about-point">
              <div className="check-icon">✓</div>
              <div>
                <div className="point-title">Promoting Quality Education</div>
                <div className="point-text">
                  Our initiatives focus on grassroots education, adult education,
                  and computer training to empower underprivileged children and adults.
                </div>
              </div>
            </div>


            <div className="about-point">
              <div className="check-icon">✓</div>
              <div>
                <div className="point-title">Enhancing Mental Health and Well-being</div>
                <div className="point-text">
                  We actively support mental health awareness and provide resources
                  to improve the emotional and social well-being of communities.
                </div>
              </div>
            </div>

          </div>


          {/* RIGHT IMAGES */}

          <div className="about-images">

            <img
              src="/img/who-we-are-3.jpg"
              className="img-big"
              alt="about"
            />

            <img
              src="/img/who-we-are-2.jpg"
              className="img-small"
              alt="about"
            />

          </div>

        </div>
      </section>

      {/* TEXT CONTENT */}

      <section className="about-extra">

        <p>
        At NAVRATAN FOUNDATIONS, we are dedicated to promoting gender equality, quality education,
        decent work, economic growth, and mental health, in alignment with SDGs 4, 5, 8, and 3.
        Our central focus is on empowering women and girls from disadvantaged backgrounds through
        skill development, quality education, and adult education programs.
        </p>

        <p>
        We also recognize the significance of healthcare and social protection for underserved
        populations. Hence, we actively support initiatives that enhance the physical, mental,
        and social well-being of all community members.
        </p>

        <p>
        Our commitment to promoting gender equality is deeply rooted in the understanding that
        it remains a significant challenge in India today. We actively work on literacy and
        awareness programs that drive societal change.
        </p>

        <p>
        NAVRATAN FOUNDATIONS is also dedicated to amplifying the role of civil society in
        local decision-making processes and connecting citizens with the available resources.
        </p>

        <p>
        Our mission is to transform society into one where everyone can live with hope and
        dignity by utilizing all available resources and community support.
        </p>

        <img src="/img/founder.webp" className="event-image"/>

      </section>


      {/* STATISTICS */}

      <section className="stats-section">

        <div className="stat">
          <i className="fa-solid fa-handshake"></i>
          <div className="stat-number">{years}+</div>
          <div className="stat-title">Years in Service</div>
          <div className="stat-desc">Committed to lasting impact.</div>
        </div>

        <div className="stat">
          <i className="fa-solid fa-file-invoice"></i>
          <div className="stat-number">{projects}+</div>
          <div className="stat-title">Projects Funded</div>
          <div className="stat-desc">Driving sustainable development through impactful projects.</div>
        </div>

        <div className="stat">
          <i className="fa-solid fa-hands-helping"></i>
          <div className="stat-number">{volunteers}+</div>
          <div className="stat-title">Volunteers</div>
          <div className="stat-desc">Empowering through service.</div>
        </div>

        <div className="stat">
          <i className="fa-solid fa-people-group"></i>
          <div className="stat-number">{csr}</div>
          <div className="stat-title">CSR Partnerships</div>
          <div className="stat-desc">Building stronger futures.</div>
        </div>

      </section>


      {/* PRESIDENT MESSAGE */}

      <section className="president">

        <h2>From the Desk of the President</h2>

        <h4>Dear friends,</h4>

        <p>
        It's been a dream to serve the community for the last 30 years and get so much
        love from you all. I would like to share with you the core values and aspirations
        that define Navratan Foundations.
        </p>

        <p>
        Our foundation stands on five pillars – Skill Training, Adult Education,
        Women Empowerment, Mental Health, and Talent Enhancement.
        </p>

        <p>
        Starting Navratan was not merely an act of philanthropy but a heartfelt endeavor
        to create a platform for the less fortunate to thrive.
        </p>

        <div className="quote-box">
        "My moments of pure happiness come when I witness children from our slum school
        confidently reciting poems, when women from our tailoring center start earning
        and becoming self-reliant, and when adult learners read and write."
        </div>

        <div className="sign">
        With warm regards,<br/>
        Dr. Ashok Srivastava
        </div>

      </section>

      <PartnersSection />

      <YellowCTA />
    </>
  );
}