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
      { title: "Dog Grooming Pearl River NY | Ketsie's Dog Grooming" },
      {
        name: "description",
        content:
          "Ketsie's Dog Grooming — Pearl River, NY's boutique one-on-one grooming studio. Founded by Colette. 67+ five-star reviews. Call or text 845-558-6870.",
      },
      {
        name: "keywords",
        content:
          "dog grooming Pearl River NY, dog groomer Pearl River, Ketsies dog grooming, Colette groomer, boutique dog grooming Rockland County",
      },
      { property: "og:title", content: "Ketsie's Dog Grooming | Pearl River, NY" },
      {
        property: "og:description",
        content: "One dog. One groomer. One unforgettable experience. 67+ five-star reviews in Pearl River, NY.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.ketsiesdoggrooming.com" },
      { name: "twitter:title", content: "Ketsie's Dog Grooming | Pearl River, NY" },
      {
        name: "twitter:description",
        content: "One dog. One groomer. One unforgettable experience. 67+ five-star reviews in Pearl River, NY.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.ketsiesdoggrooming.com" },
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
      <FAQ />
      <Contact />
      <Footer />
      <StickyCallBar />
    </main>
  );
}
