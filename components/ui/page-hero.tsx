"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, TextReveal } from "./animations";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  icon?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, description, icon }) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
            {icon && <span className="text-primary">{icon}</span>}
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
              {subtitle}
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase font-headline">
              <TextReveal text={title} />
            </h1>
          </div>
          
          {description && (
            <FadeIn delay={0.2} className="max-w-xl">
              <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed border-l-2 border-primary/30 pl-8">
                {description}
              </p>
            </FadeIn>
          )}
        </div>
      </div>
      
      {/* Decorative Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
};
