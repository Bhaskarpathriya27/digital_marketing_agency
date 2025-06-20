"use client";

import { useEffect } from "react";
import RealEstateHero from "@/components/real-Estate/RealEstateHero";
import AboutRealEstate from "@/components/real-Estate/AboutRealEstate";
import RealEstateHighlightSection from "@/components/real-Estate/RealEstateHighlightSection";
import SmartCRMSection from "@/components/real-Estate/SmartCRMSection";
import RealEstateFAQ from "@/components/real-Estate/RealEstateFAQ";
import Lenis from "lenis";

const gradient =
  "linear-gradient(135deg, rgb(234, 88, 12) 0%, rgb(254, 226, 226) 100%)";
const startColor = "#10b981";

export default function RealEstate() {
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
    <div
      className="min-h-screen flex flex-col"
      // style={{ background: gradient }}
    >
      <RealEstateHero />
      <AboutRealEstate />
      <RealEstateHighlightSection />
      <SmartCRMSection />
      <RealEstateFAQ />
    </div>
  );
}
