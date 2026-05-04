import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a groom typically take?",
    a: "A standard grooming session usually takes between 60–90 minutes, depending on your dog's breed, temperament, coat condition, and whether matting is present.",
  },
  {
    q: "What are your operating hours?",
    a: "We are open Monday through Saturday, 7:00 AM – 4:00 PM. Closed Sundays.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Just bring yourself, your pup, and a leash if needed. We'll take care of the rest.",
  },
  {
    q: "How does one-on-one grooming work?",
    a: "One-on-one grooming is available by appointment only. This option is ideal for dogs who are nervous, senior, anxious, or need extra attention. These appointments ensure your dog is the only pet in the studio during their session and are typically scheduled first thing in the morning. Please note: one-on-one grooming is available at an additional cost. Give us a call to book.",
  },
  {
    q: "Do you use cages?",
    a: "Yes — but only when appropriate and always with your dog's comfort in mind. We may use cages during the drying process, as many dogs feel more relaxed in a calm, enclosed environment. If your dog is not comfortable in a cage, we will not use one. If you prefer your dog not be crated, just let us know — we will always accommodate. Every dog is different. Some feel safe in a crate, while others do better without. We tailor our approach to what works best for your pet.",
  },
  {
    q: "Do you accept reactive or anxious dogs?",
    a: "Yes, absolutely. We understand that a negative past experience can affect a dog's behavior during grooming. We ask that owners stay for the first few minutes of the appointment to help their dog settle in. Once your pet is comfortable, we'll continue the session with care and patience. If a dog is having a particularly difficult time, we prioritize safety and comfort above all else and may suggest one-on-one appointments or shorter sessions.",
  },
  {
    q: "What if my dog is extremely stressed during grooming?",
    a: "We strive to provide a safe and comfortable experience for every pet. If a dog shows significant signs of anxiety or reactivity, we may recommend consulting with your veterinarian about appropriate calming support (such as mild, vet-prescribed options like Trazodone) prior to future appointments.",
  },
  {
    q: "What is your 6–8 week maintenance policy?",
    a: "Our Full Service Maintenance Groom is designed to keep your dog clean, comfortable, and mat-free on a consistent schedule of every 6–8 weeks. Staying on a regular grooming routine keeps the coat healthy, soft, and tangle-free; prevents painful matting and reduces the need for shorter cuts; helps your dog become more comfortable and relaxed with grooming over time; and maintains overall hygiene including nails, ears, and teeth. Clients who stay on a 6–8 week schedule also receive added perks: FREE nail trims between visits, priority scheduling for future appointments, and a consistently well-managed coat that's easier to manage at home. Regular grooming isn't just about appearance — it's an important part of your dog's overall health and comfort.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold-deep uppercase tracking-[0.4em] text-xs mb-5">Good to Know</p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
            Frequently asked <em className="text-gold-deep not-italic">questions</em>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-8" />
        </div>
        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-luxe transition-shadow"
              >
                <AccordionTrigger className="font-display text-xl md:text-2xl text-charcoal text-left hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/75 leading-relaxed text-[15px] pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
