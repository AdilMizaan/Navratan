// src/components/Loading.js
'use client';
export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'white',           // ya apna brand color
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          border: '8px solid #f3f3f3',
          borderTop: '8px solid #3498db',  // blue – tum change kar sakte ho
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}