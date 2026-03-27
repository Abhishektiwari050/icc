"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, TextReveal } from "@/components/ui/animations";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-collision";
import { HERO_WORDS } from "@/constants";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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
                <BackgroundBeamsWithCollision className="bg-transparent h-full w-full rounded-3xl border border-slate-200/50 shadow-2xl overflow-hidden min-h-[500px]">
                  <div className="relative z-50 p-8 w-full max-w-sm">
                     <div className="relative rounded-2xl p-6 bg-white/80 backdrop-blur-xl border border-slate-200">
                        <GlowingEffect
                          spread={40}
                          glow={true}
                          disabled={false}
                          proximity={64}
                          inactiveZone={0.01}
                        />
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="w-3 h-3 bg-primary rounded-full animate-ping" />
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Hub Status</p>
                              <p className="text-xs font-bold text-green-600 uppercase">Operational</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                              <p className="text-[8px] uppercase font-bold text-slate-400 mb-1">Live Freight Volume</p>
                              <p className="text-xl font-black text-slate-900 tabular-nums">14,290 <span className="text-[10px] font-medium text-slate-500 underline ml-1">KGS/HR</span></p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 font-headline">
                              <p className="text-[8px] uppercase font-bold text-slate-400 mb-1">Active Connections</p>
                              <p className="text-xl font-black text-slate-900 tabular-nums">1,200+ <span className="text-[10px] font-medium text-slate-500 ml-1">NODES</span></p>
                            </div>
                          </div>
                          
                          <p className="mt-8 pt-6 border-t border-slate-100 text-[10px] text-center text-slate-400 uppercase font-black tracking-[0.2em] opacity-40">
                            ICC Logistics Global Architecture
                          </p>
                        </div>
                     </div>
                  </div>
                </BackgroundBeamsWithCollision>
              </FadeIn>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};
