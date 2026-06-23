import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import UtmTracker from "@/components/UtmTracker";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, getProfessionalServiceSchema } from "@/lib/seo";

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

const DEFAULT_TITLE = "Managed IT Services Toronto & Ontario | Silverthaw Consulting";
const DEFAULT_DESCRIPTION =
  "Looking for managed IT services in Ontario? Silverthaw becomes your dedicated IT partner — helpdesk, cybersecurity, cloud, infrastructure, software selection, and IT advisory, all managed by one team. Book a free consultation today.";

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
