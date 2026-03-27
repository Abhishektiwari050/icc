"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/animations";

export const BannerSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1570646172679-13dd97607ff9?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Cargo Airport" 
          fill 
          className="object-cover scale-125" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
      </motion.div>
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black font-headline tracking-tighter uppercase text-slate-900 mb-6 leading-none">
            Logistics Without Boundaries
          </h2>
          <p className="text-xl text-slate-700 font-body max-w-2xl mx-auto">Setting the global standard for excellence in freight and courier services.</p>
        </FadeIn>
      </div>
    </section>
  );
};
