import Reveal from "./Reveal";
import Nav from "./Nav";
import Hero from "./Hero";
import Advantage from "./Advantage";
import Services from "./Services";
import WhatToExpect from "./WhatToExpect";
import About from "./About";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import type { LandingPageContent } from "@/content/types";

type LandingPageProps = {
  location?: string;
  content: LandingPageContent;
};

export default function LandingPage({ location, content }: LandingPageProps) {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <Hero location={location} content={content.hero} />
        <Services content={content.services} />
        <Advantage content={content.advantage} />
        <WhatToExpect />
        <About />
        <Testimonials />
        <Faq content={content.faq} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
