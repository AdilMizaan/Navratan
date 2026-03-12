"use client";

export default function Advisors() {
  return (
    <>
      <style jsx>{`
        .advisors-page {
          padding: 100px 8% 80px;
          background: #f8f9fa;
          min-height: 80vh;
        }
        .section-title {
          font-family: 'Shadows Into Light', cursive;
          font-size: 52px;
          color: #00acf0;
          text-align: center;
          margin-bottom: 40px;
        }
      `}</style>

      <div className="advisors-page">
        <h1 className="section-title">Advisors Committee</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555' }}>
          Our esteemed advisors who guide Navratan Foundations with their expertise and vision.
        </p>
        
        {/* Yahan aap apna content baad mein add kar sakte ho (cards, list etc.) */}
      </div>
    </>
  );
}