"use client";

import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";
import { BarChart3 } from "lucide-react";

const accent = "#facc15"; // pulled from services[0] tone

export default function DigitalMarketingHero() {
  const { setIsModalOpen } = useModal();

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#181818] text-white overflow-hidden px-6 md:px-16 py-28">
      {/* Subtle Accent Blob */}
      <motion.div
        className="absolute top-20 left-10 w-36 h-36 bg-[#facc15]/10 rounded-full blur-2xl z-0"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-16 w-24 h-24 bg-[#facc15]/10 rounded-full blur-xl z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Real Estate <span style={{ color: accent }}>Digital Marketing</span>
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            As a leading real estate digital marketing agency, RealtyDigi
            provides insightful real estate digital marketing services suited to
            maximize ROI.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Increasing your ROI with our innovative solutions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button
              variant="outlined"
              onClick={() => setIsModalOpen(true)}
              style={{
                borderColor: accent,
                color: accent,
                padding: "12px 28px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Connect Now
            </Button>
          </div>
        </motion.div>

        {/* Icon Floating Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            x: [0, 10, -10, 10, 0],
            y: [0, -5, 5, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#facc15]/10 border border-[#facc15]/20">
            <BarChart3 size={120} className="text-[#facc15]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
