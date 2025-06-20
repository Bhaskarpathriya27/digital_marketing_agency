"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import EducationHero from "@/components/education/Hero";
import AboutEducationSection from "@/components/education/About";
import EducationStrategySection from "@/components/education/Section";
import TeamAccessSection from "@/components/education/TeamAccess";
import FAQSection from "@/components/education/FAQSection";
import CTASection from "@/components/Home/CTASection";
import DigitalMarketingHero from "@/components/digital/DigitalMarketingHero";
import AboutDigitalMarketingSection from "@/components/digital/AboutDigitalMarketingSection";
import ProcessSection from "@/components/digital/ProcessSection";
import WhyChooseUsSection from "@/components/digital/WhyChooseUsSection";
import MarketingSection from "@/components/digital/MarketingSection";
import RealEstateFAQSection from "@/components/digital/RealEstateFAQSection";

const gradient = "linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 100%)";
const startColor = "#7dd3fc";

export default function DigitalMarketing() {
  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col">
      <DigitalMarketingHero />

      <AboutDigitalMarketingSection />

      <ProcessSection />

      <WhyChooseUsSection />
      <MarketingSection />

      <RealEstateFAQSection />
    </div>
  );
}
