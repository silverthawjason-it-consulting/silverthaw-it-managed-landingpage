---
name: verify
description: Build/launch/drive recipe for verifying changes to this Next.js landing page at runtime.
---

# Verifying this repo

## Launch
- `npm run dev` (background) → http://localhost:3000, ready in ~4s. No env vars needed locally (`.env` exists).
- Typecheck if wanted: `npx tsc --noEmit`.

## Surfaces / routes
- `/` and `/managed-it-services` — Page A (content/managedIT.ts)
- `/it-support-small-business` — Page B (content/itSupportSmallBusiness.ts)
- `/<location>/<service>` — dynamic (e.g. `/toronto/managed-it-services`), injects humanized location into the hero
- Service deep links: `#managed-it`, `#it-consulting`, `#cybersecurity`, `#data-backup`, `#it-projects`, `#new-business-it` (same slugs on all pages). `?svc=<slug>` is an equivalent trigger (fallback when the fragment is stripped); the hash wins if both are present.

## Drive (headless browser)
No Playwright in repo. Use `puppeteer-core` installed into the session scratchpad (`npm install puppeteer-core --no-save --prefix <scratchpad>`) with system Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe`, `headless: "new"`.

- Services renders TWICE: mobile card grid (`<lg`, expand/collapse) and desktop vertical tabs (`>=lg`, only active tab's detail rendered). Test both viewports (1440×900 and 390×844).
- Desktop active service: `#services div[class*="lg:grid"] h3` textContent.
- Mobile expanded card: card whose `textContent` includes "Close" — use `textContent`, NOT `innerText` (the toggle is CSS-uppercased to "CLOSE").
- Allow ~1.5s after `networkidle0` for smooth-scroll + the 120ms deep-link timeout to settle.
- Attribution: load with `?gclid=X#slug` and check `localStorage` (keys `gclid`, `utm_*`, `attribution_timestamp`).

## Gotchas
- Content sections use `.reveal` (opacity 0 until IntersectionObserver adds `.in`) — screenshot after settle, not immediately.
- Fixed nav is 70px; anchored targets use `scroll-mt-24`, so a correctly scrolled target sits ~66px from viewport top.
