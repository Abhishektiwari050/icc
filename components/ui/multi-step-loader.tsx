"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const LoadingStates = [
  { text: "Architecting Logistics..." },
  { text: "Optimizing Global Paths..." },
  { text: "Securing High-Value Cargo..." },
  { text: "Initializing Tracking Infrastructure..." },
  { text: "Ready to Ship." },
];

export const MultiStepLoader = ({
  loading,
}: {
  loading?: boolean;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev === LoadingStates.length - 1 ? prev : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface backdrop-blur-2xl"
        >
          <div className="relative h-96 w-full max-w-md px-10 flex flex-col justify-center">
            <div className="absolute left-0 top-0 h-full w-1 overflow-hidden rounded-full bg-surface-container-highest">
              <motion.div
                initial={{ height: "0%" }}
                animate={{ height: `${((currentState + 1) / LoadingStates.length) * 100}%` }}
                className="w-full bg-primary"
              />
            </div>
            {LoadingStates.map((state, index) => {
              const distance = Math.abs(index - currentState);
              const opacity = Math.max(1 - distance * 0.4, 0);
              const translateY = (index - currentState) * 20;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: index === currentState ? 1 : opacity,
                    x: index === currentState ? 0 : 20,
                    y: translateY
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute ml-8 font-headline font-bold text-2xl uppercase tracking-tighter leading-none",
                    index === currentState ? "text-on-surface" : "text-on-surface-variant/40"
                  )}
                >
                  {state.text}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
