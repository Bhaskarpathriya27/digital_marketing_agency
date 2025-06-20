"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  {
    label: "increase in sales productivity",
    value: "60%",
    positive: true,
  },
  {
    label: "improvement in funnel quality",
    value: "70%",
    positive: true,
  },
  {
    label: "reduction in human errors!",
    value: "90%",
    positive: false,
  },
];

export default function FinanceImpactDark() {
  return (
    <section className="bg-[#181818] py-28 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT BLOCK */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">
            <span className="block text-white">Our</span>
            <span className="block text-white">Customers</span>
            <span className="block text-white">have Observed a</span>
          </h2>
        </div>

        {/* RIGHT STATS */}
        <div className="space-y-4 w-full">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border border-white/20 bg-[#1f1f1f] rounded-full px-6 py-4 hover:bg-[#2a2a2a] transition-all duration-300 shadow-inner"
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr ${
                  item.positive
                    ? "from-indigo-500 to-violet-500"
                    : "from-blue-500 to-indigo-500"
                } text-white shadow-lg`}
              >
                {item.positive ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
              </div>
              <p className="text-xl font-extrabold text-white">{item.value}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
