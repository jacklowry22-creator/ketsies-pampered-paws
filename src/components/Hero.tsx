import { useEffect, useRef } from "react";
import heroImg from "@/assets/dog-backyard.jpg";
import { Phone, MessageCircle } from "lucide-react";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translate3d(0, ${y * 0.4}px, 0) scale(${1 + y * 0.0004})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal">
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-charcoal/30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 animate-fade-up">
          Pearl River, New York
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream leading-[0.95] max-w-5xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
          A boutique <em className="animate-shimmer not-italic font-display">resort</em>
          <br />
          for your dog.
        </h1>
        <p className="mt-8 max-w-2xl text-cream/80 text-base md:text-lg leading-relaxed font-serif italic animate-fade-up" style={{ animationDelay: "0.3s" }}>
          One dog. One groomer. One unforgettable experience — set inside a private home studio
          surrounded by gardens, a koi pond, and acres of calm.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="tel:8455586870"
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-charcoal px-8 py-4 rounded-full font-semibold tracking-wide shadow-gold hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" /> Call 845-558-6870
          </a>
          <a
            href="sms:8455586870"
            className="inline-flex items-center justify-center gap-2 border border-gold/60 text-cream px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-gold/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" /> Text a Photo for a Quote
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
