"use client";

import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const startColor = "#ea580c";

export default function RealEstateHero() {
  const { setIsModalOpen } = useModal();

  return (
    <section className="relative bg-[#181818] py-28 px-6 md:px-16 overflow-hidden text-white">
      {/* 🔥 Floating animated blobs */}
      <motion.div
        className="absolute top-[20px] left-[-80px] w-[300px] h-[300px] rounded-full bg-orange-400/20 blur-2xl z-0"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-orange-300/20 blur-2xl z-0"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 🧠 Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 relative z-10">
            Keeping up with technology is the biggest challenge for{" "}
            <span className="text-[#ea580c] relative inline-block">
              45% of real estate businesses
              <span className="absolute left-0 right-0 -bottom-1 h-[4px] bg-gradient-to-r from-orange-400 to-orange-600 blur-sm rounded-full animate-pulse z-[-1]" />
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Don’t worry, we’ve got you covered with our real estate digital
            marketing services.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              endIcon={<ArrowRightIcon className="h-5 w-5" />}
              style={{
                backgroundColor: startColor,
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "9999px",
                boxShadow: "0 0 24px rgba(234, 88, 12, 0.4)",
              }}
              className="hover:shadow-orange-500/40 transition duration-300"
            >
              Grow your Business with us
            </Button>
          </motion.div>
        </motion.div>

        {/* 🌐 Animated Orbit Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            className="absolute w-[360px] h-[360px] rounded-full border-[2px] border-dashed border-orange-400/40 animate-spin-slow"
            style={{
              animationDuration: "16s",
              animationTimingFunction: "linear",
            }}
          />
          <Image
            src="/segments/real-estate.svg"
            alt="Real Estate Illustration"
            width={400}
            height={400}
            className="z-10 object-contain filter invert sepia saturate-200 hue-rotate-10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
