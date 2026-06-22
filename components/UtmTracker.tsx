"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ATTRIBUTION_PARAMS } from "@/lib/attribution";

/**
 * Captures ad click-id / UTM params on page load and persists them to
 * sessionStorage, since Next.js navigation drops query params between
 * routes. Renders nothing — must be mounted inside a <Suspense> boundary
 * (useSearchParams forces the boundary to bail out of static rendering).
 */
export default function UtmTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    for (const key of ATTRIBUTION_PARAMS) {
      const value = searchParams.get(key);
      if (value) {
        sessionStorage.setItem(key, value);
      }
    }
  }, [searchParams]);

  return null;
}
