"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, TextReveal } from "@/components/ui/animations";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HERO_WORDS, HERO_IMAGE } from "@/constants";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[95vh] flex items-center bg-slate-50">
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
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase font-headline lg:pr-12">
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
              <FadeIn delay={0.3} className="w-full h-full">
                <CardContainer className="inter-var">
                  <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border transition-all">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
                    >
                      ICC Global Freight
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-slate-500 text-xs max-w-sm mt-2 dark:text-slate-300 font-medium"
                    >
                      Premium branded fleet operating across international zones with 99.9% uptime.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-8">
                      <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden group">
                        <Image
                          src={HERO_IMAGE}
                          fill
                          className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                          alt="ICC Branded Truck"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                           <div className="text-white">
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Asset ID</p>
                              <p className="text-sm font-bold">ICC-FLEET-AX90</p>
                           </div>
                        </div>
                      </div>
                    </CardItem>
                    <div className="flex justify-between items-center mt-8">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs font-black dark:text-white uppercase tracking-widest text-slate-400"
                      >
                        Technical Mastery
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white dark:text-black text-white text-xs font-black uppercase tracking-widest"
                      >
                        Details
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </FadeIn>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};
