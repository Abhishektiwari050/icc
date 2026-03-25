import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, TextReveal, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { WobbleCard } from '@/components/ui/wobble-card';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-24 lg:pt-32 relative min-h-screen">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
        <SparklesCore
          id="tsparticlescontact"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <BackgroundBeams />

      {/* Hero Section: Editorial Header */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-20 lg:mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <FadeIn direction="up" delay={0.1}>
              <span className="font-label text-secondary uppercase tracking-[0.3em] font-medium mb-4 block">Global Connectivity</span>
            </FadeIn>
            <TextReveal text="Architecting the Future of Freight." className="font-headline text-5xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-primary-container" />
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <div className="text-lg text-on-surface-variant leading-relaxed font-body">
              <TextGenerateEffect words="Direct communication channels for institutional logistics, global supply chain management, and high-precision cargo inquiries." />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bento Grid */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map & Global Locations (Visual Anchor) */}
          <div className="lg:col-span-7">
            <FadeIn direction="right" delay={0.4} className="h-full">
              <WobbleCard containerClassName="h-full bg-surface-container-low border border-outline-variant/10">
                <div className="absolute inset-0 z-0 bg-primary-container/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="https://picsum.photos/seed/world-map-dark/1200/800" alt="Global map visual" fill className="object-cover opacity-40" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10 p-10 flex flex-col justify-between h-full min-h-[500px]">
                  <div>
                    <h2 className="font-headline text-3xl font-bold text-primary-container mb-2">Global Terminals</h2>
                    <p className="font-body text-on-surface-variant max-w-md">Our operational network spans across 140 countries with strategic hubs in major maritime and aviation ports.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 mt-12">
                    <div className="bg-surface-container-lowest/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-outline-variant/10 hover:scale-105 transition-transform">
                      <span className="font-label text-xs text-secondary font-bold uppercase tracking-widest mb-3 block">European Hub</span>
                      <h3 className="font-headline text-lg font-bold text-primary-container mb-1">Rotterdam, NL</h3>
                      <p className="text-sm text-on-surface-variant font-label">Port Area 1422, Industrial Way</p>
                    </div>
                    <div className="bg-surface-container-lowest/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-outline-variant/10 hover:scale-105 transition-transform">
                      <span className="font-label text-xs text-secondary font-bold uppercase tracking-widest mb-3 block">Asia-Pacific Hub</span>
                      <h3 className="font-headline text-lg font-bold text-primary-container mb-1">Singapore</h3>
                      <p className="text-sm text-on-surface-variant font-label">Jurong Port Rd, Gate 4</p>
                    </div>
                    <div className="bg-surface-container-lowest/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-outline-variant/10 hover:scale-105 transition-transform">
                      <span className="font-label text-xs text-secondary font-bold uppercase tracking-widest mb-3 block">Americas Hub</span>
                      <h3 className="font-headline text-lg font-bold text-primary-container mb-1">Houston, TX</h3>
                      <p className="text-sm text-on-surface-variant font-label">Terminal East, Bay Area Blvd</p>
                    </div>
                    <div className="bg-surface-container-lowest/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-outline-variant/10 hover:scale-105 transition-transform">
                      <span className="font-label text-xs text-secondary font-bold uppercase tracking-widest mb-3 block">Middle East Hub</span>
                      <h3 className="font-headline text-lg font-bold text-primary-container mb-1">Dubai, UAE</h3>
                      <p className="text-sm text-on-surface-variant font-label">Jebel Ali Free Zone, South 2</p>
                    </div>
                  </div>
                </div>
              </WobbleCard>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.5} className="h-full">
              <WobbleCard containerClassName="h-full bg-surface-container-lowest shadow-[0_32px_64px_-12px_rgba(17,20,74,0.06)] border border-outline-variant/10">
                <div className="p-10 lg:p-14 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="font-headline text-3xl font-bold text-primary-container mb-8">Inquiry Protocol</h2>
                    <form action="#" className="space-y-6">
                      <div className="space-y-1">
                        <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
                        <input type="text" placeholder="Institutional or Individual Name" className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Email Address</label>
                          <input type="email" placeholder="corp@domain.com" className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body" />
                        </div>
                        <div className="space-y-1">
                          <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Service Type</label>
                          <select className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body text-on-surface-variant">
                            <option>Ocean Freight</option>
                            <option>Air Cargo</option>
                            <option>Land Logistics</option>
                            <option>Warehousing</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Detailed Message</label>
                        <textarea rows={4} placeholder="Describe your logistics requirements..." className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body resize-none"></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-primary-container text-on-primary hover:bg-on-primary-fixed-variant transition-colors font-headline font-bold py-4 rounded-md uppercase tracking-widest flex items-center justify-center gap-3 group"
                      >
                        Initialize Inquiry
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>

                  {/* Rapid Contact */}
                  <div className="mt-12 pt-8 border-t border-outline-variant/20 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-label text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Emergency Hub</p>
                        <p className="font-headline font-bold text-primary-container">+1 (800) ICC-CARGO</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-label text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Direct Support</p>
                        <p className="font-headline font-bold text-primary-container">logistics@icc.global</p>
                      </div>
                    </div>
                  </div>
                </div>
              </WobbleCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visual Credibility Bar */}
      <FadeIn direction="up" delay={0.6}>
        <section className="mb-32 relative z-10">
          <WobbleCard containerClassName="bg-primary-container border-none rounded-none">
            <div className="py-24 relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image src="https://picsum.photos/seed/containers-blue/1920/600" alt="Logistics texture" fill className="object-cover opacity-10 scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10 px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                  <h2 className="font-headline text-4xl font-extrabold text-white tracking-tight mb-4">Precision in Transit.</h2>
                  <p className="text-on-primary-container font-body text-lg max-w-xl">Every minute matters. Our dedicated account managers are ready to optimize your route from origin to final destination.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-12 text-white/40 font-label font-bold uppercase tracking-[0.4em] text-sm">
                  <span>ISO 9001</span>
                  <span>IATA Certified</span>
                  <span>Global AEO</span>
                </div>
              </div>
            </div>
          </WobbleCard>
        </section>
      </FadeIn>
    </main>
  );
}
