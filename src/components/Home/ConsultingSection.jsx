"use client";

import { motion } from "framer-motion";
import {
  Cog6ToothIcon,
  ShieldCheckIcon,
  ArrowRightCircleIcon,
  RocketLaunchIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const features = [
  { icon: Cog6ToothIcon, title: "Fully managed", textColor: "text-blue-500" },
  {
    icon: ShieldCheckIcon,
    title: "Secure like Fort Knox",
    textColor: "text-orange-500",
  },
  {
    icon: RocketLaunchIcon,
    title: "Ultimate speed",
    textColor: "text-green-500",
  },
  { icon: ClockIcon, title: "Daily backup", textColor: "text-sky-500" },
];

export default function ConsultingSection() {
  const { setIsModalOpen } = useModal();
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/team.gif"
            alt="Consulting team"
            width={500}
            height={500}
            className="rounded-4xl object-contain"
            unoptimized
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white leading-tight">
            Making Your Business Unique Consulting
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            We develop the relationships that underpin the next phase in your
            organisation's growth.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
                <span className="font-semibold text-white">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center mt-8 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold text-lg shadow-md hover:bg-purple-700 transition"
          >
            Get Quote <ArrowRightCircleIcon className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
