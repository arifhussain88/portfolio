import { Header, Footer } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Work, MoreWork } from "@/components/sections/Work";
import { Metric } from "@/components/sections/Metric";
import { Experience } from "@/components/sections/Experience";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Metric />
        <div className="pt-24 md:pt-32">
          <MoreWork />
        </div>
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
