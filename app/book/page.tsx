import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, TextReveal, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { WobbleCard } from '@/components/ui/wobble-card';
import { MapPin, Package, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Book() {
  return (
    <main className="pt-24 pb-20 min-h-screen relative">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
        <SparklesCore
          id="tsparticlesbook"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <BackgroundBeams />
      
      <div className="px-6 max-w-screen-xl mx-auto relative z-10">
        {/* Hero Context */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <FadeIn direction="up" delay={0.1}>
                <span className="font-label text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Logistics Gateway</span>
              </FadeIn>
              <TextReveal text="Book Your Shipment" className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary-container font-headline" />
            </div>
            <div className="hidden md:block">
              <div className="text-on-surface-variant max-w-xs text-sm border-l-2 border-secondary pl-4 font-body">
                <TextGenerateEffect words="Precision-engineered delivery paths for high-value assets and global commerce." />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <FadeIn direction="up" delay={0.3}>
          <div className="flex items-center justify-between mb-12 max-w-3xl mx-auto overflow-x-auto pb-4">
            <div className="flex flex-col items-center gap-2 min-w-max">
              <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">1</div>
              <span className="font-label text-xs font-semibold uppercase tracking-wider text-primary-container">Origin</span>
            </div>
            <div className="h-px flex-1 bg-surface-container-highest mx-4 mt-[-20px]"></div>
            <div className="flex flex-col items-center gap-2 min-w-max">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">2</div>
              <span className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Destination</span>
            </div>
            <div className="h-px flex-1 bg-surface-container-highest mx-4 mt-[-20px]"></div>
            <div className="flex flex-col items-center gap-2 min-w-max">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">3</div>
              <span className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Cargo</span>
            </div>
            <div className="h-px flex-1 bg-surface-container-highest mx-4 mt-[-20px]"></div>
            <div className="flex flex-col items-center gap-2 min-w-max opacity-50">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">4</div>
              <span className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Review</span>
            </div>
          </div>
        </FadeIn>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Form Section (Col 1-8) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section: Pickup Details */}
            <FadeIn direction="up" delay={0.4}>
              <WobbleCard containerClassName="bg-surface-container-lowest border border-outline-variant/10">
                <div className="p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container opacity-20 -mr-16 -mt-16 rounded-full"></div>
                  <div className="flex items-center gap-4 mb-10">
                    <MapPin className="w-8 h-8 text-secondary" />
                    <h2 className="text-2xl font-extrabold tracking-tight uppercase font-headline">01. Pickup Details</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-label text-xs font-bold uppercase text-on-surface-variant tracking-tighter">Sender&apos;s Full Name</label>
                      <input type="text" placeholder="Enter name" className="w-full bg-surface-container px-4 py-3 border-none focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs font-bold uppercase text-on-surface-variant tracking-tighter">Contact Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-surface-container px-4 py-3 border-none focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="font-label text-xs font-bold uppercase text-on-surface-variant tracking-tighter">Pickup Address</label>
                      <textarea rows={3} placeholder="Complete industrial or residential address" className="w-full bg-surface-container px-4 py-3 border-none focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body"></textarea>
                    </div>
                  </div>
                </div>
              </WobbleCard>
            </FadeIn>

            {/* Section: Package Details */}
            <FadeIn direction="up" delay={0.5}>
              <WobbleCard containerClassName="bg-surface-container-lowest border border-outline-variant/10">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-10">
                    <Package className="w-8 h-8 text-secondary" />
                    <h2 className="text-2xl font-extrabold tracking-tight uppercase font-headline">02. Package Dimensions</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="font-label text-xs font-bold uppercase text-on-surface-variant tracking-tighter">Weight (KG)</label>
                      <div className="relative">
                        <input type="number" placeholder="0.00" className="w-full bg-surface-container px-4 py-3 border-none focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant">KG</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs font-bold uppercase text-on-surface-variant tracking-tighter">Category</label>
                      <select className="w-full bg-surface-container px-4 py-3 border-none focus:ring-0 focus:border-b-2 focus:border-primary-container transition-all font-body">
                        <option>Standard Cargo</option>
                        <option>Fragile / Sensitive</option>
                        <option>Hazardous Materials</option>
                        <option>Heavy Machinery</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs font-bold uppercase text-on-surface-variant tracking-tighter">Insurance</label>
                      <div className="flex items-center h-[52px]">
                        <input type="checkbox" className="w-5 h-5 text-primary-container border-surface-container-highest rounded-sm focus:ring-0" />
                        <span className="ml-3 font-label text-sm">Add Full Cover Protection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </WobbleCard>
            </FadeIn>

            {/* Action Button */}
            <FadeIn direction="up" delay={0.6}>
              <div className="flex justify-between items-center bg-surface-container-low p-6 rounded-lg">
                <button className="text-on-surface-variant font-bold uppercase text-sm tracking-widest flex items-center gap-2 font-headline hover:text-primary-container transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Save Draft
                </button>
                <button
                  className="bg-primary-container text-on-primary hover:bg-on-primary-fixed-variant transition-colors px-10 py-4 rounded-md font-headline font-extrabold uppercase tracking-widest flex items-center gap-3 group"
                >
                  Schedule Pickup
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar Summary (Col 9-12) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Price Display Card */}
              <FadeIn direction="left" delay={0.4}>
                <WobbleCard containerClassName="bg-[#11144a] text-white border-none">
                  <div className="p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                      <Image src="https://picsum.photos/seed/containers-blue/800/800" alt="Containers" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <span className="font-label text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 relative z-10">Estimated Quotation</span>
                    <div className="mt-4 mb-8 relative z-10">
                      <span className="text-sm font-label uppercase tracking-widest text-[#ffd660]">USD</span>
                      <div className="text-6xl font-black tracking-tighter leading-none mt-1 font-headline">1,245.00</div>
                    </div>
                    <div className="space-y-4 border-t border-white/10 pt-6 relative z-10">
                      <div className="flex justify-between text-xs font-label uppercase tracking-widest opacity-80">
                        <span>Freight Charges</span>
                        <span>$980.00</span>
                      </div>
                      <div className="flex justify-between text-xs font-label uppercase tracking-widest opacity-80">
                        <span>Handling Fee</span>
                        <span>$145.00</span>
                      </div>
                      <div className="flex justify-between text-xs font-label uppercase tracking-widest opacity-80">
                        <span>Global Compliance</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-white/5 border border-white/10 text-xs relative z-10">
                      <p className="leading-relaxed text-white/70 italic font-body">
                        * Final pricing subject to terminal weight verification and dynamic fuel surcharges at time of departure.
                      </p>
                    </div>
                  </div>
                </WobbleCard>
              </FadeIn>

              {/* Reliability Card */}
              <FadeIn direction="left" delay={0.5}>
                <WobbleCard containerClassName="bg-surface-container border border-outline-variant/10">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-secondary" />
                      <span className="font-headline font-bold text-sm uppercase tracking-tight">Guaranteed Security</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-body">
                      Every shipment via our network is backed by real-time blockchain tracking and comprehensive multi-tier liability coverage.
                    </p>
                  </div>
                </WobbleCard>
              </FadeIn>

              {/* Small Visual Anchor */}
              <FadeIn direction="left" delay={0.6}>
                <div className="h-48 w-full bg-surface-container-high overflow-hidden group relative rounded-xl">
                  <Image src="https://picsum.photos/seed/warehouse-aisle/600/400" alt="Logistics Network" fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
