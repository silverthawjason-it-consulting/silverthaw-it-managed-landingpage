import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import managedIT from "@/content/managedIT";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

const PATH = "/managed-it-services";

// Variante A ("Managed IT Services") en una URL limpia de nivel raíz.
export const metadata: Metadata = {
  title: managedIT.meta.title,
  description: managedIT.meta.description,
  alternates: { canonical: PATH },
  openGraph: {
    title: managedIT.meta.title,
    description: managedIT.meta.description,
    url: PATH,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: managedIT.meta.title,
    description: managedIT.meta.description,
  },
};

export default function ManagedItServicesPage() {
  return <LandingPage content={managedIT} />;
}
