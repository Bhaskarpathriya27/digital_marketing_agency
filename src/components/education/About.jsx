"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutEducationSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">
      {/* 🌀 Glowing Background Aura */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#0ea5e9] opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-16 -right-10 w-[240px] h-[240px] bg-[#1e3a8a] opacity-20 blur-2xl rounded-full z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* 🖼 Animated Vector/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/education/edu-idea3.jpg"
            alt="Digital Education Marketing"
            width={380}
            height={380}
            className="object-contain rounded-4xl"
          />
        </motion.div>

        {/* 🧠 Textual Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Empowering education with cutting‑edge
            <br />
            <span className="text-[#0ea5e9]">digital marketing</span> services
          </h2>
          <p className="text-gray-400 mb-6">
            In today’s higher education landscape, students expect a seamless,
            personalized experience right from their first interaction. Generic
            campaigns and outdated strategies no longer cut it.
          </p>
          <p className="text-gray-400">
            Our team crafts strategic, high-converting lead funnels to help
            universities, coaching centers, and e-learning platforms reach the
            right audience at the right time — backed by real-time analytics and
            years of education marketing experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
