import Link from 'next/link';
import { Mail, MapPin, Globe2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#11144a] dark:bg-[#080a26] w-full pt-20 pb-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-[#ffd660] font-headline mb-6 uppercase tracking-tighter">
            International Courier & Cargo
          </div>
          <p className="text-white/60 font-body text-sm leading-relaxed">
            Architectural precision in logistics. Bridging India with the global trade ecosystem through data-driven infrastructure.
          </p>
        </div>
        <div>
          <h4 className="text-white font-headline font-bold uppercase tracking-widest text-xs mb-6">Resources</h4>
          <ul className="space-y-4 font-headline text-sm tracking-wide">
            <li><Link href="#" className="text-white/60 hover:text-[#ffd660] transition-colors">Global Terminals</Link></li>
            <li><Link href="#" className="text-white/60 hover:text-[#ffd660] transition-colors">Carrier Network</Link></li>
            <li><Link href="#" className="text-white/60 hover:text-[#ffd660] transition-colors">Compliance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-headline font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
          <ul className="space-y-4 font-headline text-sm tracking-wide">
            <li><Link href="#" className="text-white/60 hover:text-[#ffd660] transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-white/60 hover:text-[#ffd660] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-headline font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
          <div className="flex space-x-4">
            <Mail className="w-6 h-6 text-[#ffd660] cursor-pointer hover:text-white transition-colors" />
            <MapPin className="w-6 h-6 text-[#ffd660] cursor-pointer hover:text-white transition-colors" />
            <Globe2 className="w-6 h-6 text-[#ffd660] cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-12 mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-white/40 font-headline text-xs tracking-widest">
          © 2024 International Courier & Cargo. Architectural Precision in Logistics.
        </p>
      </div>
    </footer>
  );
}
