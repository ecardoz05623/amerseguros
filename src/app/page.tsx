import { Metadata } from "next";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero";
import Portfolio from "./components/home/portfolio";
import StatsFacts from "./components/home/stats-facts";


export const metadata: Metadata = {
    title: "AMER SEGUROS",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts/>
      <Portfolio/>
      <Contact/>
    </>
  );
}
