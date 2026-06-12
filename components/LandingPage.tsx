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

type LandingPageProps = {
  location?: string;
};

export default function LandingPage({ location }: LandingPageProps) {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <Hero location={location} />
        <Advantage />
        <Services />
        <WhatToExpect />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
