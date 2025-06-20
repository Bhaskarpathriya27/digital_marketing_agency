"use client";

import { motion } from "framer-motion";
import {
  Search,
  Share2,
  FileText,
  DollarSign,
  MousePointerClick,
  RefreshCcw,
} from "lucide-react";

const strategies = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We optimize clients’ websites and content to rank higher in search engine results, helping buyers and sellers find listings faster.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description:
      "We use platforms like Facebook & Instagram to run ads, share listings, and promote engagement through targeted content.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    description:
      "We publish high-value blog posts, articles, and videos that build trust and attract leads through SEO and social media.",
    icon: FileText,
  },
  {
    title: "Paid Advertising",
    description:
      "We run PPC campaigns targeting real estate–specific keywords on search engines and social platforms for lead conversions.",
    icon: DollarSign,
  },
  {
    title: "Landing Pages",
    description:
      "We build custom landing pages to capture user intent, collect contact info, and improve conversion for listings or services.",
    icon: MousePointerClick,
  },
  {
    title: "Remarketing",
    description:
      "We re-target users who visited your site but didn’t convert. These campaigns re-engage prospects to boost actions.",
    icon: RefreshCcw,
  },
];

export default function RealEstateHighlightSection() {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#fffaf6] text-gray-900 relative overflow-hidden">
      {/* 🔆 Floating Aura */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-orange-200/60 blur-3xl rounded-full -top-20 right-10 z-0"
        animate={{ x: [0, -10, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Employing diverse strategies to generate leads in{" "}
            <span className="text-orange-500">real estate marketing</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our proven digital channels help real estate brands stand out and
            generate quality leads consistently.
          </p>
        </div>

        {/* 🟠 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-orange-100 rounded-2xl p-6 group hover:shadow-lg transition duration-300 relative overflow-hidden"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
