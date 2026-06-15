import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const ref = useReveal<HTMLDivElement>();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/manovblb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else setStatus("err");
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contact" className="bg-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="text-gold-deep uppercase tracking-[0.4em] text-xs mb-5">Book Your Pup</p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
            Let's get them on the <em className="text-gold-deep not-italic">schedule</em>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-8" />
          <p className="mt-6 text-charcoal/70 max-w-xl mx-auto">
            Have a question or want to book? Call or text Colette at <a href="tel:8455586870" className="text-gold-deep font-semibold hover:underline">845-558-6870</a>. She is happy to discuss your dog's needs!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Quick contact + map */}
          <div className="space-y-6">
            <div className="bg-charcoal text-cream rounded-3xl p-8 md:p-10 shadow-luxe">
              <h3 className="font-display text-3xl mb-6 text-gradient-gold">Call or Text Colette Directly</h3>
              <div className="space-y-5">
                <a href="tel:8455586870" className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-charcoal" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-cream/60">Call</span>
                    <span className="font-display text-2xl group-hover:text-gold transition-colors">845-558-6870</span>
                  </span>
                </a>
                <a href="sms:8455586870" className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-charcoal" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-cream/60">Text a photo for a quote</span>
                    <span className="font-display text-2xl group-hover:text-gold transition-colors">845-558-6870</span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-charcoal" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-cream/60">Studio</span>
                    <span className="block text-cream/90">110 Mountain View Ave</span>
                    <span className="block text-cream/90">Pearl River, NY 10965</span>
                    <span className="block text-cream/70 text-sm mt-2">Hours: Mon–Sat 7–4 · Closed Sundays</span>
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#services"
              className="block bg-card border border-gold/40 rounded-2xl p-6 hover:border-gold-deep transition-colors group shadow-luxe"
            >
              <p className="text-gold-deep uppercase tracking-widest text-xs mb-2">First-time client?</p>
              <p className="font-display text-xl text-charcoal">
                Start with our <span className="text-gold-deep group-hover:underline">Puppy Introduction Groom →</span>
              </p>
              <p className="text-charcoal/70 text-sm mt-2">A gentle, calm first grooming experience designed to build a positive lifelong relationship with grooming.</p>
            </a>

            <div className="rounded-3xl overflow-hidden shadow-luxe border border-border h-[340px]">
              <iframe
                title="Ketsie's Dog Grooming Location"
                src="https://www.google.com/maps?q=110+Mountain+View+Ave,+Pearl+River,+NY+10965&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form or success card */}
          {status === "ok" ? (
            <div className="bg-charcoal text-cream rounded-3xl p-10 md:p-12 shadow-luxe flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-charcoal" strokeWidth={3} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-gradient-gold mb-4">
                We got your message!
              </h3>
              <p className="text-cream/80 leading-relaxed max-w-md mb-6">
                Colette will be in touch within a few hours. In the meantime, feel free to call or text us anytime.
              </p>
              <a
                href="tel:8455586870"
                className="inline-flex items-center gap-2 bg-gradient-gold text-charcoal font-semibold px-6 py-3 rounded-full shadow-gold hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-4 h-4" /> 845-558-6870
              </a>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-cream/60 text-xs uppercase tracking-widest hover:text-gold transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
          <form
            onSubmit={onSubmit}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-luxe"
          >
            <h3 className="font-display text-3xl text-charcoal mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-gold-deep" /> Send a message
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Your Name</label>
                <input required name="name" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Phone</label>
                <input required name="phone" type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Email</label>
                <input required name="email" type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Dog's Name & Breed</label>
                <input name="dog" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Service of interest</label>
                  <select name="service" defaultValue="" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors">
                    <option value="" disabled>Select a service…</option>
                    <option>Maintenance Groom</option>
                    <option>Restoration Groom</option>
                    <option>Bath & Blowout</option>
                    <option>Puppy Introduction Groom</option>
                    <option>Full Deshed Treatment</option>
                    <option>Nail Trimming</option>
                    <option>One-on-One Session</option>
                    <option>Not sure — please advise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Preferred day/time</label>
                  <select name="preferred" defaultValue="" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors">
                    <option value="" disabled>Preferred day (we're closed Sundays)…</option>
                    <option>Weekday morning (Mon–Sat)</option>
                    <option>Weekday afternoon (Mon–Sat)</option>
                    <option>Saturday morning</option>
                    <option>Saturday afternoon</option>
                    <option>I'm flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">Tell us about your pup</label>
                <textarea required name="message" rows={3} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none" />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-gold text-charcoal font-semibold py-4 rounded-full tracking-wide shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : status === "ok" ? "Sent! We'll be in touch ✨" : "Request Booking"}
              </button>
              <p className="text-center text-xs text-charcoal/60 leading-relaxed">
                We typically reply immediately, if not within a few hours during business hours. Closed Sundays.
              </p>
              {status === "err" && <p className="text-destructive text-sm text-center">Something went wrong. Please call or text us instead.</p>}
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
