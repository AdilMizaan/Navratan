"use client";

import Link from 'next/link';  // Add this import for navigation
import YellowCTA from '../components/YellowCTA';  // Import the YellowCTA component
import PartnersSection from '../components/PartnersSection';  // Import the PartnersSection component

import { useEffect, useState } from "react";

export default function Donate() {

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


    //   ---------------------------------------donate page css---------------------------------------
    .donate-page{
          max-width:1100px;
          margin:auto;
          padding:80px 20px 150px;
          font-family:Arial, sans-serif;
          color:#333;
          align-items:center;
          display:flex;
          justify-content:center;
          flex-direction:column;
        }

        /* SECTION 1 */
        .quote-section{
          text-align:center;
          width:70%;
          maargin:auto;
          margin-bottom:60px;
        }

        .quote-section h2{
          font-size:34px;
          font-weight:600;
          line-height:1.4;
        }

        .quote-author{
          color:#777;
          margin-top:8px;
          font-size:18px;
        }

        .quote-section p{
          margin-top:25px;
          line-height:1.7;
          color:#555;
          font-size:20px;
        }

        /* SECTION 2 */
        .donation-section{
          display:flex;
          gap:100px;
          align-items:flex-start;
        }

        .left{
          flex:1;
        }

        .right{
          width:320px;
          text-align:center;
        }

        .donation-section h3{
          font-size:28px;
          margin-bottom:15px;
        }

        .important{
          font-size:18px;
          color:#555;
          margin-bottom:20px;
        }

        .bank-box{
          background:#f5f5f5;
          padding:30px;
          border-radius:8px;
          margin-bottom:15px;
        }

        .bank-box h4{
          margin-bottom:20px;
          font-size:24px;
    
        }

        .bank-box p{
          margin:10px 0;
          font-size:18px;
        }

        .tax{
          color:green;
          margin-top:10px;
        }

        .message{
          margin-top:10px;
          color:#777;
          font-style:italic;
        }

        .qr-img{
          width:100%;
          border-radius:8px;
          box-shadow:0 5px 20px rgba(0,0,0,0.1);
        }

        .qr-text{
          margin-top:10px;
          color:#666;
        }

        @media(max-width:768px){
         .quote-section{
          width:100%;
          margin-bottom:60px;
        }
          .donation-section{
            flex-direction:column;
          }

          .right{
            width:100%;
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
          <h1>Support A Cause</h1>
          {/* <p>The Projects that Defines Us</p> */}
          {/* <a href="#donate" className="btn">Support A Woman Today</a> */}
        </div>
      </section>

        <div className="donate-page">

        {/* SECTION 1 */}
        <section className="quote-section">
          <h2>
            “We make a living by what we get. <br/>
            We make a life by what we give.”
          </h2>

          <div className="quote-author">
            - Winston S. Churchill
          </div>

          <p>
            At <strong>Navratan Gyanpeet,</strong> all a child needs is a little help from a generous donor. Your monthly contribution of <strong>Rs.500/- per child</strong> will cover education and basic needs, ensuring no child has to drop out of school.

Sponsor a child's education or contribute to other ongoing projects such as <strong>women's vocational skill training, adult education, gender equality, and health awareness programs.</strong>
          </p>

        </section>


        {/* SECTION 2 */}
        <section className="donation-section">

          {/* LEFT */}
          <div className="left">

            <h3>We Accept Donations via Net Banking</h3>

            <p className="important">
              <strong>IMPORTANT:</strong> Corporation Bank has merged with
              <strong> UNION BANK OF INDIA.</strong> Please use the updated
              bank details below:
            </p>

            <div className="bank-box">
              <h4>Navratan Foundations</h4>

              <p><strong>Bank:</strong> UNION BANK OF INDIA</p>
              <p><strong>Account Number:</strong> 520101058691894</p>
              <p><strong>IFSC Code:</strong> UBIN0912484</p>

              <p className="tax">
                (All donations are tax-exempt under 80-G)
              </p>
            </div>

            <div className="message">
              "Think of giving not as a duty, but as a privilege."
            </div>

          </div>


          {/* RIGHT */}
          <div className="right">
            <img
              src="/img/qr.jpg"
              alt="Donation QR Code"
              className="qr-img"
            />

            <div className="qr-text">
              Scan the QR Code to Donate
            </div>
          </div>

        </section>

      </div>

       

      <YellowCTA />
    </>
  );
}