"use client";

import { useSearchParams } from "next/navigation";
import { getStoredAttribution, ATTRIBUTION_PARAMS } from "@/lib/attribution";
import ZohoBookingWidget from "@/components/ZohoBookingWidget";

// V2 control: the known-broken /portal-embed URL (params on it kill desktop submit).
const PORTAL_EMBED_URL =
  "https://bookings.silverthaw.ca/portal-embed#/9508000000527050";

// V1: standard Service/Workspace Booking URL (the ".../#/<slug>" form Zoho's
// prefill docs use). Fill this once obtained from Zoho, OR pass
// ?baseUrl=<url-encoded> to test without editing this file.
const STANDARD_BOOKING_URL = ""; // e.g. "https://bookings.silverthaw.ca/#/<slug>"

// Mirror of the widget's URL-building, only so we can DISPLAY the final src here.
function computeFinalUrl(baseUrl: string, searchParams: URLSearchParams): string {
  const attribution: Record<string, string> = { ...getStoredAttribution() };
  for (const key of ATTRIBUTION_PARAMS) {
    const value = searchParams.get(key);
    if (value) attribution[key] = value;
  }
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(attribution)) if (v) params.set(k, v);
  const qs = params.toString();
  if (!qs) return baseUrl;
  return baseUrl + (baseUrl.includes("?") ? "&" : "?") + qs;
}

export default function BookingTest() {
  const searchParams = useSearchParams();
  const variant = (searchParams.get("variant") ?? "v2").toLowerCase();
  const override = searchParams.get("baseUrl");

  let baseUrl = "";
  let label = "";
  if (override) {
    baseUrl = override;
    label = "custom (?baseUrl override)";
  } else if (variant === "v1") {
    baseUrl = STANDARD_BOOKING_URL;
    label = "V1 — standard booking URL (Zoho official prefill format)";
  } else {
    baseUrl = PORTAL_EMBED_URL;
    label = "V2 — portal-embed control (known broken on desktop)";
  }

  const finalUrl = baseUrl ? computeFinalUrl(baseUrl, searchParams) : "";

  const box: React.CSSProperties = {
    background: "#f4f4f5",
    borderRadius: 8,
    padding: 12,
    fontSize: 12,
    margin: "12px 0",
    wordBreak: "break-all",
  };

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 20, fontWeight: 700 }}>Zoho Bookings attribution test</h1>
      <p style={{ fontSize: 13, color: "#555" }}>
        Temporary, unlisted diagnostic page. Add attribution to the URL, e.g.{" "}
        <code>?variant=v1&amp;gclid=TEST123&amp;utm_source=google&amp;utm_medium=cpc</code>. Switch
        variants with <code>?variant=v1</code> / <code>?variant=v2</code>, or override the base
        with <code>?baseUrl=&lt;url-encoded&gt;</code>.
      </p>

      <div style={box}>
        <div><strong>Variant:</strong> {label}</div>
        <div style={{ marginTop: 6 }}><strong>Base URL:</strong> {baseUrl || "(not set)"}</div>
        <div style={{ marginTop: 6 }}><strong>Final iframe src:</strong> {finalUrl || "(n/a)"}</div>
      </div>

      {baseUrl ? (
        <ZohoBookingWidget baseUrl={baseUrl} />
      ) : (
        <p style={{ color: "#b91c1c", fontSize: 14 }}>
          V1 base URL not set. Fill <code>STANDARD_BOOKING_URL</code> in{" "}
          <code>app/booking-test/BookingTest.tsx</code>, or pass{" "}
          <code>?baseUrl=&lt;url-encoded standard booking URL&gt;</code>.
        </p>
      )}
    </main>
  );
}
