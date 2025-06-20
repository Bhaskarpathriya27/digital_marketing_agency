"use client";

import { useModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import funnelAnimation from "@/lib/animations/test.json"; // Adjust if your path is different

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  const [hasMounted, setHasMounted] = useState(false);
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="relative w-full h-screen bg-[#181818] overflow-hidden">
      {/* 🎥 Desktop Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:block"
        src="/videos/OneText-Hero-Dark.mp4"
      />

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* 🌟 Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-20">
        {/* 📱 Mobile Only: Lottie Animation */}
        <div className="md:hidden mb-6 flex justify-center relative">
          <div className="absolute w-48 h-48 bg-gradient-to-br from-[#f107a3] to-[#7b2ff7] blur-2xl opacity-30 animate-pulse rounded-full"></div>
          <Lottie
            animationData={funnelAnimation}
            loop
            autoplay
            className="w-64 h-64 relative z-10"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6 max-w-2xl"
        >
          {/* Minimal but bold heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Fuel Your{" "}
            <span className="bg-gradient-to-r from-[#7b2ff7] to-[#a855f7] text-transparent bg-clip-text">
              Business Growth
            </span>
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] text-transparent bg-clip-text">
              High-Converting Leads.
            </span>
          </h1>

          {/* Subtext with elegant color accents */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Whether you're in{" "}
            <span className="text-[#e879f9] font-medium">Education</span>,{" "}
            <span className="text-[#8b5cf6] font-medium">Healthcare</span>,{" "}
            <span className="text-[#0ea5e9] font-medium">Finance</span>,{" "}
            <span className="text-[#f97316] font-medium">Real Estate</span>, or{" "}
            <span className="text-[#6366f1] font-medium">Automotive</span> — our
            growth engineers design custom lead-gen funnels that turn clicks
            into long-term customers.
            <br />
            Using <span className="text-[#facc15] font-semibold">
              SEO
            </span>, <span className="text-[#10b981] font-semibold">PPC</span>,{" "}
            <span className="text-[#60a5fa] font-semibold">CRM</span>,{" "}
            <span className="text-[#f472b6] font-semibold">Analytics</span> &{" "}
            <span className="text-[#f87171] font-semibold">Social Ads</span> —
            we power your pipeline with qualified leads.
          </p>

          {/* Bullet points with icons + light hover */}
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-white transition-all">
              <span className="text-[#8b5cf6]">✔</span> 5M+ verified leads
              delivered across 50+ brands
            </li>
            <li className="hover:text-white transition-all">
              <span className="text-[#22d3ee]">✔</span> Campaigns optimized with
              smart CRM & automation
            </li>
            <li className="hover:text-white transition-all">
              <span className="text-[#f472b6]">✔</span> Transparent analytics
              that speak in ROI, not reports
            </li>
          </ul>

          {/* Updated buttons with more balanced colors */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#7b2ff7] to-[#ec4899] hover:brightness-110 transition-all duration-300 text-white font-bold rounded-xl px-6 py-3 shadow-lg shadow-[#ec489980] active:scale-95"
            >
              ✨ Get Quote
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-white/20 hover:border-white hover:bg-white/10 text-white font-medium rounded-xl px-6 py-3 transition-all duration-300"
            >
              Explore →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
