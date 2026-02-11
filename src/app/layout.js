import './globals.css';

export const metadata = {
  title: 'Navratan Foundations',
  description: 'Our Projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}