import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import itSupportSmallBusiness from "@/content/itSupportSmallBusiness";

// Variante B ("IT Support for Small Businesses") en una URL limpia de nivel raíz.
export const metadata: Metadata = {
  title: itSupportSmallBusiness.meta.title,
  description: itSupportSmallBusiness.meta.description,
};

export default function ItSupportSmallBusinessPage() {
  return <LandingPage content={itSupportSmallBusiness} />;
}
