/**
 * Lead-attribution params. Captured by UtmTracker on page load, read back
 * by the lead form at submit time. localStorage with a 30-day TTL — long
 * enough to survive a multi-week B2B sales cycle, short enough that a
 * lead isn't misattributed to a months-old ad click.
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

const TIMESTAMP_KEY = "attribution_timestamp";
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

function isExpired(): boolean {
  const ts = localStorage.getItem(TIMESTAMP_KEY);
  const hasStoredData = ATTRIBUTION_PARAMS.some((key) => localStorage.getItem(key) !== null);

  // Orphaned tracking data with no timestamp (corruption, partial write,
  // manual tampering) — treat as expired rather than letting it persist
  // forever.
  if (hasStoredData && !ts) return true;
  if (!ts) return false; // genuinely empty storage

  const parsedTs = Number(ts);
  if (isNaN(parsedTs)) return true; // corrupted timestamp — treat as expired

  return Date.now() - parsedTs > TTL_MS;
}

export function clearStoredAttribution(): void {
  if (typeof window === "undefined") return;
  for (const key of ATTRIBUTION_PARAMS) localStorage.removeItem(key);
  localStorage.removeItem(TIMESTAMP_KEY);
}

/**
 * Call on every page load. Expires stale/orphaned/corrupted data, then —
 * if the current URL carries tracked params that differ from what's
 * already stored — wholesale-replaces the bundle and resets the
 * timestamp. Re-firing with identical params (re-renders, a revisited
 * bookmarked tracked URL) is a no-op so the 30-day clock isn't reset by
 * anything other than a genuinely new click.
 */
export function captureAttribution(searchParams: URLSearchParams): void {
  if (typeof window === "undefined") return;
  if (isExpired()) clearStoredAttribution();

  const found: Partial<Record<AttributionParam, string>> = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const value = searchParams.get(key);
    if (value) found[key] = value;
  }
  if (Object.keys(found).length === 0) return;

  const storedKeys = ATTRIBUTION_PARAMS.filter((key) => localStorage.getItem(key) !== null);
  const foundKeys = Object.keys(found) as AttributionParam[];
  const isIdenticalClick =
    storedKeys.length === foundKeys.length &&
    foundKeys.every((key) => localStorage.getItem(key) === found[key]);
  if (isIdenticalClick) return;

  clearStoredAttribution(); // full reset — never mix fields from two different clicks
  for (const key of ATTRIBUTION_PARAMS) {
    if (found[key]) localStorage.setItem(key, found[key]!);
  }
  localStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
}

/**
 * Reads currently valid (non-expired) stored attribution. Same name and
 * return shape as before — Contact.tsx needs no changes.
 */
export function getStoredAttribution(): Partial<Record<AttributionParam, string>> {
  if (typeof window === "undefined") return {};
  if (isExpired()) {
    clearStoredAttribution();
    return {};
  }
  const result: Partial<Record<AttributionParam, string>> = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const value = localStorage.getItem(key);
    if (value) result[key] = value;
  }
  return result;
}
