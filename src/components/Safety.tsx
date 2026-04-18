import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Home, HandHeart, Sparkles } from "lucide-react";

const pledges = [
  {
    icon: ShieldCheck,
    title: "True One-on-One Dedication",
    body: "Colette works on only one dog at a time. While there may be a brief overlap during drop-off/pick-up, your dog's grooming session is exclusively theirs.",
  },
  {
    icon: Home,
    title: "Calm & Controlled Environment",
    body: "Our home-based studio offers a quiet setting. Cages are only used for drying safety or if the dog prefers the security of a crate; otherwise, we offer a cage-free optional environment.",
  },
  {
    icon: HandHeart,
    title: "Gentle Handling Expertise",
    body: "Colette specializes in making even the most nervous or senior dogs feel comfortable through patient and gentle techniques.",
  },
  {
    icon: Sparkles,
    title: "Meticulously Clean Studio",
    body: "Our grooming table and tools are thoroughly cleaned and disinfected after every single grooming session.",
  },
];

export function Safety() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="text-gold-deep uppercase tracking-[0.4em] text-xs mb-5">Our Pledge</p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
            A commitment to <em className="text-gold-deep not-italic">safety & hygiene</em>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-8" />
          <p className="mt-8 max-w-2xl mx-auto text-charcoal/70 leading-relaxed">
            We understand that leaving your beloved dog in someone else's care requires trust. Here's our pledge to ensure a safe, hygienic, and positive experience for every pet at Ketsie's Dog Grooming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pledges.map((p) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} className="flex gap-5 bg-card border border-border rounded-2xl p-7 hover:shadow-luxe transition-shadow">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-charcoal mb-2">{p.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
