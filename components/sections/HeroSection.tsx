"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, TextReveal } from "@/components/ui/animations";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Vortex } from "@/components/ui/vortex";
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
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-slate-300/30 rounded-full mb-4 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-800">
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
                    className="bg-primary text-on-primary border-primary font-headline font-extrabold uppercase tracking-widest text-sm shadow-xl"
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
              <FadeIn delay={0.3} className="w-full h-full max-w-2xl mx-auto lg:h-[600px]">
                <Vortex
                  backgroundColor="transparent"
                  rangeY={120}
                  particleCount={300}
                  baseHue={45}
                  containerClassName="rounded-[32px] border border-slate-200/50 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden h-full flex items-center justify-center"
                >
                  <div className="relative z-50 p-6 md:p-8 w-full max-w-sm transform hover:scale-[1.02] transition-transform duration-500">
                     <div className="relative rounded-2xl p-6 bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <GlowingEffect
                          spread={60}
                          glow={true}
                          disabled={false}
                          proximity={64}
                          inactiveZone={0.01}
                        />
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Mastery Hub</p>
                              <p className="text-xs font-bold text-slate-900 uppercase">Live Operations</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 shadow-inner group transition-colors">
                              <p className="text-[8px] uppercase font-bold text-slate-500 mb-1 tracking-widest group-hover:text-yellow-500 transition-colors">Real-time throughput</p>
                              <p className="text-2xl font-black text-white tabular-nums">98.4<span className="text-[10px] font-medium text-slate-500 ml-1 group-hover:text-yellow-500/50 uppercase">% UP</span></p>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                              <p className="text-[8px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Global Reach</p>
                              <p className="text-2xl font-black text-slate-900 tabular-nums">1.2B<span className="text-[10px] font-medium text-slate-500 ml-1 uppercase">Metric Tons</span></p>
                            </div>
                          </div>
                          
                          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-4 opacity-50">
                             <div className="flex -space-x-2">
                               {[1,2,3].map(i => (
                                 <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                   <div className="w-full h-full bg-slate-400 animate-pulse" />
                                 </div>
                               ))}
                             </div>
                             <p className="text-[8px] uppercase font-black text-slate-400 tracking-[0.2em]">Validated Experts</p>
                          </div>
                        </div>
                     </div>
                  </div>
                </Vortex>
              </FadeIn>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};
