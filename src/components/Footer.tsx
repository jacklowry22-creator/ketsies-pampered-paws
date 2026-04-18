import { Logo } from "./Logo";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <Logo className="h-20 w-auto -ml-2" />
            <p className="mt-4 text-cream/60 text-sm leading-relaxed font-serif italic max-w-xs">
              A boutique grooming experience for the dogs of Pearl River and beyond.
            </p>
          </div>
          <div>
            <p className="text-gold uppercase tracking-widest text-xs mb-4">Visit</p>
            <p className="flex items-start gap-2 text-cream/80 text-sm">
              <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
              110 Mountain View Ave<br />Pearl River, NY 10965
            </p>
          </div>
          <div>
            <p className="text-gold uppercase tracking-widest text-xs mb-4">Contact</p>
            <a href="tel:8455586870" className="flex items-center gap-2 text-cream/80 text-sm hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" /> 845-558-6870
            </a>
          </div>
        </div>
        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-cream/50 gap-2">
          <p>© {new Date().getFullYear()} Ketsie's Dog Grooming. All rights reserved.</p>
          <p className="font-serif italic">Made with love for every pup.</p>
        </div>
      </div>
    </footer>
  );
}
