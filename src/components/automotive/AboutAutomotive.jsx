"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    value: "95%",
    description: "of car shoppers use digital as their main info source",
  },
  {
    value: "60%",
    description: "of automotive searches come from mobile devices",
  },
  {
    value: "80%",
    description: "of car shoppers are influenced by social media",
  },
];

export default function AboutAutomotive() {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#181818] relative overflow-hidden">
      {/* 🔵 Aura Glow */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-blue-600/30 rounded-full blur-3xl -top-10 -left-10 z-0"
        animate={{ x: [0, 15, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* 🔹 Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <Image
            src="/automotive/auto-about.svg"
            alt="Automotive Digital Marketing"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>

        {/* 🔸 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            Driving success:{" "}
            <span className="text-blue-500">
              Digital marketing for the automobile industry
            </span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            In the digital era, automotive digital marketing ensures global
            reach and deep engagement. A well-crafted strategy helps car dealers
            increase visibility, stay competitive, and adapt to ever-evolving
            consumer preferences.
          </p>

          {/* 🔢 Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[#1e293b] border border-blue-700/30 text-center rounded-xl p-5 shadow-md"
              >
                <p className="text-2xl font-bold text-blue-400">{item.value}</p>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 🚀 CTA Note */}
          <p className="mt-8 text-sm text-gray-500">
            Thinking of launching a digital campaign? Collaborate with a
            top-tier auto marketing partner to maximize your dealership's
            growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
