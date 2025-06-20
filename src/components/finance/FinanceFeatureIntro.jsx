"use client";

import { motion } from "framer-motion";

export default function FinanceFeatureIntro() {
  return (
    <section className="relative bg-[#181818] py-28 px-6 md:px-16 text-white overflow-hidden">
      {/* 💡 Optional: subtle top & bottom glows for blending */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-500/10 blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-500/10 blur-[120px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Built by{" "}
          <span className="text-indigo-400">Technology Evangelists</span> for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-2 py-1 rounded-md inline-block">
            Frictionless Sales Enablement
          </span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover some of the top features of our Finance CRM! <br />
          From simplifying your agent’s daily tasks to empowering
          decision-makers with intelligent, data-driven insights — we’ve got the
          tools to scale your finance workflows smoothly.
        </motion.p>
      </div>
    </section>
  );
}
