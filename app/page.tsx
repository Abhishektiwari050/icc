"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FadeIn, TextReveal } from '@/components/ui/animations';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { FlipWords } from '@/components/ui/flip-words';
import { SparklesCore } from '@/components/ui/sparkles';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Timeline } from '@/components/ui/timeline';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { WorldMap } from '@/components/ui/world-map';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-collision';
import { LogoCloud } from '@/components/ui/logo-cloud';
import { FAQ } from '@/components/ui/faq';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Globe, Clock, Truck, Package, ArrowRight, ShieldCheck, Search, HelpCircle } from 'lucide-react';

export default function Home() {
  const words = ["Global", "India", "USA", "Europe", "Dubai", "Singapore"];

  const services = [
    {
      title: "International Shipping",
      description: "Seamless global transit via air and sea with door-to-door tracking and customs clearance support across 220+ countries.",
      icon: <Globe className="w-10 h-10 text-primary" />,
      className: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Express Delivery",
      description: "Time-critical logistics for urgent documents and high-value small parcels.",
      icon: <Clock className="w-10 h-10 text-primary" />,
      className: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Domestic Courier",
      description: "Comprehensive nationwide network reaching every corner of India with precision.",
      icon: <Truck className="w-10 h-10 text-primary" />,
      className: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Business Logistics",
      description: "Tailored supply chain solutions and warehousing for enterprise partners requiring scale and reliability.",
      icon: <Package className="w-10 h-10 text-primary" />,
      className: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1586528116311-ad86d7c4731a?auto=format&fit=crop&q=80&w=800&h=400"
    },
  ];

  const processData = [
    {
      title: "01 BOOK",
      content: (
        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline/10">
          <p className="text-on-surface-variant text-sm md:text-base font-normal mb-8 leading-relaxed">
            Schedule your pickup through our digital portal or contact our local hub for custom requirements.
          </p>
          <div className="grid grid-cols-1 gap-4">
             <Image src="https://images.unsplash.com/photo-1512428559083-a40516a3ee32?auto=format&fit=crop&q=80&w=600&h=400" alt="Booking" width={600} height={400} className="rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "02 PICKUP",
      content: (
        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline/10">
          <p className="text-on-surface-variant text-sm md:text-base font-normal mb-8 leading-relaxed">
             Our specialized couriers collect the shipment with secure handling protocols and immediate scanning.
          </p>
          <div className="grid grid-cols-1 gap-4">
             <Image src="https://images.unsplash.com/photo-1601275211244-431b61bb3e2a?auto=format&fit=crop&q=80&w=600&h=400" alt="Pickup" width={600} height={400} className="rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "03 TRANSIT",
      content: (
        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline/10">
          <p className="text-on-surface-variant text-sm md:text-base font-normal mb-8 leading-relaxed">
             Live tracking and optimized routing across our global air & sea hubs ensuring maximum efficiency.
          </p>
          <div className="grid grid-cols-1 gap-4">
             <Image src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600&h=400" alt="Transit" width={600} height={400} className="rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "04 DELIVERED",
      content: (
        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline/10">
          <p className="text-on-surface-variant text-sm md:text-base font-normal mb-8 leading-relaxed">
             Safe arrival with digital proof of delivery, instant notification, and recipient verification.
          </p>
          <div className="grid grid-cols-1 gap-4">
             <Image src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=600&h=400" alt="Delivered" width={600} height={400} className="rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "ICC has completely transformed our supply chain. Their precision and reliability have allowed us to expand our operations globally with absolute confidence.",
      name: "Sarah Jenkins",
      designation: "Director of Operations, Nexus Tech",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote: "The real-time visibility and secure handling provided by ICC are unmatched. They truly understand the architectural precision required in logistics.",
      name: "David Chen",
      designation: "Head of Logistics, Global Build",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      quote: "Efficient, reliable, and professional. ICC is our go-to partner for all international shipping needs.",
      name: "Michael Roberts",
      designation: "CEO, Streamline Exports",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-surface">
      <TracingBeam className="h-full">
        {/* Hero Section */}
        <AuroraBackground className="pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden min-h-[90vh]">
          <SparklesCore
            id="tsparticleshero"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full absolute inset-0 z-0"
            particleColor="#FFFFFF"
          />
          <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                <TextReveal text="Architectural Precision In Global Logistics." />
              </h1>
              <div className="text-white/80 text-lg md:text-xl font-body max-w-xl mb-12 leading-relaxed">
                Fast, secure, and reliable shipping across <FlipWords words={words} className="text-secondary-container font-bold" /> and worldwide. 
                We don&apos;t just move cargo; we engineer connections across 50+ countries.
              </div>
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
        </AuroraBackground>

        {/* Quick Action Bar */}
        <section className="max-w-screen-2xl mx-auto px-8 -mt-12 relative z-20">
          <FadeIn delay={0.6}>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-2xl flex flex-col lg:flex-row gap-6 items-end border border-outline-variant/20 backdrop-blur-md bg-white/90">
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
        <section className="py-32 bg-surface-container-low border-y border-outline/10 h-full">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <FadeIn className="mb-16 text-center">
              <div className="inline-block bg-surface-container-highest px-4 py-1.5 rounded-full mb-6 border border-outline/20">
                <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">What We Do</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-on-surface">Our Services</h2>
            </FadeIn>
            
            <BentoGrid className="max-w-7xl mx-auto">
              {services.map((service, i) => (
                <BentoGridItem
                  key={i}
                  title={service.title}
                  description={service.description}
                  header={
                    <CardContainer className="w-full py-0 h-48 md:h-full">
                      <CardBody className="w-full h-full relative group/card">
                        <CardItem translateZ="50" className="w-full h-full">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                          />
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  }
                  icon={service.icon}
                  className={service.className}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-32 bg-surface overflow-hidden relative border-b border-outline/10">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-accent" />
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
            <FadeIn className="text-center mb-20">
              <div className="inline-block bg-surface-container-highest px-4 py-1.5 rounded-full mb-6 border border-outline/20">
                <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">How It Works</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-on-surface">Process Architecture</h2>
            </FadeIn>
            
            <Timeline data={processData} />
          </div>
        </section>

        {/* World Map Section */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase text-on-surface mb-6">
                Connected World <br /> <span className="text-primary">Optimized Paths</span>
              </h2>
            </FadeIn>
            <WorldMap 
              dots={[
                { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 40.7128, lng: -74.0060, label: "New York" } },
                { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
                { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 25.2048, lng: 55.2708, label: "Dubai" } },
                { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: 1.3521, lng: 103.8198, label: "Singapore" } },
                { start: { lat: 28.6139, lng: 77.2090, label: "New Delhi" }, end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } },
              ]}
            />
          </div>
        </section>

        {/* Social Proof & Certifications */}
        <section className="py-24 bg-surface-container relative">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-black font-headline tracking-tighter uppercase text-on-surface">
                Architecting Trust
              </h2>
            </FadeIn>
            
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

            <FadeIn delay={0.5} className="mt-20 pt-10 border-t border-outline/10">
              <LogoCloud />
            </FadeIn>
          </div>
        </section>

        {/* Brand Statement */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1570646172679-13dd97607ff9?auto=format&fit=crop&q=80&w=1920&h=1080" 
              alt="Cargo Airport" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-black/60" />
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

        {/* FAQ Section */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <FadeIn className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 text-primary uppercase font-headline font-bold tracking-widest text-sm mb-4">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase text-on-surface mb-6">
                Technical <span className="text-primary">Insights</span>
              </h2>
            </FadeIn>
            <FAQ />
          </div>
        </section>
      </TracingBeam>

      {/* Final CTA */}
      <BackgroundBeamsWithCollision className="py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-20 text-center">
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
      </BackgroundBeamsWithCollision>
    </main>
  );
}
