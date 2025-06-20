"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  Code2,
  BarChart3,
  Users2,
  LayoutDashboard,
  Activity,
  LineChart,
  Database,
  Rocket,
} from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function RealEstateSoftwarePage() {
  const { setIsModalOpen } = useModal();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex item-center py-28 px-6 md:px-16 bg-[#181818] text-white overflow-hidden relative">
        <motion.div
          className="absolute top-12 left-12 w-40 h-40 bg-[#60a5fa]/20 rounded-full blur-2xl z-0"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#93c5fd]/10 rounded-full blur-xl z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Real Estate{" "}
              <span className="text-[#60a5fa]">Software Development</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Supercharge your profits with our customized software solutions
              for real estate developers. Automate, optimize, and grow.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Streamline operations, drive conversions, and unlock unmatched ROI
              with the best tools in the industry.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#60a5fa] text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
            >
              Enquire Now{" "}
              <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[280px] flex items-center justify-center rounded-full bg-[#60a5fa]/10 border border-[#93c5fd]/20">
              <Code2 size={120} className="text-[#60a5fa]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#60a5fa]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Customized tools to scale real estate development and maximize
            profits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            "Tailored Project Management Software",
            "Top CRM for Developers",
            "Advanced Marketing Optimization Tools",
            "Boost Efficiency & Profits",
            "Lead Tracking & Automation",
            "Streamlined Ops with Innovation",
            "Custom Scalable Growth Solutions",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-6 shadow hover:shadow-[#60a5fa]/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <Rocket className="w-6 h-6 text-[#60a5fa]" />
                <h4 className="font-semibold text-white text-md">{text}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 px-6 md:px-16 bg-[#181818] text-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#60a5fa]">Process</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Built for performance. Tailored for results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: BarChart3,
              title: "Custom Software for ROI",
              desc: "Project-specific tools engineered to streamline tasks and maximize return.",
            },
            {
              icon: Users2,
              title: "Superior CRM Solutions",
              desc: "Convert faster with smart automation, enhanced tracking, and better follow-ups.",
            },
            {
              icon: LayoutDashboard,
              title: "Marketing Strategy Optimization",
              desc: "Track campaign impact and optimize performance with built-in analytics.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1c1c1e] rounded-2xl border border-white/5 px-6 py-10 text-center shadow hover:shadow-[#60a5fa]/10 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#60a5fa]/10 border border-[#60a5fa]/30">
                <item.icon className="text-[#60a5fa] w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Impact Section */}
      <section className="py-28 px-6 md:px-16 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precision. Profitability.{" "}
            <span className="text-[#60a5fa]">Performance</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Whether it’s financial management, automation, or campaign tracking
            — we provide the digital infrastructure to make your real estate
            software work harder and smarter.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-[#60a5fa] text-black px-10 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all shadow-md"
          >
            Enquire Now <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
          </button>
        </div>
      </section>
    </>
  );
}
