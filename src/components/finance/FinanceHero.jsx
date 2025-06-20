"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";

const gradient = "linear-gradient(135deg, #6366f1 0%, #3730a3 100%)";
const startColor = "#6366f1";

export default function FinanceHero() {
  const { setIsModalOpen } = useModal();

  return (
    <section className="relative bg-[#181818] py-32 px-6 md:px-16 text-white overflow-hidden">
      {/* 🌌 Gradient Glow Backdrop */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.2) 0%, transparent 60%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* 🌀 Orbit Ring */}
      <motion.div
        className="absolute right-16 bottom-24 w-[420px] h-[420px] rounded-full border border-indigo-500/20 animate-spin-slow z-0"
        style={{ animationDuration: "20s" }}
      />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        {/* 🚀 Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Stay Ahead of the Curve with Our{" "}
            <span
              className="inline-block px-3 py-1 rounded-md shadow-xl text-white"
              style={{ background: gradient }}
            >
              Finance CRM
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 max-w-lg">
            Your one-stop solution to manage customer queries and applications,
            onboard customers, cross-sell/upsell, and much more!
          </p>

          {/* ✨ CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0px",
                "0 0 20px rgba(99,102,241,0.4)",
                "0 0 0px",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-block"
          >
            <Button
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              endIcon={<ArrowRightIcon className="h-5 w-5" />}
              style={{
                backgroundColor: startColor,
                color: "white",
                padding: "14px 32px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Get a Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* 📈 Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/segments/finance.svg"
            alt="Finance CRM Illustration"
            width={400}
            height={400}
            className="object-contain invert"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
