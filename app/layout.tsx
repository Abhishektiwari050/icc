import type {Metadata} from 'next';
import './globals.css';
import { Manrope, Inter, Public_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-headline' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-label' });

export const metadata: Metadata = {
  title: 'International Courier & Cargo',
  description: 'Global Architect of Logistics',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${publicSans.variable}`}>
      <body className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
