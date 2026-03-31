import { ProcessSection } from "@/components/sections/ProcessSection";
import { PageHero } from "@/components/ui/page-hero";
import { Clock } from "lucide-react";

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-surface">
      <PageHero 
        title="Engineered Logistics Workflow."
        subtitle="Process Architecture"
        description="Our 4-step logistical framework is designed for maximum speed, security, and absolute precision from booking to final delivery."
        icon={<Clock className="w-4 h-4" />}
      />
      <div className="py-20 bg-surface">
        <ProcessSection />
      </div>
      
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Why Our Process Works</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Mahakaal Enterprises utilizes a proprietary logistics operating system that synchronizes every moving part of the supply chain. From automated weight verification to AI-driven route optimization, we eliminate human error.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm font-bold text-slate-800 uppercase">Real-time Data Synchronization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm font-bold text-slate-800 uppercase">Secure Chain of Custody</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-sm font-bold text-slate-800 uppercase">Automated Customs Filing</span>
                </li>
              </ul>
            </div>
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                alt="Process optimization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
