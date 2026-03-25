"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FadeIn, TextReveal, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Truck, Zap, Globe2, Network } from 'lucide-react';

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesservices"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <BackgroundBeams />
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            <Image
              src="https://picsum.photos/seed/shipyard/1920/1080"
              alt="Global Logistics"
              fill
              className="object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">Logistics Architecture</span>
            </FadeIn>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none mb-8">
              <TextReveal text="The Blueprint of" /> <br />
              <FadeIn delay={0.5} direction="up">
                <span className="text-secondary-fixed">Global Motion</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.7}>
              <TextGenerateEffect 
                words="Precision-engineered delivery solutions for a borderless economy. We design the infrastructure that moves the world."
                className="text-xl text-white/80 font-body max-w-xl leading-relaxed"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Domestic Courier */}
          <FadeIn className="md:col-span-8 h-full">
            <WobbleCard containerClassName="h-full bg-surface-container-lowest border border-outline-variant/10">
              <div className="group relative overflow-hidden p-12 transition-all duration-500 h-full">
                <div className="flex flex-col md:flex-row gap-12 items-start h-full">
                  <div className="flex-1 space-y-6 relative z-10">
                    <Truck className="w-10 h-10 text-secondary" />
                    <h2 className="text-4xl font-headline font-extrabold text-primary-container tracking-tight">Domestic Courier</h2>
                    <p className="text-on-surface-variant font-body leading-loose">
                      Intranational logistics optimized for speed and reliability. Our domestic network utilizes advanced routing algorithms to ensure last-mile precision across every postal code. From legal documents to bulky freight, we provide seamless door-to-door connectivity with real-time transparency.
                    </p>
                    <ul className="space-y-3 font-label text-sm text-primary-container">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary"></span> Next-Day Express Nationwide</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary"></span> Secure Document Handling</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-secondary"></span> Hyper-Local Last Mile Delivery</li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-full relative rounded-lg overflow-hidden">
                    <Image src="https://picsum.photos/seed/delivery-trucks/800/800" alt="Logistics Fleet" fill className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </WobbleCard>
          </FadeIn>

          {/* Express Delivery */}
          <FadeIn delay={0.2} className="md:col-span-4 h-full">
            <WobbleCard containerClassName="h-full bg-primary-container text-white">
              <div className="p-12 flex flex-col justify-between h-full relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 opacity-10 transition-transform group-hover:rotate-12 duration-500">
                  <Zap className="w-[150px] h-[150px]" />
                </div>
                <div className="space-y-6 relative z-10">
                  <Zap className="w-10 h-10 text-secondary-container" />
                  <h2 className="text-3xl font-headline font-extrabold tracking-tight">Express Delivery</h2>
                  <p className="text-white/70 font-body leading-relaxed">
                    When time is the ultimate currency. Our express tier prioritizes your cargo through our fastest air and ground channels.
                  </p>
                </div>
                <div className="pt-8 relative z-10">
                  <div className="text-5xl font-headline font-black text-secondary-container mb-2">99.8%</div>
                  <div className="text-xs font-label uppercase tracking-widest opacity-60">On-Time Performance Rate</div>
                </div>
              </div>
            </WobbleCard>
          </FadeIn>

          {/* International Shipping */}
          <FadeIn delay={0.3} className="md:col-span-4 h-full">
            <WobbleCard containerClassName="h-full bg-surface-container-high">
              <div className="p-12 group hover:bg-surface-container-highest transition-colors h-full">
                <div className="space-y-8 h-full flex flex-col">
                  <Globe2 className="w-10 h-10 text-primary-container" />
                  <h2 className="text-3xl font-headline font-extrabold text-primary-container tracking-tight">International Shipping</h2>
                  <p className="text-on-surface-variant font-body leading-relaxed flex-grow">
                    Navigate the complexities of global trade with ease. We manage customs, compliance, and multi-modal transport across 220+ territories.
                  </p>
                  <div className="h-40 overflow-hidden relative rounded-lg mt-auto">
                    <Image src="https://picsum.photos/seed/airplane-wing/600/400" alt="Global Ports" fill className="object-cover opacity-60 grayscale group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </WobbleCard>
          </FadeIn>

          {/* Business Logistics */}
          <FadeIn delay={0.4} className="md:col-span-8 h-full">
            <WobbleCard containerClassName="h-full bg-surface-container-lowest border-l-4 border-secondary">
              <div className="p-12 flex flex-col md:flex-row gap-12 h-full">
                <div className="flex-1 space-y-6">
                  <Network className="w-10 h-10 text-secondary" />
                  <h2 className="text-4xl font-headline font-extrabold text-primary-container tracking-tight">Business Logistics</h2>
                  <p className="text-on-surface-variant font-body leading-loose">
                    End-to-end supply chain architecture for enterprise-level operations. We provide warehousing, inventory management, and fulfillment services designed to scale with your growth. Our API-first approach integrates directly into your existing ERP systems for flawless automation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-surface-container font-label text-xs uppercase tracking-wider text-primary-container font-bold rounded hover:bg-primary-container hover:text-white transition-colors cursor-default">Smart Warehousing</div>
                    <div className="p-4 bg-surface-container font-label text-xs uppercase tracking-wider text-primary-container font-bold rounded hover:bg-primary-container hover:text-white transition-colors cursor-default">Inventory Sync</div>
                    <div className="p-4 bg-surface-container font-label text-xs uppercase tracking-wider text-primary-container font-bold rounded hover:bg-primary-container hover:text-white transition-colors cursor-default">API Integration</div>
                    <div className="p-4 bg-surface-container font-label text-xs uppercase tracking-wider text-primary-container font-bold rounded hover:bg-primary-container hover:text-white transition-colors cursor-default">Bulk Freight</div>
                  </div>
                </div>
              </div>
            </WobbleCard>
          </FadeIn>
        </div>
      </section>

      {/* Stats / Proof Points */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-5xl font-headline font-black text-primary-container">220+</div>
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Countries Reached</div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-5xl font-headline font-black text-primary-container">1.2M</div>
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Tons Annual Cargo</div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-5xl font-headline font-black text-primary-container">48h</div>
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Avg Global Transit</div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-5xl font-headline font-black text-primary-container">100%</div>
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Digital Tracking</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background relative overflow-hidden py-32 border-t border-outline/10">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full w-1/2 h-1/2 mx-auto top-1/4 pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase text-on-surface mb-8">
              Ready to architecturalize <br /> <span className="text-primary">your logistics chain?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
              <Link href="/quote">
                <button className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(245,200,66,0.3)]">
                  Get a Custom Quote
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-transparent border border-outline/30 text-on-surface px-10 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-all">
                  Download Services Guide
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
