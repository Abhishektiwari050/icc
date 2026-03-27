"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/animations";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { TRACKING_PLACEHOLDERS } from "@/constants";

export const TrackingSection = () => {
  return (
    <section id="tracking-input" className="max-w-screen-2xl mx-auto px-8 mb-24 relative z-20">
      <FadeIn delay={0.2}>
        <div className="bg-white/90 p-4 md:p-8 rounded-2xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center border border-slate-200 backdrop-blur-md">
          <div className="flex-1 w-full md:scale-105">
            <label className="block font-label text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold text-center lg:text-left">Track Your Shipment</label>
            <PlaceholdersAndVanishInput 
              placeholders={TRACKING_PLACEHOLDERS}
              onChange={(e) => console.log(e.target.value)}
              onSubmit={(e) => console.log("submitted")}
            />
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            <Link href="/book" className="flex-1 lg:flex-none bg-primary text-on-primary px-10 py-4 h-14 rounded-full font-headline font-bold uppercase tracking-widest text-xs text-center flex items-center justify-center hover:scale-105 transition-all shadow-xl shadow-primary/10">
              Book Shipment
            </Link>
            <Link href="/quote" className="flex-1 lg:flex-none bg-surface-container-highest text-on-surface px-10 py-4 h-14 rounded-full font-headline font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high text-center flex items-center justify-center transition-all border border-outline/10">
              Get Pricing
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
