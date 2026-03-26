"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FadeIn, TextReveal } from '@/components/ui/animations';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { FlipWords } from '@/components/ui/flip-words';
import { SparklesCore } from '@/components/ui/sparkles';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Vortex } from '@/components/ui/vortex';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { Globe, Clock, Truck, Package, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, HelpCircle } from 'lucide-react';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { Timeline } from '@/components/ui/timeline';
import { WorldMap } from '@/components/ui/world-map';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { LampContainer } from '@/components/ui/lamp';
import { FAQ } from '@/components/ui/faq';
import { StatsSection } from '@/components/StatsSection';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  className: string;
  image: string;
}

interface ProcessItem {
  title: string;
  content: React.ReactNode;
}

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

const BannerSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1570646172679-13dd97607ff9?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Cargo Airport" 
          fill 
          className="object-cover scale-125" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </motion.div>
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black font-headline tracking-tighter uppercase text-white mb-6 leading-none">
            Logistics Without Boundaries
          </h2>
          <p className="text-xl text-white/80 font-body max-w-2xl mx-auto">Setting the global standard for excellence in freight and courier services.</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default function Home() {
  const words = ["Global", "India", "USA", "Europe", "Dubai", "Singapore"];
  const placeholders = [
    "Enter tracking number (e.g. ICC-482-901)",
    "Track your international shipment",
    "Where is your package?",
    "ICC-123-456",
  ];

  const services: Service[] = [
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

  const processData: ProcessItem[] = [
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

  const testimonials: Testimonial[] = [
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden min-h-[90vh] bg-background">
        <ShootingStars />
        <StarsBackground />
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              <TextReveal text="Architectural Precision In Global Logistics." />
            </h1>
            <div className="text-white/80 text-lg md:text-xl font-body max-w-xl mb-12 leading-relaxed">
              Fast, secure, and reliable shipping across <FlipWords words={words} className="text-primary font-bold" /> and worldwide. 
              We don&apos;t just move cargo; we engineer connections across 50+ countries.
            </div>
            <FadeIn delay={0.4} className="flex flex-wrap gap-4">
              <Link href="/tracking">
                <MovingBorderButton
                  borderRadius="0.5rem"
                  className="bg-primary text-on-primary border-primary font-headline font-extrabold uppercase tracking-widest text-sm"
                >
                  Track Shipment
                </MovingBorderButton>
              </Link>
              <Link href="/book">
                <button
                  className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-white/10 transition-all backdrop-blur-sm h-[56px]"
                >
                  Book a Delivery
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <TracingBeam className="h-full">

        {/* Stats Section - New */}
        <StatsSection />

        {/* Quick Action Bar - Enhanced with Vanish Input */}
        <section id="tracking-input" className="max-w-screen-2xl mx-auto px-8 mb-24 relative z-20">
          <FadeIn delay={0.2}>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center border border-outline-variant/10 backdrop-blur-md bg-white/5">
              <div className="flex-1 w-full scale-105">
                <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 font-bold text-center lg:text-left">Track Your Shipment</label>
                <PlaceholdersAndVanishInput 
                  placeholders={placeholders}
                  onChange={(e) => console.log(e.target.value)}
                  onSubmit={(e) => console.log("submitted")}
                />
              </div>
              <div className="flex gap-4 w-full lg:w-auto">
                <Link href="/book" className="flex-1 lg:flex-none bg-primary text-on-primary px-10 py-4 h-14 rounded-full font-headline font-bold uppercase tracking-widest text-xs text-center flex items-center justify-center hover:scale-105 transition-all shadow-xl shadow-primary/10">
                  Book Shipment
                </Link>
                <Link href="/quote" className="flex-1 lg:flex-none bg-surface-container-highest text-on-surface px-10 py-4 h-14 rounded-full font-headline font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high text-center flex items-center justify-center transition-all border border-outline/10">
                  Get Pricing
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-surface-container-low border-y border-outline/10 h-full">
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
        <section id="process" className="py-32 bg-surface overflow-hidden relative border-b border-outline/10">
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
        <section id="network" className="py-24 bg-surface overflow-hidden">
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

        {/* Testimonials */}
        <section id="testimonials" className="py-32 bg-surface-container-low relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-black font-headline tracking-tighter uppercase text-on-surface">
                Architecting Trust
              </h2>
            </FadeIn>
            
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

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

        {/* Full-Width Banner with Parallax */}
        <BannerSection />

        {/* FAQ Section with Lamp Effect Header */}
        <section className="bg-surface overflow-hidden relative">
          <LampContainer className="pt-20">
            <FadeIn className="text-center mb-16 relative z-50">
              <div className="flex items-center justify-center gap-2 text-primary uppercase font-headline font-bold tracking-widest text-sm mb-4">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase text-on-surface mb-6">
                Technical <span className="text-primary">Insights</span>
              </h2>
            </FadeIn>
          </LampContainer>
          <div className="max-w-4xl mx-auto px-6 md:px-8 -mt-40 relative z-50 pb-32">
            <FAQ />
          </div>
        </section>
      </TracingBeam>

      {/* Final CTA with Vortex */}
      <section className="w-full mx-auto rounded-md h-[40rem] overflow-hidden relative">
        <Vortex
          backgroundColor="var(--background)"
          rangeY={800}
          particleCount={500}
          baseHue={45}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-20 text-center">
            <FadeIn>
              <h2 className="text-white text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase mb-8">
                Ship Globally <br /> <span className="text-primary">With Confidence</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-12 font-body text-lg leading-relaxed">
                Ready to experience the next generation of industrial logistics? Start your journey with the Global Architects today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <Link href="/book">
                  <MovingBorderButton
                    borderRadius="0.5rem"
                    className="bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-sm px-10 py-4 h-16 w-56 border-none"
                    containerClassName="h-16 w-56"
                  >
                    Start Booking
                  </MovingBorderButton>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-12 py-4 h-16 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                    Talk to an Expert
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Vortex>
      </section>
    </main>
  );
}
