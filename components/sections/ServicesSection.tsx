"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/animations";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { SERVICES } from "@/constants";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-surface-container-low border-y border-outline/10 h-full">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
        <FadeIn className="mb-16 text-center">
          <div className="inline-block bg-surface-container-highest px-4 py-1.5 rounded-full mb-6 border border-outline/20">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">What We Do</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-on-surface">Our Services</h2>
        </FadeIn>
        
        <BentoGrid className="max-w-7xl mx-auto">
          {SERVICES.map((service, i) => (
            <BentoGridItem
              key={i}
              title={service.title}
              description={service.description}
              header={
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-48 md:h-64 relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              }
              icon={service.icon}
              className={service.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
