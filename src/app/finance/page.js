"use client";

import { useEffect } from "react";
import FinanceHero from "@/components/finance/FinanceHero";
import FinanceFeatureIntro from "@/components/finance/FinanceFeatureIntro";
import IndustryFeatureGrid from "@/components/finance/IndustryFeatureGrid";
import CustomerImpactSection from "@/components/finance/CustomerImpactSection";
import FinanceFAQ from "@/components/finance/FinanceFAQ";
import Lenis from "lenis";

export default function Finance() {
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
      <FinanceHero />
      <FinanceFeatureIntro />
      <IndustryFeatureGrid />
      <CustomerImpactSection />
      <FinanceFAQ />
    </div>
  );
}
