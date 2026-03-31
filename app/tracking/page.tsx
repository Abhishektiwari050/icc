import { TrackingSection } from "@/components/sections/TrackingSection";
import { PageHero } from "@/components/ui/page-hero";
import { Search } from "lucide-react";

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-surface">
      <PageHero 
        title="Live Logistical Visibility."
        subtitle="Shipment Hub"
        description="Monitor your shipments in real-time across our specialized global air and sea routes. Enter your MH- tracking ID for immediate status updates."
        icon={<Search className="w-4 h-4" />}
      />
      <div id="tracking-input" className="py-20 bg-surface">
        <TrackingSection />
      </div>
      
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 border border-slate-200 rounded-2xl">
              <h3 className="text-xl font-black uppercase mb-4">Mobile Tracking</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Download our mobile platform for real-time push notifications on every stage of your cargo's journey, from collection to final recipient verification.</p>
            </div>
            <div className="p-10 border border-slate-200 rounded-2xl">
              <h3 className="text-xl font-black uppercase mb-4">Secured Monitoring</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Our advanced tracking system provides more than just coordinates. Access digital proof of delivery and secure document verification instantly.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
