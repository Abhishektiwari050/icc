"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-4 mb-12"
        >
          <Globe className="w-16 h-16 text-primary animate-pulse" />
          <div className="flex flex-col">
            <span className="text-4xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              Mahakaal
            </span>
            <span className="text-xs font-bold text-slate-400 tracking-[0.3em] uppercase leading-none mt-2">
              Enterprises
            </span>
          </div>
        </motion.div>

        <div className="w-64 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
            className="absolute h-full bg-primary left-0 top-0"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] flex items-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          Initializing Architectural Core
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
        Global Network v4.1.0
      </div>
    </motion.div>
  );
};
