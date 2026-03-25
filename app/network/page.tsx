"use client";

import React from 'react';
import { motion } from 'motion/react';
import { FadeIn, TextReveal, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { WobbleCard } from '@/components/ui/wobble-card';
import { MapPin, Plane, Ship, Truck, Globe2, Building2 } from 'lucide-react';

export default function NetworkPage() {
  const hubs = [
    { city: "Rotterdam, NL", type: "Maritime Hub", capabilities: ["Deep Sea Freight", "Customs Clearance", "Cold Storage"], icon: <Ship className="w-6 h-6 text-primary" /> },
    { city: "Singapore, SG", type: "Asia-Pacific Gateway", capabilities: ["Air Freight", "Transshipment", "E-commerce Fulfillment"], icon: <Plane className="w-6 h-6 text-primary" /> },
    { city: "Houston, TX", type: "Americas Hub", capabilities: ["Heavy Machinery", "Oil & Gas Logistics", "Rail Integration"], icon: <Truck className="w-6 h-6 text-primary" /> },
    { city: "Dubai, UAE", type: "Middle East Transit", capabilities: ["Air-Sea Combinations", "Free Zone Warehousing", "High-Value Goods"], icon: <Globe2 className="w-6 h-6 text-primary" /> },
    { city: "Mumbai, IN", type: "South Asia Center", capabilities: ["Domestic Distribution", "Port Operations", "Tech Integration"], icon: <Building2 className="w-6 h-6 text-primary" /> },
    { city: "Tokyo, JP", type: "Tech & Auto Hub", capabilities: ["Just-in-Time Delivery", "Automotive Parts", "Electronics Handling"], icon: <Plane className="w-6 h-6 text-primary" /> },
  ];

  const stats = [
    { value: "220+", label: "Countries Served" },
    { value: "1,500+", label: "Active Routes" },
    { value: "45", label: "Global Hubs" },
    { value: "1.2M", label: "Tons Annual Volume" },
  ];

  const regions = [
    { name: "Asia-Pacific", description: "Connecting the fastest-growing markets with high-frequency air and sea routes." },
    { name: "Europe", description: "Comprehensive road networks integrated with major ports like Rotterdam and Hamburg." },
    { name: "Americas", description: "Seamless cross-border logistics and extensive domestic coverage across North and South America." },
    { name: "Middle East & Africa", description: "Strategic transit points bridging east and west with specialized project cargo capabilities." },
  ];

  return (
    <main className="min-h-screen bg-background text-on-background pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-background z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#F5C842"
          />
        </div>
        <BackgroundBeams />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-block bg-surface-container-highest px-4 py-1.5 rounded-full mb-6 border border-outline/20">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Global Connectivity</span>
            </div>
          </FadeIn>
          <TextReveal 
            text="Our Global Network" 
            className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-6 uppercase"
          />
          <FadeIn delay={0.2}>
            <TextGenerateEffect 
              words="Architecting the future of freight with an interconnected web of strategic hubs, seamless routes, and unparalleled reach."
              className="text-lg md:text-xl text-on-surface-variant font-body max-w-2xl mx-auto"
            />
          </FadeIn>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-20 px-6 border-y border-outline/10 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black font-headline text-primary mb-2">{stat.value}</div>
                  <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Hubs */}
      <section className="py-32 px-6 max-w-screen-2xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase mb-4">Strategic Hubs</h2>
            <p className="text-on-surface-variant max-w-2xl">Our primary operational centers strategically located to optimize global transit times and cargo flow.</p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubs.map((hub, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <WobbleCard containerClassName="h-full bg-surface-container border border-outline/10">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                      {hub.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-headline">{hub.city}</h3>
                      <p className="text-xs font-label text-primary uppercase tracking-widest">{hub.type}</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h4 className="text-xs font-label text-on-surface-variant uppercase tracking-widest mb-3">Core Capabilities</h4>
                    <ul className="space-y-2">
                      {hub.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </WobbleCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-32 px-6 bg-surface-container-low border-t border-outline/10">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase mb-4">Regional Coverage</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Comprehensive logistics solutions tailored to the unique demands of every major global market.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-8 border border-outline/20 rounded-2xl bg-surface hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold font-headline">{region.name}</h3>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">{region.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier Partners */}
      <section id="carriers" className="py-32 px-6 max-w-screen-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase mb-6">Carrier Network</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-16">We partner with the world&apos;s leading air, ocean, and ground carriers to ensure your cargo is always in the best hands.</p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
          {/* Placeholder for partner logos - using text for now as requested by blueprint to replace with SVG later, but we'll use styled text to look like logos */}
          <div className="flex items-center justify-center p-6 border border-outline/20 rounded-xl font-headline font-bold text-xl tracking-tighter">GLOBAL AIR</div>
          <div className="flex items-center justify-center p-6 border border-outline/20 rounded-xl font-headline font-bold text-xl tracking-tighter">OCEANIC LINES</div>
          <div className="flex items-center justify-center p-6 border border-outline/20 rounded-xl font-headline font-bold text-xl tracking-tighter">TRANS-RAIL</div>
          <div className="flex items-center justify-center p-6 border border-outline/20 rounded-xl font-headline font-bold text-xl tracking-tighter">AERO FREIGHT</div>
        </div>
      </section>
    </main>
  );
}
