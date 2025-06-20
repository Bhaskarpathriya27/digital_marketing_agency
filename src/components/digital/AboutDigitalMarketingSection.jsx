"use client";

import { motion } from "framer-motion";

export default function AboutDigitalMarketingSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#111] text-white">
      {/* Glowing Blobs */}
      <div className="absolute -top-16 -left-20 w-[260px] h-[260px] bg-[#facc15]/20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-16 -right-20 w-[220px] h-[220px] bg-[#facc15]/10 blur-2xl rounded-full z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-5 leading-snug"
        >
          We've Successfully Benefited Over <br />
          <span className="text-[#facc15]">15 Real Estate Agencies</span> With
          Our Digital Marketing for The Real Estate Sector.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-gray-400 mb-8 text-lg"
        >
          Generate endless leads with our digital marketing for real estate
          agencies. Be a part of our esteemed list of 15+ giants from the real
          estate industry and get leads from wherever you want. Experience ROI
          boosting marketing with us to become a real estate giant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-6"
        >
          <a
            href="#contact"
            className="bg-[#22c55e] text-black px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all"
          >
            Enquire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
