"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#181818] relative overflow-hidden">
      {/* 💫 Background Glow */}
      <div className="absolute -top-20 -left-24 w-[300px] h-[300px] bg-emerald-400 opacity-10 blur-3xl rounded-full z-0" />
      <div className="absolute -bottom-16 -right-20 w-[240px] h-[240px] bg-emerald-600 opacity-10 blur-2xl rounded-full z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* 🧠 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            The Significance of Digital Marketing for{" "}
            <span className="text-emerald-400">Healthcare Professionals</span>
          </h2>

          <p className="text-gray-400 mb-4">
            Digital marketing services for healthcare go beyond just social
            media. They involve creating impactful campaigns that engage your
            target audience. Whether you are a hospital, clinic, or individual
            practitioner, our role as a trusted digital marketing partner helps
            you connect effectively with patients.
          </p>

          <p className="text-gray-400 mb-4">
            Digital marketing for healthcare professionals is indispensable in
            today’s online world. Without a strong digital presence, healthcare
            providers may lose potential patients to competitors. Working with a
            top agency ensures that you attract and retain more patients.
          </p>

          <p className="text-gray-400">
            Healthcare lead generation services are crucial for building a
            successful healthcare brand. We offer comprehensive solutions to
            help you generate and convert leads effectively.
          </p>
        </motion.div>

        {/* 🖼 Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/health/about-health.svg"
            alt="Healthcare About Illustration"
            width={480}
            height={400}
            className="object-contain rounded-4xl drop-shadow-[0_4px_16px_rgba(16,185,129,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
