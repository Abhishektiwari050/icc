"use client";

import React, { useState, useEffect } from "react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Package, Search, Phone } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="w-4 h-4" /> },
  { name: "Services", link: "/services", icon: <Package className="w-4 h-4" /> },
  { name: "Tracking", link: "/tracking", icon: <Search className="w-4 h-4" /> },
  { name: "Contact", link: "/contact", icon: <Phone className="w-4 h-4" /> },
];

import Lenis from "lenis";

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => setLoading(false), 6500);
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <MultiStepLoader loading={loading} />
      <FloatingNav navItems={navItems} />
      {children}
    </>
  );
};
