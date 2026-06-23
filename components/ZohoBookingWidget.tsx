"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { getStoredAttribution, ATTRIBUTION_PARAMS } from "@/lib/attribution";

// embed.js attaches this global once loaded.
declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (config: {
        url: string;
        parent: string;
        height?: string;
      }) => void;
    };
  }
}

const EMBED_SCRIPT_SRC = "https://bookings.nimbuspop.com/assets/embed.js";

type ZohoBookingWidgetProps = {
  /** Absolute Zoho Bookings embed URL, e.g. "https://info-silverthaw.zohobookings.ca/portal-embed#/SERVICE_ID" */
  baseUrl: string;
};

function ZohoBookingWidgetInner({ baseUrl }: ZohoBookingWidgetProps) {
  const searchParams = useSearchParams();
  const [finalUrl, setFinalUrl] = useState<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const initializedRef = useRef(false);

  // 1. Build the final URL: stored attribution merged with whatever the
  //    CURRENT URL carries (URL wins — freshest click). Reading the URL
  //    directly here, not just localStorage, avoids a cross-component
  //    effect-ordering race with UtmTracker (deferred behind its own
  //    Suspense boundary, so its write can land in a later React commit).
  useEffect(() => {
    const attribution = { ...getStoredAttribution() };
    for (const key of ATTRIBUTION_PARAMS) {
      const value = searchParams.get(key);
      if (value) attribution[key] = value;
    }

    const url = new URL(baseUrl);
    for (const [key, value] of Object.entries(attribution)) {
      if (value) url.searchParams.set(key, value);
    }
    setFinalUrl(url.toString());
  }, [baseUrl, searchParams]);

  // 2. Mount the Zoho widget only once BOTH the embed script is ready and
  //    the URL is built. Guarded so it embeds exactly once per mount.
  useEffect(() => {
    if (initializedRef.current) return;
    if (!scriptReady || !finalUrl) return;
    if (typeof window === "undefined" || !window.Bookings) return;

    window.Bookings.inlineEmbed({
      url: finalUrl,
      parent: "#inline-container",
      height: "600px",
    });
    initializedRef.current = true;
  }, [scriptReady, finalUrl]);

  return (
    <>
      <Script
        src={EMBED_SCRIPT_SRC}
        strategy="afterInteractive"
        // onReady (not onLoad) so this also fires on a client-side remount
        // when the script is already cached — otherwise a return visit via
        // client navigation would never re-embed.
        onReady={() => setScriptReady(true)}
      />
      <div id="inline-container" className="mx-auto w-full max-w-2xl" />
    </>
  );
}

/**
 * Embeds a Zoho Bookings calendar via Zoho's `Bookings.inlineEmbed` script
 * method (rather than a raw <iframe>), mounting it into #inline-container
 * for better height/responsiveness control. Any stored attribution
 * (gclid/utm_*) from lib/attribution.ts is appended to the embed URL as
 * query params — Zoho's domain can't read our localStorage directly.
 *
 * The internal <Suspense> (required for useSearchParams on a static page)
 * is self-contained, so callers can drop this in with no extra wrapping.
 */
export default function ZohoBookingWidget({ baseUrl }: ZohoBookingWidgetProps) {
  return (
    <Suspense fallback={null}>
      <ZohoBookingWidgetInner baseUrl={baseUrl} />
    </Suspense>
  );
}
