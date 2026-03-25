import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, TextReveal, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { WobbleCard } from '@/components/ui/wobble-card';
import { LayoutGrid, Calculator, MapPin, Navigation, Scale, ArrowRight, BadgeCheck, ShieldCheck, Globe2 } from 'lucide-react';

export default function Quote() {
  return (
    <main className="pt-32 pb-24 relative min-h-screen">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
        <SparklesCore
          id="tsparticlesquote"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <BackgroundBeams />

      {/* Hero Section */}
      <header className="max-w-screen-2xl mx-auto px-8 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-l-4 border-secondary-container pl-8">
          <div className="max-w-3xl">
            <FadeIn direction="up" delay={0.1}>
              <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Precision Logistics</span>
            </FadeIn>
            <TextReveal text="Architectural Rate Precision." className="font-headline text-5xl md:text-7xl font-extrabold text-primary-container leading-[0.9] tracking-tighter mb-6" />
            <div className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
              <TextGenerateEffect words="Calculate global shipping costs with institutional accuracy. Our dynamic pricing engine integrates real-time carrier data and terminal availability." />
            </div>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <div className="hidden lg:block w-64 h-64 bg-surface-container relative overflow-hidden rounded-xl group">
              <Image src="https://picsum.photos/seed/metal-texture/400/400" alt="Texture" fill className="object-cover mix-blend-multiply opacity-20 group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <LayoutGrid className="w-16 h-16 text-primary-container group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Calculator Section: Asymmetric Layout */}
      <section className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Calculator Card */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.4} className="h-full">
              <WobbleCard containerClassName="h-full bg-surface-container-lowest shadow-[32px_32px_64px_-12px_rgba(17,20,74,0.06)] relative border border-outline-variant/10">
                <div className="p-10 md:p-16">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-secondary-container"></div>
                  <h2 className="font-headline text-2xl font-bold text-primary-container mb-12 flex items-center gap-3">
                    <Calculator className="w-6 h-6" />
                    Shipping Cost Estimator
                  </h2>
                  <form className="space-y-10">
                    {/* Origin & Destination */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">From Location</label>
                        <div className="relative group">
                          <MapPin className="w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors" />
                          <input type="text" placeholder="City or Country of Origin" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container pl-8 py-3 font-body text-primary placeholder:text-outline-variant transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">To Location</label>
                        <div className="relative group">
                          <Navigation className="w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors" />
                          <input type="text" placeholder="Delivery Destination" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container pl-8 py-3 font-body text-primary placeholder:text-outline-variant transition-all" />
                        </div>
                      </div>
                    </div>

                    {/* Weight & Dimensions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      <div className="space-y-2">
                        <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total Weight (kg)</label>
                        <div className="relative group">
                          <Scale className="w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors" />
                          <input type="number" placeholder="0.00" className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary-container pl-8 py-3 font-body text-primary placeholder:text-outline-variant transition-all" />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Service Type</label>
                        <div className="flex gap-4 pt-2">
                          <button type="button" className="flex-1 py-3 px-4 bg-surface-container text-on-surface-variant font-label text-xs font-bold uppercase tracking-tighter hover:bg-surface-container-high transition-colors text-center rounded-md">Express Air</button>
                          <button type="button" className="flex-1 py-3 px-4 bg-primary-container text-white font-label text-xs font-bold uppercase tracking-tighter text-center rounded-md">Standard Sea</button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-primary-container text-on-primary hover:bg-on-primary-fixed-variant transition-colors rounded-md font-headline font-extrabold uppercase tracking-[0.2em] flex items-center justify-center gap-4 group"
                    >
                      Calculate Estimate
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </WobbleCard>
            </FadeIn>
          </div>

          {/* Result & Info Bento */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Estimate Result */}
            <FadeIn direction="left" delay={0.5} className="flex-1">
              <WobbleCard containerClassName="h-full bg-secondary-container border-none">
                <div className="p-10 flex flex-col justify-between h-full min-h-[320px]">
                  <div>
                    <span className="font-label text-on-secondary-container font-bold tracking-widest uppercase text-xs">Estimated Cost</span>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-headline text-5xl font-black text-on-secondary-container">$1,240.00</span>
                      <span className="font-body text-on-secondary-container/60 text-sm">USD</span>
                    </div>
                    <p className="font-body text-on-secondary-container text-sm mt-4 opacity-80">
                      This is a provisional quote based on standard terminal charges and current fuel surcharges. Final price subject to cargo inspection.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-on-secondary-container/10 flex items-center justify-between">
                    <span className="font-label text-xs font-bold uppercase text-on-secondary-container">Reference ID: #IC-9921</span>
                    <BadgeCheck className="w-6 h-6 text-on-secondary-container" />
                  </div>
                </div>
              </WobbleCard>
            </FadeIn>

            {/* Trust Tiles */}
            <div className="grid grid-cols-2 gap-8">
              <FadeIn direction="up" delay={0.6} className="h-full">
                <WobbleCard containerClassName="h-full bg-surface-container border border-outline-variant/10">
                  <div className="p-8 space-y-4">
                    <ShieldCheck className="w-8 h-8 text-primary-container" />
                    <h4 className="font-headline font-bold text-primary-container text-sm uppercase tracking-tight">Full Insurance</h4>
                    <p className="text-xs font-body text-on-surface-variant">Complimentary basic coverage for all international transit.</p>
                  </div>
                </WobbleCard>
              </FadeIn>
              <FadeIn direction="up" delay={0.7} className="h-full">
                <WobbleCard containerClassName="h-full bg-surface-container border border-outline-variant/10">
                  <div className="p-8 space-y-4">
                    <Globe2 className="w-8 h-8 text-primary-container" />
                    <h4 className="font-headline font-bold text-primary-container text-sm uppercase tracking-tight">Global Network</h4>
                    <p className="text-xs font-body text-on-surface-variant">Direct connections to over 180 maritime terminals worldwide.</p>
                  </div>
                </WobbleCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Route Visualization Placeholder */}
      <FadeIn direction="up" delay={0.8}>
        <section className="max-w-screen-2xl mx-auto px-8 mt-24 relative z-10">
          <WobbleCard containerClassName="bg-primary-container border-none">
            <div className="relative h-80 w-full overflow-hidden flex items-center justify-center">
              <Image src="https://picsum.photos/seed/cargo-ships/1920/600" alt="Global Routes" fill className="object-cover opacity-30 grayscale" referrerPolicy="no-referrer" />
              <div className="relative z-10 text-center max-w-2xl px-6">
                <h3 className="font-headline text-3xl font-bold text-white mb-4">Institutional Credibility in Every Mile</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  We don&apos;t just move boxes; we manage global architecture. Our pricing model reflects the stability of our infrastructure and the reliability of our timeline guarantees.
                </p>
              </div>
              {/* Asymmetric accent */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-8 border-secondary-container/20 rounded-full"></div>
            </div>
          </WobbleCard>
        </section>
      </FadeIn>
    </main>
  );
}
