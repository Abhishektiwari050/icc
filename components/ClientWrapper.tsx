"use client";

import { useState, useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/ui/preloader";

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Short delay to ensure hydration and initial animations are ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        {children}
      </div>
    </ThemeProvider>
  );
};
