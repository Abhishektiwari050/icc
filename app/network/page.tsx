import { NetworkSection } from "@/components/sections/NetworkSection";
import { PageHero } from "@/components/ui/page-hero";
import { Globe } from "lucide-react";

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-surface">
      <PageHero 
        title="Global Digital Infrastructure."
        subtitle="Network Architecture"
        description="Our global reach spans across 5 continents, 50+ countries, and 500+ strategic distribution points, ensuring your cargo reaches its destination with absolute reliability."
        icon={<Globe className="w-4 h-4" />}
      />
      <div className="py-20 bg-surface">
        <NetworkSection />
      </div>
      
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Hub & Spoke Strategic Model.</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="text-4xl font-black text-primary/50">01</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Centralized Hubs</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Major distribution centers located in Delhi, Dubai, and London for rapid trans-national transit.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-black text-primary/50">02</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Tier-1 Partnerships</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Direct integration with major airlines and shipping lines to secure priority space and routes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-black text-primary/50">03</div>
                  <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Last-Mile Optimization</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Local delivery fleets equipped with GPS tracking for precision delivery even in complex urban zones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative border border-white/10 rounded-2xl p-12 bg-white/5 backdrop-blur-md">
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-8 text-center border-b border-white/10 pb-8">
                    <div>
                      <p className="text-4xl font-black text-primary">500+</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Logistics Hubs</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-primary">220+</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Countries Served</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <p className="text-4xl font-black text-primary">24/7</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Global Support</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-primary">99.9%</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Transit Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
