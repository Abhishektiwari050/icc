"use client";

import { useEffect } from "react";



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
      {children}
    </ThemeProvider>
  );
};
