import { ServicesSection } from "@/components/sections/ServicesSection";
import { PageHero } from "@/components/ui/page-hero";
import { Rocket } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface">
      <PageHero 
        title="Direct To Consumer Elite Logistics."
        subtitle="Services Architecture"
        description="Comprehensive global transit solutions engineered for maximum efficiency, security, and real-time visibility across 220+ countries."
        icon={<Rocket className="w-4 h-4" />}
      />
      <div className="py-20 bg-surface">
        <ServicesSection />
      </div>
      
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4">Air Freight</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Priority air transport for time-critical shipments with daily departures from major global hubs.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4">Ocean Freight</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Cost-effective LCL and FCL solutions for large-scale international commercial cargo.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4">Customs Brokerage</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Expert navigation of international compliance and regulatory requirements for seamless clearance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
