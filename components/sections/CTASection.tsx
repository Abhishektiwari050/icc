"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/animations";
import { Vortex } from "@/components/ui/vortex";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export const CTASection = () => {
  return (
    <section className="w-full mx-auto rounded-md h-[40rem] overflow-hidden relative bg-surface-container-low border-t border-outline-variant/10">
      <Vortex
        backgroundColor="transparent"
        rangeY={400}
        particleCount={80}
        baseHue={45}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-20 text-center">
          <FadeIn>
            <h2 className="text-slate-900 text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase mb-8">
              Ship Globally <br /> <span className="text-primary">With Confidence</span>
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto mb-12 font-body text-lg leading-relaxed">
              Ready to experience the next generation of industrial logistics? Start your journey with the Global Architects today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Link href="/book">
                <MovingBorderButton
                  borderRadius="0.5rem"
                  className="bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-sm px-10 py-4 h-16 w-56 border-none"
                  containerClassName="h-16 w-56"
                >
                  Start Booking
                </MovingBorderButton>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-12 py-4 h-16 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all shadow-sm">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Vortex>
    </section>
  );
};
