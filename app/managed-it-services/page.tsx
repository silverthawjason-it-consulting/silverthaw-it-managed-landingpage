import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import managedIT from "@/content/managedIT";

// Variante A ("Managed IT Services") en una URL limpia de nivel raíz.
export const metadata: Metadata = {
  title: managedIT.meta.title,
  description: managedIT.meta.description,
};

export default function ManagedItServicesPage() {
  return <LandingPage content={managedIT} />;
}
