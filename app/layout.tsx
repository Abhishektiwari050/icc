import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ClientWrapper } from '@/components/ClientWrapper';

export const metadata: Metadata = {
  title: 'Mahakaal Enterprises | Global Logistics Hub',
  description: 'Your trusted partner for global courier, cargo, and logistics solutions based in Delhi.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container antialiased">
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
