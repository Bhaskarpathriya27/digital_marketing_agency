"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdvantageSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#f0fdfa] text-gray-800 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* 🔹 Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Partnering with a healthcare lead generation company can offer{" "}
            <span className="text-emerald-600">several advantages</span>
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-lg font-semibold text-emerald-600 mb-1">
                Specialized Expertise
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our team has a deep understanding of the healthcare industry and
                its unique challenges. We tailor digital strategies to meet
                compliance and patient engagement goals.
              </p>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-700 pl-5 list-disc">
              <li>Targeted audience reach</li>
              <li>Compliance and regulation adherence</li>
              <li>Measurable results</li>
            </ul>
          </div>
        </motion.div>

        {/* 🔹 Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <Image
              src="/health/adv-health.jpg"
              alt="Healthcare Benefits Illustration"
              width={520}
              height={420}
              className="rounded-xl object-contain shadow-xl"
            />
            {/* 💫 Optional emerald glow behind image */}
            <div className="absolute -inset-4 rounded-xl bg-emerald-200 opacity-20 blur-xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
