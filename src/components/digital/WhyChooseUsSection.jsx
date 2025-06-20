"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Globe2,
  LayoutTemplate,
  TrendingUp,
  PackageCheck,
  Landmark,
  Megaphone,
} from "lucide-react";

const highlights = [
  {
    title: "Timely Responsive Web Designs",
    icon: LayoutTemplate,
  },
  {
    title: "Impactful Social Media Campaigns",
    icon: Megaphone,
  },
  {
    title: "All-in-One Marketing Services",
    icon: Globe2,
  },
  {
    title: "Performance-Driven Strategy",
    icon: TrendingUp,
  },
  {
    title: "From B2B to Boring2Bold",
    icon: Lightbulb,
  },
  {
    title: "For Property Developers",
    icon: PackageCheck,
  },
  {
    title: "Commercial Real Estate Experts",
    icon: Landmark,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-[#111] text-white overflow-hidden">
      <div className="absolute -top-24 left-10 w-80 h-80 bg-[#facc15]/10 blur-2xl rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#facc15]/10 blur-2xl rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#facc15]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose RealtyDigi for leading real estate digital marketing
            solutions best suited to your real estate agency.
          </p>
        </div>

        {/* New Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-[#181818] rounded-2xl border border-white/5 px-6 py-8 shadow-xl hover:shadow-[#facc15]/10 transition-all group overflow-hidden"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#facc15]/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <item.icon className="text-[#facc15] w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 mt-6">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">
                This is one of the reasons agencies across the country trust
                RealtyDigi for their real estate marketing edge.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
