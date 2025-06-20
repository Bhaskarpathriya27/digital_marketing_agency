"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";

const accentColor = "#1D4ED8";

export default function AutomotiveHero() {
  const { setIsModalOpen } = useModal();
  return (
    <section className="relative overflow-hidden bg-[#181818] py-28 px-6 md:px-16">
      {/* 🔵 Floating Blobs */}
      <motion.div
        className="absolute w-[180px] h-[180px] bg-blue-500/30 rounded-full blur-3xl top-[-60px] left-[-60px] z-0"
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[160px] h-[160px] bg-blue-600/20 rounded-full blur-2xl bottom-[-60px] right-[-40px] z-0"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* ✨ Floating Particles */}
      <motion.div
        className="absolute w-4 h-4 bg-blue-400/50 rounded-full blur-md top-[30%] left-[40%] z-0"
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-6 h-6 bg-blue-500/30 rounded-full blur-lg top-[60%] left-[20%] z-0"
        animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
      />

      {/* 🔹 Hero Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight"
          >
            Revolutionize your dealership:
            <br />
            <motion.span
              className="inline-block text-[#93c5fd] bg-[#1e3a8a]/30 px-3 py-1 mt-2 rounded-md shadow-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              Auto sales lead generation mastery
            </motion.span>{" "}
            unleashed!
          </motion.h1>

          <p className="text-lg text-gray-400 mb-8">
            Say goodbye to outdated methods and embrace precision-driven digital
            marketing for automotive dealers. Build lasting customer
            relationships and fuel unparalleled growth.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              endIcon={<ArrowRightIcon className="h-5 w-5" />}
              style={{
                backgroundColor: accentColor,
                color: "white",
                padding: "14px 32px",
                borderRadius: "9999px",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(29, 78, 216, 0.4)",
              }}
              className="hover:shadow-blue-500/40 transition duration-300"
            >
              Drive your Sales with us
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full flex justify-center md:justify-end"
        >
          <Image
            src="/segments/automotive.svg"
            alt="Automotive Marketing Illustration"
            width={480}
            height={480}
            className="object-contain max-h-[360px] drop-shadow-[0_0_60px_rgba(59,130,246,0.25)] invert brightness-110 contrast-110"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
