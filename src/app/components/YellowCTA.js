// src/app/components/YellowCTA.js
"use client";

import Link from 'next/link';

export default function YellowCTA() {
  return (
    <>
      <style jsx>{`
        .yellow-cta {
          padding: 0;
          position: relative;
          overflow: visible;  /* Allow overflow for overlap */
        }

        .yellow-cta .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        .cta-lower {
          background: #fbd45a;  /* Same yellow, full width */
          color: #212121;
          padding: 30px 40px 30px;  /* Extra bottom for footer overlap */
          margin-top: -80px;  /* Stronger negative margin to pull up more */
          position: relative;
          z-index: 10;  /* Higher z-index to stay on top */
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 20px;  /* Rounded corners for yellow box */
          display: flex;
          flex-direction: column;
          justify-content: center;  /* Vertically center content */
          align-items: flex-start;  /* Left align text */
          min-height: 200px;
          margin-bottom: -90px;  /* Negative margin to pull up over footer */
        }

        .cta-content-wrapper {
          display: flex;
          width: 100%;
          gap: 20px;
          align-items: center;  /* Vertically center headings and button */
        }

        .cta-left {
          flex: 0 0 70%;  /* 70% width for left div */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cta-left h3 {
          font-size: 1.4rem;  /* Small upper heading size */
          font-weight: 500;
          margin: 0 0 10px 0;
          color: #212121;
          line-height: 1.3;
        }

        .cta-left h2 {
          font-size: 2.5rem;  /* Larger lower heading */
          font-weight: 700;
          margin: 0;
          color: #212121;
          line-height: 1.2;
        }

        .cta-right {
          flex: 0 0 30%;  /* 30% width for right div */
          display: flex;
          justify-content: flex-end;  /* Right align button */
          align-items: center;
        }

        .cta-btn {
          display: inline-block;
          padding: 16px 20px;
          margin-right: 20px;
        //   background: #ffffff;  /* White button on yellow */
          color: #212121;
          text-decoration: none;
          border-radius: 50px;
          border: 1px solid #212121;  /* Black border on button */
          font-weight: 600;
          font-size: 18px;  /* Slightly larger */
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          position: relative;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          background: #00acf0;
          border-color: #00acf0;  /* Border changes on hover */
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .cta-btn::after {
          content: " →";
          margin-left: 10px;
          font-size: 1.2em;  /* Arrow size match */
        }

        /* Overlap for footer - extend yellow bar */
        // .yellow-cta::after {
        //   content: '';
        //   position: absolute;
        //   bottom: -60px;  /* Extend below */
        //   left: 0;
        //   width: 100%;
        //   height: 60px;
        //   background: #fbd45a;  /* Yellow extension */
        //   z-index: 9;  /* Below content but above footer */
        // }

        @media (max-width: 768px) {
          .cta-lower {
            padding: 30px 15px 60px;
            margin-top: -60px;  /* Adjusted for mobile */
            border-radius: 15px;
            min-height: 180px;
          }

          .cta-content-wrapper {
            flex-direction: column;  /* Stack vertically on mobile */
            gap: 15px;
            align-items: stretch;  /* Full width on mobile */
          }

          .cta-left {
            flex: none;  /* Full width on mobile */
            text-align: left;
          }

          .cta-left h3 {
            font-size: 1.1rem;
          }

          .cta-left h2 {
            font-size: 1.8rem;
          }

          .cta-right {
            flex: none;  /* Full width on mobile */
            justify-content: center;  /* Center button on mobile */
          }

          .cta-btn {
            padding: 14px 35px;
            font-size: 16px;
            border-width: 2px;
          }

          .yellow-cta::after {
            bottom: -40px;
            height: 40px;
          }
        }
      `}</style>

      <section className="yellow-cta">
        <div className="container">
          <div className="cta-lower">
            <div className="cta-content-wrapper">
              <div className="cta-left">
                <h3>Together, We Empower Lives and Transform Communities</h3>
                <h2>Join Us in Building a Brighter Future for All</h2>
              </div>
              <div className="cta-right">
                <a href="/contact-us" className="cta-btn">Be Part of the Change</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}