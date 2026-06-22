export const runtime = "edge";

import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { humanize } from "@/components/format";
import type { LandingPageContent } from "@/content/types";
import managedIT from "@/content/managedIT";
import itSupportSmallBusiness from "@/content/itSupportSmallBusiness";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

type Params = { location: string; service: string };

// Mapea el slug de servicio (URL) al variante de copy A/B + su URL canónica
// limpia. Cualquier slug no reconocido cae al variante "managed IT".
const CONTENT_MAP: Record<string, { content: LandingPageContent; path: string }> = {
  "managed-it-services": { content: managedIT, path: "/managed-it-services" },
  "it-support-small-business": {
    content: itSupportSmallBusiness,
    path: "/it-support-small-business",
  },
};
const DEFAULT_ENTRY = CONTENT_MAP["managed-it-services"];

function resolveEntry(service: string) {
  return CONTENT_MAP[service] ?? DEFAULT_ENTRY;
}

function selectContent(service: string): LandingPageContent {
  return resolveEntry(service).content;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const location = humanize(params.location) ?? "Toronto";
  const service = humanize(params.service) ?? "Managed IT Services";
  const title = `${service} in ${location} | Silverthaw Consulting`;
  const description = `Silverthaw Consulting delivers ${service} for ${location} small and medium businesses. One partner, one accountability, worry-free IT.`;

  // Canonical always collapses to one of the two clean, indexable pages —
  // never to this slug, and never with query/tracking params (searchParams
  // is never read here, so gclid/utm_* are excluded by omission).
  const canonicalPath = resolveEntry(params.service).path;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function LocationServicePage({ params }: { params: Params }) {
  return (
    <LandingPage
      location={humanize(params.location)}
      content={selectContent(params.service)}
    />
  );
}
