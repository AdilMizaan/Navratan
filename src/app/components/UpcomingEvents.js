"use client";

import { useState } from 'react';

export default function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Placeholder events (real data baad mein daal dena, ya API se fetch kar sakte ho)
  const events = [
    {
      id: 1,
      title: "Samarpan 2025 - Annual Fundraiser Event",
      short: "Samarpan 2025 – Join us for a grand evening of impact!",
      date: "15 March 2025",
      time: "6:00 PM onwards",
      location: "Noida Sector 18 Community Center",
      description: "Annual fundraising event with cultural performances, award ceremony, and networking. All proceeds go towards underprivileged children's education and women's empowerment programs.",
      buttonText: "Register Now",
      buttonLink: "/register-samarpan"
    },
    {
      id: 2,
      title: "Free Computer Literacy Workshop",
      short: "Cyberurja Batch – Free 2-week workshop starting soon!",
      date: "22 March 2025",
      time: "10:00 AM – 1:00 PM",
      location: "Navratan Gyanpeeth Center, Noida",
      description: "Basic to intermediate computer training for women and youth from underprivileged backgrounds. Limited seats – register early!",
      buttonText: "Know More",
      buttonLink: "/cyberurja-workshop"
    },
    {
      id: 3,
      title: "Women's Day Celebration & Umeed Program Launch",
      short: "Umeed Phase 2 Launch – Women's Day Special",
      date: "8 March 2025",
      time: "4:00 PM",
      location: "Community Hall, Sector 62, Noida",
      description: "Celebrating International Women's Day with new batch launch of Umeed program focused on skill development and self-empowerment.",
      buttonText: "View Details",
      buttonLink: "/umeed-launch"
    }
  ];

  return (
    <>
      <style jsx global>{`
        .events-section {
        //   background: #f8f9fa;
          // padding: 50px 0;
        //   border-top: 1px solid #e5e7eb;
        //   border-bottom: 1px solid #e5e7eb;

        padding: 100px 0 50px;
          background: #ffffff;
          text-align: center;
        }

          .heading-main {
            font-family: 'Shadows Into Light', cursive;
          font-size: 60px;
          font-weight: 600;
          color: rgba(0, 172, 240, 0.67);
          margin: 0 0 28px 0;
          line-height: 1.05;
          letter-spacing: 0px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        }

        .heading-sub {
          font-size: 40px;
          font-weight: 600;
          color: #212121;
          margin: -35px 0 60px 0;
        }

        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          background: #fbd45a;
          color: #212121;
          padding: 40px 0;
          font-weight: 700;
          font-size: 30px;
          position: relative;
        }

        .marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 50s linear infinite;
        }

        .marquee span {
          margin-right: 60px;
          cursor: pointer;
          transition: color 0.2s;
        }

        .marquee span:hover {
          color: #00acf0;
          text-decoration: underline;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* Popup Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .modal-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          max-width: 550px;
          width: 92%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          transform: translateY(30px);
          opacity: 0;
          transition: all 0.4s ease;
          padding: 0;
        }

        .modal-overlay.active .modal-content {
          transform: translateY(0);
          opacity: 1;
        }

        .modal-header {
          background: #00acf0;
          color: white;
          padding: 20px 25px;
          border-radius: 16px 16px 0 0;
          position: relative;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.5rem;
        }

        .close-btn {
          position: absolute;
          right: 25px;
          top: 22px;
          font-size: 28px;
          cursor: pointer;
          color: white;
          opacity: 0.9;
        }

        .close-btn:hover {
          opacity: 1;
        }

        .modal-body {
          padding: 25px;
        }

        .event-detail {
          margin-bottom: 18px;
          font-size: 1.05rem;
        }

        .event-detail strong {
          color: #00acf0;
          min-width: 100px;
          display: inline-block;
        }

        .modal-footer {
          padding: 20px 25px;
          border-top: 1px solid #e5e7eb;
          text-align: right;
        }

        @media (max-width: 600px) {
          .modal-content {
            width: 96%;
          }
          .modal-header h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>

      <section className="events-section">
         <h2 className="heading-main">Upcoming Events</h2>
          <h3 className="heading-sub">
            Stay Updated with Our Upcoming Programs
          </h3>
        <div className="marquee-container">
          <div className="marquee">
            {events.map(event => (
              <span key={event.id} onClick={() => setSelectedEvent(event)}>
                ★ {event.short} | {event.date} • {event.time} ★ &nbsp;
              </span>
            ))}
            {/* Duplicate for smooth infinite loop */}
            {events.map(event => (
              <span key={`dup-${event.id}`} onClick={() => setSelectedEvent(event)}>
                ★ {event.short} | {event.date} • {event.time} ★ &nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedEvent && (
        <div className={`modal-overlay active`} onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedEvent.title}</h3>
              <span className="close-btn" onClick={() => setSelectedEvent(null)}>×</span>
            </div>
            <div className="modal-body">
              <div className="event-detail"><strong>Date:</strong> {selectedEvent.date}</div>
              <div className="event-detail"><strong>Time:</strong> {selectedEvent.time}</div>
              <div className="event-detail"><strong>Location:</strong> {selectedEvent.location}</div>
              <div className="event-detail" style={{marginTop: '25px'}}>
                <strong>Details:</strong><br/>
                {selectedEvent.description}
              </div>
            </div>
            {/* <div className="modal-footer">
              {selectedEvent.buttonLink && (
                <a 
                  href={selectedEvent.buttonLink} 
                  className="btn btn-blue"
                  style={{padding: '12px 28px', borderRadius: '50px', textDecoration: 'none'}}
                >
                  {selectedEvent.buttonText}
                </a>
              )}
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}