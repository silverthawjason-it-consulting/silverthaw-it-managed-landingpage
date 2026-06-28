import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import LegalHero from "@/components/LegalHero";
import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";
import { legalContent } from "@/content/legal";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

const PATH = "/privacy-policy";

export const metadata: Metadata = {
  title: legalContent.meta.title,
  description: legalContent.meta.description,
  alternates: { canonical: PATH },
  openGraph: {
    title: legalContent.meta.title,
    description: legalContent.meta.description,
    url: PATH,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: legalContent.meta.title,
    description: legalContent.meta.description,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <LegalHero content={legalContent.hero} />
        <LegalContent content={legalContent} />
      </main>
      <Footer />
    </>
  );
}
