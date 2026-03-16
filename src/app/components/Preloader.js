// src/components/Preloader.js
'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => {
      setHidden(true);
    };

    // Font Awesome + fonts load hone ke baad hide (icons sahi size mein rahenge)
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        setTimeout(hide, 300); // Thoda delay smooth feel ke liye
      });
    } else {
      window.addEventListener('load', () => setTimeout(hide, 300));
    }

    return () => window.removeEventListener('load', hide);
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#00acf0', // Blue bg sirf loader ke time
        color: 'white',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i className="fas fa-spinner fa-spin fa-5x text-white"></i> {/* White spinner */}
    </div>
  );
}