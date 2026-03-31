import Link from 'next/link';
import { Mail, MapPin, Globe2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline/10 w-full pt-28 pb-10 text-on-surface">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-primary font-headline mb-6 uppercase tracking-tighter">
            Mahakaal Enterprises
          </div>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-[280px]">
            Architectural precision in logistics. Bridging India with the global trade ecosystem through data-driven infrastructure and elite cargo handling.
          </p>
        </div>
        
        <div>
          <h4 className="text-on-surface font-headline font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
          <ul className="space-y-4 font-headline text-sm tracking-wide">
            <li><Link href="#services" className="text-on-surface-variant hover:text-primary transition-colors">Elite Services</Link></li>
            <li><Link href="#process" className="text-on-surface-variant hover:text-primary transition-colors">Process Architecture</Link></li>
            <li><Link href="#network" className="text-on-surface-variant hover:text-primary transition-colors">Global Network</Link></li>
            <li><Link href="#testimonials" className="text-on-surface-variant hover:text-primary transition-colors">Client Briefs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-headline font-bold uppercase tracking-widest text-xs mb-8">Global Compliance</h4>
          <ul className="space-y-4 font-headline text-sm tracking-wide">
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">ISO 9001:2015</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">IATA Certified</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">AEO Status</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Legal & Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-headline font-bold uppercase tracking-widest text-xs mb-8">Connect</h4>
          <div className="flex flex-col space-y-4 text-sm font-body text-on-surface-variant">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span>operations@mahakaalenterprises.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span>CHANDRHASS GALI IX/7359, GANDHI NAGAR, DELHI 110031</span>
            </div>
          </div>
          <div className="flex space-x-6 mt-10">
            <Facebook className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
            <Twitter className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
            <Instagram className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
            <Linkedin className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-outline/5 text-center">
        <p className="text-on-surface-variant font-headline text-[10px] uppercase tracking-[0.2em] opacity-50">
          © 2026 Mahakaal Enterprises. All Rights Reserved. Engineered by Comet.
        </p>
      </div>
    </footer>
  );
}
