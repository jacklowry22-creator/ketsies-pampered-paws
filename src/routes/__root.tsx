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
      { title: "Ketsie's Dog Grooming" },
      { name: "description", content: "Professional dog grooming services tailored to your pet's needs. Open Monday 7am-4pm. Serving your furry friends with care!" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Ketsie's Dog Grooming" },
      { property: "og:description", content: "Professional dog grooming services tailored to your pet's needs. Open Monday 7am-4pm. Serving your furry friends with care!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Ketsie's Dog Grooming" },
      { name: "twitter:description", content: "Professional dog grooming services tailored to your pet's needs. Open Monday 7am-4pm. Serving your furry friends with care!" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56bb3e63-313b-455b-b0a6-c9ee8c4650da/id-preview-2860ecb6--3812769e-bdb1-4010-aaaf-ed8e117536ce.lovable.app-1777912677939.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56bb3e63-313b-455b-b0a6-c9ee8c4650da/id-preview-2860ecb6--3812769e-bdb1-4010-aaaf-ed8e117536ce.lovable.app-1777912677939.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
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
