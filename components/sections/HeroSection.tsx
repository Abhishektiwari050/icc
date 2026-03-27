"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, TextReveal } from "@/components/ui/animations";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import dynamic from "next/dynamic";
import { HERO_WORDS } from "@/constants";

const Globe3D = dynamic(() => import("@/components/ui/3d-globe").then((mod) => mod.Globe3D), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-slate-100/10 rounded-full animate-pulse">
    <div className="text-primary/40 text-[10px] font-black uppercase tracking-[0.4em]">Initializing Global Engine...</div>
  </div>
});

import { GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/1.webp", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/2.webp", label: "London" },
  { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/3.webp", label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/4.webp", label: "Sydney" },
  { lat: 48.8566, lng: 2.3522, src: "https://assets.aceternity.com/avatars/5.webp", label: "Paris" },
  { lat: 28.6139, lng: 77.209, src: "https://assets.aceternity.com/avatars/6.webp", label: "New Delhi" },
  { lat: 55.7558, lng: 37.6173, src: "https://assets.aceternity.com/avatars/7.webp", label: "Moscow" },
  { lat: -22.9068, lng: -43.1729, src: "https://assets.aceternity.com/avatars/8.webp", label: "Rio de Janeiro" },
  { lat: 31.2304, lng: 121.4737, src: "https://assets.aceternity.com/avatars/9.webp", label: "Shanghai" },
  { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
  { lat: -34.6037, lng: -58.3816, src: "https://assets.aceternity.com/avatars/11.webp", label: "Buenos Aires" },
  { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
  { lat: 37.5665, lng: 126.978, src: "https://assets.aceternity.com/avatars/13.webp", label: "Seoul" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[95vh] flex items-center">
      <AuroraBackground className="flex-1">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 relative z-10 w-full">
          <div className="max-w-7xl pt-16 md:pt-24 relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center gap-12 sm:gap-16 pt-12 md:pt-40 lg:pt-0 relative z-10">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    Next-Gen Freight Architecture
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase font-headline lg:pr-12">
                  <TextReveal text="Architectural Precision In Global Logistics." />
                </h1>
              </FadeIn>

              <FadeIn delay={0.2} className="max-w-2xl">
                <div className="text-lg sm:text-xl text-slate-800 leading-relaxed font-medium opacity-90">
                  Fast, secure, and reliable shipping across <FlipWords words={HERO_WORDS} className="text-yellow-600 font-bold" /> and worldwide.
                  We engineering connections across 50+ countries with technical mastery.
                </div>
              </FadeIn>
              <FadeIn delay={0.4} className="flex flex-wrap gap-4">
                <Link href="/tracking">
                  <MovingBorderButton
                    borderRadius="0.5rem"
                    className="bg-primary text-on-primary border-primary font-headline font-extrabold uppercase tracking-widest text-sm"
                  >
                    Track Shipment
                  </MovingBorderButton>
                </Link>
                <Link href="/book">
                  <button
                    className="bg-white border border-slate-300 text-slate-950 px-8 py-4 rounded-md font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all shadow-sm h-[56px]"
                  >
                    Book a Delivery
                  </button>
                </Link>
              </FadeIn>
            </div>

            <div className="relative z-20 mt-12 lg:mt-0 min-h-[500px] flex items-center justify-center">
              <FadeIn delay={0.3} className="w-full h-full">
                <Globe3D
                  markers={sampleMarkers}
                  config={{
                    atmosphereColor: "#4da6ff",
                    atmosphereIntensity: 20,
                    bumpScale: 5,
                    autoRotateSpeed: 0.3,
                  }}
                />
                <p className="text-center lg:text-right text-slate-400 text-[10px] mt-2 uppercase tracking-[0.4em] font-black opacity-30">Global Architectural Network Visualization</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};
