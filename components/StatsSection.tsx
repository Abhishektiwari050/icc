"use client";

import React from "react";
import { motion } from "motion/react";
import { FadeIn } from "@/components/ui/animations";
import { Globe, Users, Package, Award } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Countries Reached",
    value: "50+",
    icon: <Globe className="w-5 h-5 text-primary" />,
    description: "Extensive global network across continents"
  },
  {
    label: "Daily Shipments",
    value: "25k+",
    icon: <Package className="w-5 h-5 text-primary" />,
    description: "High-volume logistics processing power"
  },
  {
    label: "Delivery Success",
    value: "99.8%",
    icon: <Award className="w-5 h-5 text-primary" />,
    description: "Unmatched reliability and precision"
  },
  {
    label: "Global Partners",
    value: "200+",
    icon: <Users className="w-5 h-5 text-primary" />,
    description: "Strong alliances with world-class carriers"
  }
];

export const StatsSection = () => {
  return (
    <div className="h-full py-20 relative w-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="max-w-7xl mx-auto px-6 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-800 border border-white/10 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className="text-sm font-label uppercase tracking-widest text-neutral-400 font-bold">
                    {stat.label}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl md:text-5xl font-black font-headline text-white tracking-tighter mb-2 group-hover:text-primary transition-colors">
                    {stat.value}
                  </span>
                  <p className="text-sm text-neutral-400 font-body leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
