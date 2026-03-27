"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { TrackingSection } from "@/components/sections/TrackingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BannerSection } from "@/components/sections/BannerSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection />
      <StatsSection />
      <TrackingSection />
      <ServicesSection />
      <ProcessSection />
      <NetworkSection />
      <TestimonialsSection />
      <BannerSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
