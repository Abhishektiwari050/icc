"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Tracking', href: '/tracking' },
    { name: 'Services', href: '/services' },
    { name: 'Network', href: '/network' },
    { name: 'Quote', href: '/quote' },
    { name: 'Contact', href: '/contact' },
  ];

  if (!mounted) return null;

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        {/* Banner with motion height */}
        <motion.div 
          initial={false}
          animate={{ 
            height: isScrolled && !isMobileMenuOpen ? 0 : 36,
            opacity: isScrolled && !isMobileMenuOpen ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-surface-container-highest text-on-surface text-[10px] md:text-xs font-label uppercase tracking-widest px-4 text-center border-b border-outline/20 overflow-hidden flex items-center justify-center"
        >
          <div className="flex items-center justify-center gap-1">
            <span className="hidden sm:inline">24/7 Global Support | 99.8% Delivery Success |</span>
            <Link href="/tracking" className="text-primary hover:underline font-bold">Track shipment</Link>
          </div>
        </motion.div>

        {/* Main Nav */}
        <nav className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled || isMobileMenuOpen
            ? "bg-surface/90 backdrop-blur-md border-outline/20 shadow-sm py-2" 
            : "bg-surface/50 backdrop-blur-sm border-transparent py-4 border-b-white/5"
        )}>
          <div className="flex justify-between items-center w-full px-6 md:px-8 max-w-screen-2xl mx-auto">
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
                    pathname === link.href ? "text-primary brightness-110" : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" 
                    />
                  )}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/book" className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-md font-headline font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all active:scale-95 duration-200">
                Book Now
              </Link>
              <button 
                className="md:hidden text-on-surface p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-background/98 backdrop-blur-xl pt-[100px] px-6 flex flex-col"
          >
            <div className="flex flex-col space-y-6 font-headline font-bold text-2xl uppercase tracking-tight">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "transition-colors border-b border-outline/20 pb-4 block",
                      pathname === link.href ? "text-primary" : "text-on-surface"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  href="/book" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary text-on-primary px-6 py-4 rounded-md font-headline font-bold text-center text-lg tracking-widest uppercase mt-8 block"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
