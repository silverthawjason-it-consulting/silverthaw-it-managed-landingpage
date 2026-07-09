/**
 * Shared content contract for landing-page A/B variants.
 *
 * Each variant (managed-IT, IT-support-small-business, …) exports a
 * `LandingPageContent` object. Components consume slices of it via props,
 * so the same component tree renders any keyword variant without code
 * duplication. Keep every variant structurally identical and roughly the
 * same string lengths so the layout never breaks.
 *
 * The token `{location}` inside hero strings is replaced at render time
 * with the route-injected location (default "Toronto").
 */

// Must stay in sync with the ICONS map in components/Services.tsx
export type IconKey =
  | "rocket"
  | "monitor"
  | "lightbulb"
  | "clipboard"
  | "shield"
  | "database";

export type HeroContent = {
  /** Eyebrow above the headline. May contain the {location} token. */
  eyebrow: string;
  /** Text before the italicised location in the H1. */
  headlinePrefix: string;
  subheadline: string;
  /** Optional smaller supporting line below the subheadline. */
  body?: string;
  primaryCta: string;
  secondaryCta: string;
  socialProofStrong: string;
  socialProofSub: string;
  chip1: { eyebrow: string; title: string };
  chip2: { eyebrow: string; title: string };
};

export type ServiceItem = {
  icon: IconKey;
  /**
   * Stable URL-fragment anchor for deep links (Google Ads sitelinks).
   * Must be identical across A/B variants so one set of `#slug` URLs
   * works on every landing page.
   */
  slug: string;
  name: string;
  summary: string;
  extended: string;
  bullets: string[];
  /** Optional "·"-separated credentials line shown below the bullets. */
  certifications?: string;
};

export type ServicesContent = {
  eyebrow: string;
  /** Heading rendered one <br/>-separated line per array entry. */
  headingLines: string[];
  subheadline: string;
  items: ServiceItem[];
};

export type AdvantageCard = {
  /** \n-separated lines inside the card title. */
  label: string;
  stat: string;
  statLabel: string;
  body: string;
};

export type AdvantageContent = {
  eyebrow: string;
  /** Heading lines; the final line is rendered italic. */
  headingLines: string[];
  subheadline: string;
  cards: AdvantageCard[];
  /** Closing bar: `lead` is normal weight, `em` is italic. */
  closing: { lead: string; em: string };
  closingCta: string;
};

export type FaqItem = { q: string; a: string };

export type FaqContent = {
  eyebrow: string;
  heading: string;
  subheadline: string;
  items: FaqItem[];
};

export type LandingPageContent = {
  meta: { title: string; description: string };
  hero: HeroContent;
  services: ServicesContent;
  advantage: AdvantageContent;
  faq: FaqContent;
};
