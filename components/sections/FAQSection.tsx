"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/animations";
import { LampContainer } from "@/components/ui/lamp";
import { FAQ } from "@/components/ui/faq";

export const FAQSection = () => {
  return (
    <section className="bg-surface overflow-hidden relative">
      <LampContainer className="pt-20">
        <FadeIn className="text-center mb-16 relative z-50">
          <div className="flex items-center justify-center gap-2 text-primary uppercase font-headline font-bold tracking-widest text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase text-on-surface mb-6">
            Technical <span className="text-primary">Insights</span>
          </h2>
        </FadeIn>
      </LampContainer>
      <div className="max-w-4xl mx-auto px-6 md:px-8 -mt-40 relative z-50 pb-32">
        <FAQ />
      </div>
    </section>
  );
};
