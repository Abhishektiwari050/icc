"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Globe, Menu, X, Rocket, Shield, Clock, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { StickyBanner } from '@/components/ui/sticky-banner';

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);
 
  const navLinks = [
    { name: 'Services', link: '/services', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Process', link: '/process', icon: <Clock className="w-4 h-4" /> },
    { name: 'Network', link: '/network', icon: <Globe className="w-4 h-4" /> },
    { name: 'Testimonials', link: '/testimonials', icon: <Shield className="w-4 h-4" /> },
    { name: 'Tracking', link: '/tracking', icon: <Search className="w-4 h-4" /> },
  ];
 
  useMotionValueEvent(scrollY, "change", (current: number) => {
    const prev = scrollY.getPrevious() ?? 0;
    const direction = current - prev;
    
    if (current < 50) {
      setBannerVisible(true);
    } else if (direction > 0) {
      setBannerVisible(false);
    } else {
      setBannerVisible(true);
    }
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);
 
  if (!mounted) return null;
 
  return (
    <>
      <StickyBanner>
        <div className="bg-primary text-on-primary text-[10px] md:text-sm font-headline font-black uppercase tracking-[0.2em] px-4 border-b border-black/10 overflow-hidden flex items-center h-10 relative">
          <div className="flex whitespace-nowrap overflow-hidden py-1 w-full">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-12 min-w-full"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span>24/7 Global Support</span>
                  <span className="opacity-30">/</span>
                  <span>99.8% Delivery Success</span>
                  <span className="opacity-30">/</span>
                  <span>Real-Time Tracking</span>
                  <span className="opacity-30">/</span>
                  <span>Secure Cargo Handling</span>
                  <span className="opacity-30">/</span>
                  <span>Network Across 50+ Countries</span>
                  <span className="opacity-30">/</span>
                  <Link href="/tracking" className="bg-black text-primary px-3 py-1 rounded-full font-bold hover:scale-105 transition-all text-[9px] md:text-xs">Track shipment now</Link>
                  <span className="opacity-30">/</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </StickyBanner>
 
      <motion.nav 
        initial={false}
        animate={{ 
          top: bannerVisible ? 40 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full z-50 flex justify-center px-6"
      >
         <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto bg-surface/80 backdrop-blur-md rounded-2xl border border-white/5 px-6 py-4 shadow-2xl relative z-50">
            <Link href="/" className="flex items-center gap-2 group">
              <Globe className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-on-surface tracking-tighter font-headline uppercase leading-none">
                  Mahakaal
                </span>
                <span className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase leading-none mt-1">
                  Enterprises
                </span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight uppercase text-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.link} 
                  className={cn(
                    "transition-colors relative py-2",
                    pathname === link.link ? "text-primary brightness-110" : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  {link.name}
                  {pathname === link.link && (
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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-on-surface p-2 focus:outline-none" 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
         </div>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
           {isMenuOpen && (
             <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="absolute top-20 left-6 right-6 bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 flex flex-col gap-6 md:hidden z-40"
             >
               {navLinks.map((link) => (
                 <Link
                   key={link.name}
                   href={link.link}
                   onClick={() => setIsMenuOpen(false)}
                   className="flex items-center gap-4 text-lg font-headline font-bold text-slate-900 uppercase tracking-widest hover:text-primary transition-colors border-b border-slate-50 pb-4 last:border-0"
                 >
                   {link.icon}
                   {link.name}
                 </Link>
               ))}
               <Link 
                href="/book" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-primary text-on-primary w-full py-4 rounded-xl font-headline font-black uppercase tracking-widest text-sm text-center shadow-xl shadow-primary/20 transition-transform active:scale-95"
               >
                 Book Now
               </Link>
             </motion.div>
           )}
         </AnimatePresence>
      </motion.nav>
    </>
  );
}
