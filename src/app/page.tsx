import { Header, Footer } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Metric } from "@/components/sections/Metric";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metric />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
