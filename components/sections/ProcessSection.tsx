"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/animations";
import { Timeline } from "@/components/ui/timeline";
import { PROCESS_DATA } from "@/constants";

export const ProcessSection = () => {
  // Transform static process data into the rich content format expected by the Timeline component
  const timelineData = PROCESS_DATA.map((item) => ({
    title: item.title,
    content: (
      <div className="bg-surface-container-low p-6 rounded-2xl border border-outline/10">
        <p className="text-on-surface-variant text-sm md:text-base font-normal mb-8 leading-relaxed">
          {item.description}
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Image 
            src={item.image} 
            alt={item.title} 
            width={800} 
            height={500} 
            className="rounded-xl shadow-2xl object-cover border border-slate-100" 
          />
        </div>
      </div>
    ),
  }));

  return (
    <section id="process" className="py-32 bg-white relative border-b border-outline/10">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-accent" />
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
        <FadeIn className="text-center mb-20">
          <div className="inline-block bg-surface-container-highest px-4 py-1.5 rounded-full mb-6 border border-outline/20">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">How It Works</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-on-surface">Process Architecture</h2>
        </FadeIn>
        
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};
