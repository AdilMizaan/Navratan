// src/app/layout.js
import './globals.css';
import { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';  // Ya jo naam hai

export const metadata = {
  title: 'Navratan Foundations',
  description: 'Community Development & Sustainable Development Goals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome preload with onload for faster apply (flash kam karega) */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Agar Google Fonts hai to yeh bhi rakho */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Preloader />  {/* Yeh full blue + white spinner dikhaayega */}

        <Suspense fallback={null}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}