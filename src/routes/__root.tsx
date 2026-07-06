import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ketsie's Dog Grooming | Pearl River, NY" },
      {
        name: "description",
        content:
          "Boutique one-on-one dog grooming in Pearl River, NY. Founded by Colette. Call or text 845-558-6870.",
      },
      { name: "author", content: "Ketsie's Dog Grooming" },
      { property: "og:title", content: "Ketsie's Dog Grooming | Pearl River, NY" },
      {
        property: "og:description",
        content:
          "Boutique one-on-one dog grooming in Pearl River, NY. Founded by Colette. Call or text 845-558-6870.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ketsie's Dog Grooming" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Ketsie's Dog Grooming",
          description:
            "Boutique one-on-one dog grooming studio in Pearl River, NY founded by Colette.",
          url: "https://www.ketsiesdoggrooming.com",
          telephone: "+1-845-558-6870",
          founder: { "@type": "Person", name: "Colette" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pearl River",
            addressRegion: "NY",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.059,
            longitude: -74.0218,
          },
          priceRange: "$$",
          knowsAbout: [
            "dog grooming",
            "puppy grooming",
            "breed-specific cuts",
            "de-shedding",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
