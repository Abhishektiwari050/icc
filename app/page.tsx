"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FadeIn, TextReveal, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Globe2, Clock, Truck, Package, ArrowRight, ShieldCheck, Search } from 'lucide-react';

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden hero-gradient">
        <BackgroundBeams />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full absolute inset-0 z-0"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            <Image
              src="https://picsum.photos/seed/cargo-ship/1920/1080"
              alt="Global Logistics"
              fill
              className="object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-8">
              <TextReveal text="Architectural Precision In Global Logistics." />
            </h1>
            <FadeIn delay={0.2}>
              <TextGenerateEffect 
                words="Fast, secure, and reliable shipping across India and worldwide. We don't just move cargo; we engineer connections across 50+ countries." 
                className="text-white/80 text-lg md:text-xl font-body max-w-xl mb-12 leading-relaxed" 
              />
            </FadeIn>
            <FadeIn delay={0.4} className="flex flex-wrap gap-4">
              <Link href="/tracking">
                <button
                  className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-headline font-extrabold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,214,96,0.3)]"
                >
                  Track Shipment
                </button>
              </Link>
              <Link href="/book">
                <button
                  className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Book a Delivery
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Quick Action Bar */}
      <section className="max-w-screen-2xl mx-auto px-8 -mt-12 relative z-20">
        <FadeIn delay={0.6}>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-2xl flex flex-col lg:flex-row gap-6 items-end border border-outline-variant/20">
            <div className="flex-1 w-full">
              <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-3 font-semibold">Track Your Shipment</label>
              <div className="relative">
                <input type="text" placeholder="Enter tracking number (e.g. ICC-482-901)" className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary-container p-4 text-on-surface font-body rounded-md transition-all" />
                <Search className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              </div>
            </div>
            <div className="flex gap-4 w-full lg:w-auto">
              <Link href="/book" className="flex-1 lg:flex-none bg-primary-container text-white px-10 py-4 rounded-md font-headline font-bold uppercase tracking-widest text-xs text-center flex items-center justify-center hover:bg-opacity-90 transition-all">
                Book Shipment
              </Link>
              <Link href="/quote" className="flex-1 lg:flex-none bg-surface-container text-on-surface px-10 py-4 rounded-md font-headline font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high text-center flex items-center justify-center transition-all">
                Get Pricing
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface-container-low border-t border-outline/10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <FadeIn className="mb-16 text-center">
            <div className="inline-block bg-surface-container-highest px-4 py-1.5 rounded-full mb-6 border border-outline/20">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">What We Do</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-on-surface">Our Services</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* International Shipping */}
            <FadeIn delay={0.1}>
              <Link href="/services#international" className="block h-full">
                <div className="group h-full bg-surface border border-outline/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                  <Globe2 className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface uppercase tracking-tight">International Shipping</h3>
                  <p className="text-on-surface-variant font-body mb-8 leading-relaxed">Seamless global transit via air and sea with door-to-door tracking and customs clearance support across 220+ countries.</p>
                  <div className="mt-auto font-label text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Express Delivery */}
            <FadeIn delay={0.2}>
              <Link href="/services#express" className="block h-full">
                <div className="group h-full bg-surface border border-outline/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                  <Clock className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface uppercase tracking-tight">Express Delivery</h3>
                  <p className="text-on-surface-variant font-body mb-8 leading-relaxed">Time-critical logistics for urgent documents and high-value small parcels with guaranteed delivery windows.</p>
                  <div className="mt-auto font-label text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Domestic Courier */}
            <FadeIn delay={0.3}>
              <Link href="/services#domestic" className="block h-full">
                <div className="group h-full bg-surface border border-outline/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                  <Truck className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface uppercase tracking-tight">Domestic Courier</h3>
                  <p className="text-on-surface-variant font-body mb-8 leading-relaxed">Comprehensive nationwide network reaching every corner of India with precision, speed, and real-time tracking.</p>
                  <div className="mt-auto font-label text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Business Logistics */}
            <FadeIn delay={0.4}>
              <Link href="/services#business" className="block h-full">
                <div className="group h-full bg-surface border border-outline/20 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                  <Package className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface uppercase tracking-tight">Business Logistics</h3>
                  <p className="text-on-surface-variant font-body mb-8 leading-relaxed">Tailored supply chain solutions, bulk shipping, and warehousing for enterprise partners requiring scale and reliability.</p>
                  <div className="mt-auto font-label text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Architecture */}
      <section className="py-32 bg-surface overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #F5C842 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="text-center mb-24">
            <div className="inline-block bg-surface-container-highest px-4 py-1.5 rounded-full mb-6 border border-outline/20">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">How It Works</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-on-surface">Process Architecture</h2>
          </FadeIn>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-0.5 bg-outline/20">
              <motion.div 
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-primary"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {/* Step 1 */}
              <FadeIn delay={0.1} direction="right" className="relative text-center lg:text-left">
                <div className="w-20 h-20 mx-auto lg:mx-0 rounded-full bg-surface border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,200,66,0.2)]">
                  <span className="font-headline font-black text-2xl text-primary">01</span>
                </div>
                <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tighter text-on-surface">Book</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">Schedule your pickup through our digital portal or contact our local hub for custom requirements.</p>
              </FadeIn>
              
              {/* Step 2 */}
              <FadeIn delay={0.3} direction="right" className="relative text-center lg:text-left">
                <div className="w-20 h-20 mx-auto lg:mx-0 rounded-full bg-surface border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,200,66,0.2)]">
                  <span className="font-headline font-black text-2xl text-primary">02</span>
                </div>
                <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tighter text-on-surface">Pickup</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">Our specialized couriers collect the shipment with secure handling protocols and immediate scanning.</p>
              </FadeIn>
              
              {/* Step 3 */}
              <FadeIn delay={0.5} direction="right" className="relative text-center lg:text-left">
                <div className="w-20 h-20 mx-auto lg:mx-0 rounded-full bg-surface border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,200,66,0.2)]">
                  <span className="font-headline font-black text-2xl text-primary">03</span>
                </div>
                <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tighter text-on-surface">Transit</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">Live tracking and optimized routing across our global air & sea hubs ensuring maximum efficiency.</p>
              </FadeIn>
              
              {/* Step 4 */}
              <FadeIn delay={0.7} direction="right" className="relative text-center lg:text-left">
                <div className="w-20 h-20 mx-auto lg:mx-0 rounded-full bg-surface border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,200,66,0.2)]">
                  <span className="font-headline font-black text-2xl text-primary">04</span>
                </div>
                <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tighter text-on-surface">Delivered</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">Safe arrival with digital proof of delivery, instant notification, and recipient verification.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-surface-container-low border-t border-outline/10 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-on-surface mb-6">Why Global Architects Trust Us</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body">We combine decades of logistics expertise with cutting-edge technology to deliver unparalleled reliability.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <FadeIn delay={0.1}>
              <div className="bg-surface border border-outline/20 p-8 rounded-2xl h-full hover:border-primary/50 transition-colors">
                <ShieldCheck className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tight text-on-surface">Secure Handling</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">Every parcel is treated as critical infrastructure, protected by multi-layer security protocols and comprehensive insurance.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-surface border border-outline/20 p-8 rounded-2xl h-full hover:border-primary/50 transition-colors">
                <Search className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tight text-on-surface">Real-time Visibility</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">Precision tracking data updated every minute from our GPS-integrated logistics network, accessible via our portal.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-surface border border-outline/20 p-8 rounded-2xl h-full hover:border-primary/50 transition-colors">
                <Globe2 className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tight text-on-surface">Vast Global Network</h4>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">Direct lanes to 50+ countries with established regional partnerships for seamless last-mile excellence.</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="bg-surface border border-outline/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-xl md:text-2xl font-body italic text-on-surface mb-8 leading-relaxed">&quot;ICC has completely transformed our supply chain. Their precision and reliability have allowed us to expand our operations globally with absolute confidence.&quot;</p>
            <div className="font-headline font-bold uppercase tracking-widest text-primary text-sm">Sarah Jenkins</div>
            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">Director of Operations, Nexus Tech</div>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-20 pt-10 border-t border-outline/10 flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <span className="font-headline font-bold text-xl tracking-tighter">ISO 9001:2015</span>
            <span className="font-headline font-bold text-xl tracking-tighter">IATA CERTIFIED</span>
            <span className="font-headline font-bold text-xl tracking-tighter">AEO AUTHORIZED</span>
            <span className="font-headline font-bold text-xl tracking-tighter">TAPA SECURE</span>
          </FadeIn>
        </div>
      </section>

      {/* Standard of Excellence - Brand Statement */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/cargo-airport/1920/1080" 
            alt="Cargo Airport" 
            fill 
            className="object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-background/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black font-headline tracking-tighter uppercase text-white mb-6 leading-none">
              Logistics Without Boundaries
            </h2>
            <p className="text-xl text-white/80 font-body max-w-2xl mx-auto">Setting the global standard for excellence in freight and courier services.</p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background relative overflow-hidden py-32 border-t border-outline/10">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full w-1/2 h-1/2 mx-auto top-1/4 pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase text-on-surface mb-8">
              Ship Globally <br /> <span className="text-primary">With Confidence</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-12 font-body text-lg">
              Ready to experience the next generation of industrial logistics? Start your journey with the Global Architects today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/book">
                <button className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(245,200,66,0.3)]">
                  Start Booking
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-transparent border border-outline/30 text-on-surface px-10 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-all">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
