import LandingPage from "@/components/LandingPage";
import managedIT from "@/content/managedIT";

// Home — variante A ("Managed IT Services"). El Hero usa el default "Toronto".
export default function Home() {
  return <LandingPage content={managedIT} />;
}
