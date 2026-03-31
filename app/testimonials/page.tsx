import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PageHero } from "@/components/ui/page-hero";
import { Shield } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <PageHero 
        title="Trusted By Industry Leaders."
        subtitle="Global Success Stories"
        description="Our reputation is built on the success of our clients. We empower businesses to expand globally through consistent, elite logistical support."
        icon={<Shield className="w-4 h-4" />}
      />
      <div className="py-20 bg-surface">
        <TestimonialsSection />
      </div>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-slate-50 rounded-3xl">
              <h3 className="text-2xl font-black uppercase mb-6">99.8% Client Retention</h3>
              <p className="text-slate-600 leading-relaxed">
                At Mahakaal Enterprises, we don't just ship packages; we architect supply chains. Our commitment to precision has earned us the trust of Fortune 500 companies and local enterprises alike. Our data-driven approach ensures that every client receives personalized attention and elite-level service.
              </p>
            </div>
            <div className="p-12 bg-primary/5 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-black uppercase mb-6">Certified Performance</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Operating with industry-leading certifications (ISO 9001:2015, IATA, AEO), we maintain the highest standards of safety and efficiency in the logistics world.
              </p>
              <div className="flex flex-wrap gap-4 text-[10px] font-bold text-primary tracking-widest bg-white/50 p-4 rounded-xl">
                <span>ISO 9001:2015</span>
                <span className="opacity-30">/</span>
                <span>IATA CERTIFIED</span>
                <span className="opacity-30">/</span>
                <span>AEO AUTHORIZED</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
