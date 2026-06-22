import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import itSupportSmallBusiness from "@/content/itSupportSmallBusiness";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

const PATH = "/it-support-small-business";

// Variante B ("IT Support for Small Businesses") en una URL limpia de nivel raíz.
export const metadata: Metadata = {
  title: itSupportSmallBusiness.meta.title,
  description: itSupportSmallBusiness.meta.description,
  alternates: { canonical: PATH },
  openGraph: {
    title: itSupportSmallBusiness.meta.title,
    description: itSupportSmallBusiness.meta.description,
    url: PATH,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: itSupportSmallBusiness.meta.title,
    description: itSupportSmallBusiness.meta.description,
  },
};

export default function ItSupportSmallBusinessPage() {
  return <LandingPage content={itSupportSmallBusiness} />;
}
