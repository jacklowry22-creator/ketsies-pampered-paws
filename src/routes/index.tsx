import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ReviewMarquee } from "@/components/ReviewMarquee";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Safety } from "@/components/Safety";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ketsie's Dog Grooming — Boutique 1:1 Grooming in Pearl River, NY" },
      {
        name: "description",
        content:
          "Boutique one-on-one dog grooming in Pearl River, NY. Cage-free studio, natural products, handmade bandanas. Call 845-558-6870.",
      },
      { property: "og:title", content: "Ketsie's Dog Grooming — Pearl River, NY" },
      { property: "og:description", content: "A boutique resort experience for your dog. One groomer. One dog. Always." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream text-charcoal overflow-x-hidden">
      <Nav />
      <Hero />
      <ReviewMarquee />
      <About />
      <WhyUs />
      <Safety />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
