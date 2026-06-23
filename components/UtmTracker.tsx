"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

/**
 * Captures ad click-id / UTM params on page load and persists them to
 * localStorage (30-day TTL, see lib/attribution.ts), since Next.js
 * navigation drops query params between routes. Renders nothing — must
 * be mounted inside a <Suspense> boundary (useSearchParams forces the
 * boundary to bail out of static rendering).
 */
export default function UtmTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    captureAttribution(searchParams);
  }, [searchParams]);

  return null;
}
