"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tracking', href: '/tracking' },
    { name: 'Services', href: '/services' },
    { name: 'Network', href: '/network' },
    { name: 'Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-[60] bg-surface-container-highest text-on-surface text-xs font-label uppercase tracking-widest py-1.5 px-4 text-center border-b border-outline/20">
        24/7 Global Support | 99.8% Delivery Success | <Link href="/tracking" className="text-primary hover:underline ml-1">Track your shipment</Link>
      </div>
      <nav className={cn(
        "fixed top-[32px] w-full z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-surface/80 backdrop-blur-md border-outline/20 shadow-sm" 
          : "bg-transparent border-transparent"
      )}>
        <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <Globe className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-xl font-black text-on-surface tracking-tighter font-headline uppercase leading-none">
                ICC
              </span>
              <span className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase leading-none mt-1">
                Logistics
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight uppercase text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "transition-colors relative py-2",
                  pathname === link.href ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-md font-headline font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all active:scale-95 duration-200">
              Book Now
            </Link>
            <button 
              className="md:hidden text-on-surface p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-[100px] px-6 flex flex-col">
          <div className="flex flex-col space-y-6 font-headline font-bold text-2xl uppercase tracking-tight">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "transition-colors border-b border-outline/20 pb-4",
                  pathname === link.href ? "text-primary" : "text-on-surface hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/book" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-on-primary px-6 py-4 rounded-md font-headline font-bold text-center text-lg tracking-widest uppercase mt-8"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
