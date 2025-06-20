"use client";
import { useEffect } from "react";
import GoogleAdwordsHero from "@/components/adwords/GoogleAdwordsHero";
import Lenis from "lenis";

export default function GoogleAdwords() {
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
      <GoogleAdwordsHero />
    </div>
  );
}
