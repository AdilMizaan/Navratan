// import './globals.css';
// import HydrationFix from '@/app/components/HydrationFix';

// export const metadata = {
//   title: 'Navratan Foundations',
//   description: 'Our Projects',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <HydrationFix />
//       <body>{children}</body>
//     </html>
//   );
// }


import './globals.css';

export const metadata = {
  title: 'Navratan Foundations',
  description: 'Community Development & Sustainable Development Goals',
};

import Header from './components/Header';
import Footer from './components/Footer';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        
<link
  href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>
      </head>
      <body className="antialiased bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
