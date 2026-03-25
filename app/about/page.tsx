"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FadeIn, TextReveal, TracingBeam, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Compass, Globe2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-container min-h-[716px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <BackgroundBeams />
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-subtle"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.02, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="https://picsum.photos/seed/port-terminal/1000/1000"
              alt="Logistics landscape"
              fill
              className="object-cover grayscale mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-label font-semibold tracking-widest uppercase mb-6 shadow-lg">Established 1994</span>
            </FadeIn>
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-8">
              <TextReveal text="The Global Architect" /> <br /> 
              <FadeIn delay={0.5} direction="up">
                of <span className="text-secondary-fixed">Logistics.</span>
              </FadeIn>
            </h1>
            <FadeIn delay={0.7}>
              <TextGenerateEffect 
                words="Precision-engineered delivery solutions bridging the gap between Indian manufacturing excellence and global consumer demand."
                className="text-on-primary-container text-lg md:text-xl font-body max-w-xl leading-relaxed"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <FadeIn direction="right">
                <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 border-l-4 border-secondary pl-6">Our Mission</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  To provide an unshakeable foundation for international trade by delivering cargo with the structural integrity and meticulous planning of a master architect. We don&apos;t just move boxes; we build pathways for commerce.
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="p-8 bg-surface-container-low border-l-2 border-outline-variant shadow-md">
                  <h2 className="font-headline text-3xl font-bold tracking-tight mb-4">Our Vision</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg italic">
                  &quot;To become the definitive logistics bridge between India and the world, defined by reliability markers that set a new global standard for the industry.&quot;
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeIn delay={0.3} className="h-full">
                <WobbleCard containerClassName="h-full bg-surface-container-lowest border border-outline-variant/10">
                  <div className="p-10 h-80 flex flex-col justify-end group transition-colors duration-500">
                    <Compass className="w-10 h-10 mb-auto text-secondary transition-colors duration-500 group-hover:text-primary" />
                    <h3 className="font-headline text-2xl font-bold mb-2">Structural Precision</h3>
                    <p className="text-sm text-on-surface-variant">Calculated routing and robust tracking systems ensure zero-variance delivery schedules.</p>
                  </div>
                </WobbleCard>
              </FadeIn>
              <FadeIn delay={0.4} className="h-full">
                <WobbleCard containerClassName="h-full bg-surface-container-low border border-outline-variant/10">
                  <div className="p-10 h-80 flex flex-col justify-end group transition-colors duration-500">
                    <Globe2 className="w-10 h-10 mb-auto text-primary-container" />
                    <h3 className="font-headline text-2xl font-bold mb-2">Indian DNA</h3>
                    <p className="text-sm text-on-surface-variant">Deep expertise in local logistics challenges translated into global excellence.</p>
                  </div>
                </WobbleCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* India Focus + Global Presence */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <FadeIn className="mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary-container">India&apos;s Gateway to the World</h2>
            <p className="text-on-surface-variant font-body mt-4 max-w-2xl">From the bustling industrial hubs of Gujarat to the global terminals of Rotterdam and Singapore, our network is a testament to expansive reliability.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {/* Map Card */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-surface-container-lowest relative overflow-hidden shadow-xl rounded-xl">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image src="https://picsum.photos/seed/world-map/800/800" alt="Global map" fill className="object-cover opacity-20 grayscale" referrerPolicy="no-referrer" />
              </motion.div>
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <h3 className="font-headline text-3xl font-bold">The Silk Road 2.0</h3>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-1 w-12 bg-secondary"></div>
                    <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Core Routes</span>
                  </div>
                  <p className="text-on-surface-variant max-w-sm">Optimized transit corridors connecting major Indian ports to 220+ countries worldwide.</p>
                </div>
              </div>
            </div>
            {/* Stats Card 1 */}
            <FadeIn delay={0.2} className="h-full">
              <WobbleCard containerClassName="h-full bg-primary-container">
                <div className="flex flex-col justify-center items-center text-center h-full">
                  <span className="text-secondary-fixed font-headline text-5xl font-black">280+</span>
                  <span className="text-white font-label text-xs uppercase tracking-widest mt-2">Active Hubs</span>
                </div>
              </WobbleCard>
            </FadeIn>
            {/* Image Card */}
            <FadeIn delay={0.3} className="h-full">
              <div className="relative overflow-hidden group h-full rounded-xl shadow-lg">
                <Image src="https://picsum.photos/seed/cargo-plane/400/400" alt="Cargo Plane" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
            {/* Trust Card */}
            <FadeIn delay={0.4} className="lg:col-span-2 h-full">
              <div className="bg-secondary-container p-10 flex flex-col justify-center h-full rounded-xl shadow-lg">
                <h4 className="font-headline text-2xl font-bold text-on-secondary-container mb-4">Unmatched Reliability Markers</h4>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col">
                    <span className="font-label font-bold text-on-secondary-container text-xl">99.8%</span>
                    <span className="text-xs text-on-secondary-container/70 uppercase">On-Time Rate</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label font-bold text-on-secondary-container text-xl">24/7</span>
                    <span className="text-xs text-on-secondary-container/70 uppercase">Active Monitoring</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label font-bold text-on-secondary-container text-xl">IATA</span>
                    <span className="text-xs text-on-secondary-container/70 uppercase">Certified</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Historical Timeline / Growth */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-16 text-center">A Legacy of Resilience</h2>
            </FadeIn>
            <TracingBeam className="px-6">
              <div className="space-y-12">
                {/* Event 1 */}
                <FadeIn direction="up" delay={0.1}>
                  <div className="relative flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
                      <h3 className="font-headline text-xl font-bold">The Blueprint</h3>
                      <p className="text-on-surface-variant text-sm mt-2">Founded in Mumbai with a single mission: to modernize Indian courier services for international standards.</p>
                    </div>
                    <div className="w-10 h-10 bg-surface border-4 border-primary-container rounded-full z-10 flex items-center justify-center font-label font-bold text-xs order-1 md:order-2 shadow-md">94</div>
                    <div className="md:w-5/12 order-3"></div>
                  </div>
                </FadeIn>
                {/* Event 2 */}
                <FadeIn direction="up" delay={0.2}>
                  <div className="relative flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-5/12 order-2 md:order-1"></div>
                    <div className="w-10 h-10 bg-surface border-4 border-secondary rounded-full z-10 flex items-center justify-center font-label font-bold text-xs order-1 md:order-2 shadow-md">08</div>
                    <div className="md:w-5/12 text-left order-3 mt-4 md:mt-0">
                      <h3 className="font-headline text-xl font-bold">Continental Bridge</h3>
                      <p className="text-on-surface-variant text-sm mt-2">Launched dedicated European and American air-hubs, ensuring 48-hour delivery cycles.</p>
                    </div>
                  </div>
                </FadeIn>
                {/* Event 3 */}
                <FadeIn direction="up" delay={0.3}>
                  <div className="relative flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-5/12 text-left md:text-right order-2 md:order-1 mt-4 md:mt-0">
                      <h3 className="font-headline text-xl font-bold">The Digital Core</h3>
                      <p className="text-on-surface-variant text-sm mt-2">Implementation of proprietary AI-driven route optimization and real-time ledger tracking.</p>
                    </div>
                    <div className="w-10 h-10 bg-surface border-4 border-primary-container rounded-full z-10 flex items-center justify-center font-label font-bold text-xs order-1 md:order-2 shadow-md">19</div>
                    <div className="md:w-5/12 order-3"></div>
                  </div>
                </FadeIn>
              </div>
            </TracingBeam>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface-container-highest relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 uppercase">
                Architect Your Growth
              </h2>
              <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
                Join the network of global enterprises that trust our structural precision for their logistics needs.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-headline font-bold text-sm tracking-widest text-on-primary uppercase bg-primary-container rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.1)] w-full sm:w-auto"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-2">
                    Request a Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/network"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-headline font-bold text-sm tracking-widest text-primary-container uppercase bg-transparent border-2 border-primary-container/30 rounded-lg overflow-hidden transition-all hover:border-primary-container hover:bg-primary-container/5 w-full sm:w-auto"
                >
                  <span className="relative">View Network Map</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
