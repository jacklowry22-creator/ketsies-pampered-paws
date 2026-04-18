import { Reveal } from "@/components/Reveal";
import { Check, Phone } from "lucide-react";

const services = [
  {
    name: "The Maintenance Groom",
    tag: "Full Service • Every 6–8 weeks",
    featured: true,
    desc: "Our comprehensive package to keep your dog clean, comfortable, and mat-free.",
    items: [
      "Full Bath & Shampoo (natural ingredients selected for coat type)",
      "Conditioner Treatment — we DO NOT skip this step! Premium conditioners that leave the coat soft as butter.",
      "Full Hair Cut & Styling",
      "Nail Clipping & Grinding",
      "Full Ear Cleaning & Plucking",
      "Teeth Cleaning with enzymatic toothpaste — includes a personalized toothbrush to take home!",
      "Paw Pad Treatment with nourishing paw butter balm",
      "Eligibility for FREE Nail Trims between visits",
    ],
  },
  {
    name: "The Restoration Groom",
    tag: "For dogs 9+ weeks overdue",
    desc: "When a dog's coat is overgrown, it requires extra time, extra product, and takes a heavier toll on our equipment.",
    items: [
      "Everything included in the Maintenance Groom",
      "Allocated extra time for pre-shave work",
      "Thorough dematting (if humane)",
    ],
  },
  {
    name: "Bath & Blowout",
    tag: "Maintenance between full grooms",
    desc: "Perfect for keeping your dog looking sharp and smelling fresh between full grooms.",
    items: [
      "Refreshing Bath & Conditioner Treatment",
      "Gentle Blowout & Brush-out",
      "Nail Trimming Included",
    ],
  },
  {
    name: "Puppy Introduction Groom",
    tag: "Pups up to 4 months",
    desc: "Crucial for your new family member — a gentle first grooming experience.",
    items: [
      "Tearless bath & shampoo formula safe for eyes",
      "Hand-dry for a calm experience",
      "Light trims around face and paws",
      "Builds a positive lifelong relationship with grooming",
    ],
  },
  {
    name: "Full Deshed Treatment",
    tag: "Highly recommended for double-coated breeds",
    desc: "A specialized process using specific tools and techniques to significantly reduce shedding. Recommended seasonally (twice a year) or for heavy shedders.",
    items: [],
  },
  {
    name: "Nail Trimming (Standalone)",
    tag: "Quick & stress-free",
    desc: "Quick and stress-free nail maintenance.",
    items: [
      "Small Dogs — $20",
      "Large Dogs — $25",
      "FREE for clients on a recurring 6–8 week schedule",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-charcoal text-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-5">Services & Pricing</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Pricing built around <em className="text-gradient-gold not-italic">your dog</em>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-8" />
        </div>

        {/* Pricing intro */}
        <div className="grid md:grid-cols-3 gap-5 mb-16 max-w-5xl mx-auto">
          {[
            { t: "Send a Photo", b: "Text a clear photo of your dog to 845-558-6870 for an estimate." },
            { t: "Maintenance Rate", b: "Our standard low rates apply to dogs on a recurring 6–8 week schedule." },
            { t: "Restoration Surcharge", b: "Dogs overdue by 9+ weeks require extra time/product and incur an additional fee." },
          ].map((p) => (
            <div key={p.t} className="border border-gold/20 rounded-2xl p-6 bg-cream/[0.02]">
              <p className="text-gold uppercase tracking-widest text-xs mb-3">{p.t}</p>
              <p className="text-cream/80 text-sm leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => {
            return (
              <Reveal
                key={s.name}
                className={`relative rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:-translate-y-1 ${
                  s.featured
                    ? "bg-gradient-gold text-charcoal border-gold md:col-span-2 shadow-gold"
                    : "bg-cream/[0.03] border-gold/15 hover:border-gold/40"
                }`}
              >
                {s.featured && (
                  <span className="absolute top-6 right-6 bg-charcoal text-gold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className={`uppercase tracking-widest text-xs mb-3 ${s.featured ? "text-charcoal/70" : "text-gold"}`}>
                  {s.tag}
                </p>
                <h3 className={`font-display text-3xl md:text-4xl mb-4 ${s.featured ? "text-charcoal" : "text-cream"}`}>
                  {s.name}
                </h3>
                <p className={`mb-6 leading-relaxed ${s.featured ? "text-charcoal/80" : "text-cream/70"}`}>
                  {s.desc}
                </p>
                {s.items.length > 0 && (
                  <ul className="space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm leading-relaxed">
                        <Check className={`w-4 h-4 mt-1 shrink-0 ${s.featured ? "text-charcoal" : "text-gold"}`} />
                        <span className={s.featured ? "text-charcoal/90" : "text-cream/85"}>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="sms:8455586870"
            className="inline-flex items-center gap-3 bg-gradient-gold text-charcoal px-8 py-4 rounded-full font-semibold tracking-wide shadow-gold hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" /> Text a Photo for Your Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
