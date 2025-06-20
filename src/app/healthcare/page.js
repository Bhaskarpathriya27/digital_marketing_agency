"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/healthcare/Hero";
import About from "@/components/healthcare/About";
import TeamAccess from "@/components/healthcare/TeamAccess";
import AdvantageSection from "@/components/healthcare/Section";
import FAQSection from "@/components/healthcare/FAQSection";

const gradient =
  "linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(220, 252, 231) 100%)";
const startColor = "#10b981";

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
      <Hero />
      <About />
      <AdvantageSection />
      <TeamAccess />
      <FAQSection />
    </div>
  );
}
