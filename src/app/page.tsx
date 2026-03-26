import { Metadata } from "next";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero";
import StatsFacts from "./components/home/stats-facts";


export const metadata: Metadata = {
  title: "AMER SEGUROS",
};



import CtaSection from "./components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CtaSection />
      <StatsFacts />
      <Contact />
    </>
  );
}
