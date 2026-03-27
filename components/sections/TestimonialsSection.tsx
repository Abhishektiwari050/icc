"use client";

import React from "react";
import { FadeIn } from "@/components/ui/animations";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TESTIMONIALS } from "@/constants";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-32 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-black font-headline tracking-tighter uppercase text-on-surface">
            Architecting Trust
          </h2>
        </FadeIn>
        
        <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay={true} />

        <FadeIn delay={0.5} className="mt-20 pt-10 border-t border-outline/10 flex justify-center">
          <AnimatedTooltip items={[
            { id: 1, name: "ISO 9001:2015", designation: "Quality Management Certified", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop" },
            { id: 2, name: "IATA CERTIFIED", designation: "International Air Transport", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop" },
            { id: 3, name: "AEO AUTHORIZED", designation: "Authorized Economic Operator", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=100&h=100&fit=crop" },
            { id: 4, name: "TAPA SECURE", designation: "Transported Asset Protection", image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?w=100&h=100&fit=crop" },
          ]} />
        </FadeIn>
      </div>
    </section>
  );
};
