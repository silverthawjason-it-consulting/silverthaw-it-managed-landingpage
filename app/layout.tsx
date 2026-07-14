import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import UtmTracker from "@/components/UtmTracker";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, getProfessionalServiceSchema } from "@/lib/seo";
import managedIT from "@/content/managedIT";

/**
 * GA4 (general/automatic tracking: pageviews, sessions) is installed here
 * directly, alongside GTM (specific/custom event tagging — button clicks,
 * form submits, etc.), both intentionally pointed at the same property so
 * everything consolidates into one GA4 dataset.
 *
 * DUPLICATE-PAGEVIEW GUARDRAIL: when adding tags inside GTM
 * (tagmanager.google.com) for this GA_ID, only ever use the "GA4 Event" tag
 * type — never "GA4 Configuration". A Configuration tag re-initializes
 * tracking and sends its own pageview, double-counting every visit against
 * the pageview GoogleAnalytics already sends below. An Event tag just adds
 * one data point to the tracking that's already running — safe to use freely.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-XXXXXXX";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

// --f-serif: 'Playfair Display' — pesos usados en el diseño original
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// --f-sans: 'Open Sans'
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const DEFAULT_TITLE = managedIT.meta.title;
const DEFAULT_DESCRIPTION = managedIT.meta.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_CA",
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${openSans.variable}`}
    >
      <body className="bg-white font-sans leading-relaxed text-ink-body antialiased">
        <Suspense fallback={null}>
          <UtmTracker />
        </Suspense>
        <StructuredData data={getProfessionalServiceSchema()} />
        {children}
        <GoogleTagManager gtmId={GTM_ID} />
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
