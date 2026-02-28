import './globals.css';
import HydrationFix from '@/app/components/HydrationFix';

export const metadata = {
  title: 'Navratan Foundations',
  description: 'Our Projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HydrationFix />
      <body>{children}</body>
    </html>
  );
}

