import { Phone, MessageCircle } from "lucide-react";

export function StickyCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-charcoal/95 backdrop-blur-md border-t border-gold/30 px-3 py-3 grid grid-cols-2 gap-3 shadow-luxe">
      <a
        href="tel:8455586870"
        className="flex items-center justify-center gap-2 bg-gradient-gold text-charcoal py-3 rounded-full font-semibold text-sm shadow-gold"
      >
        <Phone className="w-4 h-4" /> Call
      </a>
      <a
        href="sms:8455586870"
        className="flex items-center justify-center gap-2 border border-gold/60 text-cream py-3 rounded-full font-semibold text-sm"
      >
        <MessageCircle className="w-4 h-4" /> Text
      </a>
    </div>
  );
}
