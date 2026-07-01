# Silverthaw Managed-IT Landing Page — Handoff

_Last updated: 2026-06-28_

## 1. What this is

Marketing/lead-gen landing site for **Silverthaw Consulting** (managed IT services & IT support, Toronto/Ontario SMBs). Single codebase, two keyword variants, destination for paid search campaigns.

- **Repo:** `silverthawjason-it-consulting/silverthaw-it-managed-landingpage` (GitHub)
- **Production domain:** `https://managed-it.silverthaw.ca`
- **Hosting:** Cloudflare Pages (migrated from Vercel)

## 2. Stack

| | |
|---|---|
| Framework | Next.js 14.2.35 — **App Router** |
| Language | TypeScript 5.5 (strict) |
| UI | React 18.3, Tailwind CSS 3.4 (theme tokens in `tailwind.config.ts`) |
| Fonts | Playfair Display (serif) + Open Sans, via `next/font` |
| Hosting | Cloudflare Pages, Edge runtime on the dynamic route |
| Analytics | Google Tag Manager via `@next/third-parties` |

## 3. Architecture

**Content layer (the core pattern).** All keyword-driven copy lives in `content/`, not in components. One shared contract, two variant objects:
- `content/types.ts` — `LandingPageContent` type contract
- `content/managedIT.ts` — Variant A ("Managed IT Services")
- `content/itSupportSmallBusiness.ts` — Variant B ("IT Support for Small Business")

Components (`components/*.tsx`) are layout/style only and receive content via props (`LandingPage.tsx` threads slices to `Hero`, `Services`, `Advantage`, `Faq`). Adding a new variant = one new `content/*.ts` file + one route folder; **no component changes**.

**Routing:**
| URL | Behavior |
|---|---|
| `/` | 308 redirect → `/managed-it-services` (in `next.config.mjs`) |
| `/managed-it-services` | Variant A (static) |
| `/it-support-small-business` | Variant B (static) |
| `/[location]/[service]` | Edge-runtime dynamic; variant chosen by `service` slug; canonical **collapses** to one of the two clean URLs so `?gclid=`/`?utm_*` and unknown slugs never create duplicate-content pages |

## 4. Accomplished (newest → oldest, by commit)

- `efd3706` — Rewrote the managed-IT **Services** section: new header, 6 cards reordered/renamed, added per-card **Certifications & Expertise** field (optional on the type; rendered in `Services.tsx`). _Variant B Services intentionally left on the old structure._
- `54660e0` — Replaced the Contact **lead form with a Zoho Bookings calendar** (`ZohoBookingWidget`, `inlineEmbed`). Appears on every page via the shared `Contact` section.
- `b92272e` — **Attribution tracking → localStorage with 30-day TTL** (`lib/attribution.ts`), hardened against orphaned/corrupt timestamps, dedup on identical revisits, TTL enforced on both read and write.
- `977c257` — Reordered/renamed the "Startup IT Foundation" card → "IT Setup & Support for New Businesses"; aligned the IT-support hero subtitle.
- `c875e2b` — Updated managed-IT meta title/description; swapped hero subheadline/body order.
- `f1ff68f` — Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- `3ef7894` — **Hero photo lock mechanism** (deliberate, version-controlled image instead of an accidental deterministic one).
- `77ae993` — **Technical SEO foundation**: sitemap, robots, canonical tags, OpenGraph/Twitter, `ProfessionalService` JSON-LD, GTM mount; plus the **UTM/click-id attribution tracker**.
- `1519e65` — Edge runtime on `/[location]/[service]` (Cloudflare requirement).
- `8b442da` — Three-tier hero (headline / subheadline / body).
- `534afd8` — De-AI copy pass (em-dash asides → natural punctuation).
- `af20715` — A/B keyword variants via the shared content layer + clean keyword URLs.

## 5. Key systems & how they work

**Attribution capture** (`lib/attribution.ts`, `components/UtmTracker.tsx`):
`UtmTracker` (mounted in `app/layout.tsx` inside a `Suspense` boundary) captures `gclid`/`utm_*` from the URL into `localStorage` with a 30-day TTL for page-level analytics (GA4/GTM). NOTE: attribution is **not** forwarded into the Zoho booking record — appending params to the embed URL breaks the desktop submit button, and the standard prefill URL (which accepts params) can't be iframed (`X-Frame-Options: SAMEORIGIN`). See the Zoho notes in project memory.

**Zoho booking widget** (`components/Contact.tsx`):
A plain `<iframe>` pointing at the `ZOHO_BOOKING_URL` constant in `Contact.tsx` (the `/portal-embed` route — the only framable one). Do NOT switch to Zoho's `Bookings.inlineEmbed` script and do NOT append query params to the URL — either one silently kills the desktop submit button.

**Hero photo lock** (`lib/heroPhoto.ts`, `scripts/hero-photo.mjs`):
`LOCKED_HERO_PHOTO_ID` pins the hero Unsplash photo (currently `CPs2X8JYmS8`). Terminal workflow:
```
npm run hero:reroll        # preview a new random candidate
npm run hero:lock -- <id>  # pin a specific photo
npm run hero:unlock        # resume random rotation each build
```

**SEO** (`lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `components/StructuredData.tsx`):
`metadataBase` + per-page canonical/OG from `SITE_URL`. Sitemap lists only the two clean URLs; robots disallows `/*/*`. JSON-LD is `ProfessionalService` with Toronto/Ontario/GTA `areaServed`.

## 6. Common commands

```
npm run dev      # local dev w/ hot reload (http://localhost:3000)
npm run build    # production build (catches what dev won't)
npm run start    # serve the production build
npm run lint     # eslint
```
> Windows note: `next dev` and `next build` fight over `.next` if run together — stop the dev server before building, or you'll see a spurious `/_document` error.

## 7. Outstanding / needs attention

1. **GTM container ID is still a placeholder.** `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` in `.env` and `.env.example`. GTM won't fire until a real ID is set **both** locally and in **Cloudflare Pages → Settings → Environment variables** (Production + Preview).
2. **Confirm Cloudflare env vars.** `NEXT_PUBLIC_SITE_URL` (real domain) and `UNSPLASH_ACCESS_KEY` must be set in Cloudflare (the local `.env` is gitignored and does not ship). User reported these were added — worth verifying after the next deploy.
3. **Variant B Services section is stale.** `/it-support-small-business` still shows the old card structure (old order, no certifications). Intentional for now; align with `managedIT.ts` when ready.
4. **Zoho "back" navigation.** After picking a date, users can't step back to change it within the embedded flow — this is a cross-origin iframe limitation; a true back button can only come from Zoho's Booking Page Settings (theme). A "Choose a different time / start over" reset button was scoped but **not built** — available if wanted.
5. **No lead webhook needed anymore** — the form was removed; Zoho handles capture. (Old `// TODO: webhook` is gone with the form.)

## 8. Untracked files (intentionally not committed)

- `IT services_support for small businesses.xlsx` — working data file
- `Div_ Our Services.md` — copy brief for the Services rewrite (kept out of the repo; add it if you want it tracked)

## 9. Image/Unsplash note

`UnsplashImage` is server-side only; key in `UNSPLASH_ACCESS_KEY` (verified working). The static pages bake the hero photo at build time (now locked). The dynamic `/[location]/[service]` route fetches per request — mind Unsplash's 50 req/hr free-tier cap under heavy ad traffic (fails gracefully: hero image just hides).
