"use client";
import { useEffect } from "react";
import AutomotiveHero from "@/components/automotive/AutomotiveHero";
import MultiLevelHeader from "@/components/MultiLevelHeader";
import AboutAutomotive from "@/components/automotive/AboutAutomotive";
import CRMTeams from "@/components/automotive/CRMTeams";
import DriveYourSuccess from "@/components/automotive/DriveYourSuccess";
import AutomotiveFAQ from "@/components/automotive/AutomotiveFAQ";
import CTASection from "@/components/Home/CTASection";
import Lenis from "lenis";

const gradient =
  "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(226, 232, 240) 100%)";
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
    <div
      className="min-h-screen flex flex-col"
      // style={{ background: gradient }}
    >
      <AutomotiveHero />
      <AboutAutomotive />
      <CRMTeams />
      <DriveYourSuccess />
      <AutomotiveFAQ />
      <CTASection />
    </div>
  );
}
