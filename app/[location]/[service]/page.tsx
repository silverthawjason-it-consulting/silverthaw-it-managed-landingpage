import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { humanize } from "@/components/format";

type Params = { location: string; service: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  const location = humanize(params.location) ?? "Toronto";
  const service = humanize(params.service) ?? "Managed IT Services";
  return {
    title: `${service} in ${location} — Silverthaw Consulting`,
    description: `Silverthaw Consulting delivers ${service} for ${location} small and medium businesses. One partner, one accountability, worry-free IT.`,
  };
}

export default function LocationServicePage({ params }: { params: Params }) {
  return <LandingPage location={humanize(params.location)} />;
}
