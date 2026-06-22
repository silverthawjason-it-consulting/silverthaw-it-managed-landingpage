/**
 * Central SEO constants and helpers — Edge Runtime safe (no fs / Node APIs).
 *
 * SITE_URL must be overridden via NEXT_PUBLIC_SITE_URL in Cloudflare Pages
 * (and local .env) before going live. The fallback below is a placeholder.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.silverthaw.com";

export const SITE_NAME = "Silverthaw Consulting";

/** Builds an absolute canonical URL from a clean, query-free path. */
export function buildCanonical(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return new URL(clean, SITE_URL).toString();
}

export const DEFAULT_OG_IMAGE = {
  url: "/Silver-thaw-logo.jpg",
  width: 1200,
  height: 630,
  alt: "Silverthaw Consulting",
};

/**
 * ProfessionalService JSON-LD — sitewide business identity.
 * Schema.org has no IT-specific type; ProfessionalService is the
 * standard fit for a managed IT / IT support business.
 */
export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    legalName: "Silverthaw Consulting Ltd.",
    url: SITE_URL,
    logo: buildCanonical("/Silver-thaw-logo.jpg"),
    image: buildCanonical("/Silver-thaw-logo.jpg"),
    email: "info@silverthaw.ca",
    description:
      "Silverthaw Consulting is a managed IT services and IT support provider for small and medium businesses across Toronto, Ontario, and the Greater Toronto Area.",
    areaServed: [
      { "@type": "City", name: "Toronto" },
      { "@type": "AdministrativeArea", name: "Ontario" },
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [],
  };
}
