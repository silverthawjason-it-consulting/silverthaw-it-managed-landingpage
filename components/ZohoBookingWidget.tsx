"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getStoredAttribution, ATTRIBUTION_PARAMS } from "@/lib/attribution";

type ZohoBookingWidgetProps = {
  /** Absolute Zoho Bookings embed URL, e.g. "https://bookings.silverthaw.ca/portal-embed#/SERVICE_ID" */
  baseUrl: string;
};

// Placeholder occupies the iframe's height so there's no layout shift between
// the initial (attribution-less) render and the real iframe mounting.
function Placeholder() {
  return <div className="mx-auto h-[600px] w-full max-w-2xl" aria-hidden />;
}

function ZohoBookingWidgetInner({ baseUrl }: ZohoBookingWidgetProps) {
  const searchParams = useSearchParams();
  const [finalUrl, setFinalUrl] = useState<string | null>(null);

  // Build the iframe src: stored attribution merged with whatever the CURRENT
  // URL carries (URL wins — freshest click). Reading the URL directly here, not
  // just localStorage, avoids a cross-component effect-ordering race with
  // UtmTracker (deferred behind its own Suspense boundary).
  useEffect(() => {
    const attribution = { ...getStoredAttribution() };
    for (const key of ATTRIBUTION_PARAMS) {
      const value = searchParams.get(key);
      if (value) attribution[key] = value;
    }

    // Build the query string with URLSearchParams (handles encoding) but append
    // it MANUALLY to the very end of baseUrl. Zoho Bookings is a hash-routed
    // SPA — anything before the "#" is ignored by its router, and its CRM
    // attribution capture reads the params from after the hash. new URL() would
    // serialize them before the hash, so we can't use it here.
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(attribution)) {
      if (value) params.set(key, value);
    }
    const queryString = params.toString();

    if (!queryString) {
      setFinalUrl(baseUrl);
      return;
    }

    const separator = baseUrl.includes("?") ? "&" : "?";
    setFinalUrl(baseUrl + separator + queryString);
  }, [baseUrl, searchParams]);

  // Render the iframe only once the URL (with any attribution) is built, so
  // Zoho loads exactly once with the final src rather than loading the bare
  // baseUrl first and reloading when the params land.
  if (!finalUrl) return <Placeholder />;

  return (
    <iframe
      src={finalUrl}
      title="Book a free IT consultation with Silverthaw"
      allowFullScreen
      className="mx-auto block w-full max-w-2xl border-0"
      style={{ height: "600px" }}
    />
  );
}

/**
 * Embeds a Zoho Bookings calendar as a plain <iframe> (NOT Zoho's
 * `Bookings.inlineEmbed` script — that script's injected iframe renders fine
 * but its submit button is dead on desktop; a plain iframe with the same URL
 * works). Any stored attribution (gclid/utm_*) from lib/attribution.ts is
 * appended to the embed URL as query params after the hash so Zoho can capture
 * it into the booking record / CRM.
 *
 * The internal <Suspense> (required for useSearchParams on a static page) is
 * self-contained, so callers can drop this in with no extra wrapping.
 */
export default function ZohoBookingWidget({ baseUrl }: ZohoBookingWidgetProps) {
  return (
    <Suspense fallback={<Placeholder />}>
      <ZohoBookingWidgetInner baseUrl={baseUrl} />
    </Suspense>
  );
}
