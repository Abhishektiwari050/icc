"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollY.getPrevious() ?? 0;
      const direction = current - prev;
      
      if (current < 50) {
        setVisible(true);
      } else if (direction > 0) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn("fixed top-0 inset-x-0 z-[60] w-full", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
