"use client";

import { getStoredAttribution } from "@/lib/attribution";

/**
 * Standalone (non-embed) Zoho Bookings URL for the specific "Free 30 Minute
 * IT Consultation" service (id 9508000000527050) — NOT the workspace-level
 * URL, so it skips Zoho's service-picker step and opens straight to the
 * calendar. Opened TOP-LEVEL in a new tab — NOT in an iframe. This is the
 * only way to carry gclid/utm_* attribution into the booking record: the
 * standalone URL both prefills (`?Field=value` after the hash) and submits,
 * but it sends `X-Frame-Options: SAMEORIGIN` so it can't be embedded. The
 * framable `/portal-embed` URL is the opposite — embeds fine, but appending
 * params to it silently kills the desktop submit button. See memory:
 * zoho-bookings-setup / zoho-bookings-plain-iframe.
 */
const BOOKING_BASE_URL =
  "https://bookings.silverthaw.ca/9508000000527050/#/9508000000527050";

/**
 * Builds the booking href with any stored attribution appended as query params
 * AFTER the hash (Zoho's prefill format). The param KEYS must match the field
 * names configured on the Zoho booking form for the values to land in the CRM
 * record — otherwise they're carried but ignored.
 *
 * Read fresh on click (not baked into state at mount) so it isn't a race
 * against UtmTracker, a sibling component that writes this same localStorage
 * key independently — by the time a user actually clicks, UtmTracker has long
 * since finished, but effect mount order between the two isn't guaranteed.
 */
function buildHref(): string {
  const attribution = getStoredAttribution();
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(attribution)) {
    if (value) params.set(key, value);
  }
  const query = params.toString();
  return query ? `${BOOKING_BASE_URL}?${query}` : BOOKING_BASE_URL;
}

export default function BookingButton() {
  return (
    <a
      href={BOOKING_BASE_URL}
      onClick={(e) => {
        e.currentTarget.href = buildHref();
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-full items-center justify-center gap-[9px] whitespace-nowrap rounded-full border-2 border-navy bg-navy px-[26px] py-[14px] text-[14px] font-semibold text-white transition-all duration-[.22s] hover:bg-transparent hover:text-navy"
    >
      Choose a Time
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.18] transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden
        >
          <path
            d="M1 9L9 1M9 1H2M9 1V8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
