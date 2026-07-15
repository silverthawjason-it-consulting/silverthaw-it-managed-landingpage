import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import UtmTracker from "@/components/UtmTracker";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, getProfessionalServiceSchema } from "@/lib/seo";
import managedIT from "@/content/managedIT";

/**
 * GTM is the ONLY analytics install point in this codebase. GA4 (both the
 * default automatic tracking and any custom events) is configured entirely
 * inside the GTM dashboard (tagmanager.google.com) — a variable holding the
 * GA4 Measurement ID, a single "GA4 Configuration" tag using it on an "All
 * Pages"/Initialization trigger, plus "GA4 Event" tags for anything custom.
 * Do NOT add a second, separate GA4 install (e.g. @next/third-parties'
 * GoogleAnalytics component) alongside this — that would duplicate every
 * pageview against the one GTM's Configuration tag already sends.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-XXXXXXX";

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
      </body>
    </html>
  );
}
