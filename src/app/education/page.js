"use client";
import { useEffect } from "react";
import EducationHero from "@/components/education/Hero";
import AboutEducationSection from "@/components/education/About";
import EducationStrategySection from "@/components/education/Section";
import TeamAccessSection from "@/components/education/TeamAccess";
import FAQSection from "@/components/education/FAQSection";
import CTASection from "@/components/Home/CTASection";
import Lenis from "lenis";

const gradient = "linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 100%)";
const startColor = "#7dd3fc";

export default function Education() {
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
    <div className="min-h-screen flex flex-col">
      <EducationHero />

      <AboutEducationSection />

      <EducationStrategySection />

      <TeamAccessSection />

      {/* 🙋 FAQs */}
      <FAQSection />
      <CTASection />
    </div>
  );
}
