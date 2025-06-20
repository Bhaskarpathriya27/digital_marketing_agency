"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HandCoins,
  PiggyBank,
  ShieldCheck,
  LineChart,
  Banknote,
} from "lucide-react";

const segments = [
  { title: "Banking", icon: Building2, color: "from-[#4f46e5] to-[#6366f1]" },
  {
    title: "Credit Unions",
    icon: HandCoins,
    color: "from-[#f97316] to-[#fb7185]",
  },
  { title: "Lending", icon: PiggyBank, color: "from-[#fde68a] to-[#f59e0b]" },
  {
    title: "Insurance",
    icon: ShieldCheck,
    color: "from-[#fbbf24] to-[#f97316]",
  },
  { title: "Fintech", icon: LineChart, color: "from-[#34d399] to-[#10b981]" },
  { title: "Broking", icon: Banknote, color: "from-[#64748b] to-[#0f172a]" },
];

export default function FinanceSectorGrid() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Tailored CRM for Every Finance Sector
        </h2>
        <p className="text-gray-500 mt-2">
          Discover how our CRM helps diverse financial teams grow faster.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {segments.map((seg, index) => {
          const Icon = seg.icon;
          return (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="relative bg-white rounded-3xl p-6 shadow-lg border overflow-hidden transition-all hover:shadow-2xl"
            >
              {/* Aura Gradient */}
              <div
                className={`absolute -top-12 -left-12 w-44 h-44 blur-3xl opacity-30 z-0 bg-gradient-to-br ${seg.color}`}
              ></div>

              {/* Icon Box */}
              <div
                className={`relative z-10 w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-gradient-to-tr ${seg.color} text-white shadow-md`}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 relative z-10">
                {seg.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-500 mt-1 relative z-10">
                Smart tools to boost workflows, engagement, and conversions.
              </p>

              {/* Bottom Glow */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 rounded-b-3xl bg-gradient-to-r ${seg.color}`}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
