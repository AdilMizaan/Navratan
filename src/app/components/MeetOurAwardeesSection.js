"use client";

export default function MeetOurAwardeesSection() {
  // Real YouTube video IDs daal do (watch?v= ke baad wala part)
  const videos = [
    "VWnfmjUKsPM",  // 1st video ID (replace with real)
    "SRvsK-MxA6Q",  // 2nd video ID
    "BnTuhGdg6Ew",  // 3rd video ID
    "63bGCQEfMhM",  // 1st video ID (replace with real)
    "c9xwuihzCec",  // 2nd video ID
    "lxDMPiS6m3c",
    "cMu-x2UJ-eQ",  // 1st video ID (replace with real)
    "GolMr2C85rE",  // 2nd video ID
    "0WDTfqvV33g",
    // agar aur videos chahiye to yahan add kar do
  ];

  return (
    <>
      <style jsx>{`
        .stories-section {
          padding: 50px 0 100px;
          background: #ffffff;
          text-align: center;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
        }

        // .heading-main {
        //     font-family: 'Shadows Into Light', cursive;
        //   font-size: 60px;
        //   font-weight: 600;
        //   color: rgba(0, 172, 240, 0.67);
        //   margin: 0 0 28px 0;
        //   line-height: 1.05;
        //   letter-spacing: 0px;
        //   text-shadow: 1px 1px 3px rgba(0,0,0,0.06);
        // }

        // .heading-sub {
        //   font-size: 40px;
        //   font-weight: 600;
        //   color: #212121;
        //   margin: -35px 0 60px 0;
        // }

        .awardees-title-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
          .awardees-title-wrapper h2 {
          font-size: 36px;}

         .yellow-line {
          width: 70px;
          height: 4px;
          background-color: var(--primary-yellow);
          margin-bottom: 20px;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .video-wrapper {
          position: relative;
          aspect-ratio: 16 / 9;
          background: #000;
          overflow: hidden;
        }

        .video-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 1024px) {
          .videos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .stories-section {
            padding: 80px 0 60px;
          }

          .videos-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .heading-main {
            font-size: 42px;
          }

          .heading-sub {
            font-size: 28px;
          }
        }
          
      `}</style>

      <section className="stories-section">
        <div className="container">
         
          <div className="awardees-title-wrapper">
          <h2>Meet Our Awardees</h2>
          <div className="yellow-line"></div>
        </div>


          <div className="videos-grid">
            {videos.map((videoId, index) => (
              <div key={index} className="video-wrapper">
                <iframe
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
                  title={`Inspiring Story ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}