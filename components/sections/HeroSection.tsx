"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, TextReveal } from "@/components/ui/animations";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { HERO_WORDS } from "@/constants";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[95vh] flex items-center">
      <AuroraBackground className="flex-1">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 relative z-10 w-full">
          <div className="max-w-7xl pt-16 md:pt-24 relative grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center gap-12 sm:gap-16 pt-12 md:pt-40 lg:pt-0 relative z-10">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    Next-Gen Freight Architecture
                  </span>
                </div>
                <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase font-headline">
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

            <div className="lg:col-span-5 relative z-20 mt-12 lg:mt-0">
              <FadeIn delay={0.3}>
                <CardContainer className="inter-var w-full lg:translate-x-12">
                  <CardBody className="bg-white/80 backdrop-blur-sm relative group/card border-slate-200/50 w-full h-auto rounded-3xl p-8 border shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-black text-slate-900 uppercase tracking-tight"
                    >
                      Premium Freight Service
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest opacity-60"
                    >
                      Interactive Logistics Architecture
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-8">
                      <WobbleCard containerClassName="bg-slate-100/50 border border-slate-200 overflow-hidden rounded-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800&h=600"
                          alt="Logistics Truck"
                          width={800}
                          height={600}
                          className="object-cover rounded-xl transition-all duration-700 scale-110 hover:scale-100"
                        />
                      </WobbleCard>
                    </CardItem>
                  </CardBody>
                </CardContainer>
                <p className="text-right text-slate-400 text-[10px] mt-6 uppercase tracking-[0.4em] font-black opacity-30">Interactive 3D Perspective View</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};
