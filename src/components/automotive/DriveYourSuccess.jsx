"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useModal } from "@/context/ModalContext";

const features = [
  "Targeted Marketing",
  "Strategic Planning",
  "Multichannel Approach",
  "Data-Driven Insights",
];

export default function DriveYourSuccess() {
  const { setIsModalOpen } = useModal();

  return (
    <section className="relative bg-[#181818] text-white py-28 px-6 md:px-16 overflow-hidden">
      {/* 🟢 Floating Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full top-[-100px] left-[-80px] blur-3xl z-0"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-blue-700/20 rounded-full bottom-[-80px] right-[-60px] blur-2xl z-0"
        animate={{ x: [0, -15, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-6">
            <span className="block text-white">Drive your success:</span>
            <span className="block text-blue-500 mt-1">
              The power of partnering with an automotive digital marketing
              agency!
            </span>
          </h2>

          <p className="text-gray-400 mb-6 text-base leading-relaxed">
            Expertise in automotive marketing trends, consumer behavior, and
            competitive landscapes sets you apart — making digital marketing a
            must-have for modern dealerships.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 text-gray-300 text-sm"
              >
                <CheckIcon className="w-5 h-5 text-blue-500 shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-full shadow-md transition-all"
          >
            Get Quote →
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/automotive/car-tuning.jpg"
            alt="Automotive Digital Strategy"
            width={480}
            height={480}
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
