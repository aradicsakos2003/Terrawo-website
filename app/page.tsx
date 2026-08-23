import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Narrative } from "@/components/sections/Narrative";
import { MatterportDemo } from "@/components/sections/MatterportDemo";
import { Process } from "@/components/sections/Process";
import { References } from "@/components/sections/References";
import { Pricing } from "@/components/sections/Pricing";
import { WhyTerravo } from "@/components/sections/WhyTerravo";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Narrative />
        <MatterportDemo />
        <Process />
        <References />
        <Pricing />
        <WhyTerravo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
