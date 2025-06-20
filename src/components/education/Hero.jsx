"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";

const startColor = "#0ea5e9";

export default function EducationHero() {
  const { setIsModalOpen } = useModal();

  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden text-white">
      {/* ✨ Floating circles */}
      <motion.div
        className="absolute top-16 left-8 w-24 h-24 bg-blue-500/20 rounded-full z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-12 w-16 h-16 bg-blue-400/20 rounded-full z-0"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Boost enrollments with a premier{" "}
            <span className="text-[#0ea5e9]">higher education</span> lead
            generation service
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Discover the quickest and most direct route to connect with your
            prospective enrollees.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              endIcon={<ArrowRightIcon className="h-5 w-5" />}
              style={{
                backgroundColor: startColor,
                color: "#0f172a",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Get Quote
            </Button>
          </div>
        </motion.div>

        {/* SVG Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            x: [0, 10, -10, 10, 0],
            y: [0, -5, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/segments/education.svg"
            alt="Education Illustration"
            width={320}
            height={320}
            className="object-contain brightness-[1.2] invert drop-shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
