"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutRealEstate() {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#181818] relative overflow-hidden">
      {/* 🔸 Floating blob UI aura */}
      <motion.div
        className="absolute w-[180px] h-[180px] bg-orange-400/20 rounded-full blur-2xl top-0 right-10 z-0"
        animate={{ x: [0, -10, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
        {/* ⬅️ Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-4 md:p-6 w-fit mx-auto"
        >
          <Image
            src="/real-estate/real-estate-about.svg"
            alt="Real Estate UI Selection"
            width={400}
            height={400}
            className="object-contain rounded-4xl"
            priority
          />
        </motion.div>

        {/* ➡️ Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            Boost your sales with experts in{" "}
            <span className="text-orange-400">
              real estate digital marketing
            </span>
          </h2>

          <div className="space-y-6 text-base text-gray-300">
            <div className="relative pl-6">
              <span className="absolute left-0 top-1 text-orange-400 font-bold">
                •
              </span>
              <p>
                <strong className="text-white">Lead Generation:</strong> Get a
                consistent flow of leads, even during market shifts.
              </p>
            </div>
            <div className="relative pl-6">
              <span className="absolute left-0 top-1 text-orange-400 font-bold">
                •
              </span>
              <p>
                <strong className="text-white">Targeted Strategies:</strong>{" "}
                From Instagram ads to email campaigns — everything tailored for
                conversions.
              </p>
            </div>
            <div className="relative pl-6">
              <span className="absolute left-0 top-1 text-orange-400 font-bold">
                •
              </span>
              <p>
                <strong className="text-white">Flexible Investment:</strong>{" "}
                Whether ₹5K or ₹50K, our services scale with your vision — no
                magic, just smart marketing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
