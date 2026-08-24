import { BackToTop } from "@/components/BackToTop";
import { Navbar } from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Conditions } from "@/components/sections/Conditions";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { ServiceArea } from "@/components/sections/ServiceArea";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-8 lg:px-10">
        <Hero />
        <Conditions />
        <Process />
        <Benefits />
        <Pricing />
        <About />
        <ServiceArea />
        <FAQ />
        <CTA />
      </main>
      <BackToTop />
    </>
  );
}
