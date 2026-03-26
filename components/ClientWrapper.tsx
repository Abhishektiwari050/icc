"use client";

import React, { useEffect } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Package, Search, Phone } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="w-4 h-4" /> },
  { name: "Services", link: "/services", icon: <Package className="w-4 h-4" /> },
  { name: "Tracking", link: "/tracking", icon: <Search className="w-4 h-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="w-4 h-4" /> },
];

import Lenis from "lenis";
import { ThemeProvider } from "next-themes";

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <FloatingNav navItems={navItems} />
      {children}
    </ThemeProvider>
  );
};
