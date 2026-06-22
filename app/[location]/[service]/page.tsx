export const runtime = "edge";

import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { humanize } from "@/components/format";
import type { LandingPageContent } from "@/content/types";
import managedIT from "@/content/managedIT";
import itSupportSmallBusiness from "@/content/itSupportSmallBusiness";

type Params = { location: string; service: string };

// Mapea el slug de servicio (URL) al variante de copy A/B.
// Cualquier slug no reconocido cae al variante "managed IT".
const CONTENT_MAP: Record<string, LandingPageContent> = {
  "managed-it-services": managedIT,
  "it-support-small-business": itSupportSmallBusiness,
};

function selectContent(service: string): LandingPageContent {
  return CONTENT_MAP[service] ?? managedIT;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const location = humanize(params.location) ?? "Toronto";
  const service = humanize(params.service) ?? "Managed IT Services";
  return {
    title: `${service} in ${location} | Silverthaw Consulting`,
    description: `Silverthaw Consulting delivers ${service} for ${location} small and medium businesses. One partner, one accountability, worry-free IT.`,
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
