"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const logos = [
  { name: "ISO 9001:2015", icon: "ISO" },
  { name: "IATA CERTIFIED", icon: "IATA" },
  { name: "AEO AUTHORIZED", icon: "AEO" },
  { name: "TAPA SECURE", icon: "TAPA" },
  { name: "DGCA APPROVED", icon: "DGCA" },
  { name: "FIATA MEMBER", icon: "FIATA" },
];

export const LogoCloud = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full overflow-hidden py-10", className)}>
      <div className="flex w-max">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-20 items-center px-10"
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center font-headline font-bold text-xs text-primary border border-outline/20 shadow-sm">
                {logo.icon}
              </div>
              <span className="font-headline font-bold text-xl tracking-tighter text-on-surface whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
