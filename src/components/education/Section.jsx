"use client";

import { motion } from "framer-motion";
import {
  UserGroupIcon,
  DocumentTextIcon,
  FunnelIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useModal } from "@/context/ModalContext";

export default function EducationStrategySection() {
  const { setIsModalOpen } = useModal();

  const items = [
    {
      icon: UserGroupIcon,
      title: "Audience Targeting",
      description:
        "Define your ideal student demographic based on interests & behavior to increase ad precision.",
    },
    {
      icon: DocumentTextIcon,
      title: "Content and Capture",
      description:
        "Create persuasive content & landing pages that convert visitors into leads with intelligent forms.",
    },
    {
      icon: FunnelIcon,
      title: "Nurture and Qualify",
      description:
        "Deliver personalized journeys to engage and qualify only the most promising prospects.",
    },
    {
      icon: CheckBadgeIcon,
      title: "Application and Retention",
      description:
        "Guide students through flows and support them post-application for long-term engagement.",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#181818] overflow-hidden">
      {/* 💫 Floating Glows */}
      <div className="absolute -top-28 left-10 w-[280px] h-[280px] bg-[#0ea5e9] opacity-20 blur-[150px] rounded-full z-0" />
      <div className="absolute -bottom-20 right-0 w-[240px] h-[240px] bg-[#1e3a8a] opacity-20 blur-[150px] rounded-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Optimizing education lead generation services
        </h2>
        <p className="text-lg text-gray-400">
          A complete strategy to attract, engage, and convert quality leads for
          your institution.
        </p>
      </div>

      {/* 🚀 Cards Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#202B3A] border border-[#334155] rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div className="flex gap-4 items-start">
              <div className="bg-blue-500/10 p-3 rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🎯 Refined CTA */}
      <motion.div
        className="relative z-10 mt-20 max-w-4xl mx-auto bg-[#1e1e1e]/80 border border-[#2a2a2a] backdrop-blur-md rounded-2xl py-10 px-10 text-center shadow-[0_0_30px_#0ea5e91a]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Glowing Circle Aura */}
        <div className="absolute inset-0 rounded-2xl bg-[#0ea5e9]/10 blur-[80px] z-[-1]" />

        <p className="text-gray-200 text-xl font-medium mb-6 leading-relaxed">
          Ready to boost enrollments with a smarter education marketing
          strategy?
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#14f1ff] hover:bg-[#0dd4e6] text-[#0f172a] font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-400/40"
        >
          🚀 Get Quote
        </button>
      </motion.div>
    </section>
  );
}
