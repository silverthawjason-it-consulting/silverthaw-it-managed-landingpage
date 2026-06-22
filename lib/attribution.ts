/**
 * Lead-attribution params. Captured by UtmTracker on page load, read back
 * by the lead form at submit time. sessionStorage only — cleared when the
 * tab closes, never sent to the server until form submission.
 */
export const ATTRIBUTION_PARAMS = [
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];

/** Reads any previously captured attribution values out of sessionStorage. */
export function getStoredAttribution(): Partial<Record<AttributionParam, string>> {
  const result: Partial<Record<AttributionParam, string>> = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const value = sessionStorage.getItem(key);
    if (value) result[key] = value;
  }
  return result;
}
