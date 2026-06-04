import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Conditions } from "@/components/sections/Conditions";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ServiceArea } from "@/components/sections/ServiceArea";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-8 lg:px-10">
      <Hero />
      <Conditions />
      <Process />
      <Benefits />
      <About />
      <ServiceArea />
      <FAQ />
      <CTA />
    </main>
  );
}
