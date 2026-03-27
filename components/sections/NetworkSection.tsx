"use client";

import React from "react";
import { FadeIn } from "@/components/ui/animations";
import { WorldMap } from "@/components/ui/world-map";
import { WORLD_DOTS } from "@/constants";

export const NetworkSection = () => {
  return (
    <section id="network" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase text-on-surface mb-6">
            Connected World <br /> <span className="text-primary">Optimized Paths</span>
          </h2>
        </FadeIn>
        <WorldMap 
          dots={WORLD_DOTS}
          lineColor="#f59e0b"
        />
      </div>
    </section>
  );
};
