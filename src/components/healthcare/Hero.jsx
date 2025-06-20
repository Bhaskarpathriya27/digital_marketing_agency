"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";

const startColor = "#10b981"; // Emerald green

export default function Hero() {
  const { setIsModalOpen } = useModal();

  return (
    <section className="py-28 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* 🧠 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Grow Your Healthcare Practice with Proven{" "}
            <span className="text-[#10b981]">Digital Marketing</span> Strategies
          </h1>

          <p className="text-lg text-gray-400 mb-4">
            6.75 million daily Google searches are for health-related queries.
          </p>

          <p className="text-lg text-gray-400 mb-8">
            We’re a results‑driven healthcare marketing agency that wins
            patients, grows revenue, and builds your digital reputation through
            trusted strategies.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              endIcon={<ArrowRightIcon className="h-5 w-5" />}
              style={{
                backgroundColor: startColor,
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Grow your Business
            </Button>
            <Button
              variant="outlined"
              onClick={() => setIsModalOpen(true)}
              style={{
                borderColor: startColor,
                color: startColor,
                padding: "12px 28px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Get a Quote
            </Button>
          </div>
        </motion.div>

        {/* 🎨 Floating Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <Image
            src="/segments/healthcare.svg"
            alt="Healthcare Illustration"
            width={320}
            height={320}
            className="object-contain invert sepia brightness"
          />
        </motion.div>
      </div>
    </section>
  );
}
