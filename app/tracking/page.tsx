"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FadeIn, TextReveal, BackgroundBeams } from '@/components/ui/animations';
import { SparklesCore } from '@/components/ui/sparkles';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Package, ArrowRight, Ship, Clock, Truck, PlaneTakeoff, Network } from 'lucide-react';

const IconMap: Record<string, any> = {
  Truck,
  PlaneTakeoff,
  Network
};

interface TrackingEvent {
  date: string;
  location: string;
  description: string;
  icon: string;
}

interface TrackingResult {
  id: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  weight: string;
  service: string;
  events: TrackingEvent[];
}

export default function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [results, setResults] = useState<TrackingResult[]>([]);
  const [hasTracked, setHasTracked] = useState(false);

  const handleTrack = async () => {
    if (!trackingId.trim()) return;
    setIsTracking(true);
    
    try {
      const response = await fetch(`/api/tracking?ids=${encodeURIComponent(trackingId)}`);
      const data = await response.json();
      
      if (data.results) {
        setResults(data.results);
      }
    } catch (error) {
      console.error("Failed to track:", error);
    } finally {
      setIsTracking(false);
      setHasTracked(true);
    }
  };

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Tracking Section */}
      <section className="relative w-full py-20 bg-surface-container overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlestracking"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#000000"
          />
        </div>
        <BackgroundBeams />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            <Image src="https://picsum.photos/seed/warehouse-interior/1920/1080" alt="Warehouse" fill className="object-cover grayscale" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeIn delay={0.1}>
            <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Real-Time Logistics Intelligence</span>
          </FadeIn>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary-container tracking-tighter mb-12">
            <TextReveal text="Command Your" /> <br />
            <FadeIn delay={0.5} direction="up">
              <span className="text-secondary">Global Shipments.</span>
            </FadeIn>
          </h1>

          {/* Center Input Field */}
          <FadeIn delay={0.7}>
            <div className="bg-surface-container-lowest p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto border border-outline-variant/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex-grow flex items-center px-4 bg-surface-container relative z-10 rounded-lg">
                <Package className="w-6 h-6 text-on-surface-variant mr-3" />
                <input 
                  type="text" 
                  placeholder="Enter Tracking ID (e.g., ICC-4920-X92)" 
                  className="w-full bg-transparent border-none focus:ring-0 py-4 font-label text-on-surface placeholder:text-on-surface-variant/50"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                />
              </div>
              <button 
                onClick={handleTrack}
                disabled={isTracking || !trackingId.trim()}
                className="bg-primary-container text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-on-primary-fixed-variant transition-all flex items-center justify-center gap-2 relative z-10 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isTracking ? 'Tracing...' : 'Trace Path'}
                {!isTracking && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
            <p className="mt-6 font-label text-on-surface-variant text-sm">Multiple IDs? Separate by comma for bulk monitoring.</p>
          </FadeIn>
        </div>
      </section>

      {/* Tracking Results / Dashboard */}
      {hasTracked && results.length > 0 && (
        <div className="max-w-screen-2xl mx-auto px-8 py-20 flex flex-col gap-20">
          {results.map((result, index) => (
            <motion.section 
              key={result.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Tracking Identity & Status */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <FadeIn direction="right" delay={0.2} className="h-full">
                  <WobbleCard containerClassName="h-full bg-surface-container-lowest border border-outline-variant/15">
                    <div className="p-8 h-full">
                      <div className="flex justify-between items-start mb-10">
                        <div>
                          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Waybill Number</p>
                          <h2 className="font-headline text-2xl font-black text-primary-container">{result.id}</h2>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-sm ${
                          result.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          result.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-secondary-container text-on-secondary-container animate-pulse'
                        }`}>
                          {result.status}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full relative ${result.status === 'Delivered' ? 'bg-green-500 ring-4 ring-green-100' : 'bg-secondary ring-4 ring-secondary-container'}`}>
                              {result.status !== 'Delivered' && <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75"></div>}
                            </div>
                            <div className="w-0.5 h-16 bg-surface-container-highest"></div>
                            <div className={`w-3 h-3 rounded-full ${result.status === 'Delivered' ? 'bg-green-500' : 'bg-surface-container-highest'}`}></div>
                          </div>
                          <div className="flex-grow">
                            <div className="mb-8">
                              <p className="font-label text-xs text-on-surface-variant uppercase">Origin</p>
                              <p className="font-headline font-bold text-lg">{result.origin}</p>
                              <p className="text-xs text-on-surface-variant">Origin Hub • Oct 24, 08:30</p>
                            </div>
                            <div>
                              <p className="font-label text-xs text-on-surface-variant uppercase">Destination</p>
                              <p className="font-headline font-bold text-lg">{result.destination}</p>
                              <p className="text-xs text-on-surface-variant">Destination Terminal • Est. {result.estimatedDelivery}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </WobbleCard>
                </FadeIn>

                <FadeIn direction="right" delay={0.3}>
                  <div className="tracking-gradient p-8 rounded-xl text-white overflow-hidden relative shadow-xl group hover:shadow-2xl transition-shadow">
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <h3 className="font-headline font-bold text-xl mb-2">Architectural Logistics</h3>
                      <p className="text-white/70 text-sm mb-6 leading-relaxed">Your cargo is currently moving through the supply chain via {result.service}.</p>
                      <button className="border border-white/30 hover:bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded backdrop-blur-sm">View Manifest</button>
                    </div>
                    <Ship className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                  </div>
                </FadeIn>
              </div>

              {/* Detailed Timeline & Map */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                {/* Interactive Timeline Bar */}
                <FadeIn direction="up" delay={0.4}>
                  <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 shadow-xl">
                    <div className="flex justify-between items-center mb-12">
                      <h3 className="font-headline font-extrabold text-xl uppercase tracking-tight">Shipment Progress</h3>
                      <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-full">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="font-label text-xs font-bold">ETA: {result.estimatedDelivery}</span>
                      </div>
                    </div>

                    <div className="relative w-full h-2 bg-surface-container rounded-full mb-12">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: result.status === 'Delivered' ? "100%" : result.status === 'Pending' ? "10%" : "65%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className={`absolute top-0 left-0 h-full rounded-full ${result.status === 'Delivered' ? 'bg-green-500' : 'bg-secondary'}`}
                      ></motion.div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-1">
                        <div className={`w-4 h-4 rounded-full border-4 border-surface-container-lowest shadow-md relative z-10 ${result.status === 'Pending' ? 'bg-secondary' : 'bg-secondary'}`} title="Manifested"></div>
                        <div className={`w-4 h-4 rounded-full border-4 border-surface-container-lowest shadow-md relative z-10 ${result.status === 'Pending' ? 'bg-surface-container-highest' : 'bg-secondary'}`} title="Picked Up"></div>
                        <div className={`w-4 h-4 rounded-full border-4 border-surface-container-lowest shadow-md relative z-10 ${result.status === 'Pending' ? 'bg-surface-container-highest' : 'bg-secondary'}`} title="In Transit"></div>
                        <div className={`w-4 h-4 rounded-full border-4 border-surface-container-lowest relative z-10 transition-colors duration-300 ${result.status === 'Delivered' ? 'bg-green-500' : 'bg-surface-container-highest hover:bg-secondary/50'}`} title="Out for Delivery"></div>
                        <div className={`w-4 h-4 rounded-full border-4 border-surface-container-lowest relative z-10 transition-colors duration-300 ${result.status === 'Delivered' ? 'bg-green-500' : 'bg-surface-container-highest hover:bg-secondary/50'}`} title="Delivered"></div>
                      </div>
                    </div>

                    {/* Log Events */}
                    <div className="space-y-0 relative">
                      <div className="absolute left-[135px] top-6 bottom-6 w-px bg-surface-container-highest hidden sm:block"></div>
                      {result.events.map((event, i) => {
                        const EventIcon = IconMap[event.icon] || Package;
                        return (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                          className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-6 border-b border-surface-container last:border-0 hover:bg-surface-bright transition-colors px-4 -mx-4 rounded-lg relative z-10"
                        >
                          <span className="font-label text-sm text-on-surface-variant w-32 shrink-0 pt-1">{event.date}</span>
                          <div className="shrink-0 pt-1 hidden sm:block bg-surface-container-lowest z-10 py-1">
                            <EventIcon className="w-6 h-6 text-secondary group-hover:text-primary-container transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-headline font-bold text-on-surface text-lg group-hover:text-primary-container transition-colors">{event.description}</h4>
                            <p className="text-sm text-on-surface-variant mt-1">{event.location}</p>
                          </div>
                        </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>

                {/* Bento Map/Detail Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FadeIn direction="up" delay={0.5} className="h-full">
                    <WobbleCard containerClassName="h-full bg-surface-container-low border border-outline-variant/10">
                      <div className="h-64 relative overflow-hidden group">
                        <Image src="https://picsum.photos/seed/map-terrain/800/600" alt="Route Map" fill className="object-cover opacity-50 grayscale contrast-125 group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded shadow-lg border border-outline-variant/20">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
                            <span className="font-label text-[10px] font-bold uppercase">Live Location: En Route</span>
                          </div>
                        </div>
                      </div>
                    </WobbleCard>
                  </FadeIn>

                  <FadeIn direction="up" delay={0.6} className="h-full">
                    <WobbleCard containerClassName="h-full bg-surface-container-low border border-outline-variant/10">
                      <div className="p-8 flex flex-col justify-center h-full hover:bg-surface-container transition-colors">
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                          <div>
                            <p className="font-label text-[10px] uppercase text-on-surface-variant mb-1">Weight</p>
                            <p className="font-headline font-bold text-2xl text-primary-container">{result.weight}</p>
                          </div>
                          <div>
                            <p className="font-label text-[10px] uppercase text-on-surface-variant mb-1">Service</p>
                            <p className="font-headline font-bold text-xl text-primary-container">{result.service}</p>
                          </div>
                          <div>
                            <p className="font-label text-[10px] uppercase text-on-surface-variant mb-1">Dimensions</p>
                            <p className="font-headline font-bold text-lg text-on-surface">Standard</p>
                          </div>
                          <div>
                            <p className="font-label text-[10px] uppercase text-on-surface-variant mb-2">Insurance</p>
                            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-[10px] font-bold shadow-sm">Standard Plus</span>
                          </div>
                        </div>
                      </div>
                    </WobbleCard>
                  </FadeIn>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      )}
    </main>
  );
}
